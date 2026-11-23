// Runnable code labs and mini-builds for the Python roadmap. One lab per
// section, one mini-build per stage. Every task is graded with Python asserts
// by the in-browser Pyodide runtime. Content is original.
window.PY_ROAD_LABS = {
  "py-values": [
    {
      title: "Split a bill",
      brief: "Return a tuple with the whole-rupee share per person and the leftover using `//` and `%`.",
      starter: `def split_bill(total, people):
    """Return (share, leftover) for total split across people."""
    pass`,
      hint: "`total // people` is the share, and `total % people` is what cannot be split.",
      tests: [
        { name: "100 across 3 → (33, 1)", code: `assert split_bill(100, 3) == (33, 1), "share and leftover are wrong"` },
        { name: "60 across 4 → (15, 0)", code: `assert split_bill(60, 4) == (15, 0), "an even split should have no leftover"` },
        { name: "7 across 2 → (3, 1)", code: `assert split_bill(7, 2) == (3, 1), "7 // 2 is 3 and 7 % 2 is 1"` },
      ],
    },
    {
      title: "Build initials",
      brief: "Turn a full name into initials with a dot after each letter: `\"Ada Lovelace\"` → `\"A.L.\"`.",
      starter: `def initials(full_name):
    """Turn "Ada Lovelace" into "A.L."."""
    pass`,
      hint: '`full_name.split()` gives the words. Take `word[0].upper()` from each, join with `"."`, then add the final dot.',
      tests: [
        { name: "Ada Lovelace → A.L.", code: `assert initials("Ada Lovelace") == "A.L."` },
        { name: "Three words → three dots", code: `assert initials("grace brewster hopper") == "G.B.H."` },
        { name: "One word → one dot", code: `assert initials("python") == "P."` },
      ],
    },
    {
      title: "Sum the odd numbers",
      brief: "Use a loop to add every odd number below `limit`.",
      starter: `def total_odd(limit):
    """Return the sum of odd numbers below limit."""
    pass`,
      hint: "Walk `range(limit)`, keep numbers where `n % 2 == 1`, and add them to a running total.",
      tests: [
        { name: "Below 10 → 25", code: `assert total_odd(10) == 25, "1 + 3 + 5 + 7 + 9 is 25"` },
        { name: "Below 1 → 0", code: `assert total_odd(1) == 0, "there are no odd numbers below 1"` },
        { name: "Below 6 → 9", code: `assert total_odd(6) == 9, "1 + 3 + 5 is 9"` },
      ],
    },
  ],
  "py-collections": [
    {
      title: "Top two",
      brief: "Return the two largest values, highest first. If the list has one value, return a list holding just it.",
      starter: `def top_two(nums):
    """Return the two largest values, highest first."""
    pass`,
      hint: "`sorted(nums)[-2:]` keeps the largest two; `[::-1]` puts the biggest first.",
      tests: [
        { name: "Duplicates count", code: `assert top_two([4, 9, 1, 9]) == [9, 9]` },
        { name: "Three values", code: `assert top_two([3, 1, 2]) == [3, 2]` },
        { name: "One value", code: `assert top_two([5]) == [5]` },
      ],
    },
    {
      title: "Shared tags",
      brief: "Return the tags present in both lists, sorted and without duplicates.",
      starter: `def shared_tags(first, second):
    """Return tags in both lists, sorted and unique."""
    pass`,
      hint: "Convert both lists to sets, combine with `&`, then pass the result to `sorted`.",
      tests: [
        { name: "Overlap only", code: `assert shared_tags(["a", "b", "c"], ["b", "c", "d"]) == ["b", "c"]` },
        { name: "No overlap", code: `assert shared_tags([], ["x"]) == []` },
        { name: "Single shared tag", code: `assert shared_tags(["x"], ["x"]) == ["x"]` },
      ],
    },
    {
      title: "Totals by pair",
      brief: "Return `price × count` for every pair, using a comprehension over `zip`.",
      starter: `def totals(prices, counts):
    """Return price × count for each pair."""
    pass`,
      hint: "`[price * count for price, count in zip(prices, counts)]`",
      tests: [
        { name: "Two pairs", code: `assert totals([2, 3], [4, 5]) == [8, 15]` },
        { name: "Floats work", code: `assert totals([1.5], [2]) == [3.0]` },
        { name: "Empty input", code: `assert totals([], []) == []` },
      ],
    },
  ],
  "py-functions": [
    {
      title: "Grade a score",
      brief: "Return `\"pass\"` when points reach the cutoff and `\"retry\"` otherwise. The cutoff defaults to 70.",
      starter: `def grade(points, cutoff=70):
    """Return "pass" at or above cutoff, otherwise "retry"."""
    pass`,
      hint: "A single `if points >= cutoff:` with an `else` is enough.",
      tests: [
        { name: "Above the default", code: `assert grade(85) == "pass"` },
        { name: "Below the default", code: `assert grade(40) == "retry"` },
        { name: "Custom cutoff", code: `assert grade(65, 60) == "pass"` },
      ],
    },
    {
      title: "Flexible report",
      brief: "Accept any number of numbers and return `\"label: sum\"`. The label is keyword-only and defaults to `total`.",
      starter: `def report(*nums, label="total"):
    """Return "label: sum" for any number of values."""
    pass`,
      hint: '`sum(nums)` already handles an empty call. Return an f-string: `f"{label}: {sum(nums)}"`.',
      tests: [
        { name: "Three numbers", code: `assert report(1, 2, 3) == "total: 6"` },
        { name: "Custom label", code: `assert report(5, label="sum") == "sum: 5"` },
        { name: "No numbers", code: `assert report() == "total: 0"` },
      ],
    },
    {
      title: "Sort by length",
      brief: "Return the words sorted shortest to longest, keeping equal-length words in their original order.",
      starter: `def by_length(words):
    """Return words sorted shortest to longest."""
    pass`,
      hint: "`sorted(words, key=len)` is stable, so equal lengths keep their order.",
      tests: [
        { name: "Shortest first", code: `assert by_length(["ccc", "a", "bb"]) == ["a", "bb", "ccc"]` },
        { name: "Empty list", code: `assert by_length([]) == []` },
        { name: "Ties keep order", code: `assert by_length(["dd", "ee"]) == ["dd", "ee"]` },
      ],
    },
  ],
  "py-errors": [
    {
      title: "Safe int",
      brief: "Convert text to an integer, returning the default instead of crashing when the text is not a number.",
      starter: `def to_int(text, default=0):
    """Convert text to int, returning default when it is not a number."""
    pass`,
      hint: "Try `int(text)` and catch `ValueError` to return `default`.",
      tests: [
        { name: "Digits parse", code: `assert to_int("42") == 42` },
        { name: "Words fall back", code: `assert to_int("nope") == 0` },
        { name: "Custom default", code: `assert to_int("bad", -1) == -1` },
      ],
    },
    {
      title: "Read a count",
      brief: "Parse JSON text and return its `count` value, or 0 when the key is missing.",
      starter: `import json

def load_count(text):
    """Parse JSON text and return its count, or 0."""
    pass`,
      hint: '`json.loads(text)` returns a dict; `.get("count", 0)` handles a missing key.',
      tests: [
        { name: "Present count", code: `assert load_count('{"count": 3}') == 3` },
        { name: "Missing count", code: `assert load_count("{}") == 0` },
        { name: "Zero is kept", code: `assert load_count('{"count": 0}') == 0` },
      ],
    },
    {
      title: "Two standard tools",
      brief: "Use `math.gcd` for the greatest common divisor and `pathlib.Path` for the file extension, including the dot.",
      starter: `import math
from pathlib import Path

def greatest_common(a, b):
    """Return the greatest common divisor of a and b."""
    pass

def extension(name):
    """Return the extension including the dot, or an empty string."""
    pass`,
      hint: "`math.gcd(a, b)` does the first. `Path(name).suffix` returns `.gz` for `a.tar.gz` and `\"\"` for no extension.",
      tests: [
        { name: "gcd(12, 18)", code: `assert greatest_common(12, 18) == 6` },
        { name: "Last suffix", code: `assert extension("report.tar.gz") == ".gz"` },
        { name: "No suffix", code: `assert extension("README") == ""` },
      ],
    },
  ],
  "py-oop": [
    {
      title: "A counter class",
      brief: "`bump` adds `by` to the counter and returns the new value. The counter starts at `start`.",
      starter: `class Counter:
    def __init__(self, start=0):
        self.value = start

    def bump(self, by=1):
        pass`,
      hint: "Update `self.value` first, then return it.",
      tests: [
        { name: "First bump", code: `c = Counter()\nassert c.bump() == 1` },
        { name: "Custom start and step", code: `c = Counter(10)\nassert c.bump(5) == 15` },
        { name: "Value is kept", code: `c = Counter()\nc.bump()\nassert c.bump() == 2` },
      ],
    },
    {
      title: "Animal and Dog",
      brief: "Make `Dog` inherit from `Animal` and override `speak` to return `\"woof\"`.",
      starter: `class Animal:
    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        pass`,
      hint: "The subclass writes `class Dog(Animal):`. Its `speak` returns the string directly.",
      tests: [
        { name: "Animal stays generic", code: `assert Animal().speak() == "..."` },
        { name: "Dog overrides", code: `assert Dog().speak() == "woof"` },
        { name: "Dog is an Animal", code: `assert isinstance(Dog(), Animal)` },
      ],
    },
    {
      title: "Point dataclass",
      brief: "Keep the dataclass fields and add `shifted`, which returns a new point moved by `dx` and `dy`.",
      starter: `from dataclasses import dataclass

@dataclass
class Point:
    x: int
    y: int

    def shifted(self, dx, dy):
        """Return a new Point moved by dx and dy."""
        pass`,
      hint: "Return `Point(self.x + dx, self.y + dy)`. The decorator already provides `__init__`, `__repr__`, and `__eq__`.",
      tests: [
        { name: "Field equality", code: `assert Point(1, 2) == Point(1, 2)` },
        { name: "Generated repr", code: `assert repr(Point(0, 0)) == "Point(x=0, y=0)"` },
        { name: "shifted makes a new point", code: `assert Point(1, 2).shifted(2, 3) == Point(3, 5)` },
      ],
    },
  ],
  "py-idioms": [
    {
      title: "Countdown generator",
      brief: "Yield the numbers from `n` down to 1, one at a time.",
      starter: `def countdown(n):
    """Yield n, n-1, ..., 1."""
    pass`,
      hint: "Use a `while n > 0:` loop with `yield n` before `n -= 1`.",
      tests: [
        { name: "Three values", code: `assert list(countdown(3)) == [3, 2, 1]` },
        { name: "Zero yields nothing", code: `assert list(countdown(0)) == []` },
        { name: "Works with sum", code: `assert sum(countdown(3)) == 6` },
      ],
    },
    {
      title: "Most common letter",
      brief: "Return the character that appears most often in the text.",
      starter: `from collections import Counter

def most_common(text):
    """Return the most common character."""
    pass`,
      hint: "`Counter(text).most_common(1)` gives a list with one `(character, count)` pair.",
      tests: [
        { name: "Clear winner", code: `assert most_common("aabbb") == "b"` },
        { name: "Single letter", code: `assert most_common("z") == "z"` },
        { name: "Winner with duplicates", code: `assert most_common("abca") == "a"` },
      ],
    },
    {
      title: "Index labels",
      brief: "Return labels in the form `\"0:a\"`, `\"1:b\"` using `enumerate`.",
      starter: `def indexed(words):
    """Return labels like "0:a"."""
    pass`,
      hint: "`[f\"{i}:{word}\" for i, word in enumerate(words)]`",
      tests: [
        { name: "Two words", code: `assert indexed(["a", "b"]) == ["0:a", "1:b"]` },
        { name: "Empty list", code: `assert indexed([]) == []` },
        { name: "One word", code: `assert indexed(["x"]) == ["0:x"]` },
      ],
    },
  ],
};

