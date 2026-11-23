// Season cases — unlocked by level. Merged into ALL_CASES by app.js.
// Case 3 teaches dicts; Case 4 teaches string methods.
window.EXTRA_CASES = {
  protocol: {
    id: "protocol",
    level: 3,
    topic: "Dicts",
    title: "Case File: The Poisoned Protocol",
    desc: "The tea salon's loyalty database was altered overnight. Two members lost every point. Read the records, write Python, name the insider.",
    suspect: "Rosa Quill",
    accuseDoneMsg: "The 'R. Quill' signature, the db-admin role, and the 02:14 overwrite line up perfectly. Rosa Quill zeroed her rivals' points — and bought herself a promotion to cover it.",
    files: {
      members: { headers: ["Member", "Email", "Points", "Tier"], columns: ["name", "email", "points", "tier"] },
      orders: { headers: ["Time", "Member", "Item", "Total"], columns: ["time", "member", "item", "total"] },
      alterations: { headers: ["Time", "Member", "Field", "Old", "New", "By"], columns: ["time", "member", "field", "old", "new", "by"] },
      staff: { headers: ["Name", "Role", "Shift", "Note"], columns: ["name", "role", "shift", "note"] },
    },
    data: {
      members: [
        { name: "Iris Bloom", email: "iris@tea.io", points: 0, tier: "gold" },
        { name: "Jonah Reed", email: "jonah@tea.io", points: 240, tier: "silver" },
        { name: "Kira Sol", email: "kira@tea.io", points: 0, tier: "bronze" },
        { name: "Leo Marsh", email: "leo@tea.io", points: 510, tier: "gold" },
        { name: "Mona Vale", email: "mona@tea.io", points: 120, tier: "silver" },
        { name: "Nia Frost", email: "nia@tea.io", points: 300, tier: "gold" },
      ],
      orders: [
        { time: "18:02", member: "Iris Bloom", item: "Oolong pot", total: 14 },
        { time: "18:40", member: "Jonah Reed", item: "Matcha set", total: 22 },
        { time: "19:15", member: "Iris Bloom", item: "Tasting flight", total: 48 },
        { time: "19:50", member: "Leo Marsh", item: "Reserve pu-erh", total: 65 },
        { time: "20:30", member: "Kira Sol", item: "Chai trio", total: 18 },
        { time: "21:10", member: "Leo Marsh", item: "Gift tin", total: 55 },
        { time: "21:45", member: "Nia Frost", item: "Jasmine pearls", total: 30 },
      ],
      alterations: [
        { time: "02:14", member: "Iris Bloom", field: "points", old: 480, new: 0, by: "R. Quill" },
        { time: "02:16", member: "Kira Sol", field: "points", old: 260, new: 0, by: "R. Quill" },
        { time: "02:20", member: "Leo Marsh", field: "tier", old: "silver", new: "gold", by: "R. Quill" },
        { time: "02:24", member: "Mona Vale", field: "email", old: "mona@tea.io", new: "mona@tea.io", by: "R. Quill" },
      ],
      staff: [
        { name: "Rosa Quill", role: "db admin", shift: "00:00-08:00", note: "Maintains the loyalty database." },
        { name: "Sam Okafor", role: "barista", shift: "16:00-00:00", note: "Closes the tea bar." },
        { name: "Tess Vidal", role: "security", shift: "22:00-06:00", note: "Night rounds." },
        { name: "Umar Lee", role: "front desk", shift: "08:00-16:00", note: "Day shift only." },
      ],
    },
    clues: [
      {
        id: "zeroed",
        short: "Zeroed out",
        title: "Clue 1 · Zeroed out",
        question: "Two members now have zero points. Using members (a list of dicts), list their names, sorted.",
        hint: 'Filter with m["points"] == 0, then collect m["name"].',
        expectLabel: "a sorted list of two names",
        starter: `# members rows: name, email, points, tier.
answer = sorted(m["name"] for m in members if True)`,
        expected: ["Iris Bloom", "Kira Sol"],
      },
      {
        id: "spenders",
        short: "Big spenders",
        title: "Clue 2 · Big spenders",
        question: "Build a dict of total spend per member from orders, then list members whose total is over 50, sorted.",
        hint: 'totals[m] = totals.get(m, 0) + row["total"], then filter totals.items().',
        expectLabel: "a sorted list of two names",
        starter: `# orders rows: time, member, item, total.
totals = {}
for row in orders:
    totals[row["member"]] = totals.get(row["member"], 0) + row["total"]

answer = sorted(name for name, total in totals.items() if True)`,
        expected: ["Iris Bloom", "Leo Marsh"],
      },
      {
        id: "signature",
        short: "The signature",
        title: "Clue 3 · The signature",
        question: "Every alteration row records who made it in the 'by' field. List the distinct signatures, sorted.",
        hint: 'A set comprehension over a["by"] removes duplicates.',
        expectLabel: "a one-name list",
        starter: `# alterations rows: time, member, field, old, new, by.
answer = sorted({a["by"] for a in alterations})`,
        expected: ["R. Quill"],
      },
      {
        id: "insider",
        short: "The insider",
        title: "Clue 4 · The insider",
        question: "Only one staff role can write to the database at 02:00. Using staff, list everyone with the 'db admin' role, sorted.",
        hint: 'Filter with s["role"] == "db admin". The initials match the signature.',
        expectLabel: "a one-name list",
        starter: `# staff rows: name, role, shift, note.
answer = sorted(s["name"] for s in staff if True)`,
        expected: ["Rosa Quill"],
      },
    ],
  },
  merge: {
    id: "merge",
    level: 6,
    topic: "Strings",
    title: "Case File: The Midnight Merge",
    desc: "The newsroom archive was vandalized after midnight — headlines rewritten, spam pushed live. Trace the strings, name the editor.",
    suspect: "Petra Lang",
    accuseDoneMsg: "All-caps headlines, the FREE spam swap, terminal T-9 at 00:40 — every trail ends at Petra Lang's desk. The archive is restored and the merge is reverted.",
    files: {
      articles: { headers: ["ID", "Headline", "Author", "Desk"], columns: ["id", "headline", "author", "desk"] },
      revisions: { headers: ["Time", "Article", "Old", "New", "Editor"], columns: ["time", "article", "old", "new", "editor"] },
      logins: { headers: ["Time", "User", "Terminal"], columns: ["time", "user", "terminal"] },
      desks: { headers: ["Desk", "Editor", "Shift"], columns: ["name", "editor", "shift"] },
    },
    data: {
      articles: [
        { id: "A-101", headline: "COUNCIL APPROVES NEW BRIDGE", author: "J. Adeyemi", desk: "city" },
        { id: "A-102", headline: "Local bakery wins award", author: "M. Chen", desk: "life" },
        { id: "A-103", headline: "STORM WARNING ISSUED", author: "R. Osei", desk: "weather" },
        { id: "A-104", headline: "Library extends hours", author: "S. Patel", desk: "city" },
        { id: "A-105", headline: "BUY NOW FREE CLICKS", author: "import", desk: "life" },
        { id: "A-106", headline: "Marathon route announced", author: "K. Duarte", desk: "sport" },
      ],
      revisions: [
        { time: "00:31", article: "A-101", old: "Council approves new bridge", new: "COUNCIL APPROVES NEW BRIDGE", editor: "p.lang" },
        { time: "00:34", article: "A-103", old: "Storm warning issued", new: "STORM WARNING ISSUED", editor: "p.lang" },
        { time: "00:38", article: "A-105", old: "Community garden opens", new: "BUY NOW FREE CLICKS", editor: "p.lang" },
        { time: "00:42", article: "A-102", old: "Local bakery wins award", new: "Local bakery wins award", editor: "j.adeyemi" },
      ],
      logins: [
        { time: "23:20", user: "j.adeyemi", terminal: "T-3" },
        { time: "00:28", user: "p.lang", terminal: "T-9" },
        { time: "00:40", user: "p.lang", terminal: "T-9" },
        { time: "00:45", user: "m.chen", terminal: "T-4" },
        { time: "01:10", user: "r.osei", terminal: "T-2" },
      ],
      desks: [
        { name: "city", editor: "J. Adeyemi", shift: "06:00-14:00" },
        { name: "life", editor: "Petra Lang", shift: "14:00-22:00" },
        { name: "weather", editor: "R. Osei", shift: "05:00-13:00" },
        { name: "sport", editor: "K. Duarte", shift: "12:00-20:00" },
      ],
    },
    clues: [
      {
        id: "shouting",
        short: "Shouting",
        title: "Clue 1 · Shouting headlines",
        question: "Vandalized headlines were rewritten in ALL CAPS. Using articles, list the IDs of headlines that are entirely uppercase, sorted.",
        hint: 'str.isupper() is True only when every cased character is uppercase.',
        expectLabel: "a sorted list of three IDs",
        starter: `# articles rows: id, headline, author, desk.
answer = sorted(a["id"] for a in articles if True)`,
        expected: ["A-101", "A-103", "A-105"],
      },
      {
        id: "spam",
        short: "Spam swap",
        title: "Clue 2 · The spam swap",
        question: "One revision pushed spam live. Using revisions, list the article IDs whose 'new' text contains the word FREE, sorted.",
        hint: '"FREE" in row["new"] checks for a substring.',
        expectLabel: "a one-ID list",
        starter: `# revisions rows: time, article, old, new, editor.
answer = sorted({r["article"] for r in revisions if True})`,
        expected: ["A-105"],
      },
      {
        id: "terminal",
        short: "Terminal T-9",
        title: "Clue 3 · Terminal T-9",
        question: "The vandal worked from terminal T-9 after midnight. Using logins, list the distinct users on T-9 at or after 00:00, sorted.",
        hint: 'Times are "HH:MM" strings; "00:28" >= "00:00" works. Filter terminal and time.',
        expectLabel: "a one-user list",
        starter: `# logins rows: time, user, terminal.
answer = sorted({r["user"] for r in logins if r["terminal"] == "T-9" and True})`,
        expected: ["p.lang"],
      },
      {
        id: "desk",
        short: "The desk",
        title: "Clue 4 · Match the desk",
        question: "The username p.lang belongs to an editor. Using desks, list the editor whose name starts with 'Petra', sorted.",
        hint: 'str.startswith("Petra") on d["editor"].',
        expectLabel: "a one-name list",
        starter: `# desks rows: name, editor, shift.
answer = sorted(d["editor"] for d in desks if True)`,
        expected: ["Petra Lang"],
      },
    ],
  },
};