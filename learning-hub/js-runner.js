// Sandboxed JavaScript runner. Loaded inside an iframe with sandbox="allow-scripts"
// (opaque origin). The parent sends { type: "run", token, code, targetOrigin };
// we execute the code and post console output / errors back to the parent.
// Keeping this in an external 'self' script lets the site CSP stay strict
// (no 'unsafe-inline') while still running user code in isolation.
(function () {
  "use strict";

  function send(targetOrigin, token, type, args) {
    var text;
    try {
      text = Array.prototype.map.call(args, function (a) {
        if (typeof a === "object" && a !== null) {
          try { return JSON.stringify(a); } catch (err) { return String(a); }
        }
        return String(a);
      }).join(" ");
    } catch (err) { text = String(args); }
    window.parent.postMessage({ __runner: token, type: type, text: text }, targetOrigin);
  }

  window.addEventListener("message", function (e) {
    // Only accept instructions from the parent frame.
    if (e.source !== window.parent) return;
    var msg = e.data;
    if (!msg || msg.type !== "run" || typeof msg.code !== "string") return;
    var token = msg.token;
    var targetOrigin = msg.targetOrigin || "*";

    ["log", "info", "debug"].forEach(function (k) {
      console[k] = function () { send(targetOrigin, token, "log", arguments); };
    });
    console.warn = function () { send(targetOrigin, token, "warn", arguments); };
    console.error = function () { send(targetOrigin, token, "error", arguments); };
    window.onerror = function (m, src, line, col) {
      send(targetOrigin, token, "error", [m + " (line " + line + ":" + col + ")"]);
      return true;
    };
    window.addEventListener("unhandledrejection", function (ev) {
      var reason = ev.reason && ev.reason.message ? ev.reason.message : ev.reason;
      send(targetOrigin, token, "error", ["Unhandled rejection: " + reason]);
    });

    try { new Function(msg.code)(); }
    catch (err) { send(targetOrigin, token, "error", [err && err.stack ? err.stack : String(err)]); }
    finally { send(targetOrigin, token, "done", []); }
  });
})();