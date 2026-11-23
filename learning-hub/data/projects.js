// Hands-on projects. Each one is a starter you can run and extend in the playground.
// Shape: { id, title, level, minutes, summary, skills, brief, steps, starter, stretch, check,
//          tests?, source? } — tests hold Python asserts run against the playground code.
// The three graded projects are adapted from freeCodeCamp's Scientific Computing with Python
// certification (BSD-3-Clause): https://github.com/freeCodeCamp/freeCodeCamp
window.PROJECTS = [
  {
    id: "guess",
    title: "Number guessing game",
    level: "Beginner",
    minutes: 20,
    summary: "A loop that reads a secret number and answers too low / too high until it hits.",
    skills: ["loops", "conditionals", "random", "enumerate"],
    brief:
      "The playground has no keyboard input, so the guesses come from a list — that is what makes this testable. Your job is the loop that compares each guess with the secret and stops at the right moment.",
    steps: [
      "Print the secret once so you can check the messages against a known value.",
      "Loop over `GUESSES` and print `too low` or `too high` for each wrong guess.",
      "Print `correct` and `break` on the winning guess.",
      "Use `enumerate(GUESSES, start=1)` and report how many tries it took.",
    ],
    starter: `import random

GUESSES = [8, 14, 17, 19, 20]   # pretend the player typed these
SECRET = random.choice(GUESSES) # always one of them, position unknown

# TODO 1: print SECRET while testing
# TODO 2: loop over GUESSES and print "too low" / "too high"
# TODO 3: print "correct" and break on the right guess
# TODO 4: report the number of tries with enumerate()

for guess in GUESSES:
    print("guessed", guess)
`,
    stretch: [
      "Count wrong guesses separately and print them at the end.",
      "Turn the loop into a function `play(secret, guesses)` that returns the number of tries.",
    ],
    check: "Run it several times: the messages must match the secret, and the loop must stop on the correct guess — not after it.",
  },
  {
    id: "wordcount",
    title: "Word frequency report",
    level: "Beginner",
    minutes: 25,
    summary: "Count words in a text, filter the noise, and print a ranked top three.",
    skills: ["dicts", "strings", "sorted", "comprehensions"],
    brief:
      "Counting words is the smallest useful text task: it combines splitting, normalising, dictionaries, and sorting by value. The same shape reappears in spam filters and token counting.",
    steps: [
      "Build a dict of word → count with a plain loop (no Counter yet).",
      "Drop words shorter than 3 characters while counting.",
      "Print the top three with `sorted(counts.items(), key=lambda kv: kv[1], reverse=True)`.",
      "Add the share of the total each top word holds, rounded to one decimal.",
    ],
    starter: `text = """Python is a language. Python is readable.
Readable code is easier to review. Review early."""

words = text.lower().replace(".", "").split()

# TODO 1: count each word in a dict
# TODO 2: skip words shorter than 3 characters
# TODO 3: print the 3 most common words
# TODO 4: show each top word's percentage of all words

print(len(words), "words")
print(words)
`,
    stretch: [
      "Rewrite the counting as `collections.Counter(words)`, then `most_common(3)`.",
      "Strip every punctuation mark with `str.strip`, not just the full stop.",
    ],
    check: "`python`, `readable`, and `review` tie at 2 — `is` must be filtered out, and each share should be 20.0%.",
  },
  {
    id: "expenses",
    title: "Expense tracker that saves itself",
    level: "Intermediate",
    minutes: 35,
    summary: "Store expenses as JSON on disk, read them back, and total by category.",
    skills: ["functions", "json", "files", "dict aggregation"],
    brief:
      "This is the first project with real persistence: write a list of dicts to a file, load it again, and build a summary. The pattern — load, mutate, save — is how most small CLI tools work.",
    steps: [
      "Write the list to `expenses.json` with `json.dump(..., indent=2)` inside a `with open(...)` block.",
      "Read it back with `json.load` and print the number of records to prove the round-trip.",
      "Total the amounts per category into a dict.",
      "Pull reading and writing into `load_expenses(path)` and `save_expenses(path, rows)` functions.",
    ],
    starter: `import json

expenses = [
    {"item": "bus", "category": "travel", "amount": 25.0},
    {"item": "lunch", "category": "food", "amount": 80.0},
    {"item": "train", "category": "travel", "amount": 40.0},
]

# TODO 1: save the list to expenses.json
# TODO 2: load it back and print len(...)
# TODO 3: build {category: total} with a loop
# TODO 4: move the file work into load_expenses / save_expenses

print(json.dumps(expenses, indent=2))
`,
    stretch: [
      "Sort categories by total and print the biggest spend first.",
      "Add an `add_expense(category, amount, item)` helper that appends and saves in one call.",
      "Handle a missing file: `except FileNotFoundError: return []` in the loader.",
    ],
    check: "The file is created, the reload returns the same three rows, and the travel total is 65.0.",
  },
  {
    id: "grades",
    title: "Grade report from CSV",
    level: "Intermediate",
    minutes: 30,
    summary: "Parse CSV rows, compute statistics, and render a sorted report with pass/fail.",
    skills: ["csv", "statistics", "sorting", "f-strings"],
    brief:
      "CSV is still how marks, logs, and exports arrive. `csv.DictReader` gives you rows as dicts, and the rest is aggregation — the same work pandas does, written by hand once so you understand it.",
    steps: [
      "Turn the `marks` strings into ints and collect them in a list.",
      "Print the mean, highest, and lowest with the `statistics` module.",
      "Print each student as `Asha: 82`, sorted from highest to lowest.",
      "Add a pass/fail column using 70 as the pass mark.",
    ],
    starter: `import csv, io, statistics

data = """name,subject,marks
Asha,Python,82
Ravi,Python,67
Meera,Python,91
"""

rows = list(csv.DictReader(io.StringIO(data)))

# TODO 1: build a list of marks as integers
# TODO 2: print mean, highest and lowest
# TODO 3: print "Asha: 82" lines sorted high -> low
# TODO 4: add PASS / FAIL (>= 70)

for row in rows:
    print(row["name"], row["marks"])
`,
    stretch: [
      "Group by subject so the report still works with several subjects.",
      "Round the mean to one decimal and print the class size next to it.",
    ],
    check: "Meera comes first, the mean is 80.0, and exactly one student is marked FAIL.",
  },
  {
    id: "gradient",
    title: "Gradient descent from scratch",
    level: "Advanced",
    minutes: 40,
    summary: "Fit y = 2x + 1 with two numbers and a loop — no libraries at all.",
    skills: ["math", "loops", "ML basics", "debugging"],
    brief:
      "This is the smallest possible machine-learning training loop: predict, measure the error, nudge the parameters. Once this clicks, a neural network is the same idea with more parameters.",
    steps: [
      "Predict each `y` as `w * x + b` and compute squared error around zero.",
      "For every point compute `err = (w * x + b) - y`, then `2 * err * x` and `2 * err`; average each over all points.",
      "Update with `w -= lr * dw` and `b -= lr * db` after every epoch.",
      "Print the loss every 50 epochs and confirm it falls toward zero.",
    ],
    starter: `# Fit y = w*x + b with gradient descent, no libraries.
xs = [1, 2, 3, 4, 5]
ys = [3, 5, 7, 9, 11]        # true rule: y = 2x + 1

w, b = 0.0, 0.0
lr = 0.05

for epoch in range(200):
    # TODO 1: predict and compute the squared error
    # TODO 2: compute dw and db
    # TODO 3: update w and b
    # TODO 4: print the loss every 50 epochs
    pass

print("w", w, "b", b)
`,
    stretch: [
      "Print the loss for `lr = 0.005`, `0.05`, and `0.5` and explain which one diverges.",
      "Add a third parameter for y = a*x² + b*x + c and watch what breaks.",
    ],
    check: "After 200 epochs, `w` should be within about 0.05 of 2 and `b` within about 0.05 of 1.",
  },
  {
    id: "arithmetic",
    title: "Arithmetic formatter",
    level: "Beginner",
    minutes: 35,
    summary: "Right-align column arithmetic, reject bad input, and print the answers when asked.",
    skills: ["strings", "formatting", "validation", "functions"],
    brief:
      "Babies used to write arithmetic in columns; this project makes the computer do it. The interesting part is not the maths — it is laying out four problems side by side with clean spacing, then catching every kind of bad input with exactly the right error message. Nine automatic checks cover the rules.",
    steps: [
      "Return `Error: Too many problems.` when given more than five problems.",
      "Reject any operator other than `+` or `-`.",
      "Reject non-digits and numbers longer than four digits.",
      "Right-align every number under the widest one in its problem.",
      "Draw the dashes and join problems with exactly four spaces.",
      "Add the answers row when `show_answers` is True.",
    ],
    starter: `# freeCodeCamp · Arithmetic Formatter (adapted)
# Return one string with the problems arranged vertically,
# or an error message string when the input breaks the rules.

def arithmetic_arranger(problems, show_answers=False):
    # TODO 1: more than five problems -> "Error: Too many problems."
    # TODO 2: only + and -, digits only, at most four digits per number
    # TODO 3: right-align each number under the widest one, four spaces apart
    # TODO 4: add the answers row when show_answers is True
    return "TODO"

print(arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"]))
`,
    tests: [
      {
        name: "Arranges four problems side by side",
        code: `_out = arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])
_expected = "   32      3801      45      123\\n+ 698    -    2    + 43    +  49\\n-----    ------    ----    -----"
assert _out == _expected, "Right-align each number under the widest one, with four spaces between problems."`,
      },
      {
        name: "Adds the answers row when asked",
        code: `_out = arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"], True)
_expected = "   32      3801      45      123\\n+ 698    -    2    + 43    +  49\\n-----    ------    ----    -----\\n  730      3799      88      172"
assert _out == _expected, "With show_answers=True the fourth line should hold the results."`,
      },
      {
        name: "Handles subtraction and mixed widths",
        code: `_out = arithmetic_arranger(["32 - 698", "1 - 3801", "45 + 43", "123 + 49"], True)
_expected = "   32         1      45      123\\n- 698    - 3801    + 43    +  49\\n-----    ------    ----    -----\\n -666     -3800      88      172"
assert _out == _expected, "Subtraction results can be negative and should still align."`,
      },
      {
        name: "Accepts a single problem",
        code: `assert arithmetic_arranger(["1 + 2"]) == "  1\\n+ 2\\n---", "One problem is still a three-line block."`,
      },
      {
        name: "Separates problems by four spaces",
        code: `_out = arithmetic_arranger(["1 + 2", "3 + 4"])
assert _out == "  1      3\\n+ 2    + 4\\n---    ---", "Problems should be separated by exactly four spaces."`,
      },
      {
        name: "Rejects more than five problems",
        code: `assert arithmetic_arranger(["1 + 1"] * 6) == "Error: Too many problems.", "Six problems should return 'Error: Too many problems.'"`,
      },
      {
        name: "Rejects operators other than + and -",
        code: `assert arithmetic_arranger(["1 * 2"]) == "Error: Operator must be '+' or '-'." , "Only + and - are allowed."`,
      },
      {
        name: "Rejects letters in the numbers",
        code: `assert arithmetic_arranger(["12a + 1"]) == "Error: Numbers must only contain digits.", "Non-digit characters should be rejected."`,
      },
      {
        name: "Rejects numbers longer than four digits",
        code: `assert arithmetic_arranger(["12345 + 1"]) == "Error: Numbers cannot be more than four digits.", "Five-digit numbers should be rejected."`,
      },
    ],
    stretch: [
      "Allow five problems and prove the error only fires at six.",
      "Make the error checks run in the same order as the list above — the first broken rule decides the message.",
      "Rewrite the joining with a nested list and `zip` instead of four separate rows.",
    ],
    check:
      "All 9 checks pass. Passing every check ticks the whole checklist — press Check in the playground to see the results.",
    source: {
      label: "freeCodeCamp · Scientific Computing with Python",
      url: "https://www.freecodecamp.org/learn/scientific-computing-with-python/",
    },
  },
  {
    id: "timecalc",
    title: "Time calculator",
    level: "Beginner",
    minutes: 30,
    summary: "Add hours and minutes to a 12-hour clock, then say which day you land on.",
    skills: ["strings", "arithmetic", "modulo", "formatting"],
    brief:
      "A clock is modular arithmetic with a marketing department. Add a duration to a 12-hour time, work out how many days slipped past, and name the resulting weekday — with exactly the right suffix. Nine checks cover the awkward cases: midnight, noon, next day, week wrap.",
    steps: [
      "Parse the start time (`3:30 PM`) and the duration (`2:12`).",
      "Roll minutes into hours and hours into days.",
      "Format the result as `h:mm AM/PM`, with 12 instead of 0.",
      "Append ` (next day)` or ` (n days later)` when days pass.",
      "When a start day is given, return the correctly capitalised weekday.",
    ],
    starter: `# freeCodeCamp · Time Calculator (adapted)
# Add a duration to a 12-hour clock and return the new time.

def add_time(start, duration, start_day=None):
    # TODO 1: parse "3:30 PM" and "2:12"
    # TODO 2: add the minutes, rolling hours into days
    # TODO 3: format back to 12-hour time with AM/PM
    # TODO 4: add "(next day)" / "(n days later)" and the weekday when given
    return "TODO"

print(add_time("3:30 PM", "2:12"))
print(add_time("11:30 AM", "2:32", "Monday"))
`,
    tests: [
      {
        name: "Adds a simple duration",
        code: `assert add_time("3:00 PM", "3:10") == "6:10 PM", "3:00 PM plus 3:10 is 6:10 PM."`,
      },
      {
        name: "Keeps the weekday when no day changes",
        code: `assert add_time("11:30 AM", "2:32", "Monday") == "2:02 PM, Monday", "The result should end with ', Monday'."`,
      },
      {
        name: "Crosses noon without a suffix",
        code: `assert add_time("11:43 AM", "00:20") == "12:03 PM", "20 minutes after 11:43 AM is 12:03 PM."`,
      },
      {
        name: "Marks the next day",
        code: `assert add_time("10:10 PM", "3:30") == "1:40 AM (next day)", "Add ' (next day)' when the clock rolls past midnight."`,
      },
      {
        name: "Counts days and moves the weekday",
        code: `assert add_time("11:43 PM", "24:20", "tuesday") == "12:03 AM, Thursday (2 days later)", "Tuesday plus two days is Thursday."`,
      },
      {
        name: "Handles many days",
        code: `assert add_time("6:30 PM", "205:12") == "7:42 AM (9 days later)", "205 hours and 12 minutes is 8 days and 13 hours."`,
      },
      {
        name: "Shows midnight as 12 AM",
        code: `assert add_time("12:00 AM", "0:30") == "12:30 AM", "0 should be shown as 12 on a 12-hour clock."`,
      },
      {
        name: "Shows noon as 12 PM",
        code: `assert add_time("12:00 PM", "0:30") == "12:30 PM", "Noon is 12 PM, not 0 PM."`,
      },
      {
        name: "Wraps around the week",
        code: `assert add_time("8:16 PM", "466:02", "tuesday") == "6:18 AM, Monday (20 days later)", "20 days later on a Tuesday lands on a Monday."`,
      },
    ],
    stretch: [
      "Accept lowercase day names and mixed-case input everywhere.",
      "Rewrite the day maths with `datetime.timedelta` and confirm the same answers.",
      "Add a second function that returns the duration between two 12-hour times.",
    ],
    check:
      "All 9 checks pass. Passing every check ticks the whole checklist — press Check in the playground to see the results.",
    source: {
      label: "freeCodeCamp · Scientific Computing with Python",
      url: "https://www.freecodecamp.org/learn/scientific-computing-with-python/",
    },
  },
  {
    id: "budget",
    title: "Budget app with a spending chart",
    level: "Intermediate",
    minutes: 55,
    summary: "Build a Category class with a ledger, transfers, a receipt, and an ASCII bar chart.",
    skills: ["classes", "methods", "formatting", "aggregation", "ASCII art"],
    brief:
      "This is object-oriented Python with a real payoff: categories that hold a ledger, refuse to overspend, transfer between each other, print a receipt, and feed a chart. The chart is the fiddly part — percentage bars rounded down to ten, a dashes row, and category names written vertically. Ten checks cover it.",
    steps: [
      "Give `Category` deposit, withdraw, get_balance, and check_funds.",
      "Refuse withdrawals larger than the current balance.",
      "Implement transfer with `Transfer to …` / `Transfer from …` ledger lines.",
      "Print the receipt: name centred in 30 stars, amounts right-aligned, a Total line.",
      "Compute spending shares from withdrawals only, rounded down to the nearest 10.",
      "Draw the chart: header, 100→0 rows, `o` bars, dashes, vertical names.",
    ],
    starter: `# freeCodeCamp · Budget App (adapted)
# Build a Category class and a spending chart.

class Category:
    def __init__(self, name):
        self.name = name
        self.ledger = []

    # TODO 1: deposit, withdraw, get_balance, check_funds
    # TODO 2: transfer(amount, other_category)
    # TODO 3: __str__ -> name centred in 30 stars, ledger lines, Total
    ...


def create_spend_chart(categories):
    # TODO 4: percentages of spending (not deposits), rounded down to 10
    # TODO 5: rows 100..0, "o" bars, dashes, vertical category names
    return "TODO"

food = Category("Food")
food.deposit(1000, "initial deposit")
food.withdraw(10.15, "groceries")
print(food)
`,
    tests: [
      {
        name: "A new category starts empty",
        code: `assert Category("Food").get_balance() == 0, "A fresh category should have a zero balance."`,
      },
      {
        name: "Deposits add up",
        code: `_cat = Category("Food")
_cat.deposit(10, "snack")
_cat.deposit(25.50, "lunch")
assert _cat.get_balance() == 35.5, "The balance is the sum of every ledger amount."`,
      },
      {
        name: "Withdrawals subtract and return True",
        code: `_cat = Category("Food")
_cat.deposit(100, "deposit")
assert _cat.withdraw(30.25, "groceries") is True, "withdraw() should return True when the funds are there."
assert _cat.get_balance() == 69.75, "The withdrawal amount is stored as a negative ledger entry."`,
      },
      {
        name: "Refuses to overspend",
        code: `_cat = Category("Food")
_cat.deposit(10, "deposit")
assert _cat.withdraw(20, "big dinner") is False, "withdraw() should return False when the balance is too small."
assert _cat.get_balance() == 10, "A refused withdrawal must not change the balance."`,
      },
      {
        name: "check_funds reports the limit",
        code: `_cat = Category("Food")
_cat.deposit(50, "deposit")
assert _cat.check_funds(50) is True, "Spending the whole balance is allowed."
assert _cat.check_funds(50.01) is False, "Spending more than the balance is not."`,
      },
      {
        name: "Prints the receipt format",
        code: `_cat = Category("Food")
_cat.deposit(1000, "initial deposit")
_cat.withdraw(10.15, "groceries")
_expected = "*************Food*************\\ninitial deposit        1000.00\\ngroceries               -10.15\\nTotal: 989.85"
assert str(_cat) == _expected, "Name centred in 30 stars, descriptions left-aligned, amounts right-aligned with two decimals, then Total."`,
      },
      {
        name: "Transfers move money both ways",
        code: `_food = Category("Food")
_food.deposit(100, "deposit")
_clothes = Category("Clothing")
assert _food.transfer(40, _clothes) is True, "transfer() should return True when the funds are there."
assert _food.get_balance() == 60 and _clothes.get_balance() == 40, "Money should leave one category and arrive in the other."
assert _food.ledger[-1]["description"] == "Transfer to Clothing", "Use 'Transfer to ' + the other category's name."
assert _clothes.ledger[-1]["description"] == "Transfer from Food", "Use 'Transfer from ' + this category's name."`,
      },
      {
        name: "Chart header and percentage rows",
        code: `_cat = Category("Auto")
_cat.deposit(100, "deposit")
_cat.withdraw(50, "gas")
_chart = create_spend_chart([_cat]).split("\\n")
assert _chart[0] == "Percentage spent by category", "The first line should be 'Percentage spent by category'."
_labels = [line[:3].strip() for line in _chart[1:12]]
assert _labels == ["100", "90", "80", "70", "60", "50", "40", "30", "20", "10", "0"], "Rows should run from 100 down to 0 in steps of 10."`,
      },
      {
        name: "Bars follow the rounded-down percentages",
        code: `_food = Category("Food")
_food.deposit(500, "deposit")
_food.withdraw(70, "food")
_clothes = Category("Clothing")
_clothes.deposit(500, "deposit")
_clothes.withdraw(20, "clothes")
_auto = Category("Auto")
_auto.deposit(500, "deposit")
_auto.withdraw(10, "gas")
_chart = create_spend_chart([_food, _clothes, _auto]).split("\\n")
_marks = ["".join(_line[5 + 3 * _i] for _i in range(3)) for _line in _chart[1:12]]
_expected = ["".join("o" if _pct >= _level else " " for _pct in (70, 20, 10)) for _level in range(100, -1, -10)]
assert _marks == _expected, "Each bar should start at that category's share, rounded down to the nearest 10."`,
      },
      {
        name: "Dashes and vertical names",
        code: `_food = Category("Food")
_food.deposit(100, "deposit")
_food.withdraw(10, "food")
_clothes = Category("Clothing")
_clothes.deposit(100, "deposit")
_clothes.withdraw(10, "clothes")
_auto = Category("Auto")
_auto.deposit(100, "deposit")
_auto.withdraw(10, "gas")
_chart = create_spend_chart([_food, _clothes, _auto]).split("\\n")
assert _chart[12] == "    " + "-" * 10, "The dashes line should be four spaces plus three dashes per category, plus one."
_tail = _chart[13:]
assert len(_tail) == 8, "Write the names vertically: one row per letter of the longest name."
for _index, _name in enumerate(["Food", "Clothing", "Auto"]):
    _letters = "".join(_tail[_row][5 + 3 * _index] for _row in range(len(_name)))
    assert _letters == _name, f"Column {_index + 1} should spell {_name} vertically."
    assert all(_tail[_row][5 + 3 * _index] == " " for _row in range(len(_name), 8)), "Pad short names with spaces."`,
      },
    ],
    stretch: [
      "Keep the chart working with one category and with four.",
      "Reject category names longer than 23 characters with a clear error.",
      "Add a `summary()` method that lists each category's balance on one line.",
    ],
    check:
      "All 10 checks pass. Passing every check ticks the whole checklist — press Check in the playground to see the results.",
    source: {
      label: "freeCodeCamp · Scientific Computing with Python",
      url: "https://www.freecodecamp.org/learn/scientific-computing-with-python/",
    },
  },
];
