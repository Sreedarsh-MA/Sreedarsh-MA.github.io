const STORE_KEY = "pycards.v1";
const STORE_VERSION = "1";
const PROFILE_KEY = "pycards.profile.v1";
const DIRTY_KEY = "pycards.dirty.v1";
const DAY = 864e5;
const REPEAT_AFTER_AGAIN = 3;
const NEW_PER_DAY = 10;
const AVATARS = ["🐍", "🦊", "🐧", "🦉", "🤖", "🐙"];

const els = {
  views: {
    home: document.getElementById("view-home"),
    study: document.getElementById("view-study"),
    done: document.getElementById("view-done"),
    deck: document.getElementById("view-deck"),
    learn: document.getElementById("view-learn"),
    projects: document.getElementById("view-projects"),
    game: document.getElementById("view-game"),
    code: document.getElementById("view-code"),
    chat: document.getElementById("view-chat"),
  },
  deckList: document.getElementById("deck-list"),
  deckDetail: document.getElementById("deck-detail"),
  profileChip: document.getElementById("profile-chip"),
  profileDot: document.getElementById("profile-dot"),
  profileNameEl: document.getElementById("profile-name"),
  profilePanel: document.getElementById("profile-panel"),
  profileStatus: document.getElementById("profile-status"),
  profileForm: document.getElementById("profile-form"),
  profileInput: document.getElementById("profile-input"),
  profileListEl: document.getElementById("profile-list"),
  profileEmoji: document.getElementById("profile-emoji"),
  profileCard: document.getElementById("profile-card"),
  profileAvatar: document.getElementById("profile-avatar"),
  profileCardName: document.getElementById("profile-card-name"),
  profileCardLevel: document.getElementById("profile-card-level"),
  profileEdit: document.getElementById("profile-edit"),
  profileAvatarPicker: document.getElementById("profile-avatar-picker"),
  profileStatXp: document.getElementById("profile-stat-xp"),
  profileStatRank: document.getElementById("profile-stat-rank"),
  profileStatBadges: document.getElementById("profile-stat-badges"),
  profileStatStreak: document.getElementById("profile-stat-streak"),
  profileView: document.getElementById("profile-view"),
  levelChip: document.getElementById("level-chip"),
  levelTag: document.getElementById("level-tag"),
  levelFill: document.getElementById("level-xp-fill"),
  levelStreak: document.getElementById("level-streak"),
  levelPanel: document.getElementById("level-panel"),
  levelPanelTitle: document.getElementById("level-panel-title"),
  levelPanelXp: document.getElementById("level-panel-xp"),
  levelPanelFill: document.getElementById("level-panel-fill"),
  levelStats: document.getElementById("level-stats"),
  badgeList: document.getElementById("badge-list"),
  xpToast: document.getElementById("xp-toast"),
  studyProgress: document.getElementById("study-progress"),
  card: document.getElementById("card"),
  cardTopic: document.getElementById("card-topic"),
  cardQ: document.getElementById("card-q"),
  cardA: document.getElementById("card-a"),
  reveal: document.getElementById("btn-reveal"),
  checkAnswerBtn: document.getElementById("btn-check-answer"),
  gradeWrap: document.getElementById("grade-actions"),
  btnAgain: document.getElementById("btn-again"),
  btnHard: document.getElementById("btn-hard"),
  btnGood: document.getElementById("btn-good"),
  btnEasy: document.getElementById("btn-easy"),
  navDecks: document.getElementById("nav-decks"),
  navLearn: document.getElementById("nav-learn"),
  navProjects: document.getElementById("nav-projects"),
  navGame: document.getElementById("nav-game"),
  navCode: document.getElementById("nav-code"),
  navChat: document.getElementById("nav-chat"),
  learnTabs: document.getElementById("learn-tabs"),
  learnPanel: document.getElementById("learn-panel"),
  projectPanel: document.getElementById("project-panel"),
  caseProgress: document.getElementById("case-progress"),
  caseTabs: document.getElementById("case-tabs"),
  caseTable: document.getElementById("case-table"),
  caseClueTabs: document.getElementById("case-clue-tabs"),
  caseClue: document.getElementById("case-clue"),
  caseFinal: document.getElementById("case-final"),
  caseSuspect: document.getElementById("case-suspect"),
  caseAccuse: document.getElementById("case-accuse"),
  caseFinalMsg: document.getElementById("case-final-msg"),
  caseEditor: document.getElementById("case-editor"),
  caseHint: document.getElementById("case-hint"),
  caseRun: document.getElementById("case-run"),
  caseOutput: document.getElementById("case-output"),
  langTabs: document.getElementById("lang-tabs"),
  editor: document.getElementById("code-editor"),
  runBtn: document.getElementById("btn-run"),
  checkBtn: document.getElementById("btn-check"),
  resetBtn: document.getElementById("btn-reset-snippet"),
  outputText: document.getElementById("output-text"),
  testResults: document.getElementById("test-results"),
  preview: document.getElementById("html-preview"),
  runStatus: document.getElementById("run-status"),
  chatMessages: document.getElementById("chat-messages"),
  chatInput: document.getElementById("chat-input"),
  chatSend: document.getElementById("btn-send-chat"),
  chatClear: document.getElementById("btn-clear-chat"),
  memoryCard: document.getElementById("memory-card"),
  memoryKnown: document.getElementById("memory-known"),
  memoryNotes: document.getElementById("memory-notes"),
  memoryForm: document.getElementById("memory-form"),
  memoryInput: document.getElementById("memory-input"),
  memoryBtn: document.getElementById("btn-memory"),
  memoryClose: document.getElementById("btn-memory-close"),
  chatModel: document.getElementById("chat-model"),
  chatProvider: document.getElementById("chat-provider"),
  chatKey: document.getElementById("chat-key"),
  chatHint: document.getElementById("chat-hint"),
  chatWebNotice: document.getElementById("chat-web-notice"),
  themeToggle: document.getElementById("theme-toggle"),
  btnExportBackup: document.getElementById("btn-export-backup"),
  importBackupFile: document.getElementById("import-backup-file"),
  profileBackupMsg: document.getElementById("profile-backup-msg"),
  heatmapGrid: document.getElementById("heatmap-grid"),
  heatmapMeta: document.getElementById("heatmap-meta"),
  btnShareMilestone: document.getElementById("btn-share-milestone"),
  btnCreateDeck: document.getElementById("btn-create-deck"),
  btnDailyChallenge: document.getElementById("btn-daily-challenge"),
  btnImportDeck: document.getElementById("btn-import-deck"),
  customDeckModal: document.getElementById("custom-deck-modal"),
  customDeckClose: document.getElementById("custom-deck-close"),
  customDeckCancel: document.getElementById("custom-deck-cancel"),
  customDeckSave: document.getElementById("custom-deck-save"),
  deckTitleInput: document.getElementById("deck-title-input"),
  deckDescInput: document.getElementById("deck-desc-input"),
  builderCardsList: document.getElementById("builder-cards-list"),
  builderAddCard: document.getElementById("builder-add-card"),
  aiGenNotes: document.getElementById("ai-gen-notes"),
  aiGenCount: document.getElementById("ai-gen-count"),
  aiGenGo: document.getElementById("ai-gen-go"),
  aiGenStop: document.getElementById("ai-gen-stop"),
  aiGenStatus: document.getElementById("ai-gen-status"),
  aiGenMsg: document.getElementById("ai-gen-msg"),
  aiGenKeyRow: document.getElementById("ai-gen-key-row"),
  aiGenKey: document.getElementById("ai-gen-key"),
  importDeckModal: document.getElementById("import-deck-modal"),
  importDeckClose: document.getElementById("import-deck-close"),
  importDeckCancel: document.getElementById("import-deck-cancel"),
  importDeckSubmit: document.getElementById("import-deck-submit"),
  deckFileInput: document.getElementById("deck-file-input"),
  importDeckTitle: document.getElementById("import-deck-title"),
  importPasteArea: document.getElementById("import-paste-area"),
  milestoneModal: document.getElementById("milestone-modal"),
  milestoneClose: document.getElementById("milestone-close"),
  milestoneCanvas: document.getElementById("milestone-canvas"),
  milestoneTextPreview: document.getElementById("milestone-text-preview"),
  milestoneCopy: document.getElementById("milestone-copy"),
  milestoneDownload: document.getElementById("milestone-download"),
  caseSelect: document.getElementById("case-select"),
  caseTitle: document.getElementById("case-title"),
  caseDesc: document.getElementById("case-desc"),
  caseShare: document.getElementById("case-share"),
  caseEvidence: document.getElementById("case-evidence"),
  shopModal: document.getElementById("shop-modal"),
  shopClose: document.getElementById("shop-close"),
  shopGems: document.getElementById("shop-gems"),
  shopGrid: document.getElementById("shop-grid"),
  btnShop: document.getElementById("btn-shop"),
  btnSound: document.getElementById("btn-sound"),
  btnReminder: document.getElementById("btn-reminder"),
  btnInstall: document.getElementById("btn-install"),
  onboardModal: document.getElementById("onboard-modal"),
  onboardBody: document.getElementById("onboard-body"),
  reminderModal: document.getElementById("reminder-modal"),
  reminderClose: document.getElementById("reminder-close"),
  reminderCancel: document.getElementById("reminder-cancel"),
  reminderSave: document.getElementById("reminder-save"),
  reminderTime: document.getElementById("reminder-time"),
  reminderEnabled: document.getElementById("reminder-enabled"),
  reminderStatus: document.getElementById("reminder-status"),
};

let store = loadStore();
let profile = readProfileChoice();
let profileList = [];
let profileOnline = false;
/* ---------- localStorage Backup/Restore ---------- */

/**
 * Export the full store to a JSON string.
 * Format=true adds indentation for human readability (used by copy/preview).
 * Format=false returns a compact string (used by file download).
 */
function exportStore(format) {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    // Validate basic structure before exporting
    if (!data || typeof data !== "object" || Array.isArray(data)) return null;
    return JSON.stringify(data, null, format ? 2 : 0);
  } catch {
    return null;
  }
}

/**
 * Import store JSON from a string. Returns an object with:
 *  - ok: boolean
 *  - errors: array of human-readable validation errors (empty on success)
 */
function importStore(jsonString) {
  if (typeof jsonString !== "string") return { ok: false, errors: ["Not a string"] };
  let parsed;
  try {
    parsed = JSON.parse(jsonString);
  } catch (e) {
    return { ok: false, errors: ["Not valid JSON: " + e.message] };
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    return { ok: false, errors: ["JSON value must be an object"] };
  }
  // Schema check: list every missing required key so the user sees exactly what is wrong
  const requiredKeys = [
    "progress", "stats", "lessons", "courses", "github", "projects", "notes",
    "misses", "plan", "xp", "streak", "best", "avatar", "case", "cases",
    "customDecks", "history", "labs", "roadmaps", "theme"
  ];
  const missing = requiredKeys.filter((k) => !(k in parsed));
  const typeErrors = [];
  for (const k of requiredKeys) {
    if (k in parsed && parsed[k] === null) {
      typeErrors.push(k + " must be a primitive or array, not null");
    }
  }
  if (missing.length > 0) {
    return { ok: false, errors: ["Missing keys: " + missing.join(", ")] };
  }
  if (typeErrors.length > 0) {
    return { ok: false, errors: typeErrors };
  }
  // Optional: ensure the version field is compatible with this app
  if ("version" in parsed && parsed.version && typeof parsed.version === "string" && !["1", "2", "3"].includes(parsed.version)) {
    return { ok: false, errors: ["Store version " + parsed.version + " is not compatible with this app (expected 1, 2, or 3)"] };
  }
  // Normalize and save
  try {
    store = normalizeStore(parsed);
    cacheStore();
    return { ok: true, errors: [] };
  } catch (e) {
    return { ok: false, errors: ["Normalization failed: " + e.message] };
  }
}

/* ---------- Deck Import Schema Validation ---------- */

function isValidDeckData(obj) {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return false;
  // A deck object should have at least an id and cards array
  return (
    (obj.id && typeof obj.id === "string") ||
    (obj.cards && Array.isArray(obj.cards))
  );
}

/* ---------- Clipboard helpers (used by the backup/restore UI) ---------- */

// Copy the current store to the system clipboard as JSON.
async function copyStoreToClipboard(format) {
  const data = exportStore(format);
  if (!data) {
    showBackupStatus("Nothing to copy — no store data found");
    return false;
  }
  try {
    await navigator.clipboard.writeText(data);
    showBackupStatus(format ? "Store copied to clipboard (formatted)" : "Store copied to clipboard");
    return true;
  } catch {
    // Fallback for browsers that block clipboard access without user gesture
    const ta = document.createElement("textarea");
    ta.value = data;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      showBackupStatus(format ? "Store copied to clipboard (formatted)" : "Store copied to clipboard");
      return true;
    } catch {
      showBackupStatus("Copy failed — clipboard blocked");
      return false;
    } finally {
      document.body.removeChild(ta);
    }
  }
}

// Attempt to paste store JSON from the system clipboard.
async function pasteStoreFromClipboard() {
  try {
    const text = await navigator.clipboard.readText();
    if (!text.trim()) {
      showBackupStatus("Clipboard is empty");
      return;
    }
    const result = importStore(text);
    if (result.ok) {
      showBackupStatus("Store restored from clipboard");
      renderHome();
    } else {
      showBackupStatus("Paste failed: " + result.errors.join("; "));
    }
  } catch {
    showBackupStatus("Clipboard read blocked — paste from file instead");
  }
}

// Show a short-lived status message in the backup controls panel.
function showBackupStatus(message) {
  const el = document.getElementById("backup-status");
  if (el) {
    el.textContent = message;
    el.style.color = result.ok ? "#45d6a4" : "#ffb3b3";
    setTimeout(() => { if (el) el.textContent = ""; }, 4000);
  }
}

/* ---------- UI: Backup/Restore Buttons ---------- */

function renderBackupButtons() {
  const container = document.createElement("div");
  container.className = "backup-controls";
  container.innerHTML = `
    <div class="backup-toolbar">
      <button id="backup-btn" class="backup-btn" title="Save your entire study state as a .json file">
        <span class="btn-icon">⬇</span> Backup
      </button>
      <button id="restore-btn" class="backup-btn" title="Restore your entire study state from a .json file">
        <span class="btn-icon">⬆</span> Restore
      </button>
      <button id="copy-btn" class="backup-btn" title="Copy your entire study state to the clipboard">
        <span class="btn-icon">📋</span> Copy
      </button>
      <button id="paste-btn" class="backup-btn" title="Paste store data from the clipboard">
        <span class="btn-icon">📌</span> Paste
      </button>
      <input type="file" id="restore-file" accept=".json" style="display:none;" />
      <label class="backup-toggle" title="Format JSON with indentation for easier manual review">
        <input type="checkbox" id="backup-pretty" checked>
        <span class="backup-toggle-label">Beautify</span>
      </label>
      <span id="backup-status" class="backup-status" role="status" aria-live="polite"></span>
    </div>
  `;
  // Insert after the study bar or in the header area
  const header = document.querySelector(".study-bar");
  if (header) {
    header.parentNode.insertBefore(container, header.nextSibling);
  } else {
    document.body.insertBefore(container, document.body.firstChild);
  }

  // ---- Backup button ----
  document.getElementById("backup-btn").addEventListener("click", () => {
    const format = document.getElementById("backup-pretty").checked;
    const data = exportStore(format);
    if (!data) {
      showBackupStatus("Nothing to back up — no store data found");
      return;
    }
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const date = new Date().toISOString().split("T")[0];
    a.href = url;
    a.download = `pycards-backup-v${STORE_VERSION || "1"}-${date}.json`;
    a.textContent = "Download .json";
    a.click();
    URL.revokeObjectURL(url);
    showBackupStatus("Backup file saved");
  });

  // ---- Restore button (file picker) ----
  document.getElementById("restore-btn").addEventListener("click", () => {
    document.getElementById("restore-file").click();
  });

  // ---- File change handler ----
  document.getElementById("restore-file").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = importStore(e.target.result);
      if (result.ok) {
        showBackupStatus("Store restored successfully");
        // Refresh the UI to reflect the restored data
        renderHome();
      } else {
        showBackupStatus("Restore rejected: " + result.errors.join("; "));
      }
    };
    reader.readAsText(file);
  });

  // ---- Copy button ----
  document.getElementById("copy-btn").addEventListener("click", async () => {
    const format = document.getElementById("backup-pretty").checked;
    const ok = await copyStoreToClipboard(format);
    if (!ok) showBackupStatus("Copy failed");
  });

  // ---- Paste button ----
  document.getElementById("paste-btn").addEventListener("click", async () => {
    await pasteStoreFromClipboard();
  });
}

// Initialize backup controls when app loads
setTimeout(renderBackupButtons, 500);
let profilePending = false;
let profileError = false;
let profileLastSaved = 0;
let profileTimer = 0;
let profileChain = Promise.resolve();
let session = null;
let current = null;

function keyFor(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function todayKey() {
  return keyFor(new Date());
}

function dateKeyOffset(days) {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return keyFor(d);
}

function emptyStore() {
  return {
    progress: {},
    stats: { date: todayKey(), reviewed: 0 },
    lessons: {},
    courses: {},
    github: {},
    projects: {},
    notes: [],
    misses: [],
    plan: { date: todayKey(), done: {} },
    xp: 0,
    streak: { count: 0, last: null },
    freezes: 1,
    best: 0,
    challenge: { date: todayKey(), done: false, code: "" },
    challengesDone: 0,
    avatar: AVATARS[0],
    case: { solved: {}, done: false },
    cases: {
      lark: { solved: {}, done: false },
      breach: { solved: {}, done: false },
    },
    customDecks: [],
    history: {},
    labs: {},
    roadmaps: {},
    theme: "dark",
    sound: true,
    gems: 0,
    owned: ["frame-bronze", "title-newcomer"],
    frame: "frame-bronze",
    title: "title-newcomer",
    quests: { date: todayKey(), baseline: {}, done: {}, claimed: false },
    onboarded: false,
    goal: "",
    reminder: { enabled: false, time: "19:00", lastFired: null },
  };
}

function normalizeRoadmapState(raw) {
  return {
    passed: raw?.passed && typeof raw.passed === "object" ? raw.passed : {},
    projectChecks: raw?.projectChecks && typeof raw.projectChecks === "object" ? raw.projectChecks : {},
    projectDone: !!raw?.projectDone,
    exercises: raw?.exercises && typeof raw.exercises === "object" ? raw.exercises : {},
    code: raw?.code && typeof raw.code === "object" ? raw.code : {},
    attempts: raw?.attempts && typeof raw.attempts === "object" ? raw.attempts : {},
  };
}

function normalizeRoadmaps(parsed) {
  const roadmaps = {};
  if (parsed.roadmaps && typeof parsed.roadmaps === "object" && !Array.isArray(parsed.roadmaps)) {
    Object.keys(parsed.roadmaps).forEach((id) => {
      roadmaps[id] = normalizeRoadmapState(parsed.roadmaps[id]);
    });
  }
  // Pre-multi-roadmap stores kept the AI/ML progress under a single `roadmap` key.
  if (parsed.roadmap && typeof parsed.roadmap === "object" && !roadmaps.aiml) {
    roadmaps.aiml = normalizeRoadmapState(parsed.roadmap);
  }
  return roadmaps;
}

function normalizeStore(parsed) {
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return emptyStore();
  const whole = (value) => (Number.isFinite(value) ? Math.max(0, Math.floor(value)) : 0);
  const larkCase = parsed.cases?.lark || parsed.case || { solved: {}, done: false };
  const breachCase = parsed.cases?.breach || { solved: {}, done: false };
  const cases = { lark: larkCase, breach: breachCase };
  if (parsed.cases && typeof parsed.cases === "object") {
    for (const [key, value] of Object.entries(parsed.cases)) {
      if (value && typeof value === "object" && !cases[key]) {
        cases[key] = { solved: value.solved || {}, done: !!value.done };
      }
    }
  }
  const data = {
    progress: parsed.progress && typeof parsed.progress === "object" ? parsed.progress : {},
    stats: parsed.stats && typeof parsed.stats === "object" ? parsed.stats : { date: todayKey(), reviewed: 0 },
    lessons: parsed.lessons && typeof parsed.lessons === "object" ? parsed.lessons : {},
    courses: parsed.courses && typeof parsed.courses === "object" ? parsed.courses : {},
    github: parsed.github && typeof parsed.github === "object" ? parsed.github : {},
    projects: parsed.projects && typeof parsed.projects === "object" ? parsed.projects : {},
    notes: Array.isArray(parsed.notes)
      ? parsed.notes.filter((n) => n && typeof n.text === "string").slice(-20)
      : [],
    misses: Array.isArray(parsed.misses)
      ? parsed.misses.filter((m) => m && typeof m.q === "string").slice(0, 20)
      : [],
    plan:
      parsed.plan?.date === todayKey() && parsed.plan?.done
        ? { date: todayKey(), done: parsed.plan.done }
        : { date: todayKey(), done: {} },
    xp: whole(parsed.xp),
    streak: {
      count: whole(parsed.streak?.count),
      last: typeof parsed.streak?.last === "string" ? parsed.streak.last : null,
    },
    freezes: Math.min(3, whole(parsed.freezes ?? 1)),
    best: whole(parsed.best ?? parsed.streak?.count),
    challenge:
      parsed.challenge?.date === todayKey()
        ? {
            date: todayKey(),
            done: !!parsed.challenge.done,
            code: typeof parsed.challenge.code === "string" ? parsed.challenge.code : "",
          }
        : { date: todayKey(), done: false, code: "" },
    challengesDone: whole(parsed.challengesDone),
    avatar: AVATARS.includes(parsed.avatar) ? parsed.avatar : AVATARS[0],
    case: cases.lark,
    cases,
    customDecks: Array.isArray(parsed.customDecks)
      ? parsed.customDecks.filter((d) => d && d.id && Array.isArray(d.cards))
      : [],
    history: parsed.history && typeof parsed.history === "object" ? parsed.history : {},
    labs: parsed.labs && typeof parsed.labs === "object" ? parsed.labs : {},
    roadmaps: normalizeRoadmaps(parsed),
    theme: ["dark", "light", "sepia", "midnight", "forest"].includes(parsed.theme) ? parsed.theme : "dark",
    sound: parsed.sound !== false,
    gems: whole(parsed.gems),
    owned: Array.isArray(parsed.owned) ? parsed.owned.filter((x) => typeof x === "string") : ["frame-bronze", "title-newcomer"],
    frame: typeof parsed.frame === "string" ? parsed.frame : "frame-bronze",
    title: typeof parsed.title === "string" ? parsed.title : "title-newcomer",
    quests:
      parsed.quests?.date === todayKey() && parsed.quests.baseline
        ? { date: todayKey(), baseline: parsed.quests.baseline, done: parsed.quests.done || {}, claimed: !!parsed.quests.claimed }
        : { date: todayKey(), baseline: questBaseline(parsed), done: {}, claimed: false },
    onboarded: !!parsed.onboarded,
    goal: typeof parsed.goal === "string" ? parsed.goal : "",
    reminder: {
      enabled: !!parsed.reminder?.enabled,
      time: typeof parsed.reminder?.time === "string" ? parsed.reminder.time : "19:00",
      lastFired: typeof parsed.reminder?.lastFired === "string" ? parsed.reminder.lastFired : null,
    },
  };
  if (data.stats.date !== todayKey()) data.stats = { date: todayKey(), reviewed: 0 };
  return data;
}

function loadStore() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    return raw ? normalizeStore(JSON.parse(raw)) : emptyStore();
  } catch {
    return emptyStore();
  }
}

function cacheStore() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(store));
  } catch {
    // storage unavailable (private mode) — session still works in memory
  }
}

function saveStore() {
  cacheStore();
  if (profile.id) {
    try {
      localStorage.setItem(DIRTY_KEY, profile.id);
    } catch {}
    if (profileOnline) scheduleProfilePush();
    else profilePending = true;
  } else if (profile.name) {
    try {
      localStorage.setItem(DIRTY_KEY, "unsynced");
    } catch {}
  }
  updateProfileChip();
}

function storeHasData(state = store) {
  return (
    (state.xp ?? 0) > 0 ||
    Object.keys(state.progress ?? {}).length > 0 ||
    Object.keys(state.lessons ?? {}).length > 0 ||
    Object.keys(state.courses ?? {}).length > 0 ||
    Object.keys(state.github ?? {}).length > 0 ||
    Object.keys(state.projects ?? {}).length > 0 ||
    (state.notes ?? []).length > 0 ||
    (state.misses ?? []).length > 0 ||
    (state.avatar && state.avatar !== AVATARS[0]) ||
    Object.keys(state.case?.solved ?? {}).length > 0 ||
    !!state.case?.done ||
    (state.customDecks ?? []).length > 0 ||
    Object.keys(state.cases?.breach?.solved ?? {}).length > 0 ||
    !!state.cases?.breach?.done
  );
}

function recordReviewActivity(amount = 1) {
  const today = todayKey();
  if (!store.history) store.history = {};
  store.history[today] = (store.history[today] || 0) + amount;
}

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function fmt(text) {
  return escapeHtml(text).replace(/`([^`]+)`/g, "<code>$1</code>");
}

function recordFor(deckId, card) {
  return store.progress[deckId]?.[card.q] ?? null;
}

function dueCount(deck) {
  const now = Date.now();
  return deck.cards.filter((card) => {
    const rec = recordFor(deck.id, card);
    return !rec || rec.due <= now;
  }).length;
}

function reviewedDueCount(deck) {
  const now = Date.now();
  return deck.cards.filter((card) => {
    const rec = recordFor(deck.id, card);
    return rec && rec.due <= now;
  }).length;
}

function learnedCount(deck) {
  return deck.cards.filter((card) => (recordFor(deck.id, card)?.reps ?? 0) > 0).length;
}

function newCount(deck) {
  return deck.cards.filter((card) => !recordFor(deck.id, card)).length;
}

function newTodayCount() {
  const today = todayKey();
  let count = 0;
  for (const deck of Object.values(store.progress ?? {})) {
    for (const rec of Object.values(deck ?? {})) {
      if (rec?.firstSeen && keyFor(new Date(rec.firstSeen)) === today) count++;
    }
  }
  return count;
}

function newAllowance() {
  return Math.max(0, NEW_PER_DAY - newTodayCount());
}

const XP_PER_LEVEL = 100;

function levelInfo(xp = store.xp) {
  const safe = Math.max(0, Math.floor(xp ?? 0));
  return {
    level: Math.floor(safe / XP_PER_LEVEL) + 1,
    into: safe % XP_PER_LEVEL,
    need: XP_PER_LEVEL,
  };
}

function currentStreak() {
  const last = store.streak?.last;
  if (!last) return 0;
  return last === todayKey() || last === dateKeyOffset(1) ? store.streak.count : 0;
}

const MAX_FREEZES = 3;

function daysBetweenKeys(a, b) {
  const [ay, am, ad] = a.split("-").map(Number);
  const [by, bm, bd] = b.split("-").map(Number);
  return Math.round((Date.UTC(by, bm - 1, bd) - Date.UTC(ay, am - 1, ad)) / DAY);
}

// A missed day would normally reset the streak. Streak freezes (earned on
// level-ups, max 3) bridge missed days automatically: one freeze per gap day.
function settleStreak() {
  const last = store.streak?.last;
  if (!last || last === todayKey() || last === dateKeyOffset(1)) return;
  const needed = daysBetweenKeys(last, todayKey()) - 1;
  if (needed <= 0) return;
  if ((store.freezes ?? 0) >= needed) {
    store.freezes -= needed;
    store.streak.last = dateKeyOffset(1);
    saveStore();
    showFreezeToast(needed);
  } else {
    store.streak = { count: 0, last: null };
    saveStore();
  }
}

function showFreezeToast(used) {
  if (!els.xpToast) return;
  els.xpToast.innerHTML = `<span>❄️ Streak freeze used (${used}) — your streak is safe</span>`;
  els.xpToast.classList.remove("hidden");
  els.xpToast.classList.remove("show");
  void els.xpToast.offsetWidth;
  els.xpToast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.xpToast.classList.remove("show"), 3200);
}

function rankInfo(level = levelInfo().level) {
  if (level >= 20) return { label: "Platinum", cls: "platinum" };
  if (level >= 10) return { label: "Gold", cls: "gold" };
  if (level >= 5) return { label: "Silver", cls: "silver" };
  return { label: "Bronze", cls: "bronze" };
}

function touchStreak() {
  if (!store.streak) store.streak = { count: 0, last: null };
  settleStreak();
  const today = todayKey();
  if (store.streak.last === today) return;
  store.streak.count = store.streak.last === dateKeyOffset(1) ? store.streak.count + 1 : 1;
  store.streak.last = today;
  store.best = Math.max(store.best ?? 0, store.streak.count);
}

function badgeList() {
  const streak = currentStreak();
  const best = Math.max(store.best ?? 0, streak);
  const reviewedAny = Object.values(store.progress ?? {}).some(
    (deck) => Object.keys(deck ?? {}).length > 0
  );
  const cleanSweep = Object.values(store.lessons ?? {}).some(
    (rec) => rec?.done && rec.total > 0 && rec.score === rec.total
  );
  const deckLearned = (window.DECKS ?? []).some(
    (deck) => deck.cards.length > 0 && learnedCount(deck) === deck.cards.length
  );
  const allChecks = Object.values(store.projects ?? {}).some(
    (rec) => rec?.checks?.total > 0 && rec.checks.passed === rec.checks.total
  );
  const courseDone = Object.values(store.courses ?? {}).some((rec) => rec?.done);

  return [
    { id: "first", label: "First card", hint: "Review one card.", earned: reviewedAny },
    { id: "clean", label: "Clean sweep", hint: "Score every quiz question right.", earned: cleanSweep },
    { id: "deck", label: "Deck learned", hint: "Learn every card in one deck.", earned: deckLearned },
    { id: "checks", label: "All checks green", hint: "Pass a graded project.", earned: allChecks },
    { id: "course", label: "Video scholar", hint: "Pass a course quiz.", earned: courseDone },
    { id: "repo", label: "Repo explorer", hint: "Mark 3 GitHub repos as studied.", earned: githubStudiedCount() >= 3 },
    { id: "labs5", label: "Lab solver", hint: "Solve 5 labs.", earned: labsDoneCount() >= 5 },
    {
      id: "roadmap",
      label: "AI/ML roadmapper",
      hint: "Finish the AI/ML roadmap project.",
      earned: !!store.roadmaps?.aiml?.projectDone,
    },
    {
      id: "python-roadmap",
      label: "Python roadmapper",
      hint: "Finish the Python roadmap project.",
      earned: !!store.roadmaps?.python?.projectDone,
    },
    { id: "case", label: "Case closed", hint: "Solve the vault case.", earned: !!store.case?.done },
    { id: "streak3", label: "3-day streak", hint: "Earn XP three days in a row.", earned: best >= 3 },
    { id: "streak7", label: "7-day streak", hint: "Earn XP seven days in a row.", earned: best >= 7 },
    { id: "challenge3", label: "Daily challenger", hint: "Complete 3 daily challenges.", earned: (store.challengesDone ?? 0) >= 3 },
    { id: "level5", label: "Level 5", hint: "Reach level 5.", earned: levelInfo().level >= 5 },
  ];
}

function renderLevelChip() {
  if (!els.levelChip) return;
  const info = levelInfo();
  const streak = currentStreak();
  const pct = (info.into / info.need) * 100;
  els.levelTag.textContent = `Lv ${info.level}`;
  els.levelFill.style.width = `${pct}%`;
  els.levelStreak.textContent = streak >= 3 ? `🔥${streak}d` : `${streak}d`;
  const freezes = store.freezes ?? 0;
  els.levelChip.title = `Level ${info.level} · ${info.into}/${info.need} XP · ${streak}-day streak${freezes ? ` · ❄️ ${freezes} freeze${freezes === 1 ? "" : "s"}` : ""}`;
  els.levelChip.setAttribute(
    "aria-label",
    `Level ${info.level}, ${info.into} of ${info.need} XP, ${streak}-day streak`
  );
}

function renderHeatmap() {
  if (!els.heatmapGrid) return;
  els.heatmapGrid.innerHTML = "";
  const daysToShow = 84; // 12 weeks
  const today = new Date();
  let totalInWindow = 0;

  for (let i = daysToShow - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = keyFor(d);
    let count = store.history?.[dateStr] || 0;
    if (dateStr === todayKey() && (store.stats?.reviewed || 0) > count) {
      count = store.stats.reviewed;
    }
    totalInWindow += count;

    let lvl = 0;
    if (count >= 20) lvl = 4;
    else if (count >= 10) lvl = 3;
    else if (count >= 5) lvl = 2;
    else if (count >= 1) lvl = 1;

    const cell = document.createElement("div");
    cell.className = `cell lvl-${lvl}`;
    const readableDate = d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
    cell.title = `${count} review${count === 1 ? "" : "s"} on ${readableDate}`;
    els.heatmapGrid.appendChild(cell);
  }

  if (els.heatmapMeta) {
    els.heatmapMeta.textContent = `${totalInWindow} review${totalInWindow === 1 ? "" : "s"} in past 12 weeks`;
  }
}

function renderLevelPanel() {
  if (!els.levelPanel) return;
  const info = levelInfo();
  const streak = currentStreak();
  const best = Math.max(store.best ?? 0, streak);
  const badges = badgeList();
  const earned = badges.filter((badge) => badge.earned).length;

  els.levelPanelTitle.textContent = `Level ${info.level}`;
  els.levelPanelXp.textContent = `${info.into} / ${info.need} XP`;
  els.levelPanelFill.style.width = `${(info.into / info.need) * 100}%`;
  els.levelStats.innerHTML =
    `<span>${store.stats.reviewed} reviewed today</span>` +
    `<span>${streak}-day streak · best ${best}</span>` +
    `<span>${earned}/${badges.length} badges earned</span>` +
    `<span title="Freezes bridge missed days so your streak survives. Earn one per level-up (max 3).">❄️ ${store.freezes ?? 0}/${MAX_FREEZES} streak freezes</span>`;
  
  renderHeatmap();

  els.badgeList.innerHTML = badges
    .map(
      (badge) =>
        `<div class="badge ${badge.earned ? "on" : ""}">` +
        `<span class="badge-name">${escapeHtml(badge.label)}</span>` +
        `<span class="badge-hint">${badge.earned ? "Earned" : escapeHtml(badge.hint)}</span>` +
        `</div>`
    )
    .join("");
}

function updateStats() {
  renderLevelChip();
  renderLevelPanel();
  renderProfileCard();
  refreshCaseOptions();
}

let toastTimer = 0;
function showXpToast(amount, levelUp, freshBadges = []) {
  if (!els.xpToast) return;
  const parts = [`+${amount} XP`];
  if (levelUp) parts.push(`Level ${levelUp}`);
  for (const label of freshBadges) parts.push(label);
  els.xpToast.innerHTML = parts
    .map((part) => `<span>${escapeHtml(part)}</span>`)
    .join('<i aria-hidden="true">·</i>');
  els.xpToast.classList.remove("hidden");
  els.xpToast.classList.remove("show");
  void els.xpToast.offsetWidth;
  els.xpToast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.xpToast.classList.remove("show"), 2400);
}

function addXp(amount) {
  if (!Number.isFinite(amount) || amount <= 0) return;
  const beforeLevel = levelInfo().level;
  const beforeBadges = new Set(badgeList().filter((badge) => badge.earned).map((badge) => badge.id));

  store.xp = Math.max(0, Math.floor((store.xp ?? 0) + amount));
  touchStreak();
  recordReviewActivity(1);
  saveStore();
  updateStats();

  const after = levelInfo();
  const leveledUp = after.level > beforeLevel;
  if (leveledUp) {
    if ((store.freezes ?? 0) < MAX_FREEZES) store.freezes = (store.freezes ?? 0) + 1;
    store.gems = (store.gems ?? 0) + 10;
    saveStore();
    Juice.confetti();
    Juice.sound("level");
  }
  checkQuests();
  const freshBadges = badgeList()
    .filter((badge) => badge.earned && !beforeBadges.has(badge.id))
    .map((badge) => badge.label);
  if (leveledUp) freshBadges.push("❄️ +1 freeze · 💎 +10");
  showXpToast(amount, leveledUp ? after.level : 0, freshBadges);
}

function readProfileChoice() {
  try {
    const parsed = JSON.parse(localStorage.getItem(PROFILE_KEY) || "null");
    if (parsed && typeof parsed === "object") {
      return {
        id: typeof parsed.id === "string" ? parsed.id : null,
        name: typeof parsed.name === "string" && parsed.name ? parsed.name : null,
      };
    }
  } catch {}
  return { id: null, name: null };
}

function saveProfileChoice() {
  try {
    if (profile.id || profile.name) {
      localStorage.setItem(PROFILE_KEY, JSON.stringify({ id: profile.id, name: profile.name }));
    } else {
      localStorage.removeItem(PROFILE_KEY);
    }
  } catch {}
}

function updateProfileChip() {
  if (!els.profileChip) return;
  const name = profile.name || (profileOnline ? "Set name" : "Browser only");
  els.profileNameEl.textContent = name;
  const state = !profileOnline
    ? "offline"
    : profileError
      ? "error"
      : profilePending
        ? "pending"
        : profile.id
          ? "saved"
          : "none";
  els.profileDot.className = `profile-dot ${state}`;
  const saveState = profile.id
    ? profileOnline
      ? profilePending
        ? "saving…"
        : "saved to server"
      : "saved in this browser only"
    : profileOnline
      ? "set a name to save progress"
      : "server not running — browser only";
  els.profileChip.title = profile.name ? `${profile.name} · ${saveState}` : saveState;
  els.profileChip.setAttribute("aria-label", `Profile: ${name}`);
  els.profileEmoji.textContent = profile.name ? store.avatar || AVATARS[0] : "";
}

function timeAgo(ts) {
  if (!ts) return "";
  const seconds = Math.max(1, Math.round((Date.now() - ts) / 1000));
  if (seconds < 60) return "just now";
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.round(hours / 24)}d ago`;
}

function profileStatusText() {
  if (!profileOnline) return "Server offline — saving in this browser";
  if (profileError) return "Last save failed — will retry";
  if (profilePending) return "Saving…";
  if (!profile.id) return "Set a name to save to this server";
  return profileLastSaved ? `Saved to server · ${timeAgo(profileLastSaved)}` : "Saved to this server";
}

function renderProfileCard() {
  if (!els.profileCard) return;
  const named = !!profile.name;
  els.profileCard.classList.toggle("hidden", !named);
  if (!named) return;
  const info = levelInfo();
  const rank = rankInfo(info.level);
  const earned = badgeList().filter((badge) => badge.earned).length;
  els.profileAvatar.textContent = store.avatar || AVATARS[0];
  els.profileAvatar.className = `profile-avatar ${store.frame || "frame-bronze"}`;
  els.profileCardName.textContent = profile.name;
  const titleName = shopItem(store.title)?.name;
  els.profileCardLevel.textContent = `Level ${info.level}${titleName && store.title !== "title-newcomer" ? ` · ${titleName}` : ""}`;
  els.profileStatXp.textContent = String(store.xp ?? 0);
  els.profileStatRank.textContent = rank.label;
  els.profileStatRank.className = `profile-stat-value rank-${rank.cls}`;
  els.profileStatBadges.textContent = String(earned);
  els.profileStatStreak.textContent = String(currentStreak());
  els.profileAvatarPicker.innerHTML = AVATARS.map(
    (avatar) =>
      `<button class="avatar-choice ${avatar === (store.avatar || AVATARS[0]) ? "active" : ""}"` +
      ` type="button" data-avatar="${avatar}" aria-label="Use avatar ${avatar}">${avatar}</button>`
  ).join("");
}