window.PY_ROAD_BUILDS = {
  "py-values": {
    title: "Mini-build · Tip splitter",
    brief:
      "Work in whole rupees: compute the tip, add it to the bill, then split across people. Return `(tip, share, leftover)`.",
    starter: `def split_bill(total, people, tip_percent=15):
    """Return (tip, share, leftover) for a whole-rupee bill."""
    pass`,
    hint: "tip = total * tip_percent // 100; grand = total + tip; share = grand // people; leftover = grand % people.",
    tests: [
      { name: "1000 across 2 with 15%", code: `assert split_bill(1000, 2) == (150, 575, 0)` },
      { name: "1000 across 3 with 15%", code: `assert split_bill(1000, 3) == (150, 383, 1)` },
      { name: "Empty bill", code: `assert split_bill(0, 4) == (0, 0, 0)` },
      { name: "999 alone with 10%", code: `assert split_bill(999, 1, 10) == (99, 1098, 0)` },
    ],
  },
  "py-collections": {
    title: "Mini-build · Inventory summary",
    brief:
      'Turn a dict of item → quantity into `{"total": units, "out": sorted out-of-stock names, "heavy": sorted names with 10 or more}`.',
    starter: `def summarize(stock):
    """Return {"total": int, "out": [...], "heavy": [...]}."""
    pass`,
    hint: "Loop over stock.items(), add each quantity, and collect names. Sort the lists at the end.",
    tests: [
      {
        name: "Mixed stock",
        code: `assert summarize({"pen": 0, "ink": 12, "pad": 4}) == {"total": 16, "out": ["pen"], "heavy": ["ink"]}`,
      },
      { name: "Empty stock", code: `assert summarize({}) == {"total": 0, "out": [], "heavy": []}` },
      { name: "Ten counts as heavy", code: `assert summarize({"a": 10}) == {"total": 10, "out": [], "heavy": ["a"]}` },
    ],
  },
  "py-functions": {
    title: "Mini-build · Price tags",
    brief:
      "Return one label per price, with two decimals and a currency prefix. The currency is keyword-only and defaults to `$`.",
    starter: `def tag_all(prices, *, currency="$"):
    """Return labels like "$2.50" for each price."""
    pass`,
    hint: 'A comprehension with f"{currency}{price:.2f}" formats each price.',
    tests: [
      { name: "Two prices", code: `assert tag_all([2.5, 10]) == ["$2.50", "$10.00"]` },
      { name: "Custom currency", code: `assert tag_all([], currency="Rs ") == []` },
      { name: "Zero price", code: `assert tag_all([0]) == ["$0.00"]` },
    ],
  },
  "py-errors": {
    title: "Mini-build · Safe config reader",
    brief:
      "Parse JSON text and return its `port` as an int. Missing or unreadable text falls back to 8080; a present but non-numeric port raises `ValueError`.",
    starter: `import json

def get_port(raw):
    """Read "port" from JSON text, defaulting to 8080."""
    pass`,
    hint: "Catch the JSON error and return 8080. When the key exists, let `int()` prove it is numeric and re-raise as ValueError.",
    tests: [
      { name: "Reads a port", code: `assert get_port('{"port": 3000}') == 3000` },
      { name: "Missing key", code: `assert get_port("{}") == 8080` },
      { name: "Broken JSON", code: `assert get_port("not json") == 8080` },
      {
        name: "Non-numeric port raises",
        code: `try:\n    get_port('{"port": "x"}')\nexcept ValueError:\n    pass\nelse:\n    assert False, "a non-numeric port should raise ValueError"`,
      },
    ],
  },
  "py-oop": {
    title: "Mini-build · Bank account",
    brief:
      "Build an `Account` class that starts at 0. `deposit` adds only positive amounts and raises `ValueError` otherwise. `withdraw` returns `False` when short.",
    starter: `class Account:
    def __init__(self):
        self.balance = 0

    def deposit(self, amount):
        pass

    def withdraw(self, amount):
        pass`,
    hint: "In deposit, raise ValueError when amount <= 0, then add. In withdraw, compare with self.balance before subtracting.",
    tests: [
      { name: "Deposit adds", code: `a = Account()\na.deposit(50)\nassert a.balance == 50` },
      { name: "Withdraw succeeds", code: `assert a.withdraw(20) is True\nassert a.balance == 30` },
      { name: "Short withdraw fails safely", code: `assert a.withdraw(100) is False\nassert a.balance == 30` },
      {
        name: "Negative deposit raises",
        code: `try:\n    Account().deposit(-1)\nexcept ValueError:\n    pass\nelse:\n    assert False, "deposit should reject negative amounts"`,
      },
    ],
  },
  "py-idioms": {
    title: "Mini-build · Word stats",
    brief:
      'Return `{"words": count, "longest": longest word, "unique": distinct count}` for a sentence. Empty text returns zeros and `""`.',
    starter: `def word_stats(text):
    """Return counts for a sentence."""
    pass`,
    hint: "words = text.split(). Longest is max(words, key=len). Unique is len(set(words)). Guard the empty case first.",
    tests: [
      {
        name: "Full sentence",
        code: `assert word_stats("a bb ccc bb") == {"words": 4, "longest": "ccc", "unique": 3}`,
      },
      { name: "Empty text", code: `assert word_stats("") == {"words": 0, "longest": "", "unique": 0}` },
      {
        name: "Extra spaces are ignored",
        code: `assert word_stats("  go   go  ") == {"words": 2, "longest": "go", "unique": 1}`,
      },
    ],
  },
};
