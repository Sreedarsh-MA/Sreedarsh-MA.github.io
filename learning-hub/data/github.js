// Curated free GitHub learning repos. Every entry was verified against the GitHub API;
// summaries and "what you'll get" notes are written for pycards in our own words.
window.GITHUB_REPOS = [
  {
    id: "learn-python",
    repo: "trekhleb/learn-python",
    title: "Learn Python — playground & cheatsheet",
    kind: "Reference",
    level: "Beginner",
    license: "MIT",
    summary:
      "A collection of small, self-contained Python scripts organized by topic, each one demonstrating one idea with runnable, assert-tested code. It reads like a cheatsheet you can execute, so it pairs perfectly with the flashcard deck: look up a topic, run the script, change a line, break it, fix it.",
    learns: [
      "See every core topic (variables to classes) as a minimal working script.",
      "Learn by editing running code instead of only reading prose.",
      "Use the cheatsheet half as a quick reference while solving challenges.",
    ],
    topics: ["Basics", "Data types", "Collections", "Comprehensions", "Functions", "Errors", "Generators"],
  },
  {
    id: "30-days-of-python",
    repo: "Asabeneh/30-Days-Of-Python",
    title: "30 Days of Python",
    kind: "Guided path",
    level: "Beginner → Intermediate",
    license: "Not specified",
    summary:
      "A day-by-day written path: 30 short lessons that start at variables and conditionals and end at web scraping, APIs, databases and a little web development. Each day ends with exercises. The first two weeks map almost one-to-one onto this site's deck, so it works as a 30-day companion. (The repo has no license file — read and practice from it, but don't republish its text.)",
    learns: [
      "Follow a fixed 30-day structure so you always know what today's topic is.",
      "Practice with the built-in exercises at the end of each day.",
      "Reach topics the deck only touches: regex, web data, databases.",
    ],
    topics: ["Basics", "Data types", "Collections", "Functions", "Errors", "Files"],
  },
  {
    id: "python-cheatsheet",
    repo: "gto76/python-cheatsheet",
    title: "Comprehensive Python Cheatsheet",
    kind: "Reference",
    level: "Beginner → Advanced",
    license: "Not specified",
    summary:
      "One very dense page covering the whole language: syntax, collections, comprehensions, iterables, functions, decorators, classes, concurrency, and the standard library, each with short examples. Best used as a lookup while you code, not as a course. (No license file — treat it as a personal reference.)",
    learns: [
      "Look up syntax you half-remember in seconds.",
      "See advanced features (decorators, generators, typing) with tiny examples.",
      "Answer 'how do I…' questions without leaving the tab.",
    ],
    topics: ["Basics", "Collections", "Comprehensions", "Functions", "Generators", "Idioms"],
  },
  {
    id: "project-based-learning",
    repo: "practical-tutorials/project-based-learning",
    title: "Project-Based Learning",
    kind: "Project list",
    level: "Beginner → Advanced",
    license: "MIT",
    summary:
      "A curated list of tutorials in many languages where you learn by building real things — bots, games, scrapers, web apps. The Python section is the natural next step after this site's graded Projects: pick one project idea, build it in the Playground or on your machine, then come back and grade yourself.",
    learns: [
      "Pick a concrete build idea when you don't know what to practice.",
      "Find projects ordered from beginner to advanced.",
      "Bridge from guided exercises to self-directed projects.",
    ],
    topics: [],
  },
  {
    id: "the-algorithms",
    repo: "TheAlgorithms/Python",
    title: "The Algorithms — Python",
    kind: "Reference",
    level: "Intermediate",
    license: "MIT",
    summary:
      "Classic algorithms and data structures implemented in readable Python: sorting, searching, graphs, dynamic programming, maths. Each file has an explanation and doctest examples. Don't read it front to back — use it when you meet an algorithm in a course or interview prep and want a clean Python version to study.",
    learns: [
      "Read clean implementations of sorting and searching algorithms.",
      "See data structures (stacks, queues, trees, graphs) in idiomatic Python.",
      "Use doctests as examples of how a function is expected to behave.",
    ],
    topics: ["Collections", "Functions", "Idioms", "Generators"],
  },
  {
    id: "free-programming-books",
    repo: "EbookFoundation/free-programming-books",
    title: "Free Programming Books",
    kind: "Book list",
    level: "All levels",
    license: "CC-BY-4.0",
    summary:
      "The most famous list of freely available programming books, maintained on GitHub: Python, computer science, math, machine learning and more, in many languages including English. When a video course moves too fast, find a full book on the exact topic here — all legally free.",
    learns: [
      "Find a free full book on almost any programming topic.",
      "Pick from beginner-friendly Python books for deeper reading.",
      "Use the English and other-language sections to learn in your preferred language.",
    ],
    topics: [],
  },
  {
    id: "pytorch-deep-learning",
    repo: "mrdbourke/pytorch-deep-learning",
    title: "Learn PyTorch for Deep Learning",
    kind: "Guided path",
    level: "Advanced",
    license: "MIT",
    summary:
      "The full course materials for 'Zero to Mastery' PyTorch: Jupyter notebooks, slides, exercises and a roadmap, from tensors to deploying a model. This is the concrete next step toward your AI/ML goal after the Python deck and CS50P — everything runs locally and the notebooks are free.",
    learns: [
      "Work through tensors, models, training loops and evaluation in notebooks.",
      "Follow a structured 60-hour path from Python basics to deep learning.",
      "Finish by deploying a real model, not just running demos.",
    ],
    topics: [],
  },
  {
    id: "fcc-repo",
    repo: "freeCodeCamp/freeCodeCamp",
    title: "freeCodeCamp — open-source curriculum",
    kind: "Full curriculum",
    level: "Beginner → Advanced",
    license: "BSD-3-Clause",
    summary:
      "The open-source home of freeCodeCamp's full curriculum (also the source of the three graded Projects in this site's Projects tab, which we ported under BSD-3-Clause). Beyond Python it covers JavaScript, data analysis, machine learning and more — a free route to a full developer foundation after you finish here.",
    learns: [
      "Access the full freeCodeCamp curriculum and certification map.",
      "See the source of this site's Arithmetic Formatter, Time Calculator and Budget App.",
      "Continue to JavaScript, front-end, and data-analysis tracks later.",
    ],
    topics: [],
  },
  {
    id: "ossu-cs",
    repo: "ossu/computer-science",
    title: "OSSU — self-taught Computer Science degree",
    kind: "Full curriculum",
    level: "Beginner → Advanced",
    license: "MIT",
    summary:
      "The Open Source Society University curriculum: a community-maintained map of free courses laid out like a university degree — introductory programming first, then core computer science (data structures, algorithms, discrete math, operating systems, networks), then advanced electives and a final project. It is a path rather than a textbook: every item links out to a free course, mostly video. Best used when the Python deck and a beginner course leave gaps in the fundamentals that AI/ML work assumes.",
    learns: [
      "See which free course fills each prerequisite, from intro programming to algorithms and systems.",
      "Follow a degree-shaped order instead of jumping between unrelated tutorials.",
      "Fill the gaps a fast Python course skips: discrete math, data structures, networks.",
    ],
    topics: [],
  },
];