function toggleAvatarPicker(force) {
  if (!els.profileAvatarPicker) return;
  const opening = typeof force === "boolean" ? force : els.profileAvatarPicker.classList.contains("hidden");
  els.profileAvatarPicker.classList.toggle("hidden", !opening);
  els.profileEdit.setAttribute("aria-expanded", String(opening));
}

function renderProfilePanel() {
  if (!els.profilePanel) return;
  els.profileStatus.textContent = profileStatusText();
  els.profileStatus.classList.toggle("bad", profileError || !profileOnline);
  renderProfileCard();
  els.profileListEl.innerHTML = profileList.length
    ? profileList
        .map((entry) => {
          const active = entry.id === profile.id;
          const safeName = escapeHtml(entry.name);
          return (
            `<div class="profile-row">` +
            `<button class="profile-item ${active ? "active" : ""}" type="button" data-profile="${entry.id}"` +
            `${active ? ' aria-current="true"' : ""}>` +
            `<span class="profile-item-name">${safeName}</span>` +
            `<span class="profile-item-meta">${active ? "current" : timeAgo(entry.updatedAt)}</span>` +
            `</button>` +
            `<button class="profile-delete" type="button" data-delete="${entry.id}"` +
            ` title="Delete ${safeName}" aria-label="Delete ${safeName}">×</button>` +
            `</div>`
          );
        })
        .join("")
    : `<p class="profile-empty">No profiles saved yet${profileOnline ? "" : " — server unavailable"}.</p>`;
}

function updateSyncHint() {
  const hint = document.getElementById("home-hint");
  if (!hint) return;
  const code = "<code>data/python.js</code>";
  const host = window.location.hostname;
  const hosted = host !== "localhost" && host !== "127.0.0.1" && !host.endsWith(".ts.net");
  if (!profileOnline) {
    hint.innerHTML = hosted
      ? `Cards live in ${code}. Progress, XP, and streaks save in this browser — use <strong>Export Backup</strong> in the profile menu to keep a copy.`
      : `Cards live in ${code}. The profile server is unavailable — progress stays in this browser. ` +
        "Start with <code>python serve.py</code> to save it.";
  } else if (profile.id) {
    hint.innerHTML = `Cards live in ${code}. Progress saves to this server under <strong>${escapeHtml(
      profile.name
    )}</strong>.`;
  } else {
    hint.innerHTML = `Cards live in ${code}. Set a name in the header to save progress to this server.`;
  }
}

function closeProfilePanel() {
  els.profilePanel.classList.add("hidden");
  els.profileChip.setAttribute("aria-expanded", "false");
  toggleAvatarPicker(false);
}

function resetForProfileSwitch() {
  session = null;
  current = null;
  learnQuiz = null;
  learnLessonId = null;
  projectId = null;
  closeProfilePanel();
  renderHome();
}

function useServerState(state) {
  store = normalizeStore(state);
  settleStreak();
  cacheStore();
  profilePending = false;
  profileError = false;
  try {
    localStorage.removeItem(DIRTY_KEY);
  } catch {}
}

function scheduleProfilePush() {
  profilePending = true;
  updateProfileChip();
  renderProfilePanel();
  clearTimeout(profileTimer);
  profileTimer = setTimeout(pushProfileState, 700);
}

async function createRemoteProfile(name) {
  const res = await fetch("/api/profiles", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  return { id: data.id, name: data.name, updatedAt: data.updatedAt ?? Date.now() };
}

function pushProfileState() {
  clearTimeout(profileTimer);
  if (!profile.id || !profileOnline) return Promise.resolve(false);
  const id = profile.id;
  const payload = JSON.stringify({ state: store });
  profilePending = true;
  updateProfileChip();
  profileChain = profileChain.then(async () => {
    try {
      const res = await fetch(`/api/profiles/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: payload,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json().catch(() => ({}));
      if (profile.id !== id) return;
      profilePending = false;
      profileError = false;
      profileLastSaved = data.updatedAt ?? Date.now();
      try {
        localStorage.removeItem(DIRTY_KEY);
      } catch {}
      const entry = profileList.find((item) => item.id === id);
      if (entry) entry.updatedAt = profileLastSaved;
      updateProfileChip();
      renderProfilePanel();
    } catch {
      if (profile.id !== id) return;
      profilePending = true;
      profileError = true;
      updateProfileChip();
      renderProfilePanel();
    }
  });
  return profileChain;
}

async function flushProfile() {
  clearTimeout(profileTimer);
  if (!profile.id || !profileOnline || !profilePending) return;
  await pushProfileState();
}

async function loadBootProfile(entry) {
  const dirty =
    localStorage.getItem(DIRTY_KEY) === entry.id || localStorage.getItem(DIRTY_KEY) === "unsynced";
  profile = { id: entry.id, name: entry.name };
  profileLastSaved = entry.updatedAt ?? 0;
  saveProfileChoice();
  let state = null;
  try {
    const res = await fetch(`/api/profiles/${entry.id}`, { cache: "no-store" });
    if (res.ok) state = (await res.json()).state;
  } catch {
    profileError = true;
    updateProfileChip();
    renderProfilePanel();
    return;
  }
  const remoteHasData = !!state && typeof state === "object" && Object.keys(state).length > 0;
  if (!dirty && remoteHasData) {
    useServerState(state);
  } else if (storeHasData()) {
    profilePending = true;
    await pushProfileState();
  } else {
    profilePending = false;
    try {
      localStorage.removeItem(DIRTY_KEY);
    } catch {}
  }
  updateProfileChip();
  renderProfilePanel();
  updateSyncHint();
  renderHome();
}

async function switchProfile(entry) {
  if (!entry || entry.id === profile.id) {
    closeProfilePanel();
    return;
  }
  await flushProfile();
  let state = null;
  try {
    const res = await fetch(`/api/profiles/${entry.id}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    state = (await res.json()).state;
  } catch {
    profileError = true;
    updateProfileChip();
    renderProfilePanel();
    return;
  }
  profile = { id: entry.id, name: entry.name };
  profileLastSaved = entry.updatedAt ?? 0;
  profilePending = false;
  profileError = false;
  saveProfileChoice();
  if (state && typeof state === "object" && Object.keys(state).length) {
    useServerState(state);
  } else {
    store = emptyStore();
    cacheStore();
    try {
      localStorage.removeItem(DIRTY_KEY);
    } catch {}
  }
  resetForProfileSwitch();
  updateProfileChip();
  renderProfilePanel();
  updateSyncHint();
}

async function deleteProfile(entry) {
  if (!entry) return;
  if (!profileOnline) {
    els.profileStatus.textContent = "Can't delete while the server is offline.";
    return;
  }
  if (
    !window.confirm(
      `Delete profile "${entry.name}"? Its XP, cards, notes, and plan are removed from this server and can't be recovered.`
    )
  ) {
    return;
  }
  const isActive = entry.id === profile.id;
  if (isActive) {
    clearTimeout(profileTimer);
    profile = { id: null, name: null };
    profilePending = false;
    saveProfileChoice();
    try {
      localStorage.removeItem(DIRTY_KEY);
    } catch {}
  }
  let res;
  try {
    res = await fetch(`/api/profiles/${entry.id}`, { method: "DELETE" });
  } catch {
    res = null;
  }
  if (!res || (!res.ok && res.status !== 404)) {
    if (isActive) {
      profile = { id: entry.id, name: entry.name };
      profilePending = true;
      saveProfileChoice();
    }
    profileError = true;
    updateProfileChip();
    renderProfilePanel();
    els.profileStatus.textContent = "Delete failed — is python serve.py running?";
    return;
  }
  profileList = profileList.filter((item) => item.id !== entry.id);
  if (isActive) {
    store = emptyStore();
    cacheStore();
    resetForProfileSwitch();
    updateSyncHint();
  }
  updateProfileChip();
  renderProfilePanel();
}

async function submitProfileName(raw) {
  const name = String(raw ?? "").trim().replace(/\s+/g, " ");
  if (!name) {
    els.profileStatus.textContent = "Enter a name first.";
    return;
  }
  if (name.length > 40) {
    els.profileStatus.textContent = "Keep the name to 40 characters.";
    return;
  }
  if (!profileOnline) {
    profile = { id: null, name };
    saveProfileChoice();
    try {
      localStorage.setItem(DIRTY_KEY, "unsynced");
    } catch {}
    profilePending = true;
    updateProfileChip();
    updateSyncHint();
    renderProfilePanel();
    els.profileStatus.textContent = "Server offline — this name is saved in the browser only.";
    return;
  }
  const existing = profileList.find((entry) => entry.name.toLowerCase() === name.toLowerCase());
  if (existing) {
    els.profileInput.value = "";
    await switchProfile(existing);
    return;
  }
  try {
    const first = profileList.length === 0 && !profile.id;
    const entry = await createRemoteProfile(name);
    profileList = [entry, ...profileList.filter((item) => item.id !== entry.id)];
    els.profileInput.value = "";
    if (first) {
      profile = { id: entry.id, name: entry.name };
      profileLastSaved = 0;
      saveProfileChoice();
      if (storeHasData()) await pushProfileState();
      closeProfilePanel();
      updateProfileChip();
      renderProfilePanel();
      updateSyncHint();
      renderHome();
    } else {
      await switchProfile(entry);
    }
  } catch {
    profileError = true;
    updateProfileChip();
    renderProfilePanel();
    els.profileStatus.textContent = "Could not reach the profile server — is python serve.py running?";
  }
}

async function initProfiles() {
  updateProfileChip();
  renderProfilePanel();
  updateSyncHint();
  let data;
  try {
    const res = await fetch("/api/profiles", { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    data = await res.json();
  } catch {
    profileOnline = false;
    updateProfileChip();
    renderProfilePanel();
    updateSyncHint();
    return;
  }
  profileOnline = true;
  profileList = (Array.isArray(data.profiles) ? data.profiles : []).filter(
    (entry) => entry && typeof entry.id === "string" && typeof entry.name === "string"
  );

  let entry = profileList.find((item) => item.id === profile.id) ?? null;
  if (!entry && profile.name) {
    entry = await createRemoteProfile(profile.name).catch(() => null);
  }
  if (!entry && profileList.length) entry = profileList[0];

  if (entry) {
    profileList = [entry, ...profileList.filter((item) => item.id !== entry.id)].sort(
      (a, b) => (b.updatedAt ?? 0) - (a.updatedAt ?? 0)
    );
    await loadBootProfile(entry);
  } else {
    updateProfileChip();
    renderProfilePanel();
    updateSyncHint();
  }
}

function show(view) {
  for (const [name, el] of Object.entries(els.views)) el.classList.toggle("hidden", name !== view);
  document.body.dataset.view = view;
  els.navDecks.classList.toggle(
    "active",
    view === "home" || view === "study" || view === "done" || view === "deck"
  );
  els.navLearn.classList.toggle("active", view === "learn");
  els.navProjects.classList.toggle("active", view === "projects");
  els.navGame.classList.toggle("active", view === "game");
  els.navCode.classList.toggle("active", view === "code");
  els.navChat.classList.toggle("active", view === "chat");
}

function getAllDecks() {
  return [...(window.DECKS || []), ...(store.customDecks || [])];
}

function exportCustomDeck(deck) {
  try {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(deck, null, 2));
    const a = document.createElement("a");
    a.href = dataStr;
    a.download = `${deck.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-deck.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  } catch (err) {
    alert("Export failed: " + err.message);
  }
}

function deleteCustomDeck(deckId) {
  if (!confirm("Are you sure you want to delete this custom deck?")) return;
  store.customDecks = (store.customDecks || []).filter((d) => d.id !== deckId);
  if (store.progress) delete store.progress[deckId];
  saveStore();
  renderHome();
}

function renderHome() {
  session = null;
  current = null;
  show("home");
  updateStats();
  els.deckList.innerHTML = "";

  const allDecks = getAllDecks();
  for (const deck of allDecks) {
    const due = reviewedDueCount(deck);
    const learned = learnedCount(deck);
    const fresh = newCount(deck);
    const isCustom = !window.DECKS?.some((d) => d.id === deck.id);

    const btn = document.createElement("div");
    btn.className = "deck";
    btn.innerHTML = `
      <div class="deck-info">
        <div class="deck-name">
          ${escapeHtml(deck.name)}
          ${isCustom ? '<span class="custom-deck-badge">Custom</span>' : ""}
        </div>
        <div class="deck-desc">${escapeHtml(deck.description || "")}</div>
        <div class="deck-meta">${learned} of ${deck.cards.length} learned${fresh ? ` · ${fresh} new` : ""}</div>
        ${
          isCustom
            ? `<div class="deck-card-actions">
                 <button class="deck-card-btn" data-export="${deck.id}" type="button">📥 Export</button>
                 <button class="deck-card-btn delete" data-delete="${deck.id}" type="button">🗑️ Delete</button>
               </div>`
            : ""
        }
      </div>
      <div class="deck-side">
        ${
          due
            ? `<span class="chip due">${due} to review</span>`
            : fresh
              ? `<span class="chip">${fresh} new</span>`
              : `<span class="chip ok">caught up</span>`
        }
      </div>`;

    btn.addEventListener("click", (e) => {
      const exp = e.target.closest("[data-export]");
      if (exp) {
        e.stopPropagation();
        exportCustomDeck(deck);
        return;
      }
      const del = e.target.closest("[data-delete]");
      if (del) {
        e.stopPropagation();
        deleteCustomDeck(deck.id);
        return;
      }
      openDeck(deck);
    });

    els.deckList.appendChild(btn);
  }
}

function startSession(deck, { cram = false, topics = null, extraNew = 0 } = {}) {
  const cards = topics?.length ? deck.cards.filter((card) => topics.includes(card.t)) : deck.cards;
  let queue;
  if (cram) {
    queue = [...cards].sort(() => Math.random() - 0.5);
  } else {
    const now = Date.now();
    const due = [];
    const fresh = [];
    for (const card of cards) {
      const rec = recordFor(deck.id, card);
      if (!rec) fresh.push(card);
      else if (rec.due <= now) due.push(card);
    }
    due.sort((a, b) => recordFor(deck.id, a).due - recordFor(deck.id, b).due);
    const allowance = newAllowance() + extraNew;
    queue = [...due, ...fresh.slice(0, allowance)];
  }

  if (!queue.length) {
    renderDone("caught-up", deck);
    return;
  }

  session = { deck, queue, reviewed: 0, agains: 0 };
  show("study");
  nextCard();
}

function nextCard() {
  if (!session.queue.length) {
    renderDone("complete", session.deck);
    return;
  }

  const card = session.queue[0];
  const type = card.type || "classic";
  current = { card, revealed: false, type };

  els.cardTopic.textContent = card.t ?? "";
  els.cardTopic.classList.toggle("hidden", !card.t);
  els.gradeWrap.classList.add("hidden");
  els.checkAnswerBtn.classList.add("hidden");
  els.studyProgress.textContent = `${session.queue.length} left`;

  if (type === "recall" || type === "predict") {
    els.cardQ.innerHTML =
      fmt(card.q) +
      `<input id="recall-input" class="recall-input" type="text" autocomplete="off" spellcheck="false" placeholder="${
        type === "predict" ? "Type the exact output…" : "Type your answer…"
      }" aria-label="Your answer">`;
    els.cardA.innerHTML = "";
    els.cardA.classList.add("hidden");
    els.reveal.classList.add("hidden");
    els.checkAnswerBtn.classList.remove("hidden");
    const input = document.getElementById("recall-input");
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        checkTypedAnswer();
      }
    });
    setTimeout(() => input.focus(), 60);
  } else if (type === "parsons") {
    current.pool = shuffleIndexes(card.lines.length);
    current.order = [];
    els.cardQ.innerHTML = fmt(card.q);
    els.cardA.classList.remove("hidden");
    els.reveal.classList.add("hidden");
    els.checkAnswerBtn.classList.remove("hidden");
    renderParsons();
  } else {
    els.cardQ.innerHTML = fmt(card.q);
    els.cardA.innerHTML = fmt(card.a);
    els.cardA.classList.add("hidden");
    els.reveal.classList.remove("hidden");
  }

  els.card.classList.remove("pop");
  void els.card.offsetWidth;
  els.card.classList.add("pop");
  updateGradeHints();
}

function shuffleIndexes(n) {
  const a = Array.from({ length: n }, (_, i) => i);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  if (n > 1 && a.every((v, i) => v === i)) [a[0], a[1]] = [a[1], a[0]];
  return a;
}

function normAnswer(s) {
  return String(s).trim().toLowerCase().replace(/^`|`$/g, "").replace(/\s+/g, " ");
}

function answerAccepts(input, card) {
  const n = normAnswer(input);
  const compact = n.replace(/\s/g, "");
  return [card.a, ...(card.alt ?? [])].some((opt) => {
    const o = normAnswer(opt);
    return n === o || compact === o.replace(/\s/g, "");
  });
}

function checkTypedAnswer() {
  if (!current || current.revealed) return;
  const input = document.getElementById("recall-input");
  if (!input || !input.value.trim()) {
    input?.focus();
    return;
  }
  const ok = answerAccepts(input.value, current.card);
  current.revealed = true;
  input.disabled = true;
  els.cardA.innerHTML = ok
    ? `<span class="recall-verdict ok">✓ Correct!</span> ${fmt(current.card.a)}`
    : `<span class="recall-verdict bad">✗ Not quite.</span> ${fmt(current.card.a)}`;
  els.cardA.classList.remove("hidden");
  els.checkAnswerBtn.classList.add("hidden");
  els.gradeWrap.classList.remove("hidden");
  Juice.sound(ok ? "good" : "again");
  if (ok) Juice.confetti(40);
}

function renderParsons() {
  const card = current.card;
  const pool = current.pool
    .map((i) => `<button class="parsons-chip" type="button" data-pool="${i}"><code>${escapeHtml(card.lines[i])}</code></button>`)
    .join("");
  const placed = current.order
    .map((i, pos) => `<button class="parsons-chip placed" type="button" data-placed="${pos}"><code>${escapeHtml(card.lines[i])}</code></button>`)
    .join("");
  els.cardA.innerHTML = `
    <div class="parsons-answer">${placed || '<span class="parsons-empty">Tap lines below in order…</span>'}</div>
    <div class="parsons-pool">${pool}</div>
    <div class="parsons-msg" id="parsons-msg"></div>`;
  els.cardA.querySelectorAll("[data-pool]").forEach((b) =>
    b.addEventListener("click", () => {
      const i = +b.dataset.pool;
      current.pool = current.pool.filter((x) => x !== i);
      current.order.push(i);
      renderParsons();
    })
  );
  els.cardA.querySelectorAll("[data-placed]").forEach((b) =>
    b.addEventListener("click", () => {
      const pos = +b.dataset.placed;
      current.pool.push(current.order.splice(pos, 1)[0]);
      renderParsons();
    })
  );
}

function checkParsons() {
  if (!current || current.revealed) return;
  const card = current.card;
  const msg = document.getElementById("parsons-msg");
  if (current.order.length !== card.lines.length) {
    if (msg) msg.textContent = "Place every line first.";
    return;
  }
  if (current.order.every((v, i) => v === i)) {
    current.revealed = true;
    els.checkAnswerBtn.classList.add("hidden");
    els.gradeWrap.classList.remove("hidden");
    if (msg) msg.innerHTML = '<span class="recall-verdict ok">✓ Perfect order!</span>';
    Juice.sound("good");
    Juice.confetti(40);
  } else {
    if (msg)
      msg.innerHTML =
        '<span class="recall-verdict bad">✗ Not quite — rearrange, or</span> <button class="ghost sm" id="parsons-reveal" type="button">show answer</button>';
    Juice.sound("again");
    document.getElementById("parsons-reveal")?.addEventListener("click", () => {
      current.revealed = true;
      current.order = card.lines.map((_, i) => i);
      current.pool = [];
      renderParsons();
      const m = document.getElementById("parsons-msg");
      if (m) m.innerHTML = '<span class="recall-verdict bad">Here\'s the correct order.</span>';
      els.checkAnswerBtn.classList.add("hidden");
      els.gradeWrap.classList.remove("hidden");
    });
  }
}

function revealAnswer() {
  if (!current || current.revealed) return;
  current.revealed = true;
  Juice.sound("flip");
  Juice.flip(els.card, () => {
    els.cardA.classList.remove("hidden");
    els.reveal.classList.add("hidden");
    els.gradeWrap.classList.remove("hidden");
  });
}

// ---- FSRS-lite scheduling ----
// A lightweight stability/difficulty model (FSRS-style power forgetting curve)
// targeting ~90% recall. Each card carries stability (days) and difficulty (1-10).
const FSRS_RETENTION = 0.9;
const GRADE_NUM = { again: 1, hard: 2, good: 3, easy: 4 };

function fsrsSeed(rec) {
  if (typeof rec.stability !== "number") {
    rec.stability = Math.max(0.4, rec.interval || 1);
    rec.difficulty = Math.min(10, Math.max(1, 5 + (rec.lapses || 0) * 0.5));
  }
}

function fsrsNextStability(S, D, elapsed, gradeNum) {
  const R = Math.pow(1 + elapsed / (9 * S), -1); // retrievability now
  const gradeMult = gradeNum === 2 ? 0.6 : gradeNum === 4 ? 1.4 : 1.0;
  // Harder-won recall (low R) and lower difficulty grow stability more.
  const growth = Math.max(1.05, 1 + 0.15 * (10 - D) * (1.2 - R) * gradeMult);
  return S * growth;
}

function fsrsIntervalDays(S, gradeNum) {
  let days = Math.round(9 * S * (1 / FSRS_RETENTION - 1));
  if (gradeNum === 2) days = Math.max(1, Math.round(days * 0.7));
  if (gradeNum === 4) days = Math.max(days + 1, Math.round(days * 1.25));
  return Math.max(1, Math.min(days, 365));
}

function fsrsPreview(rec, kind) {
  const g = GRADE_NUM[kind] ?? 3;
  if (g === 1) return 0;
  const S = typeof rec?.stability === "number" ? rec.stability : Math.max(0.4, rec?.interval || 1);
  const D = typeof rec?.difficulty === "number" ? rec.difficulty : 5;
  return fsrsIntervalDays(fsrsNextStability(S, D, rec?.interval || 0, g), g);
}

function fsrsApply(rec, kind, now) {
  fsrsSeed(rec);
  const g = GRADE_NUM[kind] ?? 3;
  const S = rec.stability;
  const D = rec.difficulty;
  if (g === 1) {
    rec.lapses = (rec.lapses || 0) + 1;
    rec.difficulty = Math.min(10, D + 0.5);
    rec.stability = Math.max(0.3, S * 0.4);
    rec.reps = 0;
    rec.interval = 0;
    rec.due = now + 10 * 60 * 1000;
    return { relearn: true };
  }
  rec.difficulty = Math.min(10, Math.max(1, D + (3 - g) * 0.4));
  rec.stability = fsrsNextStability(S, D, rec.interval || 0, g);
  const days = fsrsIntervalDays(rec.stability, g);
  rec.reps = (rec.reps || 0) + 1;
  rec.interval = days;
  rec.due = now + days * DAY;
  return { relearn: false, days };
}

function grade(kind) {
  if (!current || !current.revealed || !session) return;
  if (!GRADE_NUM[kind]) kind = "good";
  Juice.sound(kind === "again" ? "again" : "good");

  const { deck } = session;
  const card = session.queue.shift();

  if (!store.progress[deck.id]) store.progress[deck.id] = {};
  const now = Date.now();
  const rec =
    store.progress[deck.id][card.q] ??
    (store.progress[deck.id][card.q] = { reps: 0, interval: 0, due: 0, firstSeen: now });

  const res = fsrsApply(rec, kind, now);
  if (res.relearn) {
    session.agains++;
    session.queue.splice(Math.min(REPEAT_AFTER_AGAIN, session.queue.length), 0, card);
  }
  rec.seenAt = now;

  if (store.stats.date !== todayKey()) store.stats = { date: todayKey(), reviewed: 0 };
  store.stats.reviewed++;
  session.reviewed++;
  addXp(kind === "again" ? 2 : kind === "hard" ? 6 : kind === "easy" ? 12 : 10);

  current = null;
  nextCard();
}

function updateGradeHints() {
  if (!current || !session || !els.gradeWrap) return;
  const rec = store.progress?.[session.deck.id]?.[current.card.q];
  const fmtDays = (d) => (d <= 0 ? "<10m" : d === 1 ? "1d" : d < 30 ? `${d}d` : d < 365 ? `${Math.round(d / 30)}mo` : "1y");
  for (const kind of ["again", "hard", "good", "easy"]) {
    const span = els.gradeWrap.querySelector(`[data-hint="${kind}"]`);
    if (span) span.textContent = fmtDays(fsrsPreview(rec, kind));
  }
}

function renderDone(kind, deck) {
  show("done");
  current = null;

  const title = document.getElementById("done-title");
  const text = document.getElementById("done-text");
  const actions = document.getElementById("done-actions");
  actions.innerHTML = "";

  if (kind === "complete") {
    const { reviewed, agains } = session;
    title.textContent = "Session complete.";
    text.textContent =
      `Reviewed ${reviewed} card${reviewed === 1 ? "" : "s"}` +
      (agains ? ` · ${agains} coming back later.` : ".");
    actions.appendChild(makeBtn("Back to decks", "primary", renderHome));
    session = null;
    Juice.confetti();
    Juice.sound("chest");
  } else {
    const capped = newCount(deck) > 0 && newAllowance() === 0;
    title.textContent = "All caught up.";
    text.textContent = capped
      ? `No cards due in ${deck.name}. Today's ${NEW_PER_DAY} new cards are already introduced.`
      : `No cards due in ${deck.name} right now.`;
    if (capped) {
      actions.appendChild(makeBtn("Study 10 more", "primary", () => startSession(deck, { extraNew: 10 })));
      actions.appendChild(makeBtn("Review all cards", "secondary", () => startSession(deck, { cram: true })));
    } else {
      actions.appendChild(makeBtn("Review all cards", "primary", () => startSession(deck, { cram: true })));
    }
    actions.appendChild(makeBtn("Back to decks", "secondary", renderHome));
  }
}

function makeBtn(label, cls, onClick) {
  const btn = document.createElement("button");
  btn.className = cls;
  btn.textContent = label;
  btn.addEventListener("click", onClick);
  return btn;
}

/* ---------- Deck detail ---------- */

function openDeck(deck) {
  show("deck");
  renderDeckDetail(deck);
}

function renderDeckDetail(deck) {
  show("deck");
  const total = deck.cards.length;
  const learned = learnedCount(deck);
  const due = reviewedDueCount(deck);
  const fresh = newCount(deck);
  const allowance = newAllowance();
  const newToday = newTodayCount();
  const takeNew = Math.min(fresh, allowance);
  const planned = due + takeNew;
  const mastery = total ? Math.round((learned / total) * 100) : 0;

  const parts = [];
  if (due) parts.push(`${due} due`);
  if (takeNew) parts.push(`${takeNew} new`);
  const studyLabel = parts.length ? `Study ${parts.join(" + ")}` : "Nothing to study";

  const capHtml =
    fresh === 0
      ? "Every card in this deck has been introduced."
      : allowance === 0
        ? `Daily new-card limit reached (${newToday} / ${NEW_PER_DAY}). <button class="deck-more" type="button" id="deck-extra">Study 10 more</button>`
        : `New cards today: ${newToday} / ${NEW_PER_DAY}. ${allowance} left under today's limit.`;

  const topics = [...new Set(deck.cards.map((card) => card.t).filter(Boolean))];
  const topicRows = topics
    .map((topic) => {
      const cards = deck.cards.filter((card) => card.t === topic);
      const known = cards.filter((card) => (recordFor(deck.id, card)?.reps ?? 0) > 0).length;
      const topicDue = cards.filter((card) => {
        const rec = recordFor(deck.id, card);
        return rec && rec.due <= Date.now();
      }).length;
      const pct = Math.round((known / cards.length) * 100);
      return `
        <button class="topic-row" type="button" data-topic="${escapeHtml(topic)}">
          <span class="topic-name">${escapeHtml(topic)}</span>
          <span class="topic-track"><i style="width:${pct}%"></i></span>
          <span class="topic-count">${known}/${cards.length}</span>
          <span class="topic-due">${topicDue ? `${topicDue} due` : ""}</span>
        </button>`;
    })
    .join("");

  els.deckDetail.innerHTML = `
    <div class="study-bar">
      <button class="ghost" id="deck-back" type="button">&larr; Decks</button>
      <span class="deck-today">${newToday} / ${NEW_PER_DAY} new today</span>
    </div>
    <h1 class="deck-title">${escapeHtml(deck.name)}</h1>
    <p class="deck-lede">${escapeHtml(deck.description)}</p>
    <div class="deck-stats">
      <div class="deck-stat"><span class="deck-stat-value">${learned}/${total}</span><span class="deck-stat-label">learned</span></div>
      <div class="deck-stat"><span class="deck-stat-value">${due}</span><span class="deck-stat-label">due now</span></div>
      <div class="deck-stat"><span class="deck-stat-value">${fresh}</span><span class="deck-stat-label">new</span></div>
      <div class="deck-stat"><span class="deck-stat-value">${mastery}%</span><span class="deck-stat-label">mastery</span></div>
    </div>
    <div class="deck-progress" aria-hidden="true"><i style="width:${mastery}%"></i></div>
    <div class="deck-actions">
      <button class="primary" id="deck-study" type="button" ${planned ? "" : "disabled"}>${studyLabel}</button>
      <button class="secondary" id="deck-cram" type="button">Cram all ${total}</button>
    </div>
    <p class="deck-cap">${capHtml}</p>
    ${topics.length ? `<h3 class="deck-section">Topics</h3><div class="deck-topics">${topicRows}</div>` : ""}
    <div class="deck-footer-actions">
      <button class="ghost" id="deck-browse" type="button">Browse all cards</button>
      <button class="ghost deck-reset" id="deck-reset" type="button">Reset deck</button>
    </div>`;

  document.getElementById("deck-back").addEventListener("click", renderHome);
  document.getElementById("deck-study").addEventListener("click", () => startSession(deck));
  document.getElementById("deck-cram").addEventListener("click", () => startSession(deck, { cram: true }));
  document.getElementById("deck-browse").addEventListener("click", () => renderDeckBrowse(deck));
  document.getElementById("deck-reset").addEventListener("click", () => resetDeck(deck));
  document.getElementById("deck-extra")?.addEventListener("click", () => startSession(deck, { extraNew: 10 }));
  els.deckDetail.querySelectorAll("[data-topic]").forEach((btn) => {
    btn.addEventListener("click", () => startSession(deck, { topics: [btn.dataset.topic] }));
  });
}

function renderDeckBrowse(deck) {
  show("deck");
  const now = Date.now();
  const rows = deck.cards
    .map((card) => {
      const rec = recordFor(deck.id, card);
      const status = !rec
        ? { label: "new", cls: "" }
        : rec.due <= now
          ? { label: "due", cls: "due" }
          : rec.reps > 0
            ? { label: "learned", cls: "ok" }
            : { label: "learning", cls: "" };
      return `
        <details class="browse-item">
          <summary>
            <span class="browse-topic">${escapeHtml(card.t ?? "General")}</span>
            <span class="browse-q">${fmt(card.q)}</span>
            <span class="chip ${status.cls}">${status.label}</span>
          </summary>
          <div class="browse-a">${fmt(card.a)}</div>
        </details>`;
    })
    .join("");

  els.deckDetail.innerHTML = `
    <div class="study-bar">
      <button class="ghost" id="browse-back" type="button">&larr; ${escapeHtml(deck.name)}</button>
      <span class="deck-today">${deck.cards.length} cards</span>
    </div>
    <h1 class="deck-title">${escapeHtml(deck.name)} cards</h1>
    <p class="deck-lede">Tap a card to reveal the answer. Status comes from your saved progress.</p>
    <div class="card-browser">${rows}</div>`;

  document.getElementById("browse-back").addEventListener("click", () => renderDeckDetail(deck));
}

function resetDeck(deck) {
  const ok = window.confirm(
    `Reset all progress in "${deck.name}"? Learned counts and due dates are cleared. XP and streak stay.`
  );
  if (!ok) return;
  delete store.progress[deck.id];
  saveStore();
  renderDeckDetail(deck);
}

/* ---------- Playground ---------- */

const CODE_KEY = "pycards.code.v1";
const LANG_LABELS = { html: "HTML", js: "JavaScript", python: "Python", java: "Java" };

const STARTERS = {
  html: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 24px; }
    h1 { color: #3776ab; margin-top: 0; }
    button { padding: 8px 14px; border: 0; border-radius: 8px; background: #3776ab; color: white; cursor: pointer; }
  </style>
</head>
<body>
  <h1>Hello, HTML</h1>
  <p>This is a live preview. Edit the code and run it again.</p>
  <button onclick="document.querySelector('p').textContent = 'Button clicked!'">Click me</button>
</body>
</html>`,
  js: `// Ctrl+Enter to run
const nums = [1, 2, 3, 4, 5];
const squares = nums.map((n) => n * n);
console.log("squares:", squares);
console.log("sum:", squares.reduce((a, b) => a + b, 0));

const student = { name: "Sreed", subject: "Python" };
console.log("student:", student);`,
  python: `# Ctrl+Enter to run
def factorial(n):
    return 1 if n <= 1 else n * factorial(n - 1)

for n in range(1, 6):
    print(f"{n}! = {factorial(n)}")

print([x * x for x in range(10)])`,
  java: `public class Main {
    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4, 5};
        int sum = 0;
        for (int n : nums) sum += n;
        System.out.println("Sum: " + sum);
    }
}`,
};

function loadCodeState() {
  const base = { active: "html", ...STARTERS };
  try {
    const raw = localStorage.getItem(CODE_KEY);
    if (!raw) return base;
    const saved = JSON.parse(raw);
    return { ...base, ...saved, active: STARTERS[saved.active] ? saved.active : "html" };
  } catch {
    return base;
  }
}

let codeState = loadCodeState();
let activeLang = codeState.active;
let codeBound = false;
let codeSaveTimer = null;
let codeExercise = null;

function exerciseFor(project) {
  return project?.tests?.length
    ? { id: project.id, title: project.title, starter: project.starter, tests: project.tests }
    : null;
}

function openCode() {
  show("code");
  if (!codeBound) initCode();
  els.editor.value = codeState[activeLang];
  updateCheckButton();
}

function openCodeWith(source, lang = "python", project = null) {
  if (!STARTERS[lang]) return;
  const existing = codeState[lang] ?? STARTERS[lang];
  if (existing !== STARTERS[lang] && existing !== source) {
    const label = LANG_LABELS[lang] ?? lang;
    if (!window.confirm(`Replace your ${label} playground code with this starter?`)) return;
  }
  codeState[lang] = source;
  codeState.active = lang;
  activeLang = lang;
  codeExercise = lang === "python" ? exerciseFor(project) : null;
  saveCodeState(true);
  show("code");
  if (!codeBound) initCode();
  els.editor.value = source;
  updateLangTabs();
  updateCheckButton();
  resetOutput();
  if (codeExercise) {
    els.outputText.textContent =
      `Exercise: ${codeExercise.title} — ${codeExercise.tests.length} checks. ` +
      "Finish the TODO steps, then press Check.";
  }
}

function updateCheckButton() {
  const active = !!codeExercise && activeLang === "python";
  els.checkBtn.classList.toggle("hidden", !active);
  if (!active) return;
  els.checkBtn.textContent = `Check · ${codeExercise.tests.length}`;
  els.checkBtn.title = `Run the ${codeExercise.tests.length} automatic checks for ${codeExercise.title}`;
}

function initCode() {
  codeBound = true;

  els.langTabs.addEventListener("click", (e) => {
    const tab = e.target.closest(".lang-tab");
    if (tab) switchLang(tab.dataset.lang);
  });

  els.editor.addEventListener("input", () => {
    codeState[activeLang] = els.editor.value;
    saveCodeState();
  });

  els.editor.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const el = els.editor;
      const start = el.selectionStart;
      el.value = el.value.slice(0, start) + "  " + el.value.slice(el.selectionEnd);
      el.selectionStart = el.selectionEnd = start + 2;
      codeState[activeLang] = el.value;
      saveCodeState();
    }
  });

  els.runBtn.addEventListener("click", runCode);
  els.resetBtn.addEventListener("click", resetSnippet);
  els.checkBtn.addEventListener("click", checkExercise);
  els.editor.value = codeState[activeLang];
  updateLangTabs();
}

function saveCodeState(saveNow = false) {
  const doSave = () => {
    try {
      localStorage.setItem(CODE_KEY, JSON.stringify(codeState));
    } catch {
      // storage unavailable — edits stay in memory
    }
  };
  clearTimeout(codeSaveTimer);
  if (saveNow) doSave();
  else codeSaveTimer = setTimeout(doSave, 250);
}

function switchLang(lang) {
  if (!STARTERS[lang] || lang === activeLang) return;
  cancelJsRun();
  codeState[activeLang] = els.editor.value;
  activeLang = lang;
  codeState.active = lang;
  codeExercise = null;
  saveCodeState(true);
  els.editor.value = codeState[lang];
  updateLangTabs();
  updateCheckButton();
  resetOutput();
}

function updateLangTabs() {
  els.langTabs.querySelectorAll(".lang-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.lang === activeLang);
  });
}

function resetSnippet() {
  const graded = codeExercise && activeLang === "python" ? codeExercise.starter : null;
  if (!window.confirm(`Reset the ${LANG_LABELS[activeLang]} snippet to the starter code?`)) return;
  codeState[activeLang] = graded ?? STARTERS[activeLang];
  els.editor.value = codeState[activeLang];
  saveCodeState(true);
  resetOutput();
  if (codeExercise) {
    els.outputText.textContent =
      `Exercise: ${codeExercise.title} — ${codeExercise.tests.length} checks. ` +
      "Finish the TODO steps, then press Check.";
  }
}

function setStatus(text) {
  els.runStatus.textContent = text;
}

function resetOutput() {
  els.outputText.textContent = "Run the code to see output here.";
  els.outputText.classList.remove("hidden");
  els.testResults.classList.add("hidden");
  els.testResults.innerHTML = "";
  els.preview.classList.add("hidden");
  els.preview.removeAttribute("src");
  els.preview.removeAttribute("srcdoc");
  setStatus("");
}

function beginRun() {
  els.outputText.textContent = "";
  els.outputText.classList.remove("hidden");
  els.testResults.classList.add("hidden");
  els.testResults.innerHTML = "";
  els.preview.classList.add("hidden");
  els.preview.removeAttribute("src");
  els.preview.removeAttribute("srcdoc");
  setStatus("Running…");
}

function appendLine(text, cls) {
  const span = document.createElement("span");
  if (cls) span.className = cls;
  const value = String(text);
  span.textContent = value.endsWith("\n") ? value : value + "\n";
  els.outputText.appendChild(span);
  els.outputText.scrollTop = els.outputText.scrollHeight;
}

async function runCode() {
  const lang = activeLang;
  const code = els.editor.value;
  codeState[lang] = code;
  saveCodeState(true);

  beginRun();
  els.runBtn.disabled = true;
  try {
    if (lang === "html") {
      els.outputText.classList.add("hidden");
      els.preview.classList.remove("hidden");
      // Render through the sandboxed preview.html receiver (relaxed CSP on
      // that file only) so inline scripts in user HTML actually run.
      const html = code;
      els.preview.addEventListener(
        "load",
        () => els.preview.contentWindow.postMessage({ type: "preview", html }, "*"),
        { once: true }
      );
      els.preview.src = `preview.html?run=${++previewRun}`;
      setStatus("Preview");
    } else if (lang === "js") {
      runJs(code);
    } else if (lang === "python") {
      await runPython(code);
    } else {
      await runJava(code);
    }
  } catch (err) {
    appendLine(err?.message ?? String(err), "out-err");
    setStatus("Error");
  } finally {
    els.runBtn.disabled = false;
  }
}

let jsRun = null;
let jsToken = 0;
let previewRun = 0;
const JS_TIMEOUT_MS = 30000;

function cancelJsRun() {
  if (!jsRun) return;
  window.removeEventListener("message", jsRun.handler);
  if (jsRun.timeout) clearTimeout(jsRun.timeout);
  jsRun.iframe.remove();
  jsRun = null;
}

function runJs(code) {
  cancelJsRun();

  const token = ++jsToken;
  const started = performance.now();
  const iframe = document.createElement("iframe");
  // Sandbox: allow scripts only — no same-origin access, no popups, no forms.
  // The runner lives in an external 'self' script (js-runner.js) so the site
  // CSP can stay strict; user code is handed over via postMessage.
  iframe.sandbox = "allow-scripts";
  iframe.style.display = "none";
  iframe.title = "JS playground sandbox";

  const handler = (e) => {
    // Only accept messages from our runner iframe. A sandboxed iframe without
    // allow-same-origin has an opaque origin, so e.origin is "null" — the
    // source check plus the per-run token are the security boundary.
    if (e.source !== iframe.contentWindow) return;
    if (!e.data || e.data.__runner !== token) return;
    const { type, text } = e.data;
    if (type === "done") {
      if (!els.outputText.childElementCount) appendLine("(no output)", "out-muted");
      setStatus(`finished in ${Math.round(performance.now() - started)} ms`);
      cancelJsRun();
    } else if (type === "error") {
      appendLine(text, "out-err");
    } else if (type === "warn") {
      appendLine(text, "out-warn");
    } else {
      appendLine(text);
    }
  };

  const timeout = setTimeout(() => {
    appendLine("Execution timed out (30 s) — stopped.", "out-err");
    setStatus("Timed out");
    cancelJsRun();
    els.runBtn.disabled = false;
  }, JS_TIMEOUT_MS);

  window.addEventListener("message", handler);
  jsRun = { iframe, handler, timeout };

  iframe.addEventListener(
    "load",
    () => {
      // "*" is required: the sandboxed recipient has an opaque origin, which
      // never matches a specific targetOrigin. Only our iframe can receive it.
      iframe.contentWindow.postMessage(
        { type: "run", token, code, targetOrigin: window.location.origin },
        "*"
      );
    },
    { once: true }
  );
  iframe.src = "js-runner.html";
  document.body.appendChild(iframe);
}

let pyodidePromise = null;

function loadPyodideRuntime() {
  if (!pyodidePromise) {
    pyodidePromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      // Without a timeout a blocked/failed WASM compile hangs the UI forever
      // with the Run button disabled.
      const timer = setTimeout(() => {
        reject(new Error("Python runtime took too long to load — check your connection and run again."));
      }, 90000);
      const fail = (err) => {
        clearTimeout(timer);
        reject(err);
      };
      script.src = "https://cdn.jsdelivr.net/pyodide/v0.29.5/full/pyodide.js";
      script.onload = () => {
        try {
          window.loadPyodide().then(
            (py) => {
              clearTimeout(timer);
              resolve(py);
            },
            fail
          );
        } catch (err) {
          fail(err);
        }
      };
      script.onerror = () => fail(new Error("Could not load the Python runtime — check your internet connection."));
      document.head.appendChild(script);
    });
    pyodidePromise.catch(() => {
      pyodidePromise = null;
    });
  }
  return pyodidePromise;
}

async function runPython(code) {
  setStatus("Loading Python runtime… (first run only)");
  const py = await loadPyodideRuntime();
  setStatus("Running…");
  const started = performance.now();
  py.setStdout({ batched: (text) => appendLine(text) });
  py.setStderr({ batched: (text) => appendLine(text, "out-err") });
  try {
    await py.runPythonAsync(code);
    if (!els.outputText.childElementCount) appendLine("(no output)", "out-muted");
    setStatus(`finished in ${Math.round(performance.now() - started)} ms`);
  } catch (err) {
    appendLine(err?.message ?? String(err), "out-err");
    setStatus("Error");
  }
}

const CHECK_MARKER = "__PYCARDS_RESULTS__";

async function runExerciseChecks(code, tests) {
  const py = await loadPyodideRuntime();
  let output = "";
  py.setStdout({ batched: (text) => (output += text) });
  py.setStderr({ batched: (text) => (output += text) });
  py.globals.set("__pycards_user_code", code);
  py.globals.set("__pycards_checks", JSON.stringify(tests));

  await py.runPythonAsync(`
import json as _json
_checks = _json.loads(__pycards_checks)
_namespace = {"__name__": "__main__"}
_load_error = ""
try:
    exec(compile(__pycards_user_code, "<your code>", "exec"), _namespace)
except BaseException as _exc:
    _load_error = type(_exc).__name__ + ": " + str(_exc)

_results = []
for _check in _checks:
    if _load_error:
        _results.append({"name": _check["name"], "ok": False, "err": "Skipped — your code did not load."})
        continue
    try:
        exec(_check["code"], _namespace)
        _results.append({"name": _check["name"], "ok": True, "err": ""})
    except AssertionError as _exc:
        _results.append({"name": _check["name"], "ok": False, "err": str(_exc) or "assertion failed"})
    except BaseException as _exc:
        _results.append({"name": _check["name"], "ok": False, "err": type(_exc).__name__ + ": " + str(_exc)})

print(${JSON.stringify(CHECK_MARKER)} + _json.dumps({"error": _load_error, "results": _results}))
`);

  const at = output.lastIndexOf(CHECK_MARKER);
  if (at < 0) throw new Error("The checker produced no result — try running the code once with Run.");
  const data = JSON.parse(output.slice(at + CHECK_MARKER.length).trim());
  return { ...data, output: output.slice(0, at).trim() };
}

function checkResultsHtml(error, results, ms) {
  if (error) {
    return (
      `<div class="test-summary bad">Your code did not run</div>` +
      `<div class="test-error">${escapeHtml(error)}</div>`
    );
  }

  const passed = results.filter((result) => result.ok).length;
  const took = ms < 1000 ? `${Math.max(1, Math.round(ms))} ms` : `${(ms / 1000).toFixed(1)} s`;
  const summary =
    `<div class="test-summary ${passed === results.length ? "ok" : "bad"}">` +
    `${passed} of ${results.length} checks passed · ${took}</div>`;
  const rows = results
    .map(
      (result, index) =>
        `<div class="test-row ${result.ok ? "ok" : "bad"}">` +
        `<span class="test-mark" aria-hidden="true">${result.ok ? "✓" : "✗"}</span>` +
        `<div class="test-body"><div class="test-name">${index + 1}. ${escapeHtml(result.name)}</div>` +
        `${result.ok ? "" : `<div class="test-err">${escapeHtml(result.err)}</div>`}</div></div>`
    )
    .join("");
  return summary + rows;
}

function renderCheckResults(error, results, ms) {
  const box = els.testResults;
  box.classList.remove("hidden");
  box.innerHTML = checkResultsHtml(error, results, ms);
}

function recordProjectChecks(projectId, passed, total) {
  const project = window.PROJECTS.find((p) => p.id === projectId);
  if (!project) return;
  const rec = projectRecord(project);
  const wasFull = rec.checks?.total > 0 && rec.checks.passed === rec.checks.total;
  const firstFull = passed === total && !wasFull;
  rec.checks = { passed, total, at: Date.now() };
  if (passed === total) {
    rec.steps = project.steps.map((_, index) => index);
    rec.at = Date.now();
  }
  saveStore();
  if (firstFull) addXp(100);
}

async function checkExercise() {
  if (!codeExercise || activeLang !== "python") return;
  const code = els.editor.value;
  const exercise = codeExercise;
  codeState.python = code;
  saveCodeState(true);

  beginRun();
  els.checkBtn.disabled = true;
  els.runBtn.disabled = true;
  setStatus("Loading Python runtime… (first run only)");

  const started = performance.now();
  try {
    await loadPyodideRuntime();
    setStatus(`Checking ${exercise.tests.length} checks…`);
    const { error, results, output } = await runExerciseChecks(code, exercise.tests);
    els.outputText.textContent = output || "(no output)";
    renderCheckResults(error, results, performance.now() - started);
    const passed = results.filter((result) => result.ok).length;
    setStatus(`${passed}/${results.length} checks passed`);
    recordProjectChecks(exercise.id, passed, results.length);
  } catch (err) {
    els.outputText.textContent = err?.message ?? String(err);
    els.testResults.classList.add("hidden");
    setStatus("Error");
  } finally {
    els.checkBtn.disabled = false;
    els.runBtn.disabled = false;
    updateCheckButton();
  }
}

let judge0JavaPromise = null;

async function judge0JavaId() {
  if (!judge0JavaPromise) {
    judge0JavaPromise = (async () => {
      try {
        const res = await fetch("https://ce.judge0.com/languages");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const langs = await res.json();
        const candidates = langs
          .filter((l) => /^Java \((JDK|OpenJDK)/i.test(l.name))
          .map((l) => ({ id: l.id, version: parseFloat((l.name.match(/(\d+(?:\.\d+)*)/) || [0, "0"])[1]) }))
          .sort((a, b) => b.version - a.version);
        return candidates.length ? candidates[0].id : 91;
      } catch {
        return 91;
      }
    })();
  }
  return judge0JavaPromise;
}

async function runJava(code) {
  const languageId = await judge0JavaId();
  setStatus("Compiling & running…");
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 30000);
  try {
    const res = await fetch("https://ce.judge0.com/submissions?base64_encoded=false&wait=true", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_code: code, language_id: languageId, stdin: "" }),
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`Judge0 returned HTTP ${res.status}`);
    const data = await res.json();
    if (data.compile_output) appendLine(data.compile_output, "out-err");
    if (data.stdout) appendLine(data.stdout);
    if (data.stderr) appendLine(data.stderr, "out-err");
    if (!data.compile_output && !data.stdout && !data.stderr) {
      if (data.message) appendLine(data.message, "out-err");
      else if (data.status && data.status.id !== 3) appendLine(data.status.description || "Execution failed", "out-err");
      else appendLine("(no output)", "out-muted");
    }
    if (data.status) {
      setStatus(data.time ? `${data.status.description} · ${data.time} s` : data.status.description);
    } else {
      setStatus("Finished");
    }
  } catch (err) {
    appendLine(
      err.name === "AbortError" ? "Request timed out — the public Java runner may be busy. Try again." : err.message,
      "out-err"
    );
    setStatus("Error");
  } finally {
    clearTimeout(timer);
  }
}

/* ---------- Memory (learner profile + notes) ---------- */

function weakCards(limit = 4) {
  const deck = window.DECKS?.[0];
  if (!deck) return [];
  return Object.entries(store.progress[deck.id] ?? {})
    .map(([q, rec]) => {
      const card = deck.cards.find((c) => c.q === q);
      return card && rec.lapses > 0 ? { topic: card.t, q, lapses: rec.lapses } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.lapses - a.lapses)
    .slice(0, limit);
}

function recentMisses(limit = 3) {
  return (store.misses ?? []).slice(0, limit).map((miss) => {
    const lesson = window.LESSONS.find((l) => l.id === miss.lessonId);
    const course = (window.COURSES ?? []).find((c) => `course:${c.id}` === miss.lessonId);
    const title = lesson?.title ?? course?.title;
    return title ? `${miss.q} (${title})` : miss.q;
  });
}

function memorySnapshot() {
  const deck = window.DECKS?.[0];
  if (!deck) return [];

  const lessonsDone = window.LESSONS.filter((l) => store.lessons[l.id]?.done).length;
  const courses = window.COURSES ?? [];
  const coursesDone = courses.filter((c) => store.courses?.[c.id]?.done).length;
  const ghRepos = window.GITHUB_REPOS ?? [];
  const ghDone = ghRepos.filter((r) => store.github?.[r.id]?.done).length;
  const lines = [
    `Progress: ${lessonsDone} of ${window.LESSONS.length} lessons complete, ` +
      `${learnedCount(deck)} of ${deck.cards.length} cards learned, ${dueCount(deck)} due today` +
      (courses.length ? `, ${coursesDone} of ${courses.length} video courses finished` : "") +
      (ghRepos.length ? `, ${ghDone} of ${ghRepos.length} GitHub repos explored.` : "."),
  ];

  const weak = weakCards(3);
  if (weak.length) {
    lines.push(`Keeps missing: ${weak.map((w) => `"${w.q}" (${w.topic}, ${w.lapses}x)`).join("; ")}`);
  }

  const misses = recentMisses(3);
  if (misses.length) lines.push(`Recent quiz misses: ${misses.join("; ")}`);

  const notes = store.notes ?? [];
  if (notes.length) lines.push(`Learner notes: ${notes.slice(-8).map((n) => n.text).join(" | ")}`);

  return lines;
}

function memoryContext() {
  const snapshot = memorySnapshot();
  if (!snapshot.length) return "";
  return (
    "\n\nWhat this app already knows about the learner (kept in their browser — use it to make answers concrete, never recite it back):\n" +
    snapshot.map((line) => `- ${line}`).join("\n")
  );
}

function memoryOpen() {
  return !els.memoryCard.classList.contains("hidden");
}

function toggleMemory(force) {
  const open = force ?? !memoryOpen();
  els.memoryCard.classList.toggle("hidden", !open);
  if (open) {
    renderMemory();
    els.memoryInput.focus();
  }
}

function renderMemory() {
  const snapshot = memorySnapshot();
  els.memoryKnown.innerHTML = snapshot.length
    ? snapshot.map((line) => `<div class="memory-line">${escapeHtml(line)}</div>`).join("")
    : `<p class="memory-empty">Nothing yet — grade some cards or finish a lesson and this fills in.</p>`;

  const notes = store.notes ?? [];
  els.memoryNotes.innerHTML = notes.length
    ? notes
        .map(
          (note, index) =>
            `<div class="memory-note"><span>${escapeHtml(note.text)}</span>` +
            `<button class="memory-del" type="button" data-i="${index}" aria-label="Delete note">&times;</button></div>`
        )
        .join("")
    : `<p class="memory-empty">No notes yet. Add one above — e.g. "I'm preparing for an ML internship interview".</p>`;

  els.memoryNotes.querySelectorAll(".memory-del").forEach((btn) => {
    btn.addEventListener("click", () => {
      store.notes.splice(Number(btn.dataset.i), 1);
      saveStore();
      renderMemory();
    });
  });
}

function addMemoryNote(text) {
  const clean = text.replace(/\s+/g, " ").trim().slice(0, 200);
  if (!clean) return;
  store.notes = [...(store.notes ?? []), { text: clean, at: Date.now() }].slice(-20);
  saveStore();
  els.memoryInput.value = "";
  renderMemory();
}

/* ---------- Chat (Ollama local · OpenRouter online) ---------- */

const CHAT_KEY = "pycards.chat.v1";
const OLLAMA_PROXY = "/api/ollama";
const OLLAMA_DIRECT = "http://127.0.0.1:11434";
let chatEndpoint = OLLAMA_PROXY;

async function ollamaFetch(path, options = {}) {
  try {
    const res = await fetch(`${chatEndpoint}${path}`, options);
    if (res.status === 404 || res.status === 405 || res.status === 501) {
      throw new Error(`HTTP ${res.status}`);
    }
    return res;
  } catch (err) {
    if (err.name === "AbortError" || chatEndpoint === OLLAMA_DIRECT) throw err;
    chatEndpoint = OLLAMA_DIRECT;
    return fetch(`${chatEndpoint}${path}`, options);
  }
}
const OPENROUTER_BASE = "https://openrouter.ai/api/v1";
const NIM_PROXY = "/api/nim";
const CHAT_SYSTEM_PROMPT = [
  "You are a personal Python coach inside a study app. The learner is a BCA graduate in India learning programming from scratch and working toward AI/ML. Teach like a patient one-on-one mentor in a great tutoring session: warm, specific, and always hands-on.",
  "",
  "How a session runs:",
  "- If the learner's first message is a greeting or doesn't say where they are, offer this numbered menu in one question: 1) variables & data types, 2) if/elif/else, 3) lists & dicts, 4) functions & modules, 5) something advanced. If they already named an area, start there and never show the menu again.",
  "- Teach one small idea per reply: a two-line explanation, one short example in a ```python block, then one challenge the learner must type themselves.",
  "- When asked for a warm-up, ask one or two quick questions about that area only — no new theory until the learner answers.",
  "- When the learner sends code, review it first: name what works, then list each bug with its reason (missing colon, parenthesis or quote, = vs ==, reserved or mismatched variable name, wrong index, wrong order of subtraction), show the corrected code, then give a slightly harder task.",
  "- Never hand over a full solution to a challenge the learner has not attempted. Give a skeleton, the first half, or a hint.",
  "- When asked for a quiz or to move on, give a scenario project or a coding quiz — not multiple choice. Wait for the attempt, then grade it and advance.",
  "- End every reply with exactly one question or task.",
  "",
  "Format: **bold** labels, numbered or dashed lists, inline `code`, fenced ```python blocks. Keep replies under about 200 words unless asked for more. Never use markdown headings bigger than ###.",
  "",
  "Track this ladder: variables & types → input & type casting → f-strings → if/elif/else → nested logic → lists → dicts → loops → functions → files → classes. Use the app memory below to choose what to review next, but never recite the memory back. For other languages or topics, help briefly, then offer to return to Python.",
].join("\n");

