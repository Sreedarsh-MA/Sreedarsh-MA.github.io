// Daily quest pool — three are picked per day (deterministic by date).
// metric: how progress is measured; target: amount needed; xp + gems: reward.
window.QUEST_POOL = [
  { id: "cards5", icon: "🃏", label: "Card sharp", desc: "Review 5 flashcards", metric: "reviews", target: 5, xp: 15, gems: 3 },
  { id: "lab1", icon: "🧪", label: "Lab rat", desc: "Solve 1 lab", metric: "labs", target: 1, xp: 20, gems: 4 },
  { id: "repo1", icon: "📦", label: "Repo scout", desc: "Mark 1 GitHub repo studied", metric: "github", target: 1, xp: 15, gems: 3 },
  { id: "lesson1", icon: "📖", label: "Bookworm", desc: "Finish 1 lesson", metric: "lessons", target: 1, xp: 20, gems: 4 },
  { id: "clue1", icon: "🔍", label: "Detective", desc: "Solve 1 case clue", metric: "clues", target: 1, xp: 20, gems: 4 },
  { id: "challenge", icon: "🎯", label: "Challenger", desc: "Complete the daily challenge", metric: "challenge", target: 1, xp: 15, gems: 3 },
  { id: "road2", icon: "🗺️", label: "Road warrior", desc: "Solve 2 roadmap exercises", metric: "road", target: 2, xp: 20, gems: 4 },
  { id: "xp60", icon: "⚡", label: "XP hunter", desc: "Earn 60 XP today", metric: "xp", target: 60, xp: 15, gems: 3 },
  { id: "cards10", icon: "🔥", label: "On a roll", desc: "Review 10 flashcards", metric: "reviews", target: 10, xp: 25, gems: 5 },
  { id: "tutor1", icon: "🧑‍🏫", label: "Curious mind", desc: "Ask the tutor 1 question", metric: "tutor", target: 1, xp: 15, gems: 3 },
];