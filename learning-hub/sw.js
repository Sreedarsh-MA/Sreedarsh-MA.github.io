// Learning Hub service worker â€” offline app shell + runtime CDN cache.
const VERSION = "learnhub-v2";
const SCOPE = self.registration.scope;

const SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./juice.js",
  "./js-runner.html",
  "./js-runner.js",
  "./preview.html",
  "./manifest.json",
  "./icon.svg",
  "./icon-maskable.svg",
  "./data/python.js",
  "./data/lessons.js",
  "./data/courses.js",
  "./data/github.js",
  "./data/tracks.js",
  "./data/roadmap.js",
  "./data/python-roadmap.js",
  "./data/python-labs.js",
  "./data/tips.js",
  "./data/labs.js",
  "./data/projects.js",
  "./data/challenges.js",
  "./data/quests.js",
  "./data/shop.js",
  "./data/cases-extra.js",
].map((p) => new URL(p, SCOPE).href);

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(VERSION).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Never cache API calls (profiles, proxies) â€” they must hit the server.
  if (url.pathname.includes("/api/")) return;

  // Navigations: network first, fall back to the cached shell (offline).
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(new URL("./index.html", SCOPE).href, copy));
          return res;
        })
        .catch(() => caches.match(new URL("./index.html", SCOPE).href))
    );
    return;
  }

  // Pyodide CDN: cache-first so Python works offline after the first run.
  if (url.hostname === "cdn.jsdelivr.net") {
    e.respondWith(
      caches.match(req).then(
        (hit) =>
          hit ||
          fetch(req).then((res) => {
            if (res.ok || res.type === "opaque") {
              const copy = res.clone();
              caches.open(VERSION).then((c) => c.put(req, copy));
            }
            return res;
          })
      )
    );
    return;
  }

  // Same-origin assets: stale-while-revalidate.
  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.match(req).then((hit) => {
        const fresh = fetch(req)
          .then((res) => {
            if (res.ok) {
              const copy = res.clone();
              caches.open(VERSION).then((c) => c.put(req, copy));
            }
            return res;
          })
          .catch(() => hit);
        return hit || fresh;
      })
    );
  }
});