function chatSystemPrompt() {
  const name = profile?.name ? `The learner's name is ${profile.name}. ` : "";
  return name + CHAT_SYSTEM_PROMPT + memoryContext();
}

const PROVIDERS = ["gemini", "groq", "ollama", "openrouter", "nvidia"];

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

// Curated from the models this Groq key actually has access to (Nov 2026).
const GROQ_MODELS = [
  { name: "openai/gpt-oss-120b", label: "GPT-OSS 120B · strongest (Jarvis default)" },
  { name: "openai/gpt-oss-20b", label: "GPT-OSS 20B · quick" },
  { name: "qwen/qwen3.8-27b", label: "Qwen 3.8 27B · multilingual" },
  { name: "allam-2-7b", label: "Allam 2 7B · Arabic" },
];

const GEMINI_MODELS = [
  { name: "gemini-3.5-flash", label: "Gemini 3.5 Flash · Jarvis default" },
  { name: "gemini-3.5-flash-lite", label: "Gemini 3.5 Flash Lite · most reliable" },
  { name: "gemini-3.8-flash", label: "Gemini 3.8 Flash" },
  { name: "gemini-3.1-pro-preview", label: "Gemini 3.1 Pro · preview" },
  { name: "gemini-3.1-flash-lite", label: "Gemini 3.1 Flash Lite" },
];

const DEFAULT_GEMINI_MODEL = "gemini-3.5-flash";
const DEFAULT_GROQ_MODEL = "openai/gpt-oss-120b";

function emptyChatState() {
  const isLocal = typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
  return {
    provider: isLocal ? "ollama" : "gemini",
    model: "",
    orModel: "",
    nimModel: "",
    geminiModel: DEFAULT_GEMINI_MODEL,
    groqModel: DEFAULT_GROQ_MODEL,
    keys: { gemini: "", groq: "", openrouter: "" },
    apiKey: "",
    messages: [],
  };
}

function loadChatState() {
  try {
    const raw = localStorage.getItem(CHAT_KEY);
    if (!raw) return emptyChatState();
    const saved = JSON.parse(raw);
    const isLocal = typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
    const provider = PROVIDERS.includes(saved.provider) ? saved.provider : isLocal ? "ollama" : "gemini";
    const keys = {
      gemini: typeof saved.keys?.gemini === "string" ? saved.keys.gemini : "",
      groq: typeof saved.keys?.groq === "string" ? saved.keys.groq : "",
      openrouter: typeof saved.keys?.openrouter === "string" ? saved.keys.openrouter : "",
    };
    // Migrate the old single-key format to the active provider's slot.
    if (saved.apiKey && !keys[provider]) keys[provider] = saved.apiKey;
    return {
      provider,
      model: typeof saved.model === "string" ? saved.model : "",
      orModel: typeof saved.orModel === "string" ? saved.orModel : "",
      nimModel: typeof saved.nimModel === "string" ? saved.nimModel : "",
      geminiModel: typeof saved.geminiModel === "string" ? saved.geminiModel : DEFAULT_GEMINI_MODEL,
      groqModel: typeof saved.groqModel === "string" ? saved.groqModel : DEFAULT_GROQ_MODEL,
      keys,
      apiKey: keys[provider] ?? "",
      messages: Array.isArray(saved.messages)
        ? saved.messages
            .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
            .slice(-80)
        : [],
    };
  } catch {
    return emptyChatState();
  }
}

let chatState = loadChatState();
let ollamaModels = [];
let orModels = [];
let nimModels = [];
let orListError = "";
let nimListError = "";
let chatBound = false;
let chatBusy = false;
let chatAbort = null;

function saveChatState() {
  try {
    localStorage.setItem(
      CHAT_KEY,
      JSON.stringify({
        provider: chatState.provider,
        model: chatState.model,
        orModel: chatState.orModel,
        nimModel: chatState.nimModel,
        geminiModel: chatState.geminiModel,
        groqModel: chatState.groqModel,
        keys: chatState.keys,
        apiKey: chatState.keys?.[chatState.provider] || chatState.apiKey || "",
        messages: chatState.messages.slice(-80),
      })
    );
  } catch {
    // storage unavailable
  }
}

function isGemini() {
  return chatState.provider === "gemini";
}

function isOpenRouter() {
  return chatState.provider === "openrouter";
}

function isNim() {
  return chatState.provider === "nvidia";
}

function isGroq() {
  return chatState.provider === "groq";
}

function isOllama() {
  return chatState.provider === "ollama";
}

function isRemote() {
  return chatState.provider !== "ollama";
}

function activeModels() {
  if (isGemini()) return GEMINI_MODELS;
  if (isGroq()) return GROQ_MODELS;
  if (isOpenRouter()) return orModels;
  if (isNim()) return nimModels;
  return ollamaModels;
}

function activeModel() {
  if (isGemini()) return chatState.geminiModel || DEFAULT_GEMINI_MODEL;
  if (isGroq()) return chatState.groqModel || DEFAULT_GROQ_MODEL;
  if (isOpenRouter()) return chatState.orModel;
  if (isNim()) return chatState.nimModel;
  return chatState.model;
}

function setActiveModel(name) {
  if (isGemini()) chatState.geminiModel = name;
  else if (isGroq()) chatState.groqModel = name;
  else if (isOpenRouter()) chatState.orModel = name;
  else if (isNim()) chatState.nimModel = name;
  else chatState.model = name;
}

function openChat() {
  show("chat");
  if (!chatBound) {
    chatBound = true;
    initChat();
  }
  const isLocal = typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
  if (!isLocal && chatState.provider === "ollama") {
    if (els.chatWebNotice) {
      els.chatWebNotice.classList.remove("hidden");
      els.chatWebNotice.innerHTML = "💡 <strong>Visiting on the web?</strong> Ollama only runs locally on your PC. Switch to <strong>Groq</strong> or <strong>Google Gemini</strong> (free API keys) to chat with your coach online!";
    }
  } else if (els.chatWebNotice) {
    els.chatWebNotice.classList.add("hidden");
  }

  if (isOpenRouter()) {
    if (!orModels.length) loadOpenRouterModels();
  } else if (isNim()) {
    if (!nimModels.length) loadNimModels();
  } else if (isOllama() && !ollamaModels.length) {
    loadOllamaModels();
  }
  if (memoryOpen()) renderMemory();
  chatScroll();
}

function initChat() {
  els.chatSend.addEventListener("click", () => {
    if (chatBusy) chatAbort?.abort();
    else sendChat();
  });

  els.chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!chatBusy) sendChat();
    }
  });

  els.chatInput.addEventListener("input", () => {
    els.chatInput.style.height = "auto";
    els.chatInput.style.height = Math.min(els.chatInput.scrollHeight, 140) + "px";
  });

  els.chatMessages.addEventListener("click", (e) => {
    const starter = e.target.closest(".chat-starter");
    if (!starter || chatBusy) return;
    els.chatInput.value = starter.dataset.prompt ?? "";
    sendChat();
  });

  els.chatModel.addEventListener("change", () => {
    setActiveModel(els.chatModel.value);
    saveChatState();
  });

  els.chatProvider.addEventListener("change", () => {
    chatState.provider = PROVIDERS.includes(els.chatProvider.value) ? els.chatProvider.value : "ollama";
    chatState.apiKey = chatState.keys?.[chatState.provider] ?? "";
    saveChatState();
    applyProviderUi();
    if (isGroq()) {
      populateModelSelect();
    } else if (isOpenRouter()) {
      if (!orModels.length) loadOpenRouterModels();
    } else if (isNim()) {
      if (!nimModels.length) loadNimModels();
    } else if (isGemini()) {
      populateModelSelect();
    } else if (isOllama() && !ollamaModels.length) {
      loadOllamaModels();
    }
  });

  els.chatKey.addEventListener("input", () => {
    const value = els.chatKey.value.trim();
    chatState.apiKey = value;
    if (!chatState.keys) chatState.keys = { gemini: "", groq: "", openrouter: "" };
    chatState.keys[chatState.provider] = value;
    saveChatState();
  });

  els.memoryBtn.addEventListener("click", () => toggleMemory());
  els.memoryClose.addEventListener("click", () => toggleMemory(false));
  els.memoryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addMemoryNote(els.memoryInput.value);
  });

  els.chatClear.addEventListener("click", () => {
    if (!chatState.messages.length) return;
    if (chatBusy) chatAbort?.abort();
    if (!window.confirm("Clear this conversation?")) return;
    chatState.messages = [];
    saveChatState();
    renderMessages();
  });

  applyProviderUi();
  renderMessages();
}

function applyProviderUi() {
  els.chatProvider.value = chatState.provider;
  const needsKey = isOpenRouter() || isGemini() || isGroq();
  els.chatKey.classList.toggle("hidden", !needsKey);
  els.chatKey.value = chatState.keys?.[chatState.provider] ?? chatState.apiKey ?? "";

  if (isGemini()) {
    els.chatKey.placeholder = "Google Gemini API key (AIza… or AQ.…)";
    els.chatHint.innerHTML =
      "Uses Google Gemini directly from your browser. Get a free API key at <a href='https://aistudio.google.com/app/apikey' target='_blank' rel='noreferrer'>Google AI Studio</a>. Enter to send, Shift+Enter for a new line.";
    els.chatInput.placeholder = "Ask or paste code…";
  } else if (isGroq()) {
    els.chatKey.placeholder = "Groq API key (gsk_…)";
    els.chatHint.innerHTML =
      "Uses Groq's free tier — very fast GPT-OSS and Qwen models. Get a key at <a href='https://console.groq.com/keys' target='_blank' rel='noreferrer'>console.groq.com</a>. Your key is saved in this browser only. Enter to send, Shift+Enter for a new line.";
    els.chatInput.placeholder = "Ask or paste code…";
  } else if (isOpenRouter()) {
    els.chatKey.placeholder = "OpenRouter API key (sk-or-v1-…)";
    els.chatHint.innerHTML =
      "Uses OpenRouter free models — messages leave this machine and go to openrouter.ai and the model provider. Your API key is saved in this browser only. Enter to send, Shift+Enter for a new line.";
    els.chatInput.placeholder = "Ask or paste code…";
  } else if (isNim()) {
    els.chatHint.innerHTML =
      "Uses NVIDIA NIM through the local proxy — the key stays in JARVIS's <code>.env</code> and never reaches the browser. Works while this page is served by <code>python serve.py</code>. Enter to send, Shift+Enter for a new line.";
    els.chatInput.placeholder = "Ask or paste code…";
  } else {
    els.chatHint.innerHTML =
      "Your Python coach runs on your Ollama server through this site's proxy, so it also works from your phone — messages stay on your computer. Enter to send, Shift+Enter for a new line.";
    els.chatInput.placeholder = "Ask or paste code…";
  }

  const isLocal = typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
  if (!isLocal && chatState.provider === "ollama") {
    if (els.chatWebNotice) {
      els.chatWebNotice.classList.remove("hidden");
      els.chatWebNotice.innerHTML = "💡 <strong>Visiting on the web?</strong> Ollama only runs locally on your PC. Switch to <strong>Groq</strong> or <strong>Google Gemini</strong> (free API keys) to chat with your coach online!";
    }
  } else if (els.chatWebNotice) {
    els.chatWebNotice.classList.add("hidden");
  }

  populateModelSelect();
}

function chatScroll() {
  els.chatMessages.scrollTop = els.chatMessages.scrollHeight;
}

function renderMessages() {
  els.chatMessages.innerHTML = "";
  if (!chatState.messages.length) {
    const empty = document.createElement("div");
    empty.className = "chat-empty";
    empty.innerHTML =
      "<div class=\"chat-empty-title\">Where were we?</div>" +
      "<p>One idea, one example, one challenge at a time. Which of these sounds like where we were?</p>" +
      "<div class=\"chat-starters\">" +
      [
        { label: "1. Basics: variables & types", prompt: "I'm on the basics: variables and data types. Give me a quick warm-up." },
        { label: "2. Control flow: if/elif/else", prompt: "I'm on control flow: if, elif and else. Give me a quick warm-up." },
        { label: "3. Data structures: lists", prompt: "I'm on data structures: lists and dicts. Give me a quick warm-up." },
        { label: "4. Functions & modules", prompt: "I'm on functions and modules. Give me a quick warm-up." },
        { label: "5. Something advanced", prompt: "I'm on something more advanced — ask me what I'm working on." },
        { label: "Continue where I left off", prompt: "Continue where I left off." },
      ]
        .map(
          ({ label, prompt }) =>
            `<button class="chat-starter" type="button" data-prompt="${escapeHtml(prompt)}">${escapeHtml(label)}</button>`
        )
        .join("") +
      "</div>" +
      "<span>Ollama keeps messages on this machine; OpenRouter and NVIDIA NIM send them to those services.</span>";
    els.chatMessages.appendChild(empty);
    return;
  }
  for (const msg of chatState.messages) appendBubble(msg.role, msg.content);
  chatScroll();
}

function appendBubble(role, content) {
  const bubble = document.createElement("div");
  bubble.className = `msg ${role === "user" ? "user" : "bot"}`;
  if (role === "user") {
    bubble.textContent = content;
  } else {
    const body = document.createElement("div");
    body.className = "msg-body formatted";
    body.innerHTML = renderMarkdown(content);
    bubble.appendChild(body);
  }
  els.chatMessages.appendChild(bubble);
  chatScroll();
  return bubble;
}

function mdUrl(raw, base) {
  const url = raw.trim();
  if (/^(https?:\/\/|mailto:|#)/i.test(url)) return url;
  if (base && !/^[a-z][a-z0-9+.-]*:/i.test(url)) return base + url.replace(/^\.?\//, "");
  return null;
}

function stripHtmlOutsideFences(text) {
  let inFence = false;
  // Split on fence markers so code keeps its HTML; strip whole text (tags can span lines).
  return text
    .split(/(^[ \t]*```[^\n]*$)/m)
    .map((part) => {
      if (/^[ \t]*```/.test(part)) {
        inFence = !inFence;
        return part;
      }
      if (inFence) return part;
      return part
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/<\/?(?:p|div|h[1-6]|li|ul|ol|table|tr|td|th)\b[^>]*>/gi, "\n")
        .replace(/<\/?[A-Za-z][^>]*>/g, "")
        .replace(/^[ \t]+$/gm, "")
        .replace(/\n{3,}/g, "\n\n");
    })
    .join("");
}

function renderMarkdown(text, opts = {}) {
  const codeBlocks = [];
  const inlineCode = [];
  let src = escapeHtml(stripHtmlOutsideFences(text))
    .split("\n")
    .map((line) => {
      const m = line.match(/^(\s*)```[ \t]*([A-Za-z0-9_+#.-]*)(.*)$/);
      if (!m) return line;
      const known = m[2].match(/^(python|py|javascript|js|html|css|java|bash|sh|json)/i);
      const lang = known ? known[0] : "";
      const rest = (known ? m[2].slice(lang.length) : m[2]) + m[3];
      if (rest.trim()) return `${m[1]}\`\`\`${lang}\n${m[1]}${rest.trimStart()}`;
      return `${m[1]}\`\`\`${lang}`;
    })
    .join("\n")
    .replace(/```[^\n]*\n([\s\S]*?)```/g, (m, code) => {
      codeBlocks.push(code.replace(/\n$/, ""));
      return `[[CODE${codeBlocks.length - 1}]]`;
    });
  if ((src.match(/```/g) ?? []).length % 2 === 1) src += "\n```";
  src = src.replace(/```[^\n]*\n([\s\S]*?)```/g, (m, code) => {
    codeBlocks.push(code.replace(/\n$/, ""));
    return `[[CODE${codeBlocks.length - 1}]]`;
  });

  src = src.replace(/`([^`\n]+)`/g, (m, code) => {
    inlineCode.push(code);
    return `[[IC${inlineCode.length - 1}]]`;
  });
  src = src.replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>");
  src = src.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (m, alt, raw) => {
    const url = mdUrl(raw, opts.imgBase ?? opts.linkBase);
    if (!url) return `[${alt}]`;
    return `<img class="md-img" src="${url}" alt="${alt}" loading="lazy" referrerpolicy="no-referrer">`;
  });
  src = src.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, label, raw) => {
    const url = mdUrl(raw, opts.linkBase);
    if (!url) return label;
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  });
  src = src.replace(/\[\[IC(\d+)\]\]/g, (m, i) => `<code>${inlineCode[+i]}</code>`);

  const lines = src.split("\n");
  let html = "";
  let list = null;
  const closeList = () => {
    if (list) {
      html += `</${list}>`;
      list = null;
    }
  };

  for (const raw of lines) {
    let line = raw.trimEnd();
    if (/^\s*(?:>|&gt;)\s?/.test(line)) line = line.replace(/^\s*(?:>|&gt;)\s?/, "");
    const hr = /^\s*([-*_])\s*(\1\s*){2,}$/.test(line);
    const head = line.match(/^\s*#{1,6}\s+(.*?)\s*#*$/);
    const ul = line.match(/^\s*[-*]\s+(.*)$/);
    const ol = line.match(/^\s*\d+[.)]\s+(.*)$/);
    if (hr) {
      closeList();
      html += "<hr>";
    } else if (head) {
      closeList();
      html += `<div class="chat-h">${head[1]}</div>`;
    } else if (ul) {
      if (list !== "ul") {
        closeList();
        html += "<ul>";
        list = "ul";
      }
      html += `<li>${ul[1]}</li>`;
    } else if (ol) {
      if (list !== "ol") {
        closeList();
        html += "<ol>";
        list = "ol";
      }
      html += `<li>${ol[1]}</li>`;
    } else {
      closeList();
      html += line.trim() === "" ? "<br>" : `${line}<br>`;
    }
  }
  closeList();

  return html.replace(
    /\[\[CODE(\d+)\]\]<br>|\[\[CODE(\d+)\]\]/g,
    (m, i, j) => `<pre class="chat-code"><code>${codeBlocks[+(i ?? j)]}</code></pre>`
  );
}

async function loadOllamaModels() {
  try {
    const res = await ollamaFetch("/api/tags");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    ollamaModels = (data.models ?? []).map((m) => ({
      name: m.name,
      thinking: (m.capabilities ?? []).includes("thinking"),
    }));
    ollamaModels.sort((a, b) => a.name.localeCompare(b.name));
  } catch {
    ollamaModels = [];
  }
  if (chatState.provider === "ollama") populateModelSelect();
}

async function loadOpenRouterModels() {
  orListError = "";
  try {
    const res = await fetch(`${OPENROUTER_BASE}/models`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    orModels = (data.data ?? [])
      .filter((m) => String(m.pricing?.prompt) === "0" && String(m.pricing?.completion) === "0")
      .map((m) => ({ name: m.id, label: m.name || m.id }));
    orModels.sort((a, b) => a.name.localeCompare(b.name));
    if (!orModels.length) orListError = "OpenRouter lists no free models right now.";
  } catch {
    orModels = [];
    orListError = "Couldn't load the free model list — check your internet connection.";
  }
  if (isOpenRouter()) populateModelSelect();
}

async function loadNimModels() {
  nimListError = "";
  try {
    const res = await fetch(`${NIM_PROXY}/models`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    nimModels = (data.data ?? [])
      .map((m) => m.id)
      .filter((id) => !/embed|guard|safety|topic-control|reward|parse|retriev|rerank/i.test(id))
      .sort()
      .map((id) => ({ name: id, label: id }));
    if (!nimModels.length) nimListError = "NIM returned no chat models for this key.";
  } catch {
    nimModels = [];
    nimListError = "NIM proxy not running — start it with `python serve.py`.";
  }
  if (isNim()) populateModelSelect();
}

const NIM_RECOMMENDED = [
  "nvidia/nemotron-3.5-bolt-e4b",
  "meta/llama-3.2-11b-vision-instruct",
  "nvidia/nemotron-3-ultra-550b-a55b",
];

const PREFERRED_MODELS = {
  groq: ["openai/gpt-oss-120b", "openai/gpt-oss-20b", "qwen/qwen3.8-27b"],
  openrouter: ["google/gemma-4-26b-a4b-it:free", "nvidia/nemotron-3.5-lightning:free"],
  nvidia: NIM_RECOMMENDED,
  ollama: ["llama3.2:latest", "qwen3.5:2b", "granite4.1:3b"],
};

function addModelOption(parent, model) {
  const opt = document.createElement("option");
  opt.value = model.name;
  opt.textContent = model.label || model.name;
  parent.appendChild(opt);
}

function populateModelSelect() {
  const select = els.chatModel;
  select.innerHTML = "";
  const models = activeModels();

  if (!models.length) {
    const opt = document.createElement("option");
    opt.value = "";
    if (isOpenRouter()) opt.textContent = orListError || "Loading free models…";
    else if (isNim()) opt.textContent = nimListError || "Loading NIM models…";
    else opt.textContent = "Ollama offline";
    select.appendChild(opt);
    select.value = "";
    return;
  }

  if (isNim()) {
    const recommended = models.filter((m) => NIM_RECOMMENDED.includes(m.name));
    const others = models.filter((m) => !NIM_RECOMMENDED.includes(m.name));
    if (recommended.length) {
      const group = document.createElement("optgroup");
      group.label = "Recommended with your key";
      recommended.forEach((m) => addModelOption(group, m));
      select.appendChild(group);
    }
    const group = document.createElement("optgroup");
    group.label = "Full NIM catalog (some need different access)";
    others.forEach((m) => addModelOption(group, m));
    select.appendChild(group);
  } else {
    models.forEach((m) => addModelOption(select, m));
  }

  const preferred = PREFERRED_MODELS[chatState.provider] ?? [];
  let chosen = models.some((m) => m.name === activeModel()) ? activeModel() : null;
  if (!chosen) chosen = preferred.find((p) => models.some((m) => m.name === p)) ?? models[0].name;

  setActiveModel(chosen);
  select.value = chosen;
  saveChatState();
}

function setChatBusy(busy) {
  els.chatSend.textContent = busy ? "Stop" : "Send";
  els.chatSend.classList.toggle("stopping", busy);
}

function createLoadingBubble() {
  const bubble = document.createElement("div");
  bubble.className = "msg bot";
  const body = document.createElement("div");
  body.className = "msg-body typing";
  body.innerHTML = '<span class="chat-typing">Thinking</span>';
  bubble.appendChild(body);
  const meta = document.createElement("div");
  meta.className = "chat-meta";
  bubble.appendChild(meta);
  els.chatMessages.appendChild(bubble);
  chatScroll();
  return { bubble, body, meta };
}

function chatError(text) {
  const bubble = document.createElement("div");
  bubble.className = "msg error";
  bubble.textContent = text;
  els.chatMessages.appendChild(bubble);
  chatScroll();
}

async function sendChat() {
  if (chatBusy) return;
  const text = els.chatInput.value.trim();
  if (!text) return;

  const remote = isRemote();
  const model = activeModel();
  if (!model) {
    chatError(
      isGemini()
        ? "No Google Gemini model selected. Choose one above."
        : isGroq()
        ? "No Groq model selected. Pick one above."
        : isOpenRouter()
        ? "No free OpenRouter model selected yet. Wait for the list to load, or check your internet connection."
        : isNim()
          ? "No NVIDIA NIM model loaded. Start the app with `python serve.py`, then reopen this tab."
          : "No Ollama model available. Start Ollama (`ollama serve`), then refresh the page."
    );
    return;
  }
  if (isGemini() && !chatState.apiKey) {
    chatError("Add your Google Gemini API key above to chat. Get one free at aistudio.google.com.");
    els.chatKey.focus();
    return;
  }
  if (isGroq() && !chatState.apiKey) {
    chatError("Add your Groq API key above (it starts with gsk_) to chat. Get one free at console.groq.com/keys.");
    els.chatKey.focus();
    return;
  }
  if (isOpenRouter() && !chatState.apiKey) {
    chatError("Add your OpenRouter API key above (it starts with sk-or-v1-) to chat online.");
    els.chatKey.focus();
    return;
  }

  els.chatInput.value = "";
  els.chatInput.style.height = "auto";
  chatState.messages.push({ role: "user", content: text });
  saveChatState();
  els.chatMessages.querySelector(".chat-empty")?.remove();
  appendBubble("user", text);

  const { bubble, body, meta } = createLoadingBubble();
  const history = chatState.messages.slice(-20).map((m) => ({ role: m.role, content: m.content }));

  const abort = new AbortController();
  chatAbort = abort;
  chatBusy = true;
  setChatBusy(true);
  const started = performance.now();
  let full = "";

  const onToken = (piece) => {
    if (!piece) return;
    if (!full) body.classList.remove("typing");
    full += piece;
    body.textContent = full;
    chatScroll();
  };

  try {
    const result = await streamCurrent(history, abort.signal, onToken);

    if (!full.trim()) {
      body.classList.remove("typing");
      body.classList.add("formatted");
      body.textContent = "(empty response)";
    } else {
      body.classList.add("formatted");
      body.innerHTML = renderMarkdown(full);
      chatState.messages.push({ role: "assistant", content: full });
      saveChatState();
      if (result.tokens) {
        if (remote) {
          meta.textContent = `${result.tokens} tokens · ${((performance.now() - started) / 1000).toFixed(1)} s`;
        } else {
          const rate = result.evalSeconds > 0 ? Math.round(result.tokens / result.evalSeconds) : null;
          meta.textContent = rate ? `${result.tokens} tokens · ${rate} tok/s` : `${result.tokens} tokens`;
        }
      }
    }
    chatScroll();
  } catch (err) {
    if (err.name === "AbortError") {
      if (full.trim()) {
        body.classList.add("formatted");
        body.innerHTML = renderMarkdown(full);
        meta.textContent = "stopped";
        chatState.messages.push({ role: "assistant", content: full });
        saveChatState();
      } else {
        bubble.remove();
      }
    } else {
      bubble.remove();
      chatError(
        err instanceof TypeError
          ? isGemini()
            ? "Couldn't reach Google Gemini API. Check your internet connection or API key."
            : isNim()
            ? "Couldn't reach the NIM proxy. Start the app with `python serve.py`, then try again."
            : isOpenRouter()
              ? "Couldn't reach OpenRouter. Check your internet connection and try again."
              : "Couldn't reach Ollama at localhost:11434. Make sure it's running (`ollama serve`), then try again."
          : err.message
      );
    }
  } finally {
    chatBusy = false;
    chatAbort = null;
    setChatBusy(false);
    els.chatInput.focus();
  }
}

async function streamGemini({ apiKey, model, messages, signal, onToken, systemPrompt = chatSystemPrompt(), temperature }) {
  if (!apiKey) throw new Error("Please enter your Google Gemini API key above.");
  const contents = [];
  for (const m of messages) {
    if (m.role === "system") continue;
    contents.push({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    });
  }

  const payload = {
    contents,
    systemInstruction: {
      parts: [{ text: systemPrompt }],
    },
  };
  if (typeof temperature === "number") payload.generationConfig = { temperature };

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:streamGenerateContent?alt=sse&key=${encodeURIComponent(apiKey)}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal,
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    let msg = `Gemini API returned HTTP ${res.status}`;
    try {
      const errObj = JSON.parse(errText);
      if (errObj.error?.message) msg = errObj.error.message;
    } catch {}
    throw new Error(msg);
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let totalTokens = 0;

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed.startsWith("data:")) continue;
      const jsonStr = trimmed.slice(5).trim();
      if (!jsonStr) continue;
      try {
        const parsed = JSON.parse(jsonStr);
        const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) onToken(text);
        if (parsed.usageMetadata?.candidatesTokenCount) {
          totalTokens = parsed.usageMetadata.candidatesTokenCount;
        }
      } catch {}
    }
  }

  return { tokens: totalTokens || null };
}

function streamCurrent(messages, signal, onToken, systemPrompt = chatSystemPrompt(), temperature) {
  const model = activeModel();
  if (isGemini()) {
    return streamGemini({
      apiKey: chatState.apiKey,
      model,
      messages,
      signal,
      onToken,
      systemPrompt,
      temperature,
    });
  }
  if (isGroq()) {
    return streamOpenAICompatible({
      url: GROQ_URL,
      apiKey: chatState.apiKey,
      provider: "groq",
      model,
      messages: [{ role: "system", content: systemPrompt }, ...messages],
      signal,
      onToken,
      temperature,
    });
  }
  if (isNim()) {
    return streamOpenAICompatible({
      url: `${NIM_PROXY}/chat/completions`,
      apiKey: "",
      provider: "nvidia",
      model,
      messages: [{ role: "system", content: systemPrompt }, ...messages],
      signal,
      onToken,
      temperature,
    });
  }
  if (isOpenRouter()) {
    return streamOpenAICompatible({
      url: `${OPENROUTER_BASE}/chat/completions`,
      apiKey: chatState.apiKey,
      provider: "openrouter",
      model,
      messages: [{ role: "system", content: systemPrompt }, ...messages],
      signal,
      onToken,
      temperature,
    });
  }
  return streamOllama(model, messages, signal, onToken, systemPrompt, temperature);
}

async function streamOllama(model, history, signal, onToken, systemPrompt = chatSystemPrompt(), temperature) {
  const payload = {
    model,
    messages: [{ role: "system", content: systemPrompt }, ...history],
    stream: true,
  };
  if (typeof temperature === "number") payload.options = { temperature };
  if (ollamaModels.find((m) => m.name === model)?.thinking) payload.think = false;

  const res = await ollamaFetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal,
  });
  if (!res.ok || !res.body) throw new Error(`Ollama returned HTTP ${res.status}`);

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let finalChunk = null;

  while (!finalChunk) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";
    for (const line of lines) {
      if (!line.trim()) continue;
      const chunk = JSON.parse(line);
      if (chunk.error) throw new Error(chunk.error);
      if (chunk.message?.content) onToken(chunk.message.content);
      if (chunk.done) {
        finalChunk = chunk;
        break;
      }
    }
  }

  return {
    tokens: finalChunk?.eval_count ?? 0,
    evalSeconds: finalChunk?.eval_duration ? finalChunk.eval_duration / 1e9 : 0,
  };
}

async function streamOpenAICompatible({ url, apiKey, provider, model, messages, signal, onToken, temperature }) {
  const headers = { "Content-Type": "application/json" };
  if (apiKey) headers.Authorization = `Bearer ${apiKey}`;

  const payload = { model, messages, stream: true };
  if (provider === "openrouter") payload.stream_options = { include_usage: true };
  if (typeof temperature === "number") payload.temperature = temperature;

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
    signal,
  });

  if (!res.ok) {
    const label = provider === "nvidia" ? "NVIDIA NIM" : provider === "groq" ? "Groq" : "OpenRouter";
    let message = `${label} returned HTTP ${res.status}`;
    try {
      const data = await res.json();
      if (data?.error?.message) message = data.error.message;
    } catch {
      // non-JSON error body
    }
    if (provider === "openrouter") {
      if (res.status === 401) message = "OpenRouter rejected the API key. Check the key above — it should start with sk-or-v1-.";
      else if (res.status === 402) message = "That OpenRouter model needs credits. Pick a free model from the list.";
      else if (res.status === 429) message = "OpenRouter's free tier is rate limited right now. Wait a minute and try again.";
    } else if (provider === "groq") {
      if (res.status === 401 || res.status === 403)
        message = "Groq rejected the API key. Check the key above — it should start with gsk_.";
      else if (res.status === 404 || res.status === 410)
        message = `Groq has retired "${model}". Pick another model from the list.`;
      else if (res.status === 429) message = "Groq is rate limiting this key. Wait a few seconds and try again.";
    } else if (provider === "nvidia") {
      if (res.status === 401 || res.status === 403)
        message = "NVIDIA NIM rejected the key from JARVIS's .env. Update NVIDIA_API_KEY, then restart serve.py.";
      else if (res.status === 404 || res.status === 410)
        message = `NIM has retired or doesn't host "${model}". Pick another model from the list.`;
      else if (res.status === 429) message = "NVIDIA NIM is rate limiting this key. Wait a moment and try again.";
    }
    const err = new Error(message);
    err.status = res.status;
    throw err;
  }
  if (!res.body) throw new Error("The server sent an empty response.");

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let tokens = 0;
  let finished = false;

  while (!finished) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";
    for (const raw of lines) {
      const line = raw.trim();
      if (!line.startsWith("data:")) continue;
      const data = line.slice(5).trim();
      if (data === "[DONE]") {
        finished = true;
        break;
      }
      if (!data) continue;
      let chunk;
      try {
        chunk = JSON.parse(data);
      } catch {
        continue;
      }
      if (chunk.error) throw new Error(chunk.error.message ?? "The model returned an error.");
      const piece = chunk.choices?.[0]?.delta?.content ?? "";
      if (piece) onToken(piece);
      if (chunk.usage?.completion_tokens) tokens = chunk.usage.completion_tokens;
    }
  }

  return { tokens };
}

/* ---------- Local-only AI config (config.local.json — never published) ---------- */

let localAiConfigLoaded = false;
async function initLocalAiConfig() {
  if (localAiConfigLoaded) return;
  localAiConfigLoaded = true;
  // The public GitHub Pages build has no key file; skip the request entirely.
  if (/\.github\.io$/i.test(location.hostname)) return;
  try {
    const res = await fetch("config.local.json", { cache: "no-store" });
    if (!res.ok) return;
    const cfg = await res.json();
    const hadSaved = !!localStorage.getItem(CHAT_KEY);
    if (!chatState.keys) chatState.keys = { gemini: "", groq: "", openrouter: "" };
    for (const p of ["gemini", "groq", "openrouter"]) {
      const key = cfg?.keys?.[p];
      if (typeof key === "string" && key.trim() && !chatState.keys[p]) chatState.keys[p] = key.trim();
    }
    if (!hadSaved) {
      if (PROVIDERS.includes(cfg.provider)) chatState.provider = cfg.provider;
      if (typeof cfg.models?.gemini === "string") chatState.geminiModel = cfg.models.gemini;
      if (typeof cfg.models?.groq === "string") chatState.groqModel = cfg.models.groq;
    }
    chatState.apiKey = chatState.keys[chatState.provider] ?? "";
    saveChatState();
    if (chatBound) applyProviderUi();
  } catch {
    // No local config — keys are entered in the UI and kept in this browser.
  }
}

/* ---------- Learn: lessons · tutor · plan ---------- */

const LEARN_MODES = ["lessons", "courses", "github", "tracks", "labs", "tutor", "plan", "review", "challenge"];
const PROVIDER_LABELS = { gemini: "Google Gemini", groq: "Groq", ollama: "Ollama", openrouter: "OpenRouter", nvidia: "NVIDIA NIM" };
const TUTOR_KEY = "pycards.tutor.v1";

function loadTutorState() {
  try {
    const saved = JSON.parse(localStorage.getItem(TUTOR_KEY) || "null");
    return {
      topic: typeof saved?.topic === "string" ? saved.topic : "",
      messages: Array.isArray(saved?.messages)
        ? saved.messages
            .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
            .slice(-40)
        : [],
    };
  } catch {
    return { topic: "", messages: [] };
  }
}

const TUTOR_SYSTEM_PROMPT = (topic) =>
  "You are a warm, patient Python tutor inside a personal study app, teaching like a friendly one-on-one session. " +
  `The current topic is "${topic}" (or the start of Python if that is empty). ` +
  "Every reply has the same three-part shape: (1) one friendly sentence reacting to the learner's last answer — name what was right, or name the mistake kindly; " +
  "(2) teach exactly one small idea in plain words with a tiny concrete example — inline like `5 // 2` or a short fenced code block; " +
  "(3) end with exactly one question that checks or stretches that idea. " +
  "Format example — copy its shape, not its content: \"**Nice — you spotted that `=` assigns and `==` compares.** " +
  "The idea here is identity: `is` asks whether two names point at the same object, not whether the values look the same. " +
  "So `a = [1, 2]; b = [1, 2]` gives `a == b` True but `a is b` False. What would `[1] is [1]` give?\" " +
  "Use exactly one question mark per reply, always in the final sentence. Never restate the same question twice. " +
  "Use short paragraphs, at most two bold labels, and at most one code block per reply. Never introduce several new concepts at once. " +
  "If the learner says they don't know or asks for help, do not hand over the answer: give one concrete nudge first (an example value, a comparison, or a tiny snippet), then ask the same question again in simpler words. " +
  "If their answer is wrong, correct that specific mistake, show the corrected version, and ask a similar question so they get a chance to succeed. " +
  "Praise specifically (\"you got operator precedence right\") instead of generic praise, and keep the tone encouraging, never condescending. " +
  "Keep every reply under 170 words. " +
  (profile?.name ? `The learner's name is ${profile.name}. ` : "") +
  "The learner is a BCA graduate in India working toward AI/ML: use everyday examples and avoid unexplained jargon." +
  memoryContext();

let learnMode = "lessons";
let learnLessonId = null;
let learnCourseId = null;
let learnGithubId = null;
let learnTrackId = null;
let roadStageId = null;
let roadProjectOpen = false;
let roadDraft = null;
let learnQuiz = null;
let lessonsCheatsheet = false;
let learnBound = false;
let tutor = { ...loadTutorState(), busy: false, abort: null };

function saveTutorState() {
  try {
    localStorage.setItem(
      TUTOR_KEY,
      JSON.stringify({ topic: tutor.topic, messages: tutor.messages.slice(-40) })
    );
  } catch {
    // storage unavailable — the conversation stays in memory
  }
}

function openLearn(mode = "lessons", lessonId = null) {
  show("learn");
  if (LEARN_MODES.includes(mode)) learnMode = mode;
  learnLessonId = lessonId;
  learnCourseId = null;
  learnGithubId = null;
  learnTrackId = null;
  roadStageId = null;
  roadProjectOpen = false;
  roadDraft = null;

  if (!learnBound) {
    learnBound = true;
    els.learnTabs.addEventListener("click", (e) => {
      const tab = e.target.closest(".learn-tab");
      if (tab) switchLearnMode(tab.dataset.mode);
    });
  }

  updateLearnTabs();
  renderLearnPanel();
}

function switchLearnMode(mode) {
  if (!LEARN_MODES.includes(mode) || mode === learnMode) return;
  if (tutor.busy) tutor.abort?.abort();
  learnMode = mode;
  if (mode === "lessons") learnLessonId = null;
  if (mode === "courses") learnCourseId = null;
  if (mode === "github") learnGithubId = null;
  if (mode === "tracks") {
    learnTrackId = null;
    roadStageId = null;
    roadProjectOpen = false;
    roadDraft = null;
  }
  lessonsCheatsheet = false;
  updateLearnTabs();
  renderLearnPanel();
}

function updateLearnTabs() {
  els.learnTabs.querySelectorAll(".learn-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.mode === learnMode);
  });
}

function renderLearnPanel() {
  if (learnMode === "tutor") renderTutorPanel();
  else if (learnMode === "plan") renderPlanPanel();
  else if (learnMode === "challenge") renderChallengePanel();
  else if (learnMode === "review") renderReviewPanel();
  else if (learnMode === "courses") {
    if (learnCourseId) renderCourseDetail();
    else renderCoursesList();
  } else if (learnMode === "github") {
    if (learnGithubId) renderGithubDetail();
    else renderGithubList();
  } else if (learnMode === "tracks") {
    if (learnTrackId) renderTrackDetail();
    else renderTracksList();
  } else if (learnMode === "labs") renderLabsList();
  else if (learnLessonId) renderLessonDetail();
  else if (lessonsCheatsheet) renderCheatsheet();
  else renderLessonsList();
}

function quizHtml(questions) {
  return questions
    .map(
      (q, qi) => `
      <div class="quiz-item" data-q="${qi}">
        <div class="quiz-q">${qi + 1}. ${fmt(q.q)}</div>
        <div class="quiz-options">
          ${q.options
            .map(
              (opt, oi) =>
                `<button class="quiz-option" type="button" data-q="${qi}" data-o="${oi}">${fmt(opt)}</button>`
            )
            .join("")}
        </div>
        <p class="quiz-why hidden"></p>
      </div>`
    )
    .join("");
}

function lessonCardCount(lesson) {
  const deck = window.DECKS[0];
  return deck.cards.filter((card) => lesson.topics.includes(card.t)).length;
}

function tipOfTheDay() {
  const tips = window.TIPS ?? [];
  if (!tips.length) return null;
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const day = Math.floor((now - start) / 86400000);
  return tips[day % tips.length];
}

function tipCardHtml() {
  const tip = tipOfTheDay();
  if (!tip) return "";
  return `
    <div class="tip-card">
      <div class="tip-head"><span class="tip-badge">Tip of the day</span></div>
      <p class="tip-text">${fmt(tip.tip)}</p>
      ${tip.code ? `<pre class="lesson-code tip-code"><code>${escapeHtml(tip.code)}</code></pre>` : ""}
    </div>`;
}

function renderLessonsList() {
  const sorted = [...window.LESSONS].sort((a, b) => (a.short || a.id).localeCompare(b.short || b.id));
  const items = sorted.map((lesson) => {
    const rec = store.lessons[lesson.id];
    const cards = lessonCardCount(lesson);
    const base = `${lesson.minutes} min${cards ? ` · ${cards} cards` : ""}`;
    const status = rec?.done
      ? `done · best ${rec.score}/${rec.total}`
      : rec
        ? `best ${rec.score}/${rec.total} · ${lessonPassMark(lesson)} to pass`
        : base;
    return `
      <button class="calm-card${rec?.done ? " is-done" : ""}" type="button" data-id="${lesson.id}">
        <span class="calm-card-icon">${lesson.icon || "📘"}</span>
        <span class="calm-card-name">${escapeHtml(lesson.short || lesson.id)}</span>
        <span class="calm-card-tag">${escapeHtml(lesson.summary)}</span>
        <span class="calm-card-meta">${status}</span>
        ${rec?.done ? '<span class="calm-card-check" aria-label="completed">✓</span>' : ""}
      </button>`;
  }).join("");

  els.learnPanel.innerHTML = `
    <div class="lessons-toolbar">
      <button class="ghost" id="cheatsheet-toggle" type="button">${lessonsCheatsheet ? "Card grid" : "Cheatsheet"}</button>
    </div>
    ${tipCardHtml()}<div class="calm-grid">${items}</div>
    <p class="hint">Lessons teach the ideas behind the same cards you review in Decks. Finish the quiz to mark one complete.</p>`;

  document.getElementById("cheatsheet-toggle").addEventListener("click", () => {
    lessonsCheatsheet = true;
    renderCheatsheet();
  });

  els.learnPanel.querySelectorAll(".calm-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      learnLessonId = btn.dataset.id;
      learnQuiz = null;
      renderLessonDetail();
    });
  });
}

function renderCheatsheet() {
  const sorted = [...window.LESSONS].sort((a, b) => (a.short || a.id).localeCompare(b.short || b.id));
  const groups = sorted
    .map((lesson) => {
      const snippets = lesson.sections.filter((s) => s.code);
      if (!snippets.length) return "";
      const blocks = snippets
        .map(
          (s) => `
        <div class="cheat-block">
          <div class="cheat-label">${escapeHtml(s.h)}</div>
          <pre class="lesson-code cheat-code"><code>${escapeHtml(s.code)}</code></pre>
        </div>`
        )
        .join("");
      return `
      <section class="cheat-group">
        <h3>${lesson.icon || ""} ${escapeHtml(lesson.title)}</h3>
        ${blocks}
      </section>`;
    })
    .join("");

  els.learnPanel.innerHTML = `
    <div class="lessons-toolbar">
      <button class="ghost" id="cheatsheet-toggle" type="button">Card grid</button>
    </div>
    <div class="cheatsheet">${groups}</div>
    <p class="hint">Every code snippet from every lesson, grouped by topic. Nothing new — just the same examples in one scrollable page.</p>`;

  document.getElementById("cheatsheet-toggle").addEventListener("click", () => {
    lessonsCheatsheet = false;
    renderLessonsList();
  });
}

function renderLessonDetail() {
  const lesson = window.LESSONS.find((l) => l.id === learnLessonId);
  if (!lesson) {
    learnLessonId = null;
    renderLessonsList();
    return;
  }

  if (!learnQuiz || learnQuiz.kind !== "lesson" || learnQuiz.id !== lesson.id) {
    learnQuiz = { id: lesson.id, kind: "lesson", answers: lesson.quiz.map(() => null), score: 0 };
  }

  const sections = lesson.sections
    .map(
      (section) => `
      <section class="lesson-section">
        <h3>${escapeHtml(section.h)}</h3>
        ${section.p ? `<p>${fmt(section.p)}</p>` : ""}
        ${section.code ? `<pre class="lesson-code"><code>${escapeHtml(section.code)}</code></pre>` : ""}
      </section>`
    )
    .join("");

  const quiz = quizHtml(lesson.quiz);

  els.learnPanel.innerHTML = `
    <div class="study-bar">
      <button class="ghost" id="lesson-back" type="button">&larr; Lessons</button>
      <span>${lesson.minutes} min read</span>
    </div>
    <div class="lesson-detail">
      <h2>${escapeHtml(lesson.title)}</h2>
      <p class="lesson-lede">${escapeHtml(lesson.summary)}</p>
      <div class="lesson-body">${sections}</div>
      <h3 class="quiz-title">Check yourself</h3>
      <div class="quiz">${quiz}</div>
      <div class="lesson-result hidden" id="lesson-result"></div>
      <div class="lesson-actions">
        ${lessonCardCount(lesson) ? '<button class="secondary" id="lesson-review" type="button">Review these cards</button>' : ""}
        <button class="ghost" id="lesson-playground" type="button">Open playground</button>
      </div>
      <div class="lesson-task">
        <div class="lesson-task-head">Practice task · ${escapeHtml(lesson.task.title)}</div>
        <p>${fmt(lesson.task.brief)}</p>
        <p class="lesson-task-hint">${fmt(lesson.task.hint)}</p>
      </div>
    </div>`;

  document.getElementById("lesson-back").addEventListener("click", () => {
    learnLessonId = null;
    learnQuiz = null;
    renderLessonsList();
  });

  const reviewBtn = document.getElementById("lesson-review");
  if (reviewBtn) reviewBtn.addEventListener("click", () => {
    startSession(window.DECKS[0], { topics: lesson.topics });
  });

  document.getElementById("lesson-playground").addEventListener("click", openCode);

  els.learnPanel.querySelector(".quiz").addEventListener("click", (e) => {
    const btn = e.target.closest(".quiz-option");
    if (btn) answerQuiz(Number(btn.dataset.q), Number(btn.dataset.o));
  });
}

function activeQuiz() {
  if (!learnQuiz) return null;
  if (learnQuiz.kind === "course") {
    const course = window.COURSES.find((c) => c.id === learnQuiz.id);
    return course ? { questions: course.quiz, course } : null;
  }
  const lesson = window.LESSONS.find((l) => l.id === learnQuiz.id);
  return lesson ? { questions: lesson.quiz, lesson } : null;
}

function answerQuiz(qi, oi) {
  if (!learnQuiz || learnQuiz.answers[qi] !== null) return;
  const source = activeQuiz();
  if (!source) return;
  const { questions, lesson, course } = source;
  const q = questions[qi];
  const correct = oi === q.answer;

  learnQuiz.answers[qi] = oi;
  if (correct) learnQuiz.score++;

  const item = els.learnPanel.querySelector(`.quiz-item[data-q="${qi}"]`);
  item.querySelectorAll(".quiz-option").forEach((btn) => {
    const index = Number(btn.dataset.o);
    if (index === q.answer) btn.classList.add("correct");
    else if (index === oi) btn.classList.add("wrong");
    btn.disabled = true;
  });

  const why = item.querySelector(".quiz-why");
  why.innerHTML = `${correct ? "Correct." : "Not quite."} ${fmt(q.why)}`;
  why.classList.remove("hidden");

  if (!correct) {
    store.misses = [
      { lessonId: course ? `course:${course.id}` : lesson.id, q: q.q, at: Date.now() },
      ...(store.misses ?? []).filter((miss) => miss.q !== q.q),
    ].slice(0, 20);
    saveStore();
  }

  if (learnQuiz.answers.every((answer) => answer !== null)) {
    if (course) completeCourse(course);
    else completeLesson(lesson);
  }
}

function lessonPassMark(lesson) {
  return Math.ceil(lesson.quiz.length / 2);
}

function completeLesson(lesson) {
  const total = lesson.quiz.length;
  const previous = store.lessons[lesson.id];
  const passed = learnQuiz.score >= lessonPassMark(lesson);
  store.lessons[lesson.id] = {
    done: passed || !!previous?.done,
    score: Math.max(previous?.score ?? 0, learnQuiz.score),
    total,
    at: Date.now(),
  };
  saveStore();
  if (passed && !previous?.done) {
    addGems(3, "lesson");
    addXp(50);
    Juice.confetti(80);
  }

  const result = document.getElementById("lesson-result");
  result.classList.remove("hidden");
  if (passed) {
    result.innerHTML = `<strong>Lesson complete.</strong> You scored ${learnQuiz.score}/${total}. ${
      learnQuiz.score === total
        ? "Clean sweep — the cards should feel easy."
        : "Review the missed ideas, then run the cards."
    }`;
  } else if (previous?.done) {
    result.innerHTML =
      `<strong>Already complete.</strong> This attempt scored ${learnQuiz.score}/${total}, below the ` +
      `${lessonPassMark(lesson)} needed — your best stays ${store.lessons[lesson.id].score}/${total}. ` +
      "Retry whenever the ideas feel rusty.";
    const retry = makeBtn("Retry quiz", "secondary", () => {
      learnQuiz = null;
      renderLessonDetail();
    });
    result.appendChild(document.createElement("br"));
    result.appendChild(retry);
    return;
  } else {
    result.innerHTML =
      `<strong>Not passed yet.</strong> You scored ${learnQuiz.score}/${total} — you need ` +
      `${lessonPassMark(lesson)} to complete this lesson. Re-read the sections, then try the quiz again.`;
    const retry = makeBtn("Retry quiz", "secondary", () => {
      learnQuiz = null;
      renderLessonDetail();
    });
    result.appendChild(document.createElement("br"));
    result.appendChild(retry);
    return;
  }

  const next = window.LESSONS.find((l) => !store.lessons[l.id]?.done);
  if (next) {
    const btn = makeBtn(`Next: ${next.title}`, "primary", () => {
      learnLessonId = next.id;
      learnQuiz = null;
      renderLessonDetail();
    });
    result.appendChild(document.createElement("br"));
    result.appendChild(btn);
  } else {
    const btn = makeBtn("Back to lessons", "secondary", () => {
      learnLessonId = null;
      learnQuiz = null;
      renderLessonsList();
    });
    result.appendChild(document.createElement("br"));
    result.appendChild(btn);
  }
}

function courseLength(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (!h) return `${m}m`;
  return m ? `${h}h ${m}m` : `${h}h`;
}

function courseTimeLabel(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const mm = h ? String(m).padStart(2, "0") : String(m);
  return `${h ? `${h}:` : ""}${mm}:${String(s).padStart(2, "0")}`;
}

function coursePassMark(course) {
  return Math.ceil(course.quiz.length / 2);
}

function renderCoursesList() {
  const courses = [...(window.COURSES ?? [])].sort((a, b) => a.title.localeCompare(b.title));
  const items = courses
    .map((course) => {
      const rec = store.courses?.[course.id];
      const status = rec?.done
        ? `done · best ${rec.score}/${rec.total}`
        : rec
          ? `best ${rec.score}/${rec.total} · ${coursePassMark(course)} to pass`
          : `${course.sections.length} sections · ${course.quiz.length}-q quiz`;
      return `
      <button class="calm-card${rec?.done ? " is-done" : ""}" type="button" data-id="${course.id}">
        <span class="calm-card-thumb"><img src="https://i.ytimg.com/vi/${course.videoId}/mqdefault.jpg" alt="" loading="lazy" referrerpolicy="no-referrer"></span>
        <span class="calm-card-name">${escapeHtml(course.title)}</span>
        <span class="calm-card-tag">${escapeHtml(course.channel)}</span>
        <span class="calm-card-meta">${courseLength(course.minutes)} · ${escapeHtml(course.level)} · ${status}</span>
        ${rec?.done ? '<span class="calm-card-check" aria-label="completed">✓</span>' : ""}
      </button>`;
    })
    .join("");

  els.learnPanel.innerHTML = `<div class="calm-grid">${items}</div>
    <p class="hint">Each course opens with a written summary, a timestamped outline, and a quiz underneath. Videos play from YouTube; nothing is downloaded.</p>`;

  els.learnPanel.querySelectorAll(".calm-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      learnCourseId = btn.dataset.id;
      learnQuiz = null;
      renderCourseDetail();
    });
  });
  els.learnPanel.querySelectorAll(".calm-card-thumb img").forEach((img) => {
    img.addEventListener("error", () => img.remove());
  });
}

function renderCourseDetail() {
  const course = (window.COURSES ?? []).find((c) => c.id === learnCourseId);
  if (!course) {
    learnCourseId = null;
    renderCoursesList();
    return;
  }

  if (!learnQuiz || learnQuiz.kind !== "course" || learnQuiz.id !== course.id) {
    learnQuiz = { id: course.id, kind: "course", answers: course.quiz.map(() => null), score: 0 };
  }

  const modules = course.sections
    .map(
      (section) => `
      <a class="course-module" href="https://www.youtube.com/watch?v=${course.videoId}&t=${section.t}s" target="_blank" rel="noopener">
        <span class="course-time">${courseTimeLabel(section.t)}</span>
        <span class="course-module-body">
          <span class="course-module-title">${escapeHtml(section.h)}</span>
          <span class="course-module-p">${fmt(section.p)}</span>
        </span>
        <span class="course-module-go" aria-hidden="true">▶</span>
      </a>`
    )
    .join("");

  const learns = course.learns.map((item) => `<li>${fmt(item)}</li>`).join("");

  els.learnPanel.innerHTML = `
    <div class="study-bar">
      <button class="ghost" id="course-back" type="button">&larr; Courses</button>
      <span>${courseLength(course.minutes)} · ${escapeHtml(course.level)}</span>
    </div>
    <div class="course-detail">
      <h2>${escapeHtml(course.title)}</h2>
      <p class="course-byline">${escapeHtml(course.channel)} · ${escapeHtml(course.teacher)}</p>
      <div class="course-video" id="course-video">
        <button class="course-play" id="course-play" type="button" aria-label="Play ${escapeHtml(course.title)}">
          <img src="https://i.ytimg.com/vi/${course.videoId}/maxresdefault.jpg" alt="" referrerpolicy="no-referrer">
          <span class="course-play-btn" aria-hidden="true">▶</span>
        </button>
      </div>
      <p class="course-summary">${escapeHtml(course.summary)}</p>
      <h3 class="course-sub">What you'll learn</h3>
      <ul class="course-learn">${learns}</ul>
      <h3 class="course-sub">Outline <span class="course-sub-hint">timestamps open YouTube</span></h3>
      <div class="course-modules">${modules}</div>
      <h3 class="quiz-title">Quiz</h3>
      <div class="quiz">${quizHtml(course.quiz)}</div>
      <div class="lesson-result hidden" id="course-result"></div>
      <div class="lesson-actions">
        <button class="secondary" id="course-review" type="button">Review these cards</button>
        <button class="ghost" id="course-youtube" type="button">Open on YouTube</button>
      </div>
      <p class="course-credit">Summary and quiz written for Learning Hub. The video, thumbnail, and chapter structure belong to ${escapeHtml(course.channel)}.</p>
    </div>`;

  document.getElementById("course-back").addEventListener("click", () => {
    learnCourseId = null;
    learnQuiz = null;
    renderCoursesList();
  });

  const poster = els.learnPanel.querySelector("#course-play img");
  poster?.addEventListener("error", () => {
    poster.src = `https://i.ytimg.com/vi/${course.videoId}/hqdefault.jpg`;
  });

  document.getElementById("course-play").addEventListener("click", () => startCourseVideo(course));

  document.getElementById("course-review").addEventListener("click", () => {
    startSession(window.DECKS[0], { topics: course.topics });
  });

  document.getElementById("course-youtube").addEventListener("click", () => {
    window.open(`https://www.youtube.com/watch?v=${course.videoId}`, "_blank", "noopener");
  });

  els.learnPanel.querySelector(".quiz").addEventListener("click", (e) => {
    const btn = e.target.closest(".quiz-option");
    if (btn) answerQuiz(Number(btn.dataset.q), Number(btn.dataset.o));
  });
}

/* ---------- Learn: curated GitHub repos ---------- */

function githubStudiedCount() {
  return (window.GITHUB_REPOS ?? []).filter((r) => store.github?.[r.id]?.done).length;
}

function renderGithubList() {
  const repos = [...(window.GITHUB_REPOS ?? [])].sort((a, b) => a.repo.split("/")[1].localeCompare(b.repo.split("/")[1]));
  const items = repos
    .map((repo) => {
      const rec = store.github?.[repo.id];
      const overlap = repo.topics.filter((t) => window.DECKS?.[0]?.cards.some((c) => c.t === t));
      const status = rec?.done
        ? `studied · ${new Date(rec.at).toLocaleDateString()}`
        : `${repo.kind} · ${repo.level}`;
      return `
      <button class="calm-card${rec?.done ? " is-done" : ""}" type="button" data-id="${repo.id}">
        <span class="calm-card-icon calm-card-gh"><span class="gh-mark" aria-hidden="true">${GH_MARK_SVG}</span></span>
        <span class="calm-card-name">${escapeHtml(repo.repo.split("/")[1])}</span>
        <span class="calm-card-tag">${escapeHtml(repo.title)}</span>
        <span class="calm-card-meta">${status} · ${escapeHtml(repo.license)}${overlap.length ? ` · ${overlap.length} deck topic${overlap.length > 1 ? "s" : ""}` : ""}</span>
        ${rec?.done ? '<span class="calm-card-check" aria-label="studied">✓</span>' : ""}
      </button>`;
    })
    .join("");

  const studied = githubStudiedCount();
  els.learnPanel.innerHTML = `<div class="calm-grid">${items}</div>
    <p class="hint">Free open-source repos we checked by hand — summaries are our own. Open one on GitHub, work through it, then mark it studied here. ${studied} of ${repos.length} explored.</p>`;

  els.learnPanel.querySelectorAll(".calm-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      learnGithubId = btn.dataset.id;
      renderGithubDetail();
    });
  });
}

function renderGithubDetail() {
  const repo = (window.GITHUB_REPOS ?? []).find((r) => r.id === learnGithubId);
  if (!repo) {
    learnGithubId = null;
    renderGithubList();
    return;
  }

  const rec = store.github?.[repo.id];
  const overlap = repo.topics.filter((t) => window.DECKS?.[0]?.cards.some((c) => c.t === t));
  const learns = repo.learns.map((item) => `<li>${fmt(item)}</li>`).join("");
  const topicChips = repo.topics.length
    ? `<div class="gh-topics">${repo.topics.map((t) => `<span class="chip">${escapeHtml(t)}</span>`).join("")}</div>`
    : "";

  els.learnPanel.innerHTML = `
    <div class="study-bar">
      <button class="ghost" id="gh-back" type="button">&larr; GitHub</button>
      <span>${escapeHtml(repo.kind)} · ${escapeHtml(repo.level)}</span>
    </div>
    <div class="lesson-detail">
      <h2>${escapeHtml(repo.title)}</h2>
      <p class="course-byline"><span class="gh-mark" aria-hidden="true">${GH_MARK_SVG}</span>${escapeHtml(repo.repo)} · License: ${escapeHtml(repo.license)}</p>
      <p class="course-summary">${escapeHtml(repo.summary)}</p>
      <h3 class="course-sub">What you'll get out of it</h3>
      <ul class="course-learn">${learns}</ul>
      ${topicChips}
      <div class="lesson-actions">
        <button class="primary" id="gh-read" type="button">Read in app</button>
        <button class="secondary" id="gh-open" type="button">Open on GitHub</button>
        <button class="secondary" id="gh-done" type="button">${rec?.done ? "Studied ✓" : "Mark as studied"}</button>
        ${overlap.length ? `<button class="secondary" id="gh-review" type="button">Review these cards</button>` : ""}
      </div>
      <p class="course-credit">Summary written for Learning Hub from the repo's public README; all content belongs to its authors. "Read in app" fetches the README and text files through the local server and caches them; nothing is published.</p>
    </div>`;

  document.getElementById("gh-back").addEventListener("click", () => {
    learnGithubId = null;
    renderGithubList();
  });

  document.getElementById("gh-read").addEventListener("click", () => openRepoReader(repo));

  document.getElementById("gh-open").addEventListener("click", () => {
    window.open(`https://github.com/${repo.repo}`, "_blank", "noopener");
  });

  document.getElementById("gh-done").addEventListener("click", () => {
    if (store.github?.[repo.id]?.done) return;
    store.github[repo.id] = { done: true, at: Date.now() };
    saveStore();
    addXp(25);
    renderGithubDetail();
  });

  document.getElementById("gh-review")?.addEventListener("click", () => {
    startSession(window.DECKS[0], { topics: overlap });
  });
}

/* ---------- Learn: tracks ---------- */

function trackStepState(step) {
  if (step.type === "lesson") {
    const lesson = window.LESSONS.find((l) => l.id === step.id);
    return lesson ? { title: lesson.title, done: !!store.lessons[lesson.id]?.done, open: () => openLearn("lessons", lesson.id) } : null;
  }
  if (step.type === "course") {
    const course = (window.COURSES ?? []).find((c) => c.id === step.id);
    return course ? { title: course.title, done: !!store.courses[course.id]?.done, open: () => openLearn("courses", course.id) } : null;
  }
  if (step.type === "project") {
    const project = window.PROJECTS.find((p) => p.id === step.id);
    return project
      ? {
          title: project.title,
          done: projectStepsDone(project) === project.steps.length,
          open: () => {
            show("projects");
            projectId = project.id;
            renderProjectDetail();
          },
        }
      : null;
  }
  if (step.type === "repo") {
    const repo = (window.GITHUB_REPOS ?? []).find((r) => r.id === step.id);
    return repo
      ? {
          title: repo.title,
          done: !!store.github[repo.id]?.done,
          open: () => {
            show("learn");
            learnMode = "github";
            learnLessonId = null;
            learnCourseId = null;
            learnTrackId = null;
            learnGithubId = repo.id;
            updateLearnTabs();
            renderLearnPanel();
          },
        }
      : null;
  }
  return null;
}

function trackProgress(track) {
  if (track.kind === "roadmap") {
    const { done, total, complete } = roadmapProgress(track);
    return { steps: [], done, total, complete };
  }
  const steps = track.steps.map(trackStepState).filter(Boolean);
  const done = steps.filter((s) => s.done).length;
  return { steps, done, total: steps.length, complete: steps.length > 0 && done === steps.length };
}

function renderTracksList() {
  const tracks = window.TRACKS ?? [];
  const items = tracks
    .map((track) => {
      const { done, total, complete } = trackProgress(track);
      const unit = track.kind === "roadmap" ? "stages" : "steps";
      return `
      <button class="calm-card${complete ? " is-done" : ""}" type="button" data-id="${track.id}">
        <span class="calm-card-icon">${track.icon || "🛤️"}</span>
        <span class="calm-card-name">${escapeHtml(track.short || track.id)}</span>
        <span class="calm-card-tag">${escapeHtml(track.summary)}</span>
        <span class="calm-card-meta">${escapeHtml(track.level)} · ${done}/${total} ${unit}${complete ? " · done" : ""}</span>
        ${complete ? '<span class="calm-card-check" aria-label="completed">✓</span>' : ""}
      </button>`;
    })
    .join("");

  els.learnPanel.innerHTML = `<div class="calm-grid">${items}</div>
    <p class="hint">Tracks group lessons, courses, projects, and repos into one guided path. The Python and AI/ML roadmaps are gated: pass each stage test to unlock the next.</p>`;

  els.learnPanel.querySelectorAll(".calm-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      learnTrackId = btn.dataset.id;
      roadStageId = null;
      roadProjectOpen = false;
      roadDraft = null;
      renderTrackDetail();
    });
  });
}

function renderTrackDetail() {
  const track = (window.TRACKS ?? []).find((t) => t.id === learnTrackId);
  if (!track) {
    learnTrackId = null;
    renderTracksList();
    return;
  }
  if (track.kind === "roadmap") {
    renderRoadmap(track);
    return;
  }

  const { steps, done, total, complete } = trackProgress(track);
  const stepRows = steps
    .map((step, index) => `
      <div class="track-step ${step.done ? "done" : ""}">
        <div class="track-check">${step.done ? "✓" : index + 1}</div>
        <div class="track-body">
          <div class="track-name">${escapeHtml(step.title)}</div>
          <div class="track-note">${escapeHtml(track.steps[index].note || "")}</div>
        </div>
        <button class="plan-go" type="button" data-step="${index}">${step.done ? "Open" : "Start"}</button>
      </div>`)
    .join("");

  els.learnPanel.innerHTML = `
    <div class="study-bar">
      <button class="ghost" id="track-back" type="button">&larr; Tracks</button>
      <span>${escapeHtml(track.level)} · ${done}/${total} steps</span>
    </div>
    <div class="track-detail">
      <h2>${track.icon || ""} ${escapeHtml(track.title)}</h2>
      <p class="lesson-lede">${escapeHtml(track.summary)}</p>
      <div class="plan-bar" role="progressbar" aria-valuenow="${done}" aria-valuemin="0" aria-valuemax="${total}">
        <span style="width:${total ? (done / total) * 100 : 0}%"></span>
      </div>
      <div class="track-steps">${stepRows}</div>
      ${complete ? '<p class="track-complete"><strong>Track complete.</strong> Every step is done — the path is yours now.</p>' : ""}
    </div>`;

  document.getElementById("track-back").addEventListener("click", () => {
    learnTrackId = null;
    renderTracksList();
  });

  els.learnPanel.querySelectorAll(".plan-go").forEach((btn) => {
    btn.addEventListener("click", () => steps[Number(btn.dataset.step)].open());
  });
}

/* ---------- Learn: roadmaps ---------- */

const ROAD_CODE_KEY = "pycards.roadcode.v1";
const REVIEW_AFTER_DAYS = 3;
let codeDrafts = loadCodeDrafts();
let codeDraftTimer = 0;
let roadCheckBusy = false;

function loadCodeDrafts() {
  try {
    const raw = localStorage.getItem(ROAD_CODE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function saveCodeDrafts() {
  try {
    localStorage.setItem(ROAD_CODE_KEY, JSON.stringify(codeDrafts));
  } catch {
    // storage unavailable — drafts stay in memory until reload
  }
}

function queueDraftSave() {
  clearTimeout(codeDraftTimer);
  codeDraftTimer = setTimeout(saveCodeDrafts, 300);
}

function draftCode(id, starter) {
  return typeof codeDrafts[id] === "string" ? codeDrafts[id] : starter;
}

function setDraftCode(id, code) {
  codeDrafts[id] = code;
  saveCodeDrafts();
}

function resetDraftCode(id) {
  delete codeDrafts[id];
  saveCodeDrafts();
}

function roadmapData(trackId = learnTrackId) {
  const maps = window.ROADMAPS ?? { aiml: window.AIML_ROADMAP, python: window.PY_ROADMAP };
  return maps[trackId] ?? maps.aiml ?? { id: trackId, stages: [], project: null, resources: [] };
}

function roadmapStages(trackId = learnTrackId) {
  return roadmapData(trackId).stages ?? [];
}

function roadmapState(trackId = learnTrackId) {
  const id = roadmapData(trackId).id ?? trackId ?? "aiml";
  if (!store.roadmaps) store.roadmaps = {};
  if (!store.roadmaps[id])
    store.roadmaps[id] = {
      passed: {},
      projectChecks: {},
      projectDone: false,
      exercises: {},
      code: {},
      attempts: {},
    };
  return store.roadmaps[id];
}

function roadmapProgress(track) {
  const trackId = track?.id ?? learnTrackId;
  const stages = roadmapStages(trackId);
  const state = roadmapState(trackId);
  const passed = stages.filter((stage) => !!state.passed?.[stage.id]).length;
  const total = stages.length + (roadmapData(trackId).project ? 1 : 0);
  const done = passed + (state.projectDone ? 1 : 0);
  return { done, total, complete: total > 0 && done === total };
}

function stageExercises(stage) {
  const list = [];
  (stage.sections ?? []).forEach((section) => (section.exercises ?? []).forEach((ex) => list.push(ex)));
  return list;
}

function exerciseSectionIndex(stage, flat) {
  const sections = stage.sections ?? [];
  let seen = 0;
  for (let si = 0; si < sections.length; si++) {
    const count = (sections[si].exercises ?? []).length;
    if (flat < seen + count) return si;
    seen += count;
  }
  return 0;
}

function stageLabs(stage) {
  const labs = window.PY_ROAD_LABS?.[stage.id];
  return Array.isArray(labs) ? labs : [];
}

function stageBuild(stage) {
  return window.PY_ROAD_BUILDS?.[stage.id] ?? null;
}

function exerciseKey(stage, index) {
  return `${stage.id}:${index}`;
}

function labKey(stage, index) {
  return `${stage.id}:lab:${index}`;
}

function buildKey(stage) {
  return `${stage.id}:build`;
}

function exerciseSolved(stage, index, trackId = learnTrackId) {
  return !!roadmapState(trackId).exercises?.[exerciseKey(stage, index)];
}

function codeSolved(stage, key, trackId = learnTrackId) {
  return !!roadmapState(trackId).code?.[key];
}

function stageGate(stage, trackId = learnTrackId) {
  const state = roadmapState(trackId);
  const exercises = stageExercises(stage);
  const solved = exercises.filter((_, i) => exerciseSolved(stage, i, trackId)).length;
  const labs = stageLabs(stage);
  const labsDone = labs.filter((_, i) => !!state.code?.[labKey(stage, i)]).length;
  const build = stageBuild(stage);
  const buildDone = build ? !!state.code?.[buildKey(stage)] : false;
  const total = exercises.length + labs.length + (build ? 1 : 0);
  const done = solved + labsDone + (buildDone ? 1 : 0);
  return { exercises, solved, labs, labsDone, build, buildDone, done, total, ready: done === total };
}

function noteRoadMiss(stage, spot, trackId = learnTrackId) {
  const state = roadmapState(trackId);
  state.attempts = state.attempts ?? {};
  const key = `${stage.id}:${spot}`;
  state.attempts[key] = (Number(state.attempts[key]) || 0) + 1;
  saveStore();
}

function exerciseMatches(ex, raw) {
  const text = String(raw ?? "").trim();
  if (typeof ex.answer === "number") {
    const value = Number(text.replace(",", "."));
    return (
      Number.isFinite(value) &&
      Math.abs(value - ex.answer) <= (ex.tol ?? 0.001) * Math.max(1, Math.abs(ex.answer))
    );
  }
  const norm = (value) =>
    String(value)
      .trim()
      .toLowerCase()
      .replace(/['"`]/g, '"')
      .replace(/\s+/g, " ");
  const expected = norm(ex.answer);
  const given = norm(text);
  if (expected === given) return true;
  return /^[\[(]/.test(expected) && expected.replace(/\s+/g, "") === given.replace(/\s+/g, "");
}

function roadTestHint(stage, index, stageCount, gate) {
  const next = index + 1 === stageCount ? "the final project" : "the next stage";
  if (!gate.ready) {
    const parts = [];
    if (gate.exercises.length) parts.push(`${gate.solved}/${gate.exercises.length} quick answers`);
    if (gate.labs.length) parts.push(`${gate.labsDone}/${gate.labs.length} code labs`);
    if (gate.build) parts.push(gate.buildDone ? "mini-build passed" : "the mini-build");
    return `Finish the practice set to unlock the stage test: ${parts.join(" · ")}.`;
  }
  return `Get all ${stage.quiz.length} right to unlock ${next}. You can retry as often as you need.`;
}

function roadmapWeakSpots(trackId = learnTrackId) {
  const stages = roadmapStages(trackId);
  const state = roadmapState(trackId);
  const attempts = state.attempts ?? {};
  const spots = [];
  stages.forEach((stage, index) => {
    const unlocked = index === 0 || !!state.passed?.[stages[index - 1].id];
    if (!unlocked) return;
    const labs = stageLabs(stage);
    (stage.sections ?? []).forEach((section, si) => {
      const quick = Number(attempts[`${stage.id}:s${si}`]) || 0;
      if (quick)
        spots.push({
          stageId: stage.id,
          target: `sec-${stage.id}-${si}`,
          label: `${stage.title} · ${section.h}`,
          kind: "Quick answers",
          count: quick,
        });
      if (labs[si]) {
        const lab = Number(attempts[`${stage.id}:lab:${si}`]) || 0;
        if (lab)
          spots.push({
            stageId: stage.id,
            target: `lab-${stage.id}-${si}`,
            label: `${section.h} · ${labs[si].title}`,
            kind: "Code lab",
            count: lab,
          });
      }
    });
    if (stageBuild(stage) && attempts[`${stage.id}:build`])
      spots.push({
        stageId: stage.id,
        target: `build-${stage.id}`,
        label: `${stage.title} · mini-build`,
        kind: "Mini-build",
        count: Number(attempts[`${stage.id}:build`]) || 0,
      });
    if (attempts[`${stage.id}:quiz`] && (state.passed?.[stage.id] || stageGate(stage, trackId).ready))
      spots.push({
        stageId: stage.id,
        target: "road-test",
        label: `${stage.title} · stage test`,
        kind: "Stage test",
        count: Number(attempts[`${stage.id}:quiz`]) || 0,
      });
  });
  return spots.sort((a, b) => b.count - a.count);
}

function roadmapReviewQueue(now = Date.now()) {
  const due = [];
  const maps = window.ROADMAPS ?? {};
  Object.keys(maps).forEach((trackId) => {
    const data = maps[trackId];
    const state = store.roadmaps?.[data.id ?? trackId];
    if (!state) return;
    (data.stages ?? []).forEach((stage) => {
      let index = 0;
      (stage.sections ?? []).forEach((section, si) => {
        (section.exercises ?? []).forEach((ex) => {
          const key = exerciseKey(stage, index);
          const at = Number(state.exercises?.[key]) || 0;
          if (at && now - at >= REVIEW_AFTER_DAYS * 864e5)
            due.push({
              trackId: data.id ?? trackId,
              trackTitle: data.title,
              stage,
              stageId: stage.id,
              sectionIndex: si,
              section: section.h,
              ex,
              index,
              key,
              at,
            });
          index += 1;
        });
      });
    });
  });
  return due.sort((a, b) => a.at - b.at);
}

function roadmapReviewDue(trackId = learnTrackId) {
  const id = roadmapData(trackId).id ?? trackId;
  return roadmapReviewQueue().filter((item) => item.trackId === id);
}

function renderRoadmap(track) {
  if (roadProjectOpen) renderRoadmapProject(track);
  else if (roadStageId) renderRoadmapStage(track);
  else renderRoadmapStages(track);
}

function renderRoadmapStages(track) {
  const stages = roadmapStages(track.id);
  const state = roadmapState(track.id);
  const { done, total, complete } = roadmapProgress(track);

  const rows = stages
    .map((stage, index) => {
      const passed = !!state.passed?.[stage.id];
      const unlocked = index === 0 || !!state.passed?.[stages[index - 1].id];
      return `
      <div class="track-step road-step${passed ? " done" : ""}${unlocked ? "" : " locked"}">
        <div class="track-check">${passed ? "✓" : unlocked ? index + 1 : "🔒"}</div>
        <div class="track-body">
          <div class="track-name">${stage.icon || ""} ${escapeHtml(stage.title)}</div>
          <div class="track-note">${escapeHtml(stage.summary)} · ${stage.minutes} min</div>
        </div>
        <button class="plan-go" type="button" data-stage="${index}" ${unlocked ? "" : "disabled"}>
          ${passed ? "Review" : unlocked ? "Study" : "Locked"}
        </button>
      </div>`;
    })
    .join("");

  const project = roadmapData(track.id).project;
  const allPassed = stages.every((stage) => !!state.passed?.[stage.id]);
  const projectDone = !!state.projectDone;
  const projectRow = project
    ? `
      <div class="track-step road-step road-final${projectDone ? " done" : ""}${allPassed ? "" : " locked"}">
        <div class="track-check">${projectDone ? "✓" : allPassed ? "🏁" : "🔒"}</div>
        <div class="track-body">
          <div class="track-name">${escapeHtml(project.title)}</div>
          <div class="track-note">Final project — ${allPassed ? "unlocked, one build to finish" : "pass every stage to unlock"}</div>
        </div>
        <button class="plan-go" type="button" data-project="1" ${allPassed ? "" : "disabled"}>
          ${projectDone ? "Review" : allPassed ? "Open" : "Locked"}
        </button>
      </div>`
    : "";

  const resources = (roadmapData(track.id).resources ?? [])
    .map(
      (link) =>
        `<a class="road-resource" href="${link.href}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)} ↗</a>`
    )
    .join("");

  const reviewDue = roadmapReviewDue(track.id).length;
  const weak = roadmapWeakSpots(track.id).slice(0, 4);
  const reviewPanel = reviewDue
    ? `<div class="road-review-due">
        <div class="road-review-copy">
          <strong>${reviewDue} solved problem${reviewDue === 1 ? "" : "s"} due for review</strong>
          <span>Answers resurface ${REVIEW_AFTER_DAYS} days after you solve them.</span>
        </div>
        <button class="plan-go" id="road-review" type="button">Review</button>
      </div>`
    : "";
  const weakPanel = weak.length
    ? `<div class="road-weak">
        <div class="road-weak-head">Focus next</div>
        <div class="road-weak-list">
          ${weak
            .map(
              (spot) => `<button class="road-weak-item" type="button" data-weak-stage="${escapeHtml(
                spot.stageId
              )}" data-weak-target="${escapeHtml(spot.target)}">
                <span class="road-weak-label">${escapeHtml(spot.label)}</span>
                <span class="road-weak-meta">${escapeHtml(spot.kind)} · ${spot.count} miss${spot.count === 1 ? "" : "es"}</span>
              </button>`
            )
            .join("")}
        </div>
      </div>`
    : "";

  els.learnPanel.innerHTML = `
    <div class="study-bar">
      <button class="ghost" id="track-back" type="button">&larr; Tracks</button>
      <span>${escapeHtml(track.level)} · ${done}/${total} stages</span>
    </div>
    <div class="track-detail">
      <h2>${track.icon || ""} ${escapeHtml(track.title)}</h2>
      <p class="lesson-lede">${escapeHtml(track.summary)}</p>
      <div class="plan-bar" role="progressbar" aria-valuenow="${done}" aria-valuemin="0" aria-valuemax="${total}">
        <span style="width:${total ? (done / total) * 100 : 0}%"></span>
      </div>
      ${reviewPanel}
      ${weakPanel}
      <div class="track-steps">${rows}${projectRow}</div>
      ${complete ? '<p class="track-complete"><strong>Roadmap complete.</strong> Every stage passed and the project is in. This is the path you build on.</p>' : ""}
      ${resources ? `<div class="road-resources"><div class="road-resources-head">More roadmaps &amp; courses</div>${resources}</div>` : ""}
    </div>`;

  document.getElementById("track-back").addEventListener("click", () => {
    learnTrackId = null;
    roadStageId = null;
    roadProjectOpen = false;
    roadDraft = null;
    renderTracksList();
  });

  const reviewBtn = document.getElementById("road-review");
  if (reviewBtn) reviewBtn.addEventListener("click", () => openLearn("review"));

  els.learnPanel.querySelectorAll(".road-weak-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const stage = stages.find((s) => s.id === btn.dataset.weakStage);
      if (!stage) return;
      roadStageId = stage.id;
      roadProjectOpen = false;
      roadDraft = null;
      renderRoadmapStage(track);
      requestAnimationFrame(() => {
        const target = document.getElementById(btn.dataset.weakTarget);
        if (!target) return;
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        target.classList.add("flash");
        setTimeout(() => target.classList.remove("flash"), 1600);
      });
    });
  });

  els.learnPanel.querySelectorAll(".plan-go[data-stage]").forEach((btn) => {
    btn.addEventListener("click", () => {
      roadStageId = stages[Number(btn.dataset.stage)].id;
      roadProjectOpen = false;
      roadDraft = null;
      renderRoadmap(track);
    });
  });

  const projectBtn = els.learnPanel.querySelector(".plan-go[data-project]");
  if (projectBtn)
    projectBtn.addEventListener("click", () => {
      roadProjectOpen = true;
      roadStageId = null;
      renderRoadmap(track);
    });
}

function roadCodeHtml({ kind, index, id, title, brief, hint, draft, done }) {
  const data = kind === "lab" ? `data-lab="${index}"` : "data-build";
  return `
    <div class="road-lab${done ? " passed" : ""}" id="${id}" ${kind === "lab" ? `data-lab-wrap="${index}"` : "data-build-wrap"}>
      <div class="road-lab-head">
        <span class="road-lab-title">${kind === "lab" ? "Code lab" : "Mini-build"} · ${escapeHtml(title)}</span>
        <span class="road-lab-state${done ? " done" : ""}">${done ? "Passed ✓" : ""}</span>
      </div>
      <p class="road-lab-brief">${fmt(brief)}</p>
      <textarea class="road-lab-code" ${data} rows="8" spellcheck="false" aria-label="${escapeHtml(title)} code">${escapeHtml(draft)}</textarea>
      <div class="road-lab-row">
        <button class="plan-go road-lab-run" type="button" ${data}>Run checks</button>
        <button class="ghost road-lab-reset" type="button" ${data}>Reset starter</button>
        <button class="ghost road-lab-hint" type="button" ${data}>Hint</button>
      </div>
      <p class="road-lab-hint hidden">${fmt(hint)}</p>
      <div class="road-lab-out"></div>
    </div>`;
}

function renderRoadmapStage(track) {
  const stages = roadmapStages(track.id);
  const state = roadmapState(track.id);
  const index = stages.findIndex((stage) => stage.id === roadStageId);
  const stage = stages[index];
  if (!stage) {
    roadStageId = null;
    renderRoadmapStages(track);
    return;
  }
  const unlocked = index === 0 || !!state.passed?.[stages[index - 1].id];
  if (!unlocked) {
    roadStageId = null;
    renderRoadmapStages(track);
    return;
  }

  if (!roadDraft || roadDraft.stageId !== stage.id) {
    roadDraft = { stageId: stage.id, answers: stage.quiz.map(() => null), score: 0 };
  }
  const passed = !!state.passed?.[stage.id];
  const gate = stageGate(stage, track.id);
  const testReady = passed || gate.ready;
  const labs = stageLabs(stage);
  const build = stageBuild(stage);
  const trackKey = roadmapData(track.id).id ?? track.id;

  // Boss battle: every solved exercise / lab / build chips the boss's HP.
  const bossTotal = gate.exercises.length + labs.length + (build ? 1 : 0);
  const bossSolvedCount = () => {
    let n = 0;
    gate.exercises.forEach((_, i) => {
      if (exerciseSolved(stage, i, track.id)) n++;
    });
    labs.forEach((_, si) => {
      if (codeSolved(stage, labKey(stage, si), track.id)) n++;
    });
    if (build && codeSolved(stage, buildKey(stage), track.id)) n++;
    return n;
  };
  const bossHp = () => (bossTotal ? Math.max(0, Math.round(((bossTotal - bossSolvedCount()) / bossTotal) * 100)) : 0);
  const hp0 = bossHp();
  const defeated0 = passed || hp0 === 0;

  let exIndex = 0;
  const sections = stage.sections
    .map((section, si) => {
      const exHtml = (section.exercises ?? [])
        .map((ex, localIndex) => {
          const i = exIndex++;
          const solved = exerciseSolved(stage, i, track.id);
          return `
        <div class="road-ex${solved ? " solved" : ""}" data-ex="${i}">
          <div class="road-ex-q">${localIndex + 1}. ${fmt(ex.q)}</div>
          <div class="road-ex-row">
            <input class="road-ex-input" type="text" inputmode="${
              typeof ex.answer === "number" ? "decimal" : "text"
            }" data-ex="${i}" ${
              solved ? `value="${escapeHtml(String(ex.answer))}" disabled` : ""
            } placeholder="your answer" aria-label="Answer" />
            <button class="plan-go road-ex-check" type="button" data-ex="${i}" ${solved ? "disabled" : ""}>Check</button>
            <button class="ghost road-ex-reveal" type="button" data-ex="${i}">Solution</button>
          </div>
          <p class="road-ex-msg ${solved ? "good" : ""}" data-ex="${i}">${solved ? "Solved ✓" : ""}</p>
          <p class="road-ex-solution ${solved ? "" : "hidden"}" data-ex="${i}">${fmt(ex.solution)}</p>
        </div>`;
        })
        .join("");
      const lab = labs[si];
      const labHtml = lab
        ? roadCodeHtml({
            kind: "lab",
            index: si,
            id: `lab-${stage.id}-${si}`,
            title: lab.title,
            brief: lab.brief,
            hint: lab.hint ?? "Break the problem into steps and test one function at a time.",
            draft: draftCode(`${trackKey}:${labKey(stage, si)}`, lab.starter),
            done: codeSolved(stage, labKey(stage, si), track.id),
          })
        : "";
      return `
      <section class="lesson-section road-sec" id="sec-${stage.id}-${si}">
        <h3>${escapeHtml(section.h)}</h3>
        ${section.p ? `<p>${fmt(section.p)}</p>` : ""}
        ${section.code ? `<pre class="lesson-code"><code>${escapeHtml(section.code)}</code></pre>` : ""}
        ${exHtml ? `<div class="road-exercises"><div class="road-ex-head">Practice</div>${exHtml}</div>` : ""}
        ${labHtml}
      </section>`;
    })
    .join("");

  const buildHtml = build
    ? roadCodeHtml({
        kind: "build",
        index: 0,
        id: `build-${stage.id}`,
        title: build.title.replace(/^Mini-build · /, ""),
        brief: build.brief,
        hint: build.hint ?? "Start with the smallest function and print intermediate values.",
        draft: draftCode(`${trackKey}:${buildKey(stage)}`, build.starter),
        done: codeSolved(stage, buildKey(stage), track.id),
      })
    : "";

  els.learnPanel.innerHTML = `
    <div class="study-bar">
      <button class="ghost" id="road-back" type="button">&larr; Roadmap</button>
      <span>Stage ${index + 1} of ${stages.length} · ${stage.minutes} min</span>
    </div>
    <div class="lesson-detail">
      <h2>${stage.icon || ""} ${escapeHtml(stage.title)}</h2>
      <p class="lesson-lede">${escapeHtml(stage.summary)}</p>
      <div class="boss-bar ${defeated0 ? "defeated" : ""}" id="boss-bar" data-hp="${hp0}">
        <span class="boss-icon">${defeated0 ? "🏆" : "👹"}</span>
        <div class="boss-body">
          <div class="boss-name">${defeated0 ? "Boss defeated — stage mastered!" : `Boss · ${escapeHtml(stage.title)}`}</div>
          <div class="boss-hp"><span id="boss-hp-fill" style="width:${hp0}%"></span></div>
        </div>
        <span class="boss-hp-text" id="boss-hp-text">${defeated0 ? "Defeated" : `${hp0}% HP`}</span>
      </div>
      <div class="lesson-body">${sections}</div>
      ${buildHtml}
      <h3 class="quiz-title">${passed ? "Stage test (retake)" : "Stage test"}</h3>
      <p class="hint" id="road-test-hint">${roadTestHint(stage, index, stages.length, gate)}</p>
      <div class="quiz${testReady ? "" : " hidden"}" id="road-test">${quizHtml(stage.quiz)}</div>
      <div class="lesson-result hidden" id="road-result"></div>
    </div>`;

  document.getElementById("road-back").addEventListener("click", () => {
    roadStageId = null;
    roadDraft = null;
    renderRoadmapStages(track);
  });

  const refreshGate = () => {
    const live = stageGate(stage, track.id);
    const hint = document.getElementById("road-test-hint");
    if (hint) hint.textContent = roadTestHint(stage, index, stages.length, live);
    if (passed || live.ready) {
      const quiz = document.getElementById("road-test");
      if (quiz) quiz.classList.remove("hidden");
    }
    const bar = document.getElementById("boss-bar");
    if (bar) {
      const hp = bossHp();
      const dead = passed || hp === 0;
      const prev = Number(bar.dataset.hp ?? hp0);
      const fill = document.getElementById("boss-hp-fill");
      const txt = document.getElementById("boss-hp-text");
      if (fill) fill.style.width = `${hp}%`;
      if (txt) txt.textContent = dead ? "Defeated" : `${hp}% HP`;
      bar.classList.toggle("defeated", dead);
      if (hp < prev) {
        bar.classList.remove("hit");
        void bar.offsetWidth;
        bar.classList.add("hit");
        Juice.sound("hit");
        const icon = bar.querySelector(".boss-icon");
        if (icon) icon.textContent = dead ? "🏆" : "👹";
        const name = bar.querySelector(".boss-name");
        if (name && dead) name.textContent = "Boss defeated — stage mastered!";
        if (dead) Juice.confetti(90);
      }
      bar.dataset.hp = String(hp);
    }
  };

  document.getElementById("road-test").addEventListener("click", (e) => {
    const btn = e.target.closest(".quiz-option");
    if (btn) answerRoadQuiz(track, index, Number(btn.dataset.q), Number(btn.dataset.o));
  });

  const checkExercise = (i) => {
    const ex = gate.exercises[i];
    const input = els.learnPanel.querySelector(`.road-ex-input[data-ex="${i}"]`);
    const msg = els.learnPanel.querySelector(`.road-ex-msg[data-ex="${i}"]`);
    if (!ex || !input || input.disabled) return;
    if (!exerciseMatches(ex, input.value)) {
      const empty = !String(input.value).trim();
      msg.textContent = empty ? "Type your answer first." : "Not quite — check your work and try again.";
      msg.classList.remove("good");
      msg.classList.add("bad");
      if (!empty) noteRoadMiss(stage, `s${exerciseSectionIndex(stage, i)}`, track.id);
      return;
    }

    const state = roadmapState(track.id);
    state.exercises = state.exercises ?? {};
    state.exercises[exerciseKey(stage, i)] = Date.now();
    saveStore();
    addXp(5);

    input.value = ex.answer;
    input.disabled = true;
    const row = input.closest(".road-ex");
    row.classList.add("solved");
    const checkBtn = row.querySelector(".road-ex-check");
    if (checkBtn) checkBtn.disabled = true;
    msg.textContent = "Correct ✓";
    msg.classList.remove("bad");
    msg.classList.add("good");

    refreshGate();
  };

  els.learnPanel.querySelectorAll(".road-ex-check").forEach((btn) => {
    btn.addEventListener("click", () => checkExercise(Number(btn.dataset.ex)));
  });

  els.learnPanel.querySelectorAll(".road-ex-input").forEach((input) => {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        checkExercise(Number(input.dataset.ex));
      }
    });
  });

  els.learnPanel.querySelectorAll(".road-ex-reveal").forEach((btn) => {
    btn.addEventListener("click", () => {
      const sol = els.learnPanel.querySelector(`.road-ex-solution[data-ex="${btn.dataset.ex}"]`);
      if (sol) sol.classList.toggle("hidden");
    });
  });

  const codeTask = (kind, labIndex) => (kind === "lab" ? labs[labIndex] : build);
  const codeDraftId = (kind, labIndex) =>
    `${trackKey}:${kind === "lab" ? labKey(stage, labIndex) : buildKey(stage)}`;

  async function runCodeTask(kind, labIndex, button) {
    const wrapper =
      kind === "lab"
        ? els.learnPanel.querySelector(`.road-lab[data-lab-wrap="${labIndex}"]`)
        : els.learnPanel.querySelector(".road-lab[data-build-wrap]");
    const task = codeTask(kind, labIndex);
    if (!wrapper || !task) return;
    const textarea = wrapper.querySelector(".road-lab-code");
    const out = wrapper.querySelector(".road-lab-out");
    if (roadCheckBusy) {
      out.innerHTML = `<div class="test-summary">Wait for the other checks to finish.</div>`;
      return;
    }

    const code = textarea.value;
    setDraftCode(codeDraftId(kind, labIndex), code);
    roadCheckBusy = true;
    button.disabled = true;
    button.textContent = "Running…";
    out.innerHTML = `<div class="test-summary">Running ${task.tests.length} checks…</div>`;
    try {
      const started = performance.now();
      const { error, results } = await runExerciseChecks(code, task.tests);
      out.innerHTML = checkResultsHtml(error, results, performance.now() - started);
      const ok = !error && results.length > 0 && results.every((result) => result.ok);
      if (ok) {
        const live = roadmapState(track.id);
        live.code = live.code ?? {};
        const key = kind === "lab" ? labKey(stage, labIndex) : buildKey(stage);
        const first = !live.code[key];
        live.code[key] = Date.now();
        if (first) addXp(kind === "lab" ? 15 : 30);
        saveStore();
        wrapper.classList.add("passed");
        const status = wrapper.querySelector(".road-lab-state");
        status.textContent = "Passed ✓";
        status.classList.add("done");
      } else {
        noteRoadMiss(stage, kind === "lab" ? `lab:${labIndex}` : "build", track.id);
      }
      refreshGate();
    } catch (err) {
      out.innerHTML = checkResultsHtml(err?.message ?? String(err), [], 0);
    } finally {
      roadCheckBusy = false;
      button.disabled = false;
      button.textContent = "Run checks";
    }
  }

  els.learnPanel.querySelectorAll(".road-lab-run").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.lab !== undefined) runCodeTask("lab", Number(btn.dataset.lab), btn);
      else runCodeTask("build", 0, btn);
    });
  });

  els.learnPanel.querySelectorAll(".road-lab-reset").forEach((btn) => {
    btn.addEventListener("click", () => {
      const kind = btn.dataset.lab !== undefined ? "lab" : "build";
      const labIndex = Number(btn.dataset.lab ?? 0);
      const task = codeTask(kind, labIndex);
      const wrapper = btn.closest(".road-lab");
      if (!task || !wrapper) return;
      resetDraftCode(codeDraftId(kind, labIndex));
      wrapper.querySelector(".road-lab-code").value = task.starter;
      wrapper.querySelector(".road-lab-out").innerHTML = "";
    });
  });

  els.learnPanel.querySelectorAll(".road-lab-hint").forEach((btn) => {
    btn.addEventListener("click", () => {
      const hint = btn.closest(".road-lab")?.querySelector(".road-lab-hint");
      if (hint) hint.classList.toggle("hidden");
    });
  });

  els.learnPanel.querySelectorAll(".road-lab-code").forEach((textarea) => {
    const kind = textarea.dataset.lab !== undefined ? "lab" : "build";
    const labIndex = Number(textarea.dataset.lab ?? 0);
    textarea.addEventListener("input", () => {
      codeDrafts[codeDraftId(kind, labIndex)] = textarea.value;
      queueDraftSave();
    });
    textarea.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        const run = textarea.closest(".road-lab")?.querySelector(".road-lab-run");
        if (run && !run.disabled) run.click();
      }
    });
  });
}

function answerRoadQuiz(track, index, qi, oi) {
  const stages = roadmapStages(track.id);
  const stage = stages[index];
  if (!roadDraft || roadDraft.stageId !== stage.id || roadDraft.answers[qi] !== null) return;

  const q = stage.quiz[qi];
  const correct = oi === q.answer;
  roadDraft.answers[qi] = oi;
  if (correct) roadDraft.score++;
  else noteRoadMiss(stage, "quiz", track.id);

  const item = els.learnPanel.querySelector(`.quiz-item[data-q="${qi}"]`);
  item.querySelectorAll(".quiz-option").forEach((btn) => {
    const i = Number(btn.dataset.o);
    if (i === q.answer) btn.classList.add("correct");
    else if (i === oi) btn.classList.add("wrong");
    btn.disabled = true;
  });
  const why = item.querySelector(".quiz-why");
  why.innerHTML = `${correct ? "Correct." : "Not quite."} ${fmt(q.why)}`;
  why.classList.remove("hidden");

  if (roadDraft.answers.every((answer) => answer !== null)) finishRoadStage(track, index, stage);
}

function finishRoadStage(track, index, stage) {
  const stages = roadmapStages(track.id);
  const total = stage.quiz.length;
  const passed = roadDraft.score === total;
  const result = document.getElementById("road-result");
  if (!result) return;
  result.classList.remove("hidden");

  if (!passed) {
    result.innerHTML = `<strong>Not yet.</strong> ${roadDraft.score}/${total} right. Re-read the sections above, then try the test again. <button class="secondary" id="road-retry" type="button">Retry test</button>`;
    document.getElementById("road-retry").addEventListener("click", () => {
      roadDraft = { stageId: stage.id, answers: stage.quiz.map(() => null), score: 0 };
      renderRoadmapStage(track);
    });
    return;
  }

  const state = roadmapState(track.id);
  const firstPass = !state.passed?.[stage.id];
  if (firstPass) {
    state.passed[stage.id] = Date.now();
    saveStore();
    addXp(40);
  }

  const isLast = index === stages.length - 1;
  result.innerHTML = `<strong>Stage passed.</strong> ${roadDraft.score}/${total}. ${
    isLast ? "Every stage is done — the final project is unlocked." : "The next stage is unlocked."
  } <button class="secondary" id="road-continue" type="button">${
    isLast ? "See the final project" : "Next stage →"
  }</button>`;
  document.getElementById("road-continue").addEventListener("click", () => {
    roadDraft = null;
    if (isLast) {
      roadStageId = null;
      roadProjectOpen = false;
      renderRoadmapStages(track);
    } else {
      roadStageId = stages[index + 1].id;
      renderRoadmapStage(track);
    }
  });
}

function renderRoadmapProject(track) {
  const stages = roadmapStages(track.id);
  const state = roadmapState(track.id);
  const allPassed = stages.every((stage) => !!state.passed?.[stage.id]);
  if (!allPassed) {
    roadProjectOpen = false;
    renderRoadmapStages(track);
    return;
  }

  const project = roadmapData(track.id).project;
  const checks = state.projectChecks ?? {};
  const done = !!state.projectDone;
  const allChecked = project.checklist.every((_, i) => checks[i]);

  const items = project.checklist
    .map(
      (line, i) => `
      <button class="road-check-item${checks[i] ? " checked" : ""}" type="button" data-check="${i}">
        <span class="road-box">${checks[i] ? "✓" : ""}</span>
        <span>${escapeHtml(line)}</span>
      </button>`
    )
    .join("");

  els.learnPanel.innerHTML = `
    <div class="study-bar">
      <button class="ghost" id="road-back" type="button">&larr; Roadmap</button>
      <span>Final project</span>
    </div>
    <div class="lesson-detail">
      <h2>🏁 ${escapeHtml(project.title)}</h2>
      <p class="lesson-lede">${escapeHtml(project.brief)}</p>
      <div class="lesson-task">
        <div class="lesson-task-head">Where to start</div>
        <p class="lesson-task-hint">${fmt(project.hint)}</p>
      </div>
      <h3 class="quiz-title">Done when</h3>
      <div class="road-checks">${items}</div>
      <div class="lesson-actions">
        <button class="primary" id="road-finish" type="button" ${allChecked && !done ? "" : "disabled"}>Mark roadmap complete</button>
      </div>
      ${done ? `<p class="track-complete"><strong>Roadmap complete.</strong> ${fmt(project.doneNote ?? "Every stage passed and the project is in.")}</p>` : ""}
    </div>`;

  document.getElementById("road-back").addEventListener("click", () => {
    roadProjectOpen = false;
    renderRoadmapStages(track);
  });

  els.learnPanel.querySelectorAll(".road-check-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (state.projectDone) return;
      const i = Number(btn.dataset.check);
      state.projectChecks = state.projectChecks ?? {};
      state.projectChecks[i] = !state.projectChecks[i];
      saveStore();
      renderRoadmapProject(track);
    });
  });

  const finish = document.getElementById("road-finish");
  if (finish)
    finish.addEventListener("click", () => {
      if (!allChecked || state.projectDone) return;
      state.projectDone = true;
      saveStore();
      addXp(100);
      renderRoadmapProject(track);
    });
}

/* ---------- Learn: labs ---------- */

function labsDoneCount() {
  return Object.values(store.labs ?? {}).filter((rec) => rec?.done).length;
}

function renderLabsList() {
  const labs = [...(window.LABS ?? [])].sort((a, b) => a.title.localeCompare(b.title));
  const items = labs
    .map((lab) => {
      const rec = store.labs?.[lab.id];
      return `
      <button class="calm-card${rec?.done ? " is-done" : ""}" type="button" data-id="${lab.id}">
        <span class="calm-card-icon">${lab.kind === "bug" ? "🐛" : "🔮"}</span>
        <span class="calm-card-name">${escapeHtml(lab.title)}</span>
        <span class="calm-card-tag">${escapeHtml(lab.prompt)}</span>
        <span class="calm-card-meta">${escapeHtml(lab.level)} · ${lab.kind === "bug" ? "spot the bug" : "predict the output"}</span>
        ${rec?.done ? '<span class="calm-card-check" aria-label="solved">✓</span>' : ""}
      </button>`;
    })
    .join("");

  els.learnPanel.innerHTML = `<div class="calm-grid">${items}</div>
    <p class="hint">Labs are quick challenges — read the snippet, pick the answer, learn why. Solved: ${labsDoneCount()} of ${labs.length}. +20 XP each.</p>`;

  els.learnPanel.querySelectorAll(".calm-card").forEach((btn) => {
    btn.addEventListener("click", () => renderLab(labs.find((l) => l.id === btn.dataset.id)));
  });
}

function renderLab(lab) {
  if (!lab) {
    renderLabsList();
    return;
  }
  const rec = store.labs?.[lab.id];
  els.learnPanel.innerHTML = `
    <div class="study-bar">
      <button class="ghost" id="lab-back" type="button">&larr; Labs</button>
      <span>${escapeHtml(lab.level)}</span>
    </div>
    <div class="lab-detail">
      <h2>${lab.kind === "bug" ? "🐛" : "🔮"} ${escapeHtml(lab.title)}</h2>
      <p class="lesson-lede">${escapeHtml(lab.prompt)}</p>
      <pre class="lesson-code lab-code"><code>${escapeHtml(lab.code)}</code></pre>
      <div class="lab-options">
        ${lab.options
          .map((opt, i) => `<button class="lab-option${rec?.done && i === lab.answer ? " correct" : ""}" type="button" data-o="${i}" ${rec?.done ? "disabled" : ""}>${escapeHtml(opt)}</button>`)
          .join("")}
      </div>
      <p class="lab-why hidden"></p>
      ${rec?.done ? '<p class="hint">Solved — the answer is highlighted. Pick another lab from the list.</p>' : ""}
    </div>`;

  document.getElementById("lab-back").addEventListener("click", renderLabsList);

  els.learnPanel.querySelectorAll(".lab-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      const oi = Number(btn.dataset.o);
      const correct = oi === lab.answer;
      els.learnPanel.querySelectorAll(".lab-option").forEach((b) => {
        const i = Number(b.dataset.o);
        if (i === lab.answer) b.classList.add("correct");
        else if (i === oi) b.classList.add("wrong");
        b.disabled = true;
      });
      const why = els.learnPanel.querySelector(".lab-why");
      why.innerHTML = `${correct ? "Correct." : "Not quite."} ${fmt(lab.why)}`;
      why.classList.remove("hidden");

      if (correct && !store.labs?.[lab.id]?.done) {
        store.labs[lab.id] = { done: true, at: Date.now() };
        saveStore();
        addXp(20);
      }
    });
  });
}

const GH_MARK_SVG =
  '<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>';

/* ---------- Learn: in-app repo reader ---------- */

const repoDataCache = new Map();
const repoFileCache = new Map();
let repoReader = null;

function repoBaseFor(repo, branch, path = "") {
  const dir = path.includes("/") ? path.slice(0, path.lastIndexOf("/") + 1) : "";
  return {
    linkBase: `https://github.com/${repo}/${branch}/blob/${dir}`,
    imgBase: `https://raw.githubusercontent.com/${repo}/${branch}/${dir}`,
  };
}

function openRepoReader(repo) {
  const cached = repoDataCache.get(repo.id);
  repoReader = {
    repo,
    data: cached ?? null,
    loading: !cached,
    error: "",
    filePath: null,
    fileText: null,
    fileError: "",
    filter: "",
  };
  renderRepoReader();
  if (!cached) fetchRepoData(repo);
}

async function fetchRepoData(repo) {
  let data = null;
  try {
    const res = await fetch(`/api/repo/${repo.repo}`);
    const payload = await res.json().catch(() => ({}));
    if (res.ok) data = payload;
  } catch {
    // server absent (e.g. static hosting) — fall through to direct GitHub
  }
  if (!data) {
    try {
      data = await fetchRepoDataDirect(repo);
    } catch (err) {
      if (repoReader?.repo.id !== repo.id) return;
      repoReader.loading = false;
      repoReader.error = err?.message ?? String(err);
      renderRepoReader();
      return;
    }
  }
  repoDataCache.set(repo.id, data);
  if (repoReader?.repo.id === repo.id) {
    repoReader.data = data;
    repoReader.loading = false;
    renderRepoReader();
  }
}

const REPO_TEXT_EXT = new Set([
  ".md", ".markdown", ".rst", ".txt", ".py", ".ipynb",
  ".toml", ".cfg", ".ini", ".yml", ".yaml", ".json", ".csv",
]);

function b64ToText(b64) {
  const bytes = Uint8Array.from(atob(b64.replace(/\s/g, "")), (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

async function fetchRepoDataDirect(repo) {
  // Browser-only fallback for static hosting: public GitHub API, no token.
  // Anonymous limit is 60 requests/hour per IP — the local server caches more.
  const api = `https://api.github.com/repos/${repo.repo}`;
  const headers = { Accept: "application/vnd.github+json" };
  const metaRes = await fetch(api, { headers });
  if (!metaRes.ok) {
    throw new Error(
      metaRes.status === 404
        ? "Repository not found on GitHub (it may be private, renamed, or removed)."
        : metaRes.status === 403 || metaRes.status === 429
          ? "GitHub rate limit reached for anonymous browsing — try again later."
          : `GitHub returned HTTP ${metaRes.status}.`
    );
  }
  const meta = await metaRes.json();
  const branch = meta.default_branch || "main";
  const [owner, name] = repo.repo.split("/");

  let readme = null;
  try {
    const rRes = await fetch(`${api}/readme`, { headers });
    if (rRes.ok) {
      const r = await rRes.json();
      readme = { path: r.path || "README.md", text: b64ToText(r.content || "") };
    }
  } catch {}

  let files = [];
  let truncated = false;
  try {
    const tRes = await fetch(`${api}/git/trees/${encodeURIComponent(branch)}?recursive=1`, { headers });
    if (tRes.ok) {
      const tree = await tRes.json();
      truncated = !!tree.truncated;
      for (const entry of tree.tree || []) {
        if (entry.type !== "blob") continue;
        const path = entry.path || "";
        const dot = path.lastIndexOf(".");
        if (!REPO_TEXT_EXT.has(path.slice(dot).toLowerCase())) continue;
        if ((entry.size || 0) > 1_500_000) continue;
        files.push(path);
        if (files.length >= 2000) {
          truncated = true;
          break;
        }
      }
    }
  } catch {}
  files.sort();

  return {
    repo: repo.repo,
    owner,
    name,
    branch,
    license: meta.license?.spdx_id || "Not specified",
    description: meta.description || "",
    readme,
    files,
    truncated,
  };
}

function readerHeader() {
  const { repo, data } = repoReader;
  return `<div class="study-bar">
      <button class="ghost" id="rr-back" type="button">&larr; ${escapeHtml(repo.title)}</button>
      <span>${escapeHtml(repo.repo)}${data ? ` · ${data.branch} · ${data.files.length} text files` : ""}</span>
    </div>`;
}

function bindReaderBack() {
  document.getElementById("rr-back")?.addEventListener("click", () => {
    repoReader = null;
    renderGithubDetail();
  });
}

function renderRepoReader() {
  if (!repoReader) {
    learnGithubId = null;
    renderGithubList();
    return;
  }
  const { repo, data, loading, error } = repoReader;

  if (loading) {
    els.learnPanel.innerHTML =
      readerHeader() + `<p class="rr-note">Fetching the repo from GitHub… first visit only; it is cached locally after that.</p>`;
    bindReaderBack();
    return;
  }

  if (error) {
    els.learnPanel.innerHTML =
      readerHeader() +
      `<div class="rr-error">
        <p>${escapeHtml(error)}</p>
        <div class="lesson-actions">
          <button class="secondary" id="rr-retry" type="button">Try again</button>
          <button class="ghost" id="rr-github" type="button">Open on GitHub</button>
        </div>
      </div>`;
    bindReaderBack();
    document.getElementById("rr-retry").addEventListener("click", () => {
      repoReader.loading = true;
      repoReader.error = "";
      renderRepoReader();
      fetchRepoData(repo);
    });
    document.getElementById("rr-github").addEventListener("click", () => {
      window.open(`https://github.com/${repo.repo}`, "_blank", "noopener");
    });
    return;
  }

  els.learnPanel.innerHTML =
    readerHeader() +
    `<div class="rr">
      <aside class="rr-side">
        <input id="rr-filter" class="rr-filter" type="search" placeholder="Filter ${data.files.length} files…" value="${escapeHtml(repoReader.filter)}" aria-label="Filter files">
        <div class="rr-files" id="rr-files"></div>
      </aside>
      <section class="rr-main">
        <div class="rr-filebar" id="rr-filebar"></div>
        <div class="rr-content" id="rr-content"></div>
      </section>
    </div>
    <p class="hint">Fetched from GitHub through <code>serve.py</code> and cached in <code>.cache/repos</code>.${data.truncated ? " This repo is large — only part of the file list is shown." : ""} Content stays the author's; the summary on the repo page is ours.</p>`;
  bindReaderBack();

  const filter = document.getElementById("rr-filter");
  filter.addEventListener("input", () => {
    repoReader.filter = filter.value;
    renderRepoFiles();
  });
  renderRepoFiles();
  renderRepoContent();
}

const RENDER_LIMIT = 300;

function renderRepoFiles() {
  const list = document.getElementById("rr-files");
  if (!list || !repoReader?.data) return;
  const q = repoReader.filter.trim().toLowerCase();
  const matches = repoReader.data.files.filter((p) => !q || p.toLowerCase().includes(q));
  const shown = matches.slice(0, RENDER_LIMIT);
  const active = repoReader.filePath;
  list.innerHTML =
    (shown.length
      ? shown
          .map(
            (p) =>
              `<button class="rr-file${p === active ? " active" : ""}" type="button" data-path="${escapeHtml(p)}" title="${escapeHtml(p)}">${escapeHtml(p)}</button>`
          )
          .join("")
      : `<p class="rr-note">No file matches.</p>`) +
    (matches.length > shown.length
      ? `<p class="rr-note">+${matches.length - shown.length} more — type to narrow.</p>`
      : "");
  list.querySelectorAll(".rr-file").forEach((btn) => {
    btn.addEventListener("click", () => openRepoFile(btn.dataset.path));
  });
}

async function openRepoFile(path) {
  if (!repoReader?.data) return;
  const { repo, data } = repoReader;
  const key = `${repo.id}:${path}`;
  repoReader.filePath = path;
  repoReader.fileError = "";
  const hit = repoFileCache.get(key);
  repoReader.fileText = hit ?? null;
  renderRepoFiles();
  renderRepoContent();
  if (hit !== undefined) return;

  let text = null;
  try {
    const res = await fetch(`/api/repo/${repo.repo}/file?path=${encodeURIComponent(path)}`);
    const payload = await res.json().catch(() => ({}));
    if (res.ok) text = payload.text;
  } catch {
    // server absent — fall through to raw.githubusercontent.com
  }
  if (text === null) {
    try {
      const encoded = path.split("/").map(encodeURIComponent).join("/");
      const res = await fetch(`https://raw.githubusercontent.com/${repo.repo}/${encodeURIComponent(data.branch)}/${encoded}`);
      if (!res.ok) throw new Error(`Could not load ${path} (GitHub HTTP ${res.status}).`);
      text = await res.text();
    } catch (err) {
      if (repoReader?.filePath !== path) return;
      repoReader.fileError = err?.message ?? String(err);
      renderRepoContent();
      return;
    }
  }
  repoFileCache.set(key, text);
  if (repoReader?.filePath === path) {
    repoReader.fileText = text;
    renderRepoContent();
  }
}

function renderRepoContent() {
  const bar = document.getElementById("rr-filebar");
  const content = document.getElementById("rr-content");
  if (!bar || !content || !repoReader?.data) return;
  const { repo, data, filePath } = repoReader;
  const branch = data.branch;

  if (!filePath) {
    const readme = data.readme;
    const base = repoBaseFor(repo.repo, branch, readme?.path ?? "");
    bar.innerHTML = `<span class="rr-path">${escapeHtml(readme?.path ?? "README")}</span><a class="rr-gh" href="https://github.com/${repo.repo}" target="_blank" rel="noopener">Open repo ↗</a>`;
    content.innerHTML = readme
      ? `<div class="rr-md">${renderMarkdown(readme.text, base)}</div>`
      : `<p class="rr-note">This repo has no README to show. Pick a file on the left.</p>`;
    return;
  }

  const base = repoBaseFor(repo.repo, branch, filePath);
  bar.innerHTML = `<span class="rr-path">${escapeHtml(filePath)}</span><a class="rr-gh" href="https://github.com/${repo.repo}/blob/${encodeURI(branch)}/${filePath.split("/").map(encodeURIComponent).join("/")}" target="_blank" rel="noopener">Open file ↗</a>`;

  if (repoReader.fileError) {
    content.innerHTML = `<p class="rr-error-text">${escapeHtml(repoReader.fileError)}</p>`;
    return;
  }
  if (repoReader.fileText == null) {
    content.innerHTML = `<p class="rr-note">Loading ${escapeHtml(filePath)}…</p>`;
    return;
  }

  const text = repoReader.fileText;
  const ext = filePath.slice(filePath.lastIndexOf(".")).toLowerCase();
  if (ext === ".ipynb") content.innerHTML = renderNotebook(text, base);
  else if (ext === ".md" || ext === ".markdown" || ext === ".rst")
    content.innerHTML = `<div class="rr-md">${renderMarkdown(text, base)}</div>`;
  else content.innerHTML = `<pre class="rr-code"><code>${escapeHtml(text)}</code></pre>`;
}

function renderNotebook(text, base) {
  let notebook;
  try {
    notebook = JSON.parse(text);
  } catch {
    return `<pre class="rr-code"><code>${escapeHtml(text)}</code></pre>`;
  }
  const cells = (Array.isArray(notebook.cells) ? notebook.cells : []).slice(0, 200);
  const parts = cells
    .map((cell) => {
      const source = Array.isArray(cell.source) ? cell.source.join("") : String(cell.source ?? "");
      if (!source.trim()) return "";
      if (cell.cell_type === "markdown") return `<div class="rr-md rr-cell">${renderMarkdown(source, base)}</div>`;
      if (cell.cell_type === "code") return `<pre class="rr-code"><code>${escapeHtml(source)}</code></pre>`;
      return "";
    })
    .filter(Boolean);
  return `<p class="rr-note">Notebook · text cells only; saved outputs and images are not shown.</p>${parts.join("")}`;
}

function startCourseVideo(course) {
  const holder = document.getElementById("course-video");
  if (!holder) return;
  const frame = document.createElement("iframe");
  frame.className = "course-frame";
  frame.src = `https://www.youtube-nocookie.com/embed/${course.videoId}?autoplay=1&rel=0`;
  frame.title = course.title;
  frame.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  frame.allowFullscreen = true;
  frame.referrerPolicy = "strict-origin-when-cross-origin";
  holder.replaceChildren(frame);
}

function completeCourse(course) {
  const total = course.quiz.length;
  const previous = store.courses[course.id];
  const passed = learnQuiz.score >= coursePassMark(course);
  store.courses[course.id] = {
    done: passed || !!previous?.done,
    score: Math.max(previous?.score ?? 0, learnQuiz.score),
    total,
    at: Date.now(),
  };
  saveStore();
  if (passed && !previous?.done) addXp(60);

  const result = document.getElementById("course-result");
  if (!result) return;
  result.classList.remove("hidden");

  const retry = () => {
    learnQuiz = null;
    renderCourseDetail();
  };

  if (!passed) {
    result.innerHTML = previous?.done
      ? `<strong>Already finished.</strong> This attempt scored ${learnQuiz.score}/${total}, below the ` +
        `${coursePassMark(course)} needed — your best stays ${store.courses[course.id].score}/${total}.`
      : `<strong>Not passed yet.</strong> You scored ${learnQuiz.score}/${total} — you need ` +
        `${coursePassMark(course)} to finish. Re-read the outline, then retry.`;
    const btn = makeBtn("Retry quiz", "secondary", retry);
    result.appendChild(document.createElement("br"));
    result.appendChild(btn);
    return;
  }

  result.innerHTML =
    `<strong>Course cleared.</strong> You scored ${learnQuiz.score}/${total}. ` +
    (learnQuiz.score === total
      ? "Every answer right — time to review the matching cards."
      : "Skim the sections you missed, then run the cards.");

  const list = window.COURSES ?? [];
  const at = list.findIndex((c) => c.id === course.id);
  const ordered = [...list.slice(at + 1), ...list.slice(0, at)];
  const next = ordered.find((c) => !store.courses[c.id]?.done);
  const btn = next
    ? makeBtn(`Next: ${next.title}`, "primary", () => {
        learnCourseId = next.id;
        learnQuiz = null;
        renderCourseDetail();
      })
    : makeBtn("Back to courses", "secondary", () => {
        learnCourseId = null;
        learnQuiz = null;
        renderCoursesList();
      });
  result.appendChild(document.createElement("br"));
  result.appendChild(btn);
}

function isTodayAt(ts) {
  return !!ts && new Date(ts).toDateString() === new Date().toDateString();
}

// ---------- Gems, quests, shop, onboarding, reminders ----------

function gemToast(n, label) {
  if (!els.xpToast) return;
  els.xpToast.innerHTML = `<span>💎 +${n} gems${label ? ` · ${escapeHtml(label)}` : ""}</span>`;
  els.xpToast.classList.remove("hidden", "show");
  void els.xpToast.offsetWidth;
  els.xpToast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.xpToast.classList.remove("show"), 2600);
}

function addGems(n, label) {
  if (!Number.isFinite(n) || n <= 0) return;
  store.gems = (store.gems ?? 0) + n;
  saveStore();
  gemToast(n, label);
}

function tutorMsgCount() {
  try {
    return (loadTutorState().messages ?? []).filter((m) => m.role === "user").length;
  } catch {
    return 0;
  }
}

function questCounts(src = store) {
  const s = src || {};
  const countDone = (obj) => Object.values(obj || {}).filter((r) => r?.done).length;
  let clues = 0;
  for (const c of Object.values(s.cases || {})) clues += Object.keys(c?.solved || {}).length;
  let road = 0;
  for (const r of Object.values(s.roadmaps || {})) road += Object.values(r?.exercises || {}).filter(Boolean).length;
  return {
    lessons: countDone(s.lessons),
    labs: countDone(s.labs),
    github: countDone(s.github),
    clues,
    road,
    xp: s.xp || 0,
  };
}

function questBaseline(src = store) {
  return { ...questCounts(src), tutor: tutorMsgCount() };
}

function ensureQuests() {
  if (!store.quests || store.quests.date !== todayKey() || !store.quests.baseline) {
    store.quests = { date: todayKey(), baseline: questBaseline(), done: {}, claimed: false };
    saveStore();
  }
  return store.quests;
}

function todaysQuests() {
  const pool = window.QUEST_POOL ?? [];
  if (!pool.length) return [];
  const [y, m, d] = todayKey().split("-").map(Number);
  let seed = Math.floor(Date.UTC(y, m - 1, d) / DAY) % 233280;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  const idx = pool.map((_, i) => i);
  const picks = [];
  for (let k = 0; k < 3 && idx.length; k++) picks.push(pool[idx.splice(Math.floor(rand() * idx.length), 1)[0]]);
  return picks;
}

function questProgress(q) {
  const base = store.quests?.baseline ?? {};
  if (q.metric === "reviews") return store.stats?.reviewed ?? 0;
  if (q.metric === "challenge") return store.challenge?.done && store.challenge.date === todayKey() ? 1 : 0;
  if (q.metric === "tutor") return Math.max(0, tutorMsgCount() - (base.tutor ?? 0));
  return Math.max(0, (questCounts()[q.metric] ?? 0) - (base[q.metric] ?? 0));
}

let questBusy = false;
function checkQuests() {
  if (questBusy) return;
  questBusy = true;
  try {
    const q = ensureQuests();
    for (const quest of todaysQuests()) {
      if (!q.done[quest.id] && questProgress(quest) >= quest.target) {
        q.done[quest.id] = true;
        addGems(quest.gems, quest.label);
        addXp(quest.xp);
        Juice.sound("good");
      }
    }
  } finally {
    questBusy = false;
  }
}

function renderQuestChest() {
  const quests = todaysQuests();
  if (!quests.length) return "";
  const q = ensureQuests();
  const rows = quests
    .map((quest) => {
      const prog = Math.min(quest.target, questProgress(quest));
      const done = !!q.done[quest.id] || prog >= quest.target;
      const pct = Math.round((prog / quest.target) * 100);
      return `<div class="quest-row ${done ? "done" : ""}">
        <span class="quest-icon">${quest.icon}</span>
        <div class="quest-body">
          <div class="quest-name">${escapeHtml(quest.label)} <span class="quest-reward">+${quest.xp} XP · 💎${quest.gems}</span></div>
          <div class="quest-desc">${escapeHtml(quest.desc)} · ${prog}/${quest.target}</div>
          <div class="quest-bar"><span style="width:${pct}%"></span></div>
        </div>
        <span class="quest-check">${done ? "✓" : ""}</span>
      </div>`;
    })
    .join("");
  const allDone = quests.every((quest) => q.done[quest.id] || questProgress(quest) >= quest.target);
  const chest = q.claimed
    ? `<div class="quest-chest claimed">🎁 Chest claimed — come back tomorrow!</div>`
    : `<button class="quest-chest ${allDone ? "ready" : ""}" id="quest-claim" type="button" ${allDone ? "" : "disabled"}>
        ${allDone ? "🎁 Open the chest! +40 XP · 💎10" : `🔒 Chest locked · ${quests.filter((x) => q.done[x.id] || questProgress(x) >= x.target).length}/3 quests`}
      </button>`;
  return `<div class="plan-card quest-card">
    <div class="plan-top"><div><div class="plan-title">Daily quests</div><div class="plan-sub">Three small wins, one chest</div></div></div>
    <div class="quest-list">${rows}</div>
    ${chest}
  </div>`;
}

function claimChest() {
  const q = ensureQuests();
  const quests = todaysQuests();
  if (q.claimed || !quests.every((x) => q.done[x.id] || questProgress(x) >= x.target)) return;
  q.claimed = true;
  saveStore();
  addGems(10, "quest chest");
  addXp(40);
  Juice.confetti();
  Juice.sound("chest");
  renderLearnPanel();
}

// ---------- XP shop ----------

function shopItem(id) {
  return (window.SHOP_ITEMS ?? []).find((i) => i.id === id);
}

function openShop() {
  renderShop();
  els.shopModal.classList.remove("hidden");
}

function renderShop() {
  els.shopGems.textContent = String(store.gems ?? 0);
  const groups = [
    ["frame", "Avatar frames"],
    ["title", "Titles"],
    ["theme", "Themes"],
  ];
  els.shopGrid.innerHTML = groups
    .map(([kind, label]) => {
      const items = (window.SHOP_ITEMS ?? []).filter((i) => i.kind === kind);
      const cards = items
        .map((item) => {
          const owned = (store.owned ?? []).includes(item.id);
          const equipped =
            (kind === "frame" && store.frame === item.id) ||
            (kind === "title" && store.title === item.id) ||
            (kind === "theme" && store.theme === item.id.replace("theme-", ""));
          const btn = equipped
            ? `<button class="ghost sm" disabled>Equipped</button>`
            : owned
              ? `<button class="primary sm" data-equip="${item.id}" type="button">Equip</button>`
              : `<button class="primary sm" data-buy="${item.id}" type="button" ${(store.gems ?? 0) < item.price ? "disabled" : ""}>💎 ${item.price}</button>`;
          return `<div class="shop-item ${equipped ? "equipped" : ""}">
            <span class="shop-icon">${item.icon}</span>
            <div class="shop-name">${escapeHtml(item.name)}</div>
            <div class="shop-desc">${escapeHtml(item.desc)}</div>
            ${btn}
          </div>`;
        })
        .join("");
      return `<div class="shop-group"><div class="shop-group-title">${label}</div><div class="shop-row">${cards}</div></div>`;
    })
    .join("");
  els.shopGrid.querySelectorAll("[data-buy]").forEach((b) => b.addEventListener("click", () => buyItem(b.dataset.buy)));
  els.shopGrid.querySelectorAll("[data-equip]").forEach((b) => b.addEventListener("click", () => equipItem(b.dataset.equip)));
}

function buyItem(id) {
  const item = shopItem(id);
  if (!item || (store.owned ?? []).includes(id) || (store.gems ?? 0) < item.price) return;
  store.gems -= item.price;
  store.owned = [...(store.owned ?? []), id];
  saveStore();
  Juice.sound("buy");
  Juice.confetti(60);
  equipItem(id);
}

function equipItem(id) {
  const item = shopItem(id);
  if (!item || !(store.owned ?? []).includes(id)) return;
  if (item.kind === "frame") store.frame = id;
  else if (item.kind === "title") store.title = id;
  else if (item.kind === "theme") applyTheme(id.replace("theme-", ""));
  saveStore();
  updateStats();
  renderShop();
}

// ---------- Onboarding ----------

function maybeOnboard() {
  if (store.onboarded || storeHasData() || profile.id) return;
  els.onboardBody.innerHTML = `
    <div class="onboard-hero">🐍</div>
    <h2 class="onboard-title">Welcome to Learning Hub</h2>
    <p class="onboard-sub">Learn Python by doing — flashcards, a code playground, and a detective game. Let's set you up in 20 seconds.</p>
    <label class="modal-label" for="onboard-name">What should we call you?</label>
    <input id="onboard-name" class="modal-input" maxlength="40" placeholder="Your name" autocomplete="off">
    <label class="modal-label" for="onboard-goal">Your goal</label>
    <select id="onboard-goal" class="modal-input">
      <option value="basics">Learn Python basics</option>
      <option value="job">Prep for a tech job</option>
      <option value="fun">Just exploring</option>
    </select>
    <button class="primary onboard-go" id="onboard-start" type="button">Review my first 3 cards →</button>`;
  els.onboardModal.classList.remove("hidden");
  document.getElementById("onboard-start").addEventListener("click", () => {
    const name = document.getElementById("onboard-name").value.trim();
    store.goal = document.getElementById("onboard-goal").value;
    store.onboarded = true;
    saveStore();
    els.onboardModal.classList.add("hidden");
    if (name && !profile.id) submitProfileName(name);
    startSession(window.DECKS[0]);
  });
}

// ---------- Reminders & PWA ----------

function checkReminder() {
  const r = store.reminder;
  if (!r?.enabled || r.lastFired === todayKey()) return;
  const now = new Date();
  const hhmm = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  if (hhmm !== r.time || (store.stats?.reviewed ?? 0) > 0) return;
  r.lastFired = todayKey();
  saveStore();
  try {
    if (window.Notification && Notification.permission === "granted") {
      new Notification("Learning Hub", { body: "Your cards are waiting — keep the streak alive 🔥", icon: "icon.svg" });
    }
  } catch {}
}

function openReminder() {
  els.reminderTime.value = store.reminder?.time || "19:00";
  els.reminderEnabled.checked = !!store.reminder?.enabled;
  els.reminderStatus.textContent =
    window.Notification && Notification.permission === "granted"
      ? "Notifications are allowed."
      : "You'll be asked to allow notifications when you enable this.";
  els.reminderModal.classList.remove("hidden");
}

function saveReminder() {
  const enabled = els.reminderEnabled.checked;
  const time = els.reminderTime.value || "19:00";
  const finish = () => {
    store.reminder = { enabled, time, lastFired: store.reminder?.lastFired ?? null };
    saveStore();
    els.reminderModal.classList.add("hidden");
  };
  if (enabled && window.Notification && Notification.permission === "default") {
    Notification.requestPermission().then(finish, finish);
  } else {
    finish();
  }
}

let installPrompt = null;
function initPwa() {
  const local = location.hostname === "localhost" || location.hostname === "127.0.0.1";
  if ("serviceWorker" in navigator && (location.protocol === "https:" || local)) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    installPrompt = e;
    if (els.btnInstall) els.btnInstall.classList.remove("hidden");
  });
  if (els.btnInstall) {
    els.btnInstall.addEventListener("click", async () => {
      if (!installPrompt) return;
      installPrompt.prompt();
      await installPrompt.userChoice;
      installPrompt = null;
      els.btnInstall.classList.add("hidden");
    });
  }
  setInterval(checkReminder, 30000);
}

// ---------- Daily challenge ----------

function challengeForToday() {
  const bank = window.CHALLENGES ?? [];
  if (!bank.length) return null;
  const [y, m, d] = todayKey().split("-").map(Number);
  const dayNum = Math.floor(Date.UTC(y, m - 1, d) / DAY);
  return bank[((dayNum % bank.length) + bank.length) % bank.length];
}

function challengeState() {
  if (!store.challenge || store.challenge.date !== todayKey()) {
    store.challenge = { date: todayKey(), done: false, code: "" };
  }
  return store.challenge;
}

function renderChallengePanel() {
  const ch = challengeForToday();
  if (!ch) {
    els.learnPanel.innerHTML = `<p class="hint">No challenges loaded.</p>`;
    return;
  }
  const st = challengeState();
  const code = st.code || ch.starter;
  els.learnPanel.innerHTML = `
    <div class="study-bar">
      <button class="ghost" id="ch-back" type="button">&larr; Today's plan</button>
      <span>🎯 Daily challenge · ${escapeHtml(new Date().toLocaleDateString())}</span>
    </div>
    <div class="plan-card challenge-card">
      <div class="plan-top">
        <div>
          <div class="plan-title">${escapeHtml(ch.title)}</div>
          <div class="plan-sub">${st.done ? "Completed today ✓ — nice work!" : `+${ch.xp ?? 40} XP · unlimited retries, XP once per day`}</div>
        </div>
        <span class="chip ${st.done ? "ok" : ""}">${st.done ? "done" : "🎯"}</span>
      </div>
      <p class="challenge-brief">${escapeHtml(ch.brief)}</p>
      <textarea id="challenge-editor" class="challenge-editor" spellcheck="false" autocomplete="off" autocapitalize="off" aria-label="Daily challenge code editor">${escapeHtml(code)}</textarea>
      <div class="case-actions">
        <button class="ghost" id="ch-hint" type="button">Show hint</button>
        <button class="ghost" id="ch-reset" type="button">Reset</button>
        <button class="primary" id="ch-run" type="button">Run checks</button>
      </div>
      <p class="hint hidden" id="ch-hint-text">${escapeHtml(ch.hint)}</p>
      <div class="road-lab-out" id="ch-out" aria-live="polite"></div>
    </div>
    <p class="hint">A new challenge arrives every day. Passing all checks awards XP once per day and ticks off today's plan. Your draft saves automatically.</p>`;
  bindChallenge(ch);
}

function bindChallenge(ch) {
  const editor = document.getElementById("challenge-editor");
  const out = document.getElementById("ch-out");
  const runBtn = document.getElementById("ch-run");
  document.getElementById("ch-back").addEventListener("click", () => switchLearnMode("plan"));
  document.getElementById("ch-hint").addEventListener("click", () => {
    document.getElementById("ch-hint-text").classList.toggle("hidden");
  });
  document.getElementById("ch-reset").addEventListener("click", () => {
    editor.value = ch.starter;
    challengeState().code = ch.starter;
    saveStore();
    out.innerHTML = "";
  });
  editor.addEventListener("input", () => {
    challengeState().code = editor.value;
    saveStore();
  });
  editor.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = editor.selectionStart;
      editor.value = editor.value.slice(0, start) + "    " + editor.value.slice(editor.selectionEnd);
      editor.selectionStart = editor.selectionEnd = start + 4;
      challengeState().code = editor.value;
      saveStore();
    }
    if (e.ctrlKey && e.key === "Enter") {
      e.preventDefault();
      runBtn.click();
    }
  });
  runBtn.addEventListener("click", async () => {
    runBtn.disabled = true;
    out.innerHTML = `<div class="test-summary">Running ${ch.tests.length} checks…</div>`;
    const started = performance.now();
    try {
      const { error, results } = await runExerciseChecks(editor.value, ch.tests);
      out.innerHTML = checkResultsHtml(error, results, performance.now() - started);
      if (!error && results.length > 0 && results.every((r) => r.ok)) completeChallenge(ch);
    } catch (err) {
      out.innerHTML = checkResultsHtml(err?.message ?? String(err), [], 0);
    } finally {
      runBtn.disabled = false;
    }
  });
}

function completeChallenge(ch) {
  const st = challengeState();
  if (st.done) return;
  st.done = true;
  st.code = document.getElementById("challenge-editor")?.value ?? st.code;
  store.challengesDone = (store.challengesDone ?? 0) + 1;
  markPlanDone("challenge");
  saveStore();
  addGems(5, "daily challenge");
  addXp(ch.xp ?? 40);
  Juice.confetti();
  Juice.sound("chest");
  const sub = document.querySelector(".challenge-card .plan-sub");
  if (sub) sub.textContent = "Completed today ✓ — nice work!";
  const chip = document.querySelector(".challenge-card .chip");
  if (chip) {
    chip.className = "chip ok";
    chip.textContent = "done";
  }
}

function markPlanDone(key) {
  if (!store.plan) store.plan = { date: todayKey(), done: {} };
  store.plan.done[key] = true;
  saveStore();
}

function renderPlanPanel() {
  const deck = window.DECKS[0];
  const due = dueCount(deck);
  const cardsDone = due === 0 || store.stats.reviewed > 0;

  const nextLesson = window.LESSONS.find((l) => !store.lessons[l.id]?.done) ?? null;
  const lessonDoneToday = window.LESSONS.some((l) => store.lessons[l.id]?.done && isTodayAt(store.lessons[l.id]?.at));
  const allLessonsDone = !nextLesson;
  const lesson = nextLesson ?? window.LESSONS[window.LESSONS.length - 1];
  const lessonDone = allLessonsDone || lessonDoneToday;

  const plan = store.plan ?? { date: todayKey(), done: {} };
  const codeDone = !!plan.done.code;
  const tutorDone = !!plan.done.tutor;
  const reviewDue = roadmapReviewQueue().length;
  const reviewPlanDone = !!plan.done.roadmap;
  const reviewDone = reviewDue === 0 || reviewPlanDone;
  const ch = challengeForToday();
  const chDone = !!store.challenge?.done && store.challenge.date === todayKey();
  const items = [chDone, cardsDone, lessonDone, codeDone, tutorDone, reviewDone];
  const completed = items.filter(Boolean).length;

  els.learnPanel.innerHTML = `
    ${renderQuestChest()}
    <div class="plan-card">
      <div class="plan-top">
        <div>
          <div class="plan-title">Today · ${escapeHtml(new Date().toLocaleDateString())}</div>
          <div class="plan-sub">${completed} of 6 done</div>
        </div>
        <div class="plan-bar" role="progressbar" aria-valuenow="${completed}" aria-valuemin="0" aria-valuemax="6">
          <span style="width:${(completed / 6) * 100}%"></span>
        </div>
      </div>
      <div class="plan-items">
        ${
          ch
            ? `<div class="plan-item ${chDone ? "done" : ""}">
          <div class="plan-check">${chDone ? "✓" : "🎯"}</div>
          <div class="plan-body">
            <div class="plan-name">Daily challenge · ${escapeHtml(ch.title)}</div>
            <div class="plan-desc">${escapeHtml(ch.brief)}</div>
          </div>
          <button class="plan-go" type="button" data-go="challenge">${chDone ? "Again" : "Start"}</button>
        </div>`
            : ""
        }
        <div class="plan-item ${cardsDone ? "done" : ""}">
          <div class="plan-check">${cardsDone ? "✓" : ""}</div>
          <div class="plan-body">
            <div class="plan-name">Review due cards</div>
            <div class="plan-desc">${due ? `${due} card${due === 1 ? "" : "s"} due · ${store.stats.reviewed} reviewed today` : "All caught up"}</div>
          </div>
          <button class="plan-go" type="button" data-go="cards">${due ? (cardsDone ? "More" : "Start") : "Done"}</button>
        </div>
        <div class="plan-item ${lessonDone ? "done" : ""}">
          <div class="plan-check">${lessonDone ? "✓" : ""}</div>
          <div class="plan-body">
            <div class="plan-name">${allLessonsDone ? "Lessons complete" : `Lesson: ${escapeHtml(lesson.title)}`}</div>
            <div class="plan-desc">${allLessonsDone ? "Every lesson finished — revisit any time" : `${lesson.minutes} min · ${lessonCardCount(lesson)} cards`}</div>
          </div>
          <button class="plan-go" type="button" data-go="lesson">${lessonDone ? "Open" : "Start"}</button>
        </div>
        <div class="plan-item ${codeDone ? "done" : ""}">
          <div class="plan-check">${codeDone ? "✓" : ""}</div>
          <div class="plan-body">
            <div class="plan-name">Code practice · ${escapeHtml(lesson.task.title)}</div>
            <div class="plan-desc">${escapeHtml(lesson.task.brief)}</div>
          </div>
          <button class="plan-go" type="button" data-go="code">Open</button>
        </div>
        <div class="plan-item ${tutorDone ? "done" : ""}">
          <div class="plan-check">${tutorDone ? "✓" : ""}</div>
          <div class="plan-body">
            <div class="plan-name">Tutor session</div>
            <div class="plan-desc">Answer ${lessonCardCount(lesson)}-card topic questions out loud</div>
          </div>
          <button class="plan-go" type="button" data-go="tutor">${tutorDone ? "Again" : "Start"}</button>
        </div>
        <div class="plan-item ${reviewDone ? "done" : ""}">
          <div class="plan-check">${reviewDone ? "✓" : ""}</div>
          <div class="plan-body">
            <div class="plan-name">Spaced review</div>
            <div class="plan-desc">${
              reviewDue
                ? `${reviewDue} solved problem${reviewDue === 1 ? "" : "s"} from earlier days`
                : `Nothing due — answers come back after ${REVIEW_AFTER_DAYS} days`
            }</div>
          </div>
          <button class="plan-go" type="button" data-go="review">${reviewDue ? (reviewPlanDone ? "More" : "Review") : "Done"}</button>
        </div>
      </div>
    </div>
    <p class="hint">Opening the playground or starting a tutor session marks that item done for today. Cards and lessons tick themselves off, and the review queue clears when every due answer is checked again.</p>`;

  els.learnPanel.querySelectorAll(".plan-go").forEach((btn) => {
    btn.addEventListener("click", () => {
      const go = btn.dataset.go;
      if (go === "cards") {
        if (due) startSession(deck);
        else renderHome();
      } else if (go === "lesson") {
        openLearn("lessons", allLessonsDone ? null : lesson.id);
      } else if (go === "code") {
        markPlanDone("code");
        openCode();
      } else if (go === "tutor") {
        markPlanDone("tutor");
        switchLearnMode("tutor");
      } else if (go === "review") {
        openLearn("review");
      } else if (go === "challenge") {
        switchLearnMode("challenge");
      }
    });
  });

  const claimBtn = document.getElementById("quest-claim");
  if (claimBtn) claimBtn.addEventListener("click", claimChest);
}

function renderReviewPanel() {
  const queue = roadmapReviewQueue();
  if (!queue.length) {
    markPlanDone("roadmap");
    els.learnPanel.innerHTML = `
      <div class="study-bar">
        <button class="ghost" id="review-back" type="button">&larr; Today's plan</button>
        <span>Spaced review</span>
      </div>
      <div class="review-empty">
        <h2>Nothing due right now</h2>
        <p>Quick answers come back ${REVIEW_AFTER_DAYS} days after you solve them. Solve a few practice problems in a roadmap and they will show up here.</p>
        <button class="plan-go" id="review-tracks" type="button">Open Tracks</button>
      </div>`;
    document.getElementById("review-back").addEventListener("click", () => renderPlanPanel());
    document.getElementById("review-tracks").addEventListener("click", () => openLearn("tracks"));
    return;
  }

  const cards = queue
    .map(
      (item, i) => `
      <div class="review-card" data-review-card="${i}">
        <div class="review-meta">${escapeHtml(item.trackTitle)} · ${escapeHtml(item.stage.title)} · ${escapeHtml(
        item.section
      )}</div>
        <div class="review-q">${fmt(item.ex.q)}</div>
        <div class="road-ex-row">
          <input class="road-ex-input review-input" type="text" inputmode="${
            typeof item.ex.answer === "number" ? "decimal" : "text"
          }" data-review="${i}" placeholder="your answer" aria-label="Answer" />
          <button class="plan-go review-check" type="button" data-review="${i}">Check</button>
          <button class="ghost review-reveal" type="button" data-review="${i}">Solution</button>
        </div>
        <p class="road-ex-msg" data-review="${i}"></p>
        <p class="road-ex-solution hidden" data-review="${i}">${fmt(item.ex.solution)}</p>
      </div>`
    )
    .join("");

  els.learnPanel.innerHTML = `
    <div class="study-bar">
      <button class="ghost" id="review-back" type="button">&larr; Today's plan</button>
      <span>Spaced review · <strong id="review-count">${queue.length} left</strong></span>
    </div>
    <div class="review-panel">
      <h2>Bring it back</h2>
      <p class="lesson-lede">These answers were solved a few days ago. Answer again from memory — each correct check moves it back into the queue for ${REVIEW_AFTER_DAYS} more days.</p>
      <div class="review-list">${cards}</div>
      <p class="review-done hidden" id="review-done"></p>
    </div>`;

  document.getElementById("review-back").addEventListener("click", () => renderPlanPanel());

  let remaining = queue.length;
  const check = (i) => {
    const item = queue[i];
    const input = els.learnPanel.querySelector(`.review-input[data-review="${i}"]`);
    const msg = els.learnPanel.querySelector(`.road-ex-msg[data-review="${i}"]`);
    const card = els.learnPanel.querySelector(`[data-review-card="${i}"]`);
    if (!item || !input || input.disabled) return;
    if (!exerciseMatches(item.ex, input.value)) {
      msg.textContent = String(input.value).trim()
        ? "Not quite — think it through and try again."
        : "Type your answer first.";
      msg.classList.remove("good");
      msg.classList.add("bad");
      return;
    }

    const state = roadmapState(item.trackId);
    state.exercises = state.exercises ?? {};
    state.exercises[item.key] = Date.now();
    saveStore();
    addXp(2);

    input.value = item.ex.answer;
    input.disabled = true;
    if (card) card.classList.add("done");
    const checkBtn = card?.querySelector(".review-check");
    if (checkBtn) checkBtn.disabled = true;
    msg.textContent = "Reviewed ✓";
    msg.classList.remove("bad");
    msg.classList.add("good");

    remaining -= 1;
    const count = document.getElementById("review-count");
    if (count) count.textContent = remaining ? `${remaining} left` : "clear";
    if (remaining === 0) {
      markPlanDone("roadmap");
      const done = document.getElementById("review-done");
      if (done) {
        done.classList.remove("hidden");
        done.innerHTML = `<strong>Review complete.</strong> Every due answer is rescheduled ${REVIEW_AFTER_DAYS} days out.`;
      }
    }
  };

  els.learnPanel.querySelectorAll(".review-check").forEach((btn) => {
    btn.addEventListener("click", () => check(Number(btn.dataset.review)));
  });

  els.learnPanel.querySelectorAll(".review-input").forEach((input) => {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        check(Number(input.dataset.review));
      }
    });
  });

  els.learnPanel.querySelectorAll(".review-reveal").forEach((btn) => {
    btn.addEventListener("click", () => {
      const sol = els.learnPanel.querySelector(`.road-ex-solution[data-review="${btn.dataset.review}"]`);
      if (sol) sol.classList.toggle("hidden");
    });
  });
}

function tutorProviderLine() {
  const model = activeModel();
  return model
    ? `${PROVIDER_LABELS[chatState.provider]} · ${escapeHtml(model)} · <span class="tutor-change">change in Chat</span>`
    : `${PROVIDER_LABELS[chatState.provider]} · no model loaded · <span class="tutor-change">open Chat to check</span>`;
}

function renderTutorPanel() {
  const topics = window.LESSONS.map((l) => `<option value="${escapeHtml(l.title)}">${escapeHtml(l.title)}</option>`).join("");
  els.learnPanel.innerHTML = `
    <div class="chat-card tutor-card">
      <div class="chat-head">
        <div class="chat-title">Python tutor</div>
        <div class="chat-controls">
          <select id="tutor-topic" aria-label="Tutor topic">${topics}</select>
          <button class="ghost" id="tutor-restart" type="button">${tutor.messages.length ? "Restart" : "Start"}</button>
        </div>
      </div>
      <div class="tutor-provider" id="tutor-provider">${tutorProviderLine()}</div>
      <div class="chat-messages" id="tutor-log"></div>
      <div class="chat-composer">
        <textarea id="tutor-input" rows="1" placeholder="Answer in your own words…"></textarea>
        <button class="primary" id="tutor-send" type="button">Send</button>
      </div>
    </div>
    <p class="hint">Each reply explains one small idea with an example, then asks you one question. If you're stuck, use the buttons under the tutor's message. Enter to send, Shift+Enter for a new line.</p>`;

  if (tutor.topic) {
    const select = document.getElementById("tutor-topic");
    if ([...select.options].some((o) => o.value === tutor.topic)) select.value = tutor.topic;
  }

  renderTutorLog();
  bindTutor();

  document.getElementById("tutor-provider").addEventListener("click", (e) => {
    if (e.target.closest(".tutor-change")) openChat();
  });
}

function bindTutor() {
  const input = document.getElementById("tutor-input");
  const send = document.getElementById("tutor-send");
  const restart = document.getElementById("tutor-restart");

  restart.addEventListener("click", () => startTutor(true));

  send.addEventListener("click", () => {
    if (tutor.busy) tutor.abort?.abort();
    else tutorRequest(input.value.trim());
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!tutor.busy) tutorRequest(input.value.trim());
    }
  });

  input.addEventListener("input", () => {
    input.style.height = "auto";
    input.style.height = Math.min(input.scrollHeight, 140) + "px";
  });

  const topicSelect = document.getElementById("tutor-topic");
  topicSelect.addEventListener("change", () => {
    tutor.topic = topicSelect.value;
    saveTutorState();
  });

  updateTutorButtons();
}

function updateTutorButtons() {
  const send = document.getElementById("tutor-send");
  const restart = document.getElementById("tutor-restart");
  if (send) {
    send.textContent = tutor.busy ? "Stop" : "Send";
    send.classList.toggle("stopping", tutor.busy);
  }
  if (restart) restart.textContent = tutor.messages.length ? "Restart" : "Start";
}

function tutorScroll() {
  const log = document.getElementById("tutor-log");
  if (log) log.scrollTop = log.scrollHeight;
}

function appendTutorBubble(role, content) {
  const log = document.getElementById("tutor-log");
  if (!log) return null;
  const bubble = document.createElement("div");
  bubble.className = `msg ${role === "user" ? "user" : "bot"}`;
  if (role === "user") bubble.textContent = content;
  else {
    const body = document.createElement("div");
    body.className = "msg-body formatted";
    body.innerHTML = renderMarkdown(content);
    bubble.appendChild(body);
  }
  log.appendChild(bubble);
  tutorScroll();
  return bubble;
}

function renderTutorLog() {
  const log = document.getElementById("tutor-log");
  if (!log) return;
  log.innerHTML = "";
  if (!tutor.messages.length) {
    const name = profile?.name;
    const empty = document.createElement("div");
    empty.className = "chat-empty";
    empty.innerHTML =
      `<div class="chat-empty-title">${escapeHtml(name ? `Hi ${name}` : "Hi there")} — one idea at a time.</div>` +
      "<p>Pick a topic above, then press <strong>Start</strong>. I'll explain a small idea, show an example, and ask you one question. " +
      "Answer in your own words — mistakes are how this works.</p>" +
      '<div class="chat-starters">' +
      '<button class="chat-starter" type="button" data-prompt="Start with the very basics of this topic.">Start with the basics</button>' +
      '<button class="chat-starter" type="button" data-prompt="Ask me a warm-up question first.">Give me a warm-up question</button>' +
      '<button class="chat-starter" type="button" data-prompt="I already know some Python — go a little harder.">I know some Python — go harder</button>' +
      '<button class="chat-starter" type="button" data-prompt="I am not sure where I am stuck. Ask me something to find out.">I\'m not sure where I\'m stuck</button>' +
      "</div>" +
      `<span>Answers come from ${escapeHtml(PROVIDER_LABELS[chatState.provider] || "your model")} — change it in Chat.</span>`;
    empty.addEventListener("click", (e) => {
      const btn = e.target.closest(".chat-starter");
      if (!btn || tutor.busy) return;
      const select = document.getElementById("tutor-topic");
      if (!tutor.topic && select) tutor.topic = select.value;
      tutorRequest(btn.dataset.prompt);
    });
    log.appendChild(empty);
    return;
  }
  for (const msg of tutor.messages) appendTutorBubble(msg.role, msg.content);
  renderTutorQuick();
  tutorScroll();
}

const TUTOR_QUICK = [
  { label: "Hint, please", prompt: "Give me a hint for that question, but don't tell me the answer." },
  { label: "Show an example", prompt: "Show me a small example that makes that idea clearer." },
  { label: "Say it simpler", prompt: "Explain that again in simpler words, with an everyday comparison." },
];

function removeTutorQuick() {
  document.querySelectorAll("#tutor-log .tutor-quick").forEach((el) => el.remove());
}

function renderTutorQuick() {
  const log = document.getElementById("tutor-log");
  if (!log) return;
  removeTutorQuick();
  const last = tutor.messages[tutor.messages.length - 1];
  if (tutor.busy || !last || last.role !== "assistant") return;
  const wrap = document.createElement("div");
  wrap.className = "tutor-quick";
  wrap.setAttribute("aria-label", "Ask the tutor for help");
  wrap.innerHTML = TUTOR_QUICK.map(
    (q) => `<button class="tutor-quick-btn" type="button" data-prompt="${escapeHtml(q.prompt)}">${escapeHtml(q.label)}</button>`
  ).join("");
  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".tutor-quick-btn");
    if (btn) tutorRequest(btn.dataset.prompt);
  });
  log.appendChild(wrap);
  tutorScroll();
}

function tutorNotice(text) {
  const log = document.getElementById("tutor-log");
  if (!log) return;
  log.querySelector(".chat-empty")?.remove();
  const bubble = document.createElement("div");
  bubble.className = "msg error";
  bubble.textContent = text;
  log.appendChild(bubble);
  tutorScroll();
}

async function ensureTutorModel() {
  if (isGemini()) {
    if (!chatState.apiKey) {
      tutorNotice("Add your Google Gemini API key in Chat first, then come back.");
      return false;
    }
  } else if (isGroq()) {
    if (!chatState.apiKey) {
      tutorNotice("Add your Groq API key in Chat first, then come back.");
      return false;
    }
  } else if (isOpenRouter()) {
    if (!orModels.length) await loadOpenRouterModels();
    if (!chatState.apiKey) {
      tutorNotice("Add your OpenRouter API key in Chat first, then come back.");
      return false;
    }
  } else if (isNim()) {
    if (!nimModels.length) await loadNimModels();
  } else if (!ollamaModels.length) {
    await loadOllamaModels();
  }

  if (!activeModel()) {
    tutorNotice(
      isNim()
        ? "NIM proxy not running — start the app with `python serve.py`."
        : isGroq()
          ? "No Groq model selected. Open Chat and pick one."
          : isOpenRouter()
            ? "No OpenRouter model selected. Open Chat and pick one."
            : isGemini()
              ? "No Gemini model selected. Open Chat and pick one."
              : "No Ollama model found. Start Ollama (`ollama serve`), then try again."
    );
    return false;
  }

  const provider = document.getElementById("tutor-provider");
  if (provider) provider.innerHTML = tutorProviderLine();
  return true;
}

async function startTutor(restart = false) {
  if (tutor.busy) tutor.abort?.abort();

  const select = document.getElementById("tutor-topic");
  tutor.topic = select ? select.value : tutor.topic;

  if (restart || tutor.messages.length) {
    tutor.messages = [];
    const log = document.getElementById("tutor-log");
    if (log) log.innerHTML = "";
  }
  saveTutorState();

  markPlanDone("tutor");
  await tutorRequest("Begin now: ask the first question.", true);
}

function tutorErrorText(err) {
  if (err instanceof TypeError) {
    if (isNim()) return "Couldn't reach the NIM proxy. Start the app with `python serve.py`, then try again.";
    if (isOpenRouter()) return "Couldn't reach OpenRouter. Check your internet connection and try again.";
    if (isGemini()) return "Couldn't reach Google Gemini. Check your internet connection and API key.";
    return "Couldn't reach Ollama at localhost:11434. Make sure it's running (`ollama serve`).";
  }
  return err?.message ?? String(err);
}

async function tutorRequest(text, hidden = false) {
  if (tutor.busy || !text) return;
  if (!(await ensureTutorModel())) return;

  const log = document.getElementById("tutor-log");
  if (!log) return;
  log.querySelector(".chat-empty")?.remove();
  removeTutorQuick();

  if (!hidden) {
    tutor.messages.push({ role: "user", content: text });
    appendTutorBubble("user", text);
    saveTutorState();
  }

  const input = document.getElementById("tutor-input");
  if (input) {
    input.value = "";
    input.style.height = "auto";
  }

  const bubble = document.createElement("div");
  bubble.className = "msg bot";
  const body = document.createElement("div");
  body.className = "msg-body typing";
  body.innerHTML = '<span class="chat-typing">Thinking</span>';
  bubble.appendChild(body);
  const meta = document.createElement("div");
  meta.className = "chat-meta";
  bubble.appendChild(meta);
  log.appendChild(bubble);
  tutorScroll();

  const abort = new AbortController();
  tutor.abort = abort;
  tutor.busy = true;
  updateTutorButtons();

  const payload = hidden ? [{ role: "user", content: text }] : tutor.messages.slice(-20);
  const started = performance.now();
  let full = "";

  try {
    const result = await streamCurrent(
      payload,
      abort.signal,
      (piece) => {
        if (!piece) return;
        if (!full) body.classList.remove("typing");
        full += piece;
        body.textContent = full;
        tutorScroll();
      },
      TUTOR_SYSTEM_PROMPT(tutor.topic),
      0.4
    );

    if (!full.trim()) {
      body.classList.remove("typing");
      body.classList.add("formatted");
      body.textContent = "(the model sent no text — try Restart or pick another model)";
      return;
    }

    body.classList.add("formatted");
    body.innerHTML = renderMarkdown(full);
    tutor.messages.push({ role: "assistant", content: full });
    saveTutorState();
    if (!hidden) addXp(5);
    if (result.tokens) {
      meta.textContent = isRemote()
        ? `${result.tokens} tokens · ${((performance.now() - started) / 1000).toFixed(1)} s`
        : `${result.tokens} tokens`;
    }
    tutorScroll();
  } catch (err) {
    if (err.name === "AbortError") {
      if (full.trim()) {
        body.classList.add("formatted");
        body.innerHTML = renderMarkdown(full);
        meta.textContent = "stopped";
        tutor.messages.push({ role: "assistant", content: full });
        saveTutorState();
      } else {
        bubble.remove();
      }
    } else {
      bubble.remove();
      tutorNotice(tutorErrorText(err));
    }
  } finally {
    tutor.busy = false;
    tutor.abort = null;
    updateTutorButtons();
    renderTutorQuick();
    document.getElementById("tutor-input")?.focus();
  }
}

/* ---------- Projects ---------- */

let projectId = null;

function openProjects() {
  show("projects");
  projectId = null;
  renderProjects();
}

function projectRecord(project) {
  if (!store.projects[project.id]) store.projects[project.id] = { steps: [] };
  return store.projects[project.id];
}

function projectStepsDone(project) {
  return store.projects[project.id]?.steps?.length ?? 0;
}

function renderProjects() {
  const items = window.PROJECTS.map((project, index) => {
    const done = projectStepsDone(project);
    const total = project.steps.length;
    const complete = done === total;
    const checks = store.projects[project.id]?.checks;
    const status = complete
      ? `Completed · ${total}/${total} steps`
      : done
        ? `${done}/${total} steps done`
        : "Not started";
    return `
      <button class="lesson-item" type="button" data-id="${project.id}">
        <div class="lesson-num">${String(index + 1).padStart(2, "0")}</div>
        <div class="lesson-info">
          <div class="lesson-title">${escapeHtml(project.title)}</div>
          <div class="lesson-summary">${escapeHtml(project.summary)}</div>
          <div class="lesson-meta">${escapeHtml(project.level)} · ${project.minutes} min · ${status}${
            checks ? ` · ${checks.passed}/${checks.total} checks` : ""
          }</div>
        </div>
        <div class="lesson-side"><span class="${complete ? "chip ok" : "chip"}">${complete ? "Done" : done ? "Resume" : "Start"}</span><span class="lesson-arrow">→</span></div>
      </button>`;
  }).join("");

  els.projectPanel.innerHTML = `<div class="lesson-list">${items}</div>
    <p class="hint">Starter code is deliberately unfinished — the TODOs are the project. Each one runs in the playground, so you can test every step as you go.</p>`;

  els.projectPanel.querySelectorAll(".lesson-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      projectId = btn.dataset.id;
      renderProjectDetail();
    });
  });
}

function renderProjectDetail() {
  const project = window.PROJECTS.find((p) => p.id === projectId);
  if (!project) {
    projectId = null;
    renderProjects();
    return;
  }

  const rec = projectRecord(project);
  const total = project.steps.length;
  const done = rec.steps.length;
  const complete = done === total;

  const steps = project.steps
    .map((text, index) => {
      const checked = rec.steps.includes(index);
      return `
      <label class="project-step ${checked ? "on" : ""}">
        <input type="checkbox" data-step="${index}" ${checked ? "checked" : ""}>
        <span>${fmt(text)}</span>
      </label>`;
    })
    .join("");

  els.projectPanel.innerHTML = `
    <div class="study-bar">
      <button class="ghost" id="project-back" type="button">&larr; Projects</button>
      <span id="project-progress">${done}/${total} steps · ${escapeHtml(project.level)}</span>
    </div>
    <div class="project-detail">
      <h2>${escapeHtml(project.title)}</h2>
      <p class="lesson-lede">${escapeHtml(project.summary)}</p>
      <div class="project-tags">${project.skills.map((skill) => `<span class="chip">${escapeHtml(skill)}</span>`).join("")}</div>
      <p class="project-brief">${fmt(project.brief)}</p>
      ${
        project.tests?.length
          ? `<p class="project-graded">Graded · ${project.tests.length} automatic checks${
              rec.checks ? ` · last run ${rec.checks.passed}/${rec.checks.total}` : ""
            }. Open the starter, then press <strong>Check</strong> in the playground.</p>`
          : ""
      }
      <div class="lesson-actions">
        <button class="secondary" id="project-code" type="button">Open starter in playground</button>
        <button class="ghost" id="project-reset" type="button">Reset checklist</button>
      </div>
      <h3 class="quiz-title">Steps</h3>
      <div class="project-steps">${steps}</div>
      <div class="lesson-result ${complete ? "" : "hidden"}" id="project-result">
        <strong>Project complete.</strong> Every step is checked — now try one of the stretch goals, or open the chat and explain your code to the tutor.
      </div>
      <div class="lesson-task">
        <div class="lesson-task-head">Done when</div>
        <p>${fmt(project.check)}</p>
      </div>
      <div class="project-stretch">
        <h3>Push further</h3>
        <ul>${project.stretch.map((goal) => `<li>${fmt(goal)}</li>`).join("")}</ul>
      </div>
      ${
        project.source
          ? `<p class="project-source">Adapted from <a href="${project.source.url}" target="_blank" rel="noopener">${escapeHtml(
              project.source.label
            )}</a> · BSD-3-Clause</p>`
          : ""
      }
    </div>`;

  document.getElementById("project-back").addEventListener("click", () => {
    projectId = null;
    renderProjects();
  });

  document.getElementById("project-code").addEventListener("click", () => {
    openCodeWith(project.starter, "python", project);
  });

  document.getElementById("project-reset").addEventListener("click", () => {
    rec.steps = [];
    saveStore();
    renderProjectDetail();
  });

  els.projectPanel.querySelectorAll(".project-step input").forEach((input) => {
    input.addEventListener("change", () => {
      const index = Number(input.dataset.step);
      const set = new Set(rec.steps);
      if (input.checked) set.add(index);
      else set.delete(index);
      rec.steps = [...set].sort((a, b) => a - b);
      rec.at = Date.now();
      saveStore();

      input.closest(".project-step").classList.toggle("on", input.checked);
      document.getElementById("project-progress").textContent =
        `${rec.steps.length}/${total} steps · ${project.level}`;
      document.getElementById("project-result").classList.toggle("hidden", rec.steps.length !== total);
    });
  });
}

/* ---------- Detective Mystery Cases (Multi-Case) ---------- */

const CASE_MARKER = "__PYCARDS_CASE__";
const CASE_KEY = "pycards.case.v2";
const CASE_RUN_LABEL = 'Run &amp; check <kbd>Ctrl&#9166;</kbd>';

const ALL_CASES = {
  lark: {
    id: "lark",
    title: "Case File: The Missing Lark",
    desc: "A 1723 violin vanished from the vault during the Ashgrove gala. Read the files, write Python, name the thief.",
    suspect: "Dmitri Vane",
    accuseDoneMsg: "Two vault visits and a 120 cash payment with no programme entry — Dmitri Vane's story fell apart. The Lark goes back in the vault tonight.",
    files: {
      guests: {
        headers: ["Guest", "Room", "Arrived", "Party", "Note"],
        columns: ["name", "room", "arrived", "party", "note"],
      },
      access_log: {
        headers: ["Time", "Door", "Person", "Card"],
        columns: ["time", "door", "person", "card"],
      },
      payments: {
        headers: ["Time", "Payer", "Amount", "Method", "Note"],
        columns: ["time", "payer", "amount", "method", "note"],
      },
      staff: {
        headers: ["Name", "Role", "Shift", "Note"],
        columns: ["name", "role", "shift", "note"],
      },
    },
    data: {
      guests: [
        { name: "Ada Whitlock", room: "A-12", arrived: "22:41", party: "committee", note: "On the gala committee." },
        { name: "Bram Osei", room: "B-03", arrived: "23:12", party: "coat check", note: "Cellist with the quartet." },
        { name: "Cora Lindqvist", room: "A-07", arrived: "23:26", party: "photo pass", note: "Press photographer." },
        { name: "Dmitri Vane", room: "C-09", arrived: "23:38", party: "case storage", note: "Private collector." },
        { name: "Elena Ruiz", room: "B-11", arrived: "22:05", party: "donation", note: "The host's accountant." },
        { name: "Farid Nasser", room: "A-04", arrived: "23:52", party: "coat check", note: "Antiques dealer." },
      ],
      access_log: [
        { time: "22:47", door: "vault", person: "Ada Whitlock", card: "guest" },
        { time: "23:05", door: "lobby", person: "Elena Ruiz", card: "guest" },
        { time: "23:11", door: "stage", person: "Bram Osei", card: "guest" },
        { time: "23:29", door: "vault", person: "Cora Lindqvist", card: "press" },
        { time: "23:33", door: "vault", person: "Dmitri Vane", card: "guest" },
        { time: "23:41", door: "vault", person: "Dmitri Vane", card: "guest" },
        { time: "23:44", door: "vault", person: "Farid Nasser", card: "guest" },
        { time: "23:47", door: "cloakroom", person: "Farid Nasser", card: "guest" },
        { time: "23:58", door: "lobby", person: "Greta Holm", card: "staff" },
      ],
      payments: [
        { time: "22:50", payer: "Ada Whitlock", amount: 40, method: "card", note: "Programme" },
        { time: "23:15", payer: "Bram Osei", amount: 18, method: "card", note: "Coat check" },
        { time: "23:30", payer: "Cora Lindqvist", amount: 25, method: "cash", note: "Photo pass" },
        { time: "23:45", payer: "Dmitri Vane", amount: 120, method: "cash", note: "Case storage" },
        { time: "23:50", payer: "Farid Nasser", amount: 18, method: "card", note: "Coat check" },
        { time: "23:55", payer: "Elena Ruiz", amount: 300, method: "card", note: "Donation" },
      ],
      staff: [
        { name: "Ines Park", role: "security", shift: "21:00-07:00", note: "Front gate and rounds." },
        { name: "Tomas Reid", role: "vault guard", shift: "22:00-06:00", note: "Posted outside the vault." },
        { name: "Priya Nair", role: "front desk", shift: "21:00-07:00", note: "Guest list and room keys." },
        { name: "Greta Holm", role: "housekeeping", shift: "21:00-07:00", note: "Turns down rooms after midnight." },
      ],
    },
    clues: [
      {
        id: "late",
        short: "Late arrivals",
        title: "Clue 1 · Late arrivals",
        question: "The gala began at 23:00. Using guests, list every guest who arrived after that, sorted by name.",
        hint: 'Times are fixed-width "HH:MM" strings, so compare g["arrived"] with "23:00" directly.',
        expectLabel: "a sorted list of four guest names",
        starter: `# guests holds one dict per guest: name, room, arrived, party, note.
# Times are "HH:MM" strings, so "23:38" > "23:00" works.
late = [g for g in guests if True]

answer = sorted(g["name"] for g in late)`,
        expected: ["Bram Osei", "Cora Lindqvist", "Dmitri Vane", "Farid Nasser"],
      },
      {
        id: "vault",
        short: "Vault doors",
        title: "Clue 2 · Vault doors",
        question: "The Lark was locked away at 23:30. Using access_log, list everyone who entered the vault after that — each name once, sorted.",
        hint: 'One comprehension, two checks: row["door"] == "vault" and row["time"] > "23:30". A set removes repeats.',
        expectLabel: "a sorted list of two names, no duplicates",
        starter: `# access_log rows: time, door, person, card.
vault = [row for row in access_log if row["door"] == "vault" and True]

answer = sorted({row["person"] for row in vault})`,
        expected: ["Dmitri Vane", "Farid Nasser"],
      },
      {
        id: "repeat",
        short: "Repeat visitor",
        title: "Clue 3 · Repeat visitor",
        question: "One guest came back. Count vault entries per person in access_log, then list anyone with more than one visit.",
        hint: "A dict of counts is already built for you. The TODO line needs `visits > 1`.",
        expectLabel: "a one-name list",
        starter: `# Count vault entries per person with a dict.
counts = {}
for row in access_log:
    if row["door"] == "vault":
        counts[row["person"]] = counts.get(row["person"], 0) + 1

answer = sorted(name for name, visits in counts.items() if True)`,
        expected: ["Dmitri Vane"],
      },
      {
        id: "cash",
        short: "Cash trail",
        title: "Clue 4 · Cash trail",
        question: "Big purchases leave a paper trail — unless they don't. Using payments, list everyone who paid in cash, sorted.",
        hint: 'Filter with p["method"] == "cash", then collect the payer names in a set.',
        expectLabel: "a sorted list of two names",
        starter: `# payments rows: time, payer, amount, method, note.
cash = [p for p in payments if True]

answer = sorted({p["payer"] for p in cash})`,
        expected: ["Cora Lindqvist", "Dmitri Vane"],
      },
    ],
  },
  breach: {
    id: "breach",
    title: "Case File: Ashgrove Data Breach",
    desc: "At 02:40 AM, $450,000 was moved from account ACCT-8821 to an offshore dummy account. Audit the server logs, badge swipes, employee records, and wire transfers to identify the insider threat.",
    suspect: "Marcus Vance",
    accuseDoneMsg: "Rogue SSH privilege escalation from IP 10.0.4.88 matched Marcus Vance's desk terminal and physical server room badge swipes at 02:05. Incident contained and forensic report filed.",
    files: {
      server_logs: {
        headers: ["Time", "IP", "User", "Action", "Status"],
        columns: ["time", "ip", "user", "action", "status"],
      },
      badge_swipes: {
        headers: ["Time", "Door", "Employee", "Badge", "Status"],
        columns: ["time", "door", "employee", "badge", "status"],
      },
      employees: {
        headers: ["Name", "Dept", "Role", "Desk IP", "Shift"],
        columns: ["name", "dept", "role", "desk_ip", "shift"],
      },
      transfers: {
        headers: ["ID", "Time", "From", "To", "Amount", "Auth By"],
        columns: ["id", "time", "from_acct", "to_acct", "amount", "authorized_by"],
      },
    },
    data: {
      server_logs: [
        { time: "01:15", ip: "192.168.1.10", user: "system", action: "cron_backup", status: "200 OK" },
        { time: "01:45", ip: "10.0.4.88", user: "admin", action: "ssh_login", status: "200 OK" },
        { time: "02:14", ip: "10.0.4.88", user: "admin", action: "privilege_escalate", status: "200 OK" },
        { time: "02:22", ip: "10.0.4.88", user: "admin", action: "disable_audit_log", status: "200 OK" },
        { time: "02:38", ip: "10.0.4.88", user: "admin", action: "wire_transfer_init", status: "200 OK" },
        { time: "02:50", ip: "10.0.4.12", user: "sarah_c", action: "emergency_lockdown", status: "403 DENIED" },
        { time: "03:02", ip: "10.0.4.12", user: "sarah_c", action: "incident_ticket_open", status: "200 OK" },
      ],
      badge_swipes: [
        { time: "01:10", door: "Lobby Front", employee: "Marcus Vance", badge: "EMP-402", status: "GRANTED" },
        { time: "01:40", door: "Terminal Lab", employee: "Marcus Vance", badge: "EMP-402", status: "GRANTED" },
        { time: "02:05", door: "Server Room B", employee: "Marcus Vance", badge: "EMP-402", status: "GRANTED" },
        { time: "02:30", door: "Terminal Lab", employee: "Marcus Vance", badge: "EMP-402", status: "GRANTED" },
        { time: "02:46", door: "Parking Exit", employee: "Marcus Vance", badge: "EMP-402", status: "GRANTED" },
        { time: "02:55", door: "Lobby Front", employee: "Sarah Chen", badge: "EMP-109", status: "GRANTED" },
      ],
      employees: [
        { name: "Marcus Vance", dept: "DevOps", role: "Junior Sysadmin", desk_ip: "10.0.4.88", shift: "Night" },
        { name: "Sarah Chen", dept: "SecOps", role: "Security Lead", desk_ip: "10.0.4.12", shift: "On-Call" },
        { name: "Devin Roy", dept: "Finance", role: "Accountant", desk_ip: "10.0.4.25", shift: "Day" },
        { name: "Priya Patel", dept: "Database", role: "DB Admin", desk_ip: "10.0.4.30", shift: "Day" },
      ],
      transfers: [
        { id: "TX-901", time: "01:20", from_acct: "CORP-01", to_acct: "SUPPLY-22", amount: 14000, authorized_by: "system" },
        { id: "TX-902", time: "02:40", from_acct: "ACCT-8821", to_acct: "OFFSHORE-99", amount: 450000, authorized_by: "admin" },
        { id: "TX-903", time: "03:15", from_acct: "CORP-02", to_acct: "PAYROLL", amount: 92000, authorized_by: "system" },
      ],
    },
    clues: [
      {
        id: "admin_ip",
        short: "Rogue admin IP",
        title: "Clue 1 · Rogue admin IP",
        question: "Find which IP address logged in or acted as `user == 'admin'` in server_logs. Return the IP string.",
        hint: "Filter server_logs where log['user'] == 'admin'. Take log['ip'].",
        expectLabel: "a string IP address",
        starter: `# server_logs rows: time, ip, user, action, status.
admin_logs = [row for row in server_logs if row["user"] == "admin"]
answer = admin_logs[0]["ip"]`,
        expected: "10.0.4.88",
      },
      {
        id: "night_badges",
        short: "Night Swipes",
        title: "Clue 2 · Night Swipes",
        question: "Who swiped into 'Server Room B' between 02:00 and 02:30? Return a sorted list of names.",
        hint: "Check row['door'] == 'Server Room B' and '02:00' <= row['time'] <= '02:30'.",
        expectLabel: "a sorted list of employee names",
        starter: `# badge_swipes rows: time, door, employee, badge, status.
swipes = [b["employee"] for b in badge_swipes if b["door"] == "Server Room B" and "02:00" <= b["time"] <= "02:30"]
answer = sorted(set(swipes))`,
        expected: ["Marcus Vance"],
      },
      {
        id: "target_wire",
        short: "Offshore Account",
        title: "Clue 3 · Offshore Account",
        question: "Find the destination account (`to_acct`) that received a wire transfer of more than $100,000 in transfers.",
        hint: "Find row in transfers where row['amount'] > 100000, then get row['to_acct'].",
        expectLabel: "an account string",
        starter: `# transfers rows: id, time, from_acct, to_acct, amount, authorized_by.
big_transfers = [t for t in transfers if t["amount"] > 100000]
answer = big_transfers[0]["to_acct"]`,
        expected: "OFFSHORE-99",
      },
      {
        id: "culprit_trace",
        short: "IP Attribution",
        title: "Clue 4 · IP Attribution",
        question: "Match the rogue IP '10.0.4.88' to an employee's desk IP in employees. Return the culprit's full name.",
        hint: "Search employees for desk_ip == '10.0.4.88'.",
        expectLabel: "the employee's full name",
        starter: `# employees rows: name, dept, role, desk_ip, shift.
match = [e["name"] for e in employees if e["desk_ip"] == "10.0.4.88"]
answer = match[0]`,
        expected: "Marcus Vance",
      },
    ],
  },
};

// Season cases (data/cases-extra.js) — unlocked by level.
Object.assign(ALL_CASES, window.EXTRA_CASES ?? {});

function caseUnlocked(c) {
  return !c.level || levelInfo().level >= c.level;
}

function refreshCaseOptions() {
  if (!els.caseSelect) return;
  els.caseSelect.innerHTML = Object.values(ALL_CASES)
    .map((c, i) => {
      const locked = !caseUnlocked(c);
      const label = `Case ${i + 1} · ${c.title.replace("Case File: ", "")}${locked ? ` 🔒 Lv ${c.level}` : ""}`;
      return `<option value="${c.id}" ${locked ? "disabled" : ""}>${escapeHtml(label)}</option>`;
    })
    .join("");
  els.caseSelect.value = activeCaseId;
}

let activeCaseId = "lark";

function getActiveCase() {
  return ALL_CASES[activeCaseId] || ALL_CASES.lark;
}

function readCaseUi() {
  try {
    const parsed = JSON.parse(localStorage.getItem(CASE_KEY) || "null");
    if (parsed && typeof parsed === "object") {
      return {
        file: parsed.file || "guests",
        clue: typeof parsed.clue === "string" ? parsed.clue : null,
        drafts: parsed.drafts && typeof parsed.drafts === "object" ? parsed.drafts : {},
      };
    }
  } catch {}
  return { file: "guests", clue: null, drafts: {} };
}

function saveCaseUi() {
  caseUi.file = caseFile;
  caseUi.clue = caseClueId;
  try {
    localStorage.setItem(CASE_KEY, JSON.stringify(caseUi));
  } catch {}
}

let caseUi = readCaseUi();
let caseFile = caseUi.file;
let caseClueId = caseUi.clue || ALL_CASES.lark.clues[0].id;
let caseHintOpen = false;
let caseBusy = false;

function caseSolved() {
  if (!store.cases) store.cases = { lark: store.case || { solved: {}, done: false }, breach: { solved: {}, done: false } };
  if (!store.cases[activeCaseId]) store.cases[activeCaseId] = { solved: {}, done: false };
  return store.cases[activeCaseId].solved;
}

function caseSolvedCount() {
  const solved = caseSolved();
  const currentCase = getActiveCase();
  return currentCase.clues.filter((clue) => solved[clue.id]).length;
}

function openGame() {
  show("game");
  if (!caseUnlocked(getActiveCase())) activeCaseId = "lark";
  refreshCaseOptions();
  const currentCase = getActiveCase();
  if (els.caseSelect) els.caseSelect.value = activeCaseId;
  if (els.caseTitle) els.caseTitle.textContent = currentCase.title;
  if (els.caseDesc) els.caseDesc.textContent = currentCase.desc;

  const validFiles = Object.keys(currentCase.files);
  if (!validFiles.includes(caseFile)) {
    caseFile = validFiles[0];
  }

  const solved = caseSolved();
  if (caseClueId !== "final" && !currentCase.clues.some((clue) => clue.id === caseClueId)) {
    caseClueId = (currentCase.clues.find((clue) => !solved[clue.id]) ?? currentCase.clues[0]).id;
  }
  if (caseClueId === "final" && caseSolvedCount() < currentCase.clues.length) {
    caseClueId = (currentCase.clues.find((clue) => !solved[clue.id]) ?? currentCase.clues[0]).id;
  }
  renderGame();
}

function renderGame() {
  renderCaseTabs();
  renderCaseTable();
  renderCaseEvidence();
  renderCaseClue();
  renderCaseProgress();
}

function renderCaseEvidence() {
  if (!els.caseEvidence) return;
  const currentCase = getActiveCase();
  const solved = caseSolved();
  const pinned = currentCase.clues.filter((c) => solved[c.id]);
  els.caseEvidence.innerHTML = pinned.length
    ? `<div class="evidence-head">📌 Evidence board</div>` +
      pinned.map((c) => `<span class="evidence-pin">✓ ${escapeHtml(c.short)}</span>`).join("")
    : "";
}

function renderCaseProgress() {
  const currentCase = getActiveCase();
  const count = caseSolvedCount();
  const isDone = !!store.cases?.[activeCaseId]?.done;
  els.caseProgress.textContent = isDone ? "Case closed" : `${count} / ${currentCase.clues.length} clues`;
  els.caseProgress.classList.toggle("done", isDone);
  if (els.caseShare) els.caseShare.classList.toggle("hidden", !isDone);
}

function renderCaseTabs() {
  const currentCase = getActiveCase();
  const fileKeys = Object.keys(currentCase.files);
  els.caseTabs.innerHTML = fileKeys
    .map(
      (f) =>
        `<button class="case-tab ${f === caseFile ? "active" : ""}" data-file="${f}" type="button">${escapeHtml(f)}</button>`
    )
    .join("");

  const solved = caseSolved();
  let html = currentCase.clues
    .map((clue, index) => {
      const done = !!solved[clue.id];
      const active = clue.id === caseClueId;
      return `<button class="case-clue-tab ${active ? "active" : ""} ${done ? "done" : ""}" type="button" role="tab" aria-selected="${active}" data-clue="${clue.id}"><span class="case-clue-num">${done ? "&#10003;" : index + 1}</span>${escapeHtml(clue.short)}</button>`;
    })
    .join("");

  const allSolved = caseSolvedCount() === currentCase.clues.length;
  const isDone = !!store.cases?.[activeCaseId]?.done;
  const active = caseClueId === "final";
  html += `<button class="case-clue-tab case-clue-final ${active ? "active" : ""} ${isDone ? "done" : ""}" type="button" role="tab" aria-selected="${active}" data-clue="final" ${
    allSolved ? "" : 'disabled title="Solve all clues first"'
  }><span class="case-clue-num">${isDone ? "&#10003;" : currentCase.clues.length + 1}</span>Accuse</button>`;

  els.caseClueTabs.innerHTML = html;
}

function renderCaseTable() {
  const currentCase = getActiveCase();
  const spec = currentCase.files[caseFile] || Object.values(currentCase.files)[0];
  const rows = currentCase.data[caseFile] || [];
  const head = spec.headers
    .map(
      (label, index) =>
        `<th${spec.columns[index] === "note" ? ' class="case-note-col"' : ""}>${escapeHtml(label)}</th>`
    )
    .join("");
  const body = rows
    .map((row) => {
      const cells = spec.columns
        .map((col) => {
          const value = row[col] ?? "";
          const cls = col === "note" ? ' class="case-note"' : "";
          return `<td${cls}>${escapeHtml(String(value))}</td>`;
        })
        .join("");
      return `<tr>${cells}</tr>`;
    })
    .join("");
  els.caseTable.innerHTML = `<table class="case-table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`;
}

function renderCaseClue() {
  const currentCase = getActiveCase();
  const solved = caseSolved();
  const isDone = !!store.cases?.[activeCaseId]?.done;

  if (caseClueId === "final") {
    els.caseClue.innerHTML = `
      <div class="case-clue-head">
        <span class="case-clue-num-badge">${currentCase.clues.length + 1}</span>
        <div>
          <div class="case-clue-title">Name the culprit</div>
          <p class="case-clue-q">${escapeHtml(currentCase.desc)} Make the call.</p>
        </div>
      </div>
      ${
        isDone
          ? `<div class="case-done"><strong>Case closed.</strong> ${escapeHtml(currentCase.accuseDoneMsg)}</div>`
          : ""
      }`;
    els.caseFinal.classList.toggle("hidden", isDone);
    els.caseSuspect.value = "";
    els.caseFinalMsg.textContent = "";
    els.caseEditor.classList.add("hidden");
    els.caseRun.classList.add("hidden");
    els.caseHint.classList.add("hidden");
    els.caseOutput.classList.add("hidden");
    if (els.caseShare) els.caseShare.classList.toggle("hidden", !isDone);
    return;
  }

  const clue = currentCase.clues.find((item) => item.id === caseClueId) || currentCase.clues[0];
  const index = currentCase.clues.indexOf(clue);
  const isSolved = !!solved[clue.id];

  els.caseClue.innerHTML = `
    <div class="case-clue-head">
      <span class="case-clue-num-badge">${index + 1}</span>
      <div>
        <div class="case-clue-title">${escapeHtml(clue.title)}${isSolved ? '<span class="case-chip">solved</span>' : ""}</div>
        <p class="case-clue-q">${escapeHtml(clue.question)}</p>
      </div>
    </div>
    <p class="case-clue-hint ${caseHintOpen ? "" : "hidden"}" id="case-hint-text">${escapeHtml(clue.hint)}</p>`;

  els.caseFinal.classList.add("hidden");
  els.caseEditor.classList.remove("hidden");
  els.caseRun.classList.remove("hidden");
  els.caseHint.classList.remove("hidden");
  els.caseHint.textContent = caseHintOpen ? "Hide hint" : "Show hint";
  els.caseOutput.classList.add("hidden");
  els.caseOutput.className = "case-output hidden";
  if (els.caseShare) els.caseShare.classList.toggle("hidden", !isDone);

  if (els.caseEditor.dataset.clue !== clue.id) {
    els.caseEditor.value = caseUi.drafts[clue.id] ?? clue.starter;
    els.caseEditor.dataset.clue = clue.id;
  }
}

function showCaseOutput(tone, title, bodyHtml, output, ms) {
  const took =
    ms == null
      ? ""
      : `<span class="case-ms">${ms < 1000 ? `${Math.max(1, Math.round(ms))} ms` : `${(ms / 1000).toFixed(1)} s`}</span>`;
  const printed = output ? `<pre class="case-printed">${escapeHtml(output)}</pre>` : "";
  els.caseOutput.className = `case-output ${tone}`;
  els.caseOutput.innerHTML = `
    <div class="case-output-head"><strong>${escapeHtml(title)}</strong>${took}</div>
    <div class="case-output-body">${bodyHtml}</div>
    ${printed}`;
}

async function runCaseCode(code) {
  const py = await loadPyodideRuntime();
  let output = "";
  py.setStdout({ batched: (text) => (output += text) });
  py.setStderr({ batched: (text) => (output += text) });
  py.globals.set("__case_user_code", code);
  const currentCase = getActiveCase();
  py.globals.set("__case_data", JSON.stringify(currentCase.data));

  await py.runPythonAsync(`
import json as _json
_data = _json.loads(__case_data)
_namespace = { "__name__": "__main__" }
for _k, _v in _data.items():
    _namespace[_k] = _v
_load_error = ""
try:
    exec(compile(__case_user_code, "<case code>", "exec"), _namespace)
except BaseException as _exc:
    _load_error = type(_exc).__name__ + ": " + str(_exc)

_answer = _namespace.get("answer")
if isinstance(_answer, (set, frozenset)):
    try:
        _answer = sorted(_answer)
    except BaseException:
        _answer = [str(_item) for _item in _answer]
elif isinstance(_answer, tuple):
    _answer = list(_answer)
elif _answer is not None and not isinstance(_answer, (list, str, int, float, bool)):
    _answer = str(_answer)

print(${JSON.stringify(CASE_MARKER)} + _json.dumps({"error": _load_error, "answer": _answer}))
`);

  const at = output.lastIndexOf(CASE_MARKER);
  if (at < 0) throw new Error("The case runner produced no result — try again.");
  const data = JSON.parse(output.slice(at + CASE_MARKER.length).trim());
  return { ...data, output: output.slice(0, at).trim() };
}

function normalizeAnswer(value) {
  if (Array.isArray(value)) return value.map((item) => String(item).trim().toLowerCase());
  return typeof value === "string" ? value.trim().toLowerCase() : value;
}

function answerMatches(given, expected) {
  if (!Array.isArray(expected)) return normalizeAnswer(given) === normalizeAnswer(expected);
  if (!Array.isArray(given) || given.length !== expected.length) return false;
  const a = normalizeAnswer(given).sort();
  const b = normalizeAnswer(expected).sort();
  return a.every((item, index) => item === b[index]);
}

function resetCaseRunButton() {
  els.caseRun.disabled = false;
  els.caseRun.innerHTML = CASE_RUN_LABEL;
}

async function checkCaseClue() {
  if (caseBusy) return;
  const currentCase = getActiveCase();
  const clue = currentCase.clues.find((item) => item.id === caseClueId);
  if (!clue) return;

  caseBusy = true;
  els.caseRun.disabled = true;
  els.caseRun.textContent = "Running…";
  els.caseOutput.classList.remove("hidden");
  els.caseOutput.className = "case-output";
  els.caseOutput.innerHTML = `<div class="case-output-body">Running your code… the Python runtime loads once, so the first run takes a few seconds.</div>`;

  try {
    const started = performance.now();
    const result = await runCaseCode(els.caseEditor.value);
    const ms = performance.now() - started;

    if (result.error) {
      showCaseOutput("bad", "Your code did not run", `<code>${escapeHtml(result.error)}</code>`, result.output, ms);
      return;
    }
    if (result.answer == null) {
      showCaseOutput(
        "bad",
        "No answer to check",
        "Set a variable named <code>answer</code> to your result.",
        result.output,
        ms
      );
      return;
    }

    const correct = answerMatches(result.answer, clue.expected);
    if (!correct) {
      showCaseOutput(
        "bad",
        "Not quite right",
        `Expected ${escapeHtml(clue.expectLabel)}.<br>Your code produced: <code>${escapeHtml(
          JSON.stringify(result.answer)
        )}</code>`,
        result.output,
        ms
      );
      return;
    }

    if (!store.cases) store.cases = {};
    if (!store.cases[activeCaseId]) store.cases[activeCaseId] = { solved: {}, done: false };
    const first = !store.cases[activeCaseId].solved[clue.id];
    store.cases[activeCaseId].solved[clue.id] = true;
    if (activeCaseId === "lark") {
      if (!store.case) store.case = { solved: {}, done: false };
      store.case.solved[clue.id] = true;
    }

    if (first) addXp(20);
    else saveStore();

    renderCaseTabs();
    renderCaseProgress();

    const allDone = caseSolvedCount() === currentCase.clues.length;
    showCaseOutput(
      "ok",
      "Clue cracked",
      `${escapeHtml(clue.title)} checks out.${first ? " +20 XP." : " Already counted — no extra XP."}
      <button class="secondary case-next" id="case-next" type="button">${allDone ? "Name the culprit &rarr;" : "Next clue &rarr;"}</button>`,
      result.output,
      ms
    );
  } catch (err) {
    showCaseOutput(
      "bad",
      "Could not run Python",
      escapeHtml(err?.message ?? String(err)),
      "",
      null
    );
  } finally {
    caseBusy = false;
    resetCaseRunButton();
  }
}

function advanceCase() {
  const currentCase = getActiveCase();
  const solved = caseSolved();
  const next = currentCase.clues.find((clue) => !solved[clue.id]);
  caseClueId = next ? next.id : "final";
  caseHintOpen = false;
  saveCaseUi();
  renderCaseTabs();
  renderCaseProgress();
  renderCaseClue();
  els.caseEditor.focus();
}

function accuseSuspect() {
  const currentCase = getActiveCase();
  if (store.cases?.[activeCaseId]?.done) return;
  const guess = els.caseSuspect.value.trim();
  if (!guess) {
    els.caseFinalMsg.textContent = "Type a name first.";
    els.caseSuspect.focus();
    return;
  }
  if (guess.toLowerCase() === currentCase.suspect.toLowerCase()) {
    if (!store.cases) store.cases = {};
    if (!store.cases[activeCaseId]) store.cases[activeCaseId] = { solved: {}, done: false };
    store.cases[activeCaseId].done = true;
    if (activeCaseId === "lark") {
      if (!store.case) store.case = { solved: {}, done: false };
      store.case.done = true;
    }
    addGems(15, "case closed");
    addXp(100);
    saveStore();
    Juice.confetti(180);
    Juice.sound("level");
    renderGame();
    openMilestoneModal({
      title: "CASE CLOSED: " + currentCase.title,
      subtitle: `Solved by ${profile.name || "Master Detective"} · ${currentCase.suspect} caught!`,
    });
    return;
  }
  els.caseFinalMsg.textContent = "That name doesn't fit the forensic evidence. Re-examine the logs and transactions.";
  els.caseSuspect.select();
}

/* ---------- Custom Deck Builder & Importer ---------- */

let customDeckDraftCards = [];
let aiGenAbort = null;

const AI_CARD_SYSTEM_PROMPT = [
  "You write high-quality spaced-repetition flashcards for a study app.",
  "Return ONLY a JSON array — no explanation, no markdown, no code fences.",
  'Each item must be {"t": "short topic", "q": "question", "a": "answer"}.',
  "Rules:",
  "- One idea per card; each question must be answerable from the source material alone.",
  "- Answers stay under 30 words and are plain text; wrap code in backticks.",
  "- Cover definitions, syntax, gotchas, and one tiny example per key concept.",
  "- Vary topics, order from basic to advanced, and never duplicate a card.",
].join("\n");

function aiGenNeedsKey() {
  return (isGemini() || isGroq() || isOpenRouter()) && !chatState.apiKey;
}

function setAiGenMsg(text, kind = "") {
  if (!els.aiGenMsg) return;
  els.aiGenMsg.textContent = text;
  els.aiGenMsg.className = `hint ai-gen-msg${kind ? ` ${kind}` : ""}`;
}

function aiGenBusy(on) {
  if (els.aiGenGo) els.aiGenGo.disabled = on;
  if (els.aiGenStop) els.aiGenStop.classList.toggle("hidden", !on);
  if (els.aiGenStatus && !on) els.aiGenStatus.textContent = "Paste notes or a topic → draft cards";
}

function resetAiGenPanel() {
  aiGenAbort?.abort();
  aiGenAbort = null;
  if (els.aiGenNotes) els.aiGenNotes.value = "";
  if (els.aiGenCount) els.aiGenCount.value = "10";
  if (els.aiGenKey) els.aiGenKey.value = "";
  els.aiGenKeyRow?.classList.add("hidden");
  setAiGenMsg("");
  aiGenBusy(false);
}

function sanitizeJsonText(s) {
  let out = "";
  let inStr = false;
  let esc = false;
  for (const ch of s) {
    if (esc) {
      out += ch;
      esc = false;
      continue;
    }
    if (ch === "\\") {
      out += ch;
      esc = true;
      continue;
    }
    if (ch === '"') {
      inStr = !inStr;
      out += ch;
      continue;
    }
    if (inStr && (ch === "\n" || ch === "\r" || ch === "\t")) {
      out += ch === "\t" ? "\\t" : "\\n";
      continue;
    }
    out += ch;
  }
  return out;
}

function parseAiCards(text) {
  const raw = String(text ?? "").trim();
  if (!raw) return [];
  const clean = raw.replace(/```(?:json)?/gi, "").trim();
  const start = clean.indexOf("[");
  const end = clean.lastIndexOf("]");
  if (start !== -1 && end > start) {
    try {
      const arr = JSON.parse(sanitizeJsonText(clean.slice(start, end + 1)));
      if (Array.isArray(arr)) {
        return arr
          .map((c) => ({
            t: String(c?.t ?? c?.topic ?? "General").replace(/\s+/g, " ").trim().slice(0, 40) || "General",
            q: String(c?.q ?? c?.question ?? c?.front ?? "").replace(/\s+/g, " ").trim(),
            a: String(c?.a ?? c?.answer ?? c?.back ?? "").replace(/\s+/g, " ").trim(),
          }))
          .filter((c) => c.q && c.a);
      }
    } catch {
      // fall through to the line parser
    }
  }
  const cards = [];
  let cur = null;
  for (const line of clean.split(/\r?\n/).map((l) => l.trim()).filter(Boolean)) {
    const qm = line.match(/^(?:Q|Question)\s*[:.)-]\s*(.+)$/i);
    const am = line.match(/^(?:A|Answer)\s*[:.)-]\s*(.+)$/i);
    if (qm) {
      if (cur?.q && cur.a) cards.push(cur);
      cur = { t: "General", q: qm[1].replace(/^["'`]|["'`]$/g, "").trim(), a: "" };
    } else if (am && cur) {
      cur.a = am[1].replace(/^["'`]|["'`]$/g, "").trim();
    }
  }
  if (cur?.q && cur.a) cards.push(cur);
  return cards.filter((c) => c.q && c.a);
}

async function generateAiCards() {
  if (aiGenAbort) return;
  const notes = els.aiGenNotes?.value.trim() ?? "";
  if (notes.length < 8) {
    setAiGenMsg("Paste a little more material first — a sentence or two is enough.", "warn");
    els.aiGenNotes?.focus();
    return;
  }
  if (aiGenNeedsKey()) {
    const typed = els.aiGenKey?.value.trim();
    if (!typed) {
      els.aiGenKeyRow?.classList.remove("hidden");
      els.aiGenKey?.focus();
      const label = isGemini() ? "Gemini" : isGroq() ? "Groq" : "OpenRouter";
      setAiGenMsg(`Add your ${label} API key to generate cards.`, "warn");
      return;
    }
    chatState.apiKey = typed;
    if (!chatState.keys) chatState.keys = { gemini: "", groq: "", openrouter: "" };
    chatState.keys[chatState.provider] = typed;
    saveChatState();
    els.aiGenKeyRow?.classList.add("hidden");
  }
  const model = activeModel();
  if (!model) {
    setAiGenMsg("Pick a model in the AI Tutor tab first, then try again.", "warn");
    return;
  }
  const count = Math.max(3, Math.min(20, Number(els.aiGenCount?.value) || 10));

  aiGenAbort = new AbortController();
  aiGenBusy(true);
  setAiGenMsg(`Generating ${count} cards…`);
  let text = "";
  try {
    await streamCurrent(
      [{ role: "user", content: `Make ${count} cards from this material:\n\n${notes}` }],
      aiGenAbort.signal,
      (tok) => {
        text += tok;
        const made = (text.match(/"q"\s*:/g) || []).length;
        if (els.aiGenStatus) els.aiGenStatus.textContent = `Writing cards… ${Math.min(made, count)}/${count}`;
      },
      AI_CARD_SYSTEM_PROMPT,
      0.5
    );
    const cards = parseAiCards(text);
    if (!cards.length) throw new Error("That reply had no usable cards — try again or add more detail.");
    syncCustomDeckDraftFromDom();
    const placeholdersOnly = customDeckDraftCards.every((c) => !c.q.trim() && !c.a.trim());
    const fresh = cards.slice(0, count).map((c) => ({ t: c.t, q: c.q, a: c.a }));
    customDeckDraftCards = placeholdersOnly
      ? fresh
      : [...customDeckDraftCards.filter((c) => c.q.trim() || c.a.trim()), ...fresh];
    renderCustomDeckCardsBuilder();
    setAiGenMsg(`Added ${fresh.length} card${fresh.length === 1 ? "" : "s"} — edit anything below, then save.`, "ok");
    Juice.sound("good");
    Juice.confetti(50);
  } catch (err) {
    if (err.name === "AbortError") setAiGenMsg("Stopped — nothing was added.");
    else setAiGenMsg(err.message || "Generation failed. Try again.", "warn");
  } finally {
    aiGenAbort = null;
    aiGenBusy(false);
  }
}

function openCustomDeckModal() {
  customDeckDraftCards = [
    { t: "Basics", q: "", a: "" },
    { t: "Basics", q: "", a: "" },
  ];
  if (els.deckTitleInput) els.deckTitleInput.value = "";
  if (els.deckDescInput) els.deckDescInput.value = "";
  resetAiGenPanel();
  renderCustomDeckCardsBuilder();
  if (els.customDeckModal) els.customDeckModal.classList.remove("hidden");
  if (els.deckTitleInput) els.deckTitleInput.focus();
}

function renderCustomDeckCardsBuilder() {
  if (!els.builderCardsList) return;
  els.builderCardsList.innerHTML = customDeckDraftCards
    .map(
      (card, idx) => `
    <div class="builder-card-row" data-idx="${idx}">
      <div class="builder-card-top">
        <span class="builder-card-num">Card ${idx + 1}</span>
        ${
          customDeckDraftCards.length > 1
            ? `<button class="builder-card-del" data-del="${idx}" type="button" title="Delete card">&times;</button>`
            : ""
        }
      </div>
      <input class="modal-input card-q" placeholder="Front: Question" value="${escapeHtml(card.q)}">
      <input class="modal-input card-a" placeholder="Back: Answer" value="${escapeHtml(card.a)}">
      <input class="modal-input card-t" placeholder="Topic (e.g. Basics, Syntax)" value="${escapeHtml(card.t || "General")}">
    </div>`
    )
    .join("");
}

function syncCustomDeckDraftFromDom() {
  if (!els.builderCardsList) return;
  const rows = els.builderCardsList.querySelectorAll(".builder-card-row");
  rows.forEach((row, idx) => {
    if (customDeckDraftCards[idx]) {
      customDeckDraftCards[idx].q = row.querySelector(".card-q")?.value || "";
      customDeckDraftCards[idx].a = row.querySelector(".card-a")?.value || "";
      customDeckDraftCards[idx].t = row.querySelector(".card-t")?.value || "General";
    }
  });
}

function saveCustomDeck() {
  syncCustomDeckDraftFromDom();
  const title = els.deckTitleInput?.value.trim();
  const desc = els.deckDescInput?.value.trim() || "Custom flashcard deck";
  if (!title) {
    alert("Please provide a name for your deck.");
    els.deckTitleInput?.focus();
    return;
  }
  const validCards = customDeckDraftCards.filter((c) => c.q.trim() && c.a.trim());
  if (!validCards.length) {
    alert("Please enter at least one card with both a question and an answer.");
    return;
  }
  const newDeck = {
    id: "custom_" + Date.now().toString(36),
    name: title,
    description: desc,
    custom: true,
    cards: validCards.map((c) => ({
      t: c.t.trim() || "General",
      q: c.q.trim(),
      a: c.a.trim(),
    })),
  };
  if (!store.customDecks) store.customDecks = [];
  store.customDecks.push(newDeck);
  saveStore();
  renderHome();
  if (els.customDeckModal) els.customDeckModal.classList.add("hidden");
  showXpToast(10, 0, ["Deck Created!"]);
}

function openImportDeckModal() {
  if (els.importDeckTitle) els.importDeckTitle.value = "";
  if (els.importPasteArea) els.importPasteArea.value = "";
  if (els.deckFileInput) els.deckFileInput.value = "";
  if (els.importDeckModal) els.importDeckModal.classList.remove("hidden");
  if (els.importDeckTitle) els.importDeckTitle.focus();
}

function parseCardsFromText(text) {
  const trimmed = text.trim();
  if (!trimmed) return [];
  // Try JSON
  if (trimmed.startsWith("[") || trimmed.startsWith("{")) {
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) {
        return parsed
          .filter((c) => (c.q || c.question) && (c.a || c.answer))
          .map((c) => ({
            t: c.t || c.topic || "General",
            q: c.q || c.question,
            a: c.a || c.answer,
          }));
      }
      if (parsed && Array.isArray(parsed.cards)) {
        return parsed.cards
          .filter((c) => (c.q || c.question) && (c.a || c.answer))
          .map((c) => ({
            t: c.t || c.topic || "General",
            q: c.q || c.question,
            a: c.a || c.answer,
          }));
      }
    } catch {}
  }

  // Parse CSV/TSV/Anki text lines
  const lines = trimmed.split(/\r?\n/).filter((l) => l.trim().length > 0);
  const cards = [];
  for (const line of lines) {
    let parts = [];
    if (line.includes("\t")) {
      parts = line.split("\t");
    } else if (line.includes(";")) {
      parts = line.split(";");
    } else if (line.includes(",")) {
      parts = line.split(",");
    }
    if (parts.length >= 2) {
      cards.push({
        q: parts[0].trim(),
        a: parts[1].trim(),
        t: parts[2]?.trim() || "Imported",
      });
    }
  }
  return cards;
}

function submitImportDeck() {
  const rawTitle = els.importDeckTitle?.value.trim();
  const pasteText = els.importPasteArea?.value.trim();
  if (!pasteText && !els.deckFileInput?.files?.length) {
    alert("Please upload a file or paste card content.");
    return;
  }

  const finalize = (content, defaultName) => {
    const cards = parseCardsFromText(content);
    if (!cards.length) {
      alert("No valid flashcards found. Make sure questions and answers are tab- or comma-separated, or in JSON format.");
      return;
    }
    const name = rawTitle || defaultName || "Imported Deck";
    const deck = {
      id: "import_" + Date.now().toString(36),
      name,
      description: `${cards.length} imported flashcards`,
      custom: true,
      cards,
    };
    if (!store.customDecks) store.customDecks = [];
    store.customDecks.push(deck);
    saveStore();
    renderHome();
    if (els.importDeckModal) els.importDeckModal.classList.add("hidden");
    showXpToast(20, 0, [`${cards.length} Cards Imported!`]);
  };

  if (els.deckFileInput?.files?.length) {
    const file = els.deckFileInput.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const defaultName = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
      finalize(e.target.result, defaultName);
    };
    reader.readAsText(file);
  } else {
    finalize(pasteText, "Pasted Deck");
  }
}

/* ---------- Data Backup & Restore ---------- */

function exportBackup() {
  try {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(store, null, 2));
    const dlAnchor = document.createElement("a");
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `learning-hub-backup-${todayKey()}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
    if (els.profileBackupMsg) {
      els.profileBackupMsg.textContent = "Backup downloaded!";
      setTimeout(() => { if (els.profileBackupMsg) els.profileBackupMsg.textContent = ""; }, 4000);
    }
  } catch (err) {
    alert("Export failed: " + err.message);
  }
}

function importBackup(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      store = normalizeStore(parsed);
      saveStore();
      updateStats();
      renderHome();
      renderProfilePanel();
      if (els.profileBackupMsg) {
        els.profileBackupMsg.textContent = "Backup imported successfully!";
        setTimeout(() => { if (els.profileBackupMsg) els.profileBackupMsg.textContent = ""; }, 4000);
      }
      showXpToast(0, 0, ["Backup Restored!"]);
    } catch (err) {
      alert("Invalid backup file: " + err.message);
    }
  };
  reader.readAsText(file);
}

/* ---------- Shareable Milestone Badges (Canvas) ---------- */

let currentMilestoneShareText = "";

function openMilestoneModal(options = {}) {
  if (!els.milestoneModal || !els.milestoneCanvas) return;
  const canvas = els.milestoneCanvas;
  const ctx = canvas.getContext("2d");
  const info = levelInfo();
  const streak = currentStreak();
  const avatar = store.avatar || AVATARS[0];
  const name = profile.name || "Learner";
  const title = options.title || `${streak}-Day Study Streak`;
  const subtitle = options.subtitle || `Level ${info.level} · ${store.xp} Total XP · ${rankInfo(info.level).label} Rank`;

  // Background
  const grad = ctx.createLinearGradient(0, 0, 1200, 630);
  grad.addColorStop(0, "#0a0e17");
  grad.addColorStop(1, "#152033");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1200, 630);

  // Border glow
  ctx.strokeStyle = "rgba(110, 161, 255, 0.4)";
  ctx.lineWidth = 4;
  ctx.strokeRect(24, 24, 1152, 582);

  // Brand header
  ctx.font = "bold 34px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "left";
  ctx.fillText("learning", 60, 85);
  const learnW = ctx.measureText("learning").width;
  ctx.fillStyle = "#6ea1ff";
  ctx.fillText("hub", 60 + learnW, 85);
  const hubW = ctx.measureText("hub").width;
  ctx.fillStyle = "#93a0b4";
  ctx.font = "20px 'Segoe UI', system-ui, sans-serif";
  ctx.fillText("· study & code", 60 + learnW + hubW + 16, 85);

  // Avatar circle
  ctx.save();
  ctx.beginPath();
  ctx.arc(600, 200, 65, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(110, 161, 255, 0.15)";
  ctx.fill();
  ctx.strokeStyle = "#6ea1ff";
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.font = "68px 'Segoe UI Emoji', sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(avatar, 600, 200);
  ctx.restore();

  // Learner name
  ctx.font = "600 24px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = "#93a0b4";
  ctx.textAlign = "center";
  ctx.fillText(name, 600, 305);

  // Main Milestone Title
  ctx.font = "bold 44px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(title, 600, 360);

  // Subtitle
  ctx.font = "22px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = "#6ea1ff";
  ctx.fillText(subtitle, 600, 405);

  // Stats boxes
  const drawStatBox = (x, y, label, val) => {
    ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
    ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(x, y, 220, 90, 12);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#45d6a4";
    ctx.font = "bold 32px 'Segoe UI', system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(val, x + 110, y + 42);

    ctx.fillStyle = "#93a0b4";
    ctx.font = "16px 'Segoe UI', system-ui, sans-serif";
    ctx.fillText(label, x + 110, y + 72);
  };

  drawStatBox(220, 450, "Total XP", `${store.xp}`);
  drawStatBox(490, 450, "Current Streak", `${streak} days`);
  drawStatBox(760, 450, "Level", `Lv ${info.level}`);

  // Footer
  ctx.font = "18px 'Segoe UI', system-ui, sans-serif";
  ctx.fillStyle = "#64748b";
  ctx.textAlign = "center";
  ctx.fillText("Studied with Learning Hub · In-browser Python & Spaced Repetition", 600, 580);

  currentMilestoneShareText = `🚀 Milestone achieved on Learning Hub: ${title}! \n🔥 Streak: ${streak} days · Level ${info.level} (${store.xp} XP)\nStudy Python with spaced repetition & coding cases:`;
  if (els.milestoneTextPreview) {
    els.milestoneTextPreview.textContent = currentMilestoneShareText;
  }
  els.milestoneModal.classList.remove("hidden");
}

function downloadMilestoneImage() {
  if (!els.milestoneCanvas) return;
  const a = document.createElement("a");
  a.href = els.milestoneCanvas.toDataURL("image/png");
  a.download = `learning-hub-milestone-${todayKey()}.png`;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/* ---------- Theme Switching ---------- */

function applyTheme(theme) {
  store.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  const meta = document.querySelector('meta[name="color-scheme"]');
  if (meta) meta.content = theme === "dark" ? "dark" : "light";
  if (els.themeToggle) {
    els.themeToggle.textContent = theme === "dark" ? "🌙" : theme === "light" ? "☀️" : "📜";
    els.themeToggle.title = `Theme: ${theme.toUpperCase()} (click to cycle)`;
  }
  saveStore();
}

function cycleTheme() {
  const order = ["dark", "light", "sepia"];
  const next = order[(order.indexOf(store.theme || "dark") + 1) % order.length];
  applyTheme(next);
}

/* ---------- Global Event Listeners & Wiring ---------- */

// Theme toggle
if (els.themeToggle) els.themeToggle.addEventListener("click", cycleTheme);

// Custom Decks & Import
if (els.btnCreateDeck) els.btnCreateDeck.addEventListener("click", openCustomDeckModal);
if (els.btnDailyChallenge) els.btnDailyChallenge.addEventListener("click", () => openLearn("challenge"));

// Shop, sound, reminders, PWA install
function syncSoundBtn() {
  if (!els.btnSound) return;
  const on = store.sound !== false;
  els.btnSound.textContent = on ? "🔊 Sound" : "🔇 Muted";
  els.btnSound.setAttribute("aria-pressed", String(on));
}
if (els.btnShop) els.btnShop.addEventListener("click", openShop);
if (els.shopClose) els.shopClose.addEventListener("click", () => els.shopModal.classList.add("hidden"));
if (els.btnSound) {
  els.btnSound.addEventListener("click", () => {
    store.sound = store.sound === false;
    saveStore();
    syncSoundBtn();
    Juice.sound("flip");
  });
}
if (els.btnReminder) els.btnReminder.addEventListener("click", openReminder);
if (els.reminderClose) els.reminderClose.addEventListener("click", () => els.reminderModal.classList.add("hidden"));
if (els.reminderCancel) els.reminderCancel.addEventListener("click", () => els.reminderModal.classList.add("hidden"));
if (els.reminderSave) els.reminderSave.addEventListener("click", saveReminder);
if (els.customDeckClose) els.customDeckClose.addEventListener("click", () => els.customDeckModal.classList.add("hidden"));
if (els.customDeckCancel) els.customDeckCancel.addEventListener("click", () => els.customDeckModal.classList.add("hidden"));
if (els.customDeckSave) els.customDeckSave.addEventListener("click", saveCustomDeck);
if (els.aiGenGo) els.aiGenGo.addEventListener("click", generateAiCards);
if (els.aiGenStop) {
  els.aiGenStop.addEventListener("click", () => {
    aiGenAbort?.abort();
  });
}
if (els.aiGenKey) {
  els.aiGenKey.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      generateAiCards();
    }
  });
}
if (els.builderAddCard) {
  els.builderAddCard.addEventListener("click", () => {
    syncCustomDeckDraftFromDom();
    customDeckDraftCards.push({ t: "General", q: "", a: "" });
    renderCustomDeckCardsBuilder();
  });
}
if (els.builderCardsList) {
  els.builderCardsList.addEventListener("click", (e) => {
    const del = e.target.closest("[data-del]");
    if (del) {
      syncCustomDeckDraftFromDom();
      const idx = Number(del.dataset.del);
      customDeckDraftCards.splice(idx, 1);
      renderCustomDeckCardsBuilder();
    }
  });
}

if (els.btnImportDeck) els.btnImportDeck.addEventListener("click", openImportDeckModal);
if (els.importDeckClose) els.importDeckClose.addEventListener("click", () => els.importDeckModal.classList.add("hidden"));
if (els.importDeckCancel) els.importDeckCancel.addEventListener("click", () => els.importDeckModal.classList.add("hidden"));
if (els.importDeckSubmit) els.importDeckSubmit.addEventListener("click", submitImportDeck);

// Backup & Restore
if (els.btnExportBackup) els.btnExportBackup.addEventListener("click", exportBackup);
if (els.importBackupFile) {
  els.importBackupFile.addEventListener("change", (e) => {
    if (e.target.files?.length) importBackup(e.target.files[0]);
  });
}

// Milestone Share Modal
if (els.btnShareMilestone) {
  els.btnShareMilestone.addEventListener("click", () => {
    openMilestoneModal({
      title: `${currentStreak()}-Day Study Streak`,
      subtitle: `Level ${levelInfo().level} · ${store.xp} Total XP`,
    });
  });
}
if (els.caseShare) {
  els.caseShare.addEventListener("click", () => {
    const currentCase = getActiveCase();
    openMilestoneModal({
      title: "CASE CLOSED: " + currentCase.title,
      subtitle: `Solved by ${profile.name || "Master Detective"} · ${currentCase.suspect} caught!`,
    });
  });
}
if (els.milestoneClose) els.milestoneClose.addEventListener("click", () => els.milestoneModal.classList.add("hidden"));
if (els.milestoneDownload) els.milestoneDownload.addEventListener("click", downloadMilestoneImage);
if (els.milestoneCopy) {
  els.milestoneCopy.addEventListener("click", () => {
    if (navigator.clipboard && currentMilestoneShareText) {
      navigator.clipboard.writeText(currentMilestoneShareText).then(() => {
        alert("Milestone summary copied to clipboard!");
      });
    }
  });
}

// Case switching & tabs
if (els.caseSelect) {
  els.caseSelect.addEventListener("change", () => {
    const chosen = ALL_CASES[els.caseSelect.value];
    if (chosen && !caseUnlocked(chosen)) {
      els.caseSelect.value = activeCaseId;
      return;
    }
    activeCaseId = els.caseSelect.value;
    openGame();
  });
}

document.getElementById("btn-back").addEventListener("click", renderHome);
els.navDecks.addEventListener("click", renderHome);
els.navLearn.addEventListener("click", () => openLearn("lessons"));
els.navProjects.addEventListener("click", openProjects);
els.navGame.addEventListener("click", openGame);
els.navCode.addEventListener("click", openCode);
els.navChat.addEventListener("click", openChat);

els.caseTabs.addEventListener("click", (e) => {
  const tab = e.target.closest(".case-tab");
  if (!tab) return;
  caseFile = tab.dataset.file;
  saveCaseUi();
  renderCaseTabs();
  renderCaseTable();
});

els.caseClueTabs.addEventListener("click", (e) => {
  const tab = e.target.closest("[data-clue]");
  if (!tab || tab.disabled) return;
  if (tab.dataset.clue === caseClueId) return;
  caseClueId = tab.dataset.clue;
  caseHintOpen = false;
  saveCaseUi();
  renderCaseTabs();
  renderCaseClue();
});

els.caseEditor.addEventListener("input", () => {
  if (caseClueId === "final") return;
  caseUi.drafts[caseClueId] = els.caseEditor.value;
  saveCaseUi();
});

els.caseHint.addEventListener("click", () => {
  const text = document.getElementById("case-hint-text");
  if (!text) return;
  caseHintOpen = text.classList.contains("hidden");
  text.classList.toggle("hidden", !caseHintOpen);
  els.caseHint.textContent = caseHintOpen ? "Hide hint" : "Show hint";
});

els.caseRun.addEventListener("click", checkCaseClue);

els.caseOutput.addEventListener("click", (e) => {
  if (e.target.closest("#case-next")) advanceCase();
});

els.caseAccuse.addEventListener("click", accuseSuspect);
els.caseSuspect.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    accuseSuspect();
  }
});

els.reveal.addEventListener("click", revealAnswer);
els.checkAnswerBtn.addEventListener("click", () => {
  if (current?.type === "parsons") checkParsons();
  else checkTypedAnswer();
});
els.btnAgain.addEventListener("click", () => grade("again"));
els.btnHard.addEventListener("click", () => grade("hard"));
els.btnGood.addEventListener("click", () => grade("good"));
els.btnEasy.addEventListener("click", () => grade("easy"));

function closeLevelPanel() {
  els.levelPanel.classList.add("hidden");
  els.levelChip.setAttribute("aria-expanded", "false");
}

els.levelChip.addEventListener("click", (e) => {
  e.stopPropagation();
  closeProfilePanel();
  const opening = els.levelPanel.classList.contains("hidden");
  els.levelPanel.classList.toggle("hidden", !opening);
  els.levelChip.setAttribute("aria-expanded", String(opening));
});

els.profileChip.addEventListener("click", (e) => {
  e.stopPropagation();
  closeLevelPanel();
  const opening = els.profilePanel.classList.contains("hidden");
  els.profilePanel.classList.toggle("hidden", !opening);
  els.profileChip.setAttribute("aria-expanded", String(opening));
  if (opening) {
    renderProfilePanel();
    els.profileInput.focus();
  }
});

els.profileForm.addEventListener("submit", (e) => {
  e.preventDefault();
  submitProfileName(els.profileInput.value);
});

els.profileEdit.addEventListener("click", () => toggleAvatarPicker());
els.profileAvatar.addEventListener("click", () => toggleAvatarPicker());

els.profileAvatarPicker.addEventListener("click", (e) => {
  const choice = e.target.closest("[data-avatar]");
  if (!choice) return;
  store.avatar = choice.dataset.avatar;
  saveStore();
  updateStats();
  toggleAvatarPicker(false);
});

els.profileView.addEventListener("click", (e) => {
  e.stopPropagation();
  closeProfilePanel();
  renderLevelPanel();
  els.levelPanel.classList.remove("hidden");
  els.levelChip.setAttribute("aria-expanded", "true");
});

els.profileListEl.addEventListener("click", (e) => {
  const remove = e.target.closest("[data-delete]");
  if (remove) {
    e.stopPropagation();
    const doomed = profileList.find((item) => item.id === remove.dataset.delete);
    if (doomed) deleteProfile(doomed);
    return;
  }
  const button = e.target.closest("[data-profile]");
  if (!button) return;
  const entry = profileList.find((item) => item.id === button.dataset.profile);
  if (entry) switchProfile(entry);
});

document.addEventListener("click", (e) => {
  if (!els.levelPanel.classList.contains("hidden")) {
    const insideLevel = els.levelPanel.contains(e.target) || els.levelChip.contains(e.target);
    if (!insideLevel) closeLevelPanel();
  }
  if (!els.profilePanel.classList.contains("hidden")) {
    const insideProfile = els.profilePanel.contains(e.target) || els.profileChip.contains(e.target);
    if (!insideProfile) closeProfilePanel();
  }
});

window.addEventListener("pagehide", () => {
  if (profilePending) pushProfileState();
});

document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    ((els.levelPanel && !els.levelPanel.classList.contains("hidden")) ||
      (els.profilePanel && !els.profilePanel.classList.contains("hidden")) ||
      (els.customDeckModal && !els.customDeckModal.classList.contains("hidden")) ||
      (els.importDeckModal && !els.importDeckModal.classList.contains("hidden")) ||
      (els.milestoneModal && !els.milestoneModal.classList.contains("hidden")) ||
      (els.shopModal && !els.shopModal.classList.contains("hidden")) ||
      (els.reminderModal && !els.reminderModal.classList.contains("hidden")))
  ) {
    if (els.levelPanel) closeLevelPanel();
    if (els.profilePanel) closeProfilePanel();
    if (els.customDeckModal) els.customDeckModal.classList.add("hidden");
    if (els.importDeckModal) els.importDeckModal.classList.add("hidden");
    if (els.milestoneModal) els.milestoneModal.classList.add("hidden");
    if (els.shopModal) els.shopModal.classList.add("hidden");
    if (els.reminderModal) els.reminderModal.classList.add("hidden");
    return;
  }
  if (document.body.dataset.view === "code" && e.ctrlKey && e.key === "Enter") {
    e.preventDefault();
    runCode();
    return;
  }
  if (document.body.dataset.view === "game" && e.ctrlKey && e.key === "Enter") {
    if (!els.caseEditor.classList.contains("hidden")) {
      e.preventDefault();
      checkCaseClue();
    }
    return;
  }
  if (document.body.dataset.view !== "study") return;

  // Typed-answer cards handle Enter inside their own input.
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

  if (e.key === " " || e.key === "Enter") {
    if (!current || current.revealed) return;
    e.preventDefault();
    if (current.type === "parsons") checkParsons();
    else if (current.type === "recall" || current.type === "predict") document.getElementById("recall-input")?.focus();
    else revealAnswer();
  } else if (current?.revealed && ["1", "2", "3", "4"].includes(e.key)) {
    e.preventDefault();
    grade({ 1: "again", 2: "hard", 3: "good", 4: "easy" }[e.key]);
  }
});

settleStreak();
applyTheme(store.theme || "dark");
syncSoundBtn();
initLocalAiConfig();
renderHome();
initPwa();
initProfiles().then(() => maybeOnboard());
