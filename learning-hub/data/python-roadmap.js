// Python roadmap: the same gated format as the AI/ML roadmap, aimed at the
// language itself. Every stage teaches, then practice problems unlock the
// stage test, and the final project closes the roadmap. All content is
// original; resource links point at the official docs.
window.PY_ROADMAP = {
  id: "python",
  title: "Python Roadmap",
  icon: "🐍",
  level: "Beginner",
  summary:
    "Six Python classes (values → generators), each with quick checks, runnable code labs, a mini-build, and a stage test, then a CLI project that closes the roadmap.",
  stages: [
    {
      id: "py-values",
      title: "Python I · Values and control flow",
      short: "py-values",
      icon: "🧮",
      minutes: 25,
      summary: "Numbers, strings, truthiness, and the loops everything else is built from.",
      sections: [
        {
          h: "Numbers, names, and operators",
          p: "Python has two everyday number types: `int` for whole numbers and `float` for decimals. `/` always produces a float, `//` floors to a whole number, `%` gives the remainder, and `**` is a power. A variable is just a name bound to a value — reassigning it points the name somewhere else.",
          code: `count = 7
print(count / 2)    # 3.5
print(count // 2)   # 3
print(count % 2)    # 1
print(2 ** 5)       # 32`,
          exercises: [
            {
              q: "What does `print(17 // 5)` show?",
              answer: 3,
              solution: "17 // 5 is floor division: 5 fits three times, and the remainder is dropped.",
            },
            {
              q: "What does `print(2 ** 3 + 1)` show?",
              answer: 9,
              solution: "Exponents run before addition: 2³ = 8, then 8 + 1 = 9.",
            },
          ],
        },
        {
          h: "Strings and f-strings",
          p: "A string is an immutable sequence of characters. Indexing starts at 0, and negative indexes count from the end. A slice `[start:stop]` includes `start` but stops before `stop`. f-strings interpolate any expression inside `{}`.",
          code: `name = "Python"
print(name[0], name[-1])                   # P n
print(name[1:4])                           # yth
print(f"{name} has {len(name)} letters")   # Python has 6 letters`,
          exercises: [
            {
              q: 'What does `print("Py" + "thon")` show?',
              answer: "Python",
              solution: "`+` joins strings without adding a space, so the two parts become `Python`.",
            },
            {
              q: 'What does `print("hello"[1:4])` show?',
              answer: "ell",
              solution: "Indexes 1, 2, and 3 are e, l, l — the stop index 4 is not included.",
            },
          ],
        },
        {
          h: "Conditionals and loops",
          p: "`if`/`elif`/`else` choose a branch. Empty strings, empty lists, `0`, and `None` are falsy; everything else is truthy. `for` walks an iterable, and `range(start, stop, step)` produces numbers up to but not including `stop`. `break` leaves the loop and `continue` skips to the next item.",
          code: `total = 0
for n in range(1, 6):
    if n % 2 == 0:
        continue
    total += n
print(total)    # 9  (1 + 3 + 5)`,
          exercises: [
            {
              q: "What does `print(sum(range(1, 5)))` show?",
              answer: 10,
              solution: "range(1, 5) yields 1, 2, 3, 4. Their sum is 10.",
            },
            {
              q: "How many numbers does `range(0, 10, 2)` contain?",
              answer: 5,
              solution: "It yields 0, 2, 4, 6, 8 — five values. 10 is the stop, not included.",
            },
          ],
        },
      ],
      quiz: [
        {
          q: "What does `7 // 2` evaluate to?",
          options: ["3", "3.5", "4", "1"],
          answer: 0,
          why: "`//` is floor division, so the decimal part is dropped.",
        },
        {
          q: 'What does `"abc"[1:]` return?',
          options: ["bc", "ab", "abc", "c"],
          answer: 0,
          why: "The slice starts at index 1 and runs to the end, skipping the first character.",
        },
        {
          q: "How many numbers does `range(2, 10, 3)` produce?",
          options: ["2", "3", "4", "8"],
          answer: 1,
          why: "It yields 2, 5, and 8 — three values, stopping before 10.",
        },
      ],
    },
    {
      id: "py-collections",
      title: "Python II · Collections",
      short: "py-collections",
      icon: "📦",
      minutes: 25,
      summary: "Lists, dicts, sets, and comprehensions — choosing the right container.",
      sections: [
        {
          h: "Lists: order and mutation",
          p: "A list keeps items in order and can change in place. `append` adds one item, `pop` removes by position, `sort` reorders the list itself, while `sorted` returns a new list. Slicing copies a range of items.",
          code: `nums = [3, 1, 2]
nums.append(4)      # [3, 1, 2, 4]
nums.sort()         # [1, 2, 3, 4]
print(nums[-1])     # 4
print(nums[1:3])    # [2, 3]`,
          exercises: [
            {
              q: "What does `print([1, 2] + [3])` show?",
              answer: "[1, 2, 3]",
              solution: "Adding lists concatenates them into one new list.",
            },
            {
              q: "What does `print(sorted([3, 1, 2])[0])` show?",
              answer: 1,
              solution: "`sorted` returns `[1, 2, 3]`; index 0 is the smallest value, 1.",
            },
          ],
        },
        {
          h: "Dictionaries and sets",
          p: "A dictionary maps keys to values and looks them up fast. `d[key]` raises `KeyError` when the key is missing; `d.get(key, default)` returns the default instead. A set stores unique values and ignores order, which makes it the tool for deduplication and membership tests.",
          code: `scores = {"ada": 91, "grace": 87}
print(scores["ada"])            # 91
print(scores.get("linus", 0))   # 0
print(len({1, 2, 2, 3}))        # 3`,
          exercises: [
            {
              q: 'What does `print({"a": 1, "b": 2}["b"])` show?',
              answer: 2,
              solution: "The key `b` maps to 2; the other entry is ignored.",
            },
            {
              q: 'How many values are in `{"x", "x", "y"}`?',
              answer: 2,
              solution: "A set keeps duplicates out, so it holds only `x` and `y`.",
            },
          ],
        },
        {
          h: "Comprehensions and zip",
          p: "A comprehension builds a collection in one expression: `[f(x) for x in items if test(x)]` filters before calling `f`. `zip` pairs items from two iterables, and `enumerate` gives each item together with its index.",
          code: `squares = [n * n for n in range(4)]          # [0, 1, 4, 9]
evens = [n for n in range(6) if n % 2 == 0]  # [0, 2, 4]
pairs = list(zip(["a", "b"], [1, 2]))        # [('a', 1), ('b', 2)]`,
          exercises: [
            {
              q: "What does `print([x * 2 for x in range(3)])` show?",
              answer: "[0, 2, 4]",
              solution: "range(3) gives 0, 1, 2; doubling each gives 0, 2, 4.",
            },
            {
              q: "What does `print(sum(a * b for a, b in zip([1, 2], [3, 4])))` show?",
              answer: 11,
              solution: "zip pairs 1·3 and 2·4: 3 + 8 = 11.",
            },
          ],
        },
      ],
      quiz: [
        {
          q: "Which value can be changed after it is created?",
          options: ["A list", "A string", "A tuple", "An integer"],
          answer: 0,
          why: "Lists are mutable; strings, tuples, and integers are immutable.",
        },
        {
          q: 'What does `{"a": 1}.get("b", 0)` return?',
          options: ["0", "1", "None", "KeyError"],
          answer: 0,
          why: "`get` returns the fallback when the key is absent.",
        },
        {
          q: "What does `[n * n for n in range(3)]` produce?",
          options: ["[0, 1, 4]", "[1, 4, 9]", "[0, 1, 2]", "[1, 2, 3]"],
          answer: 0,
          why: "range(3) is 0, 1, 2; squaring gives 0, 1, 4.",
        },
      ],
    },
    {
      id: "py-functions",
      title: "Python III · Functions",
      short: "py-functions",
      icon: "🧩",
      minutes: 25,
      summary: "Return values, flexible arguments, and the small tools built on functions.",
      sections: [
        {
          h: "Defining and returning",
          p: "`def` creates a function and `return` sends a value back and ends the call. Parameters can be passed by position or by name. Defaults make arguments optional — but never use a mutable default like `[]`, because it is created once and shared across calls.",
          code: `def area(width, height=2):
    return width * height

print(area(3))                  # 6
print(area(3, 4))               # 12
print(area(height=5, width=2))  # 10`,
          exercises: [
            {
              q: "With `def double(x): return x * 2`, what does `print(double(7))` show?",
              answer: 14,
              solution: "The call binds x to 7, and returns 7 · 2 = 14.",
            },
            {
              q: "With `def add(a, b=10): return a + b`, what does `print(add(5))` show?",
              answer: 15,
              solution: "Only `a` is passed, so `b` takes its default 10: 5 + 10 = 15.",
            },
          ],
        },
        {
          h: "Flexible arguments",
          p: "`*args` collects extra positional arguments into a tuple; `**kwargs` collects extra keyword arguments into a dictionary. Call sites can unpack with `*` and `**`. This is how wrappers pass arguments through without knowing their names.",
          code: `def total(*nums):
    return sum(nums)

def describe(**fields):
    return ", ".join(f"{k}={v}" for k, v in fields.items())

print(total(1, 2, 3))                 # 6
print(describe(lang="py", level=2))   # lang=py, level=2`,
          exercises: [
            {
              q: "With `def count(*items): return len(items)`, what does `print(count(\"a\", \"b\", \"c\"))` show?",
              answer: 3,
              solution: "All three positional arguments land in the tuple `items`, so its length is 3.",
            },
            {
              q: "What does `print((lambda *a: sum(a))(2, 3, 5))` show?",
              answer: 10,
              solution: "The lambda collects 2, 3, 5 into a tuple and sums them: 10.",
            },
          ],
        },
        {
          h: "Scope, lambdas, and small tools",
          p: "A lambda is a tiny anonymous function, useful as an argument. `sorted(..., key=...)` sorts by a derived value, `map` transforms every item, and `filter` keeps items that pass a test. Functions can read names from the enclosing scope, but assigning inside a function creates a local name.",
          code: `words = ["bb", "a", "ccc"]
print(sorted(words, key=len))                     # ['a', 'bb', 'ccc']
print(list(map(str.upper, words)))                # ['BB', 'A', 'CCC']
print(list(filter(lambda w: len(w) > 1, words)))  # ['bb', 'ccc']`,
          exercises: [
            {
              q: "What does `print((lambda x: x + 1)(4))` show?",
              answer: 5,
              solution: "The lambda is called immediately with x = 4, returning 5.",
            },
            {
              q: "How many values pass `filter(lambda n: n % 2 == 0, range(6))`?",
              answer: 3,
              solution: "The even values 0, 2, and 4 pass; 1, 3, and 5 are filtered out.",
            },
          ],
        },
      ],
      quiz: [
        {
          q: "A function with no `return` statement returns…",
          options: ["None", "0", "an empty string", "the last expression"],
          answer: 0,
          why: "Python returns `None` when a function falls off the end.",
        },
        {
          q: "With `def add(a, b=10)`, what does `add(5)` return?",
          options: ["15", "5", "10", "TypeError"],
          answer: 0,
          why: "`b` keeps its default of 10, so 5 + 10 = 15.",
        },
        {
          q: "`*args` collects extra positional arguments into a…",
          options: ["tuple", "list", "dict", "set"],
          answer: 0,
          why: "`args` is a tuple; `**kwargs` is the one that becomes a dict.",
        },
      ],
    },
    {
      id: "py-errors",
      title: "Python IV · Errors, files, and modules",
      short: "py-errors",
      icon: "🛠️",
      minutes: 30,
      summary: "Catch what you can handle, persist data safely, and reuse the standard library.",
      sections: [
        {
          h: "Exceptions",
          p: "Exceptions are Python's way of saying a call could not finish. Catch only what you can handle: `try` runs the risky line, `except ValueError` handles that specific failure, and `finally` always runs. Use `raise` to reject bad input instead of silently returning a wrong value.",
          code: `def to_int(text):
    try:
        return int(text)
    except ValueError:
        return None

print(to_int("42"))    # 42
print(to_int("nope"))  # None`,
          exercises: [
            {
              q: "Using the `to_int` function above, what does `print(to_int(\"7\"))` show?",
              answer: 7,
              solution: "`int(\"7\")` succeeds, so the function returns the number 7.",
            },
            {
              q: 'Which exception does `int("nope")` raise?',
              answer: "ValueError",
              solution: "The text is the right type but the wrong value, so Python raises `ValueError`.",
            },
          ],
        },
        {
          h: "Files and JSON",
          p: "A `with` block closes a file even when the body raises. Always pass an explicit encoding when reading or writing text. JSON is the standard way to save structured data: `json.dumps` turns Python values into text, and `json.loads` turns text back into values.",
          code: `import json
from pathlib import Path

path = Path("notes.json")
path.write_text(json.dumps({"count": 3}), encoding="utf-8")
data = json.loads(path.read_text(encoding="utf-8"))
print(data["count"])   # 3`,
          exercises: [
            {
              q: "What does `print(json.loads('{\"a\": 1}')[\"a\"])` show?",
              answer: 1,
              solution: "`loads` turns the text back into a dict, and key `a` maps to 1.",
            },
            {
              q: 'What does `print("data" in json.loads(\'{"data": [1, 2]}\'))` show?',
              answer: "True",
              solution: "`in` on a dict checks keys, and `data` is a key of the loaded dict.",
            },
          ],
        },
        {
          h: "Modules and entry points",
          p: "Modules are files you import. `import math` keeps the namespace; `from pathlib import Path` brings one name in. The standard library is large: `math` for maths, `pathlib` for paths, `collections` for specialised containers, `itertools` for iterator building blocks. The `if __name__ == \"__main__\":` guard runs a file's demo code only when it is executed directly, not when it is imported.",
          code: `import math
from pathlib import Path

print(math.gcd(12, 18))           # 6
print(Path("report.txt").suffix)  # .txt`,
          exercises: [
            {
              q: "What does `print(math.gcd(8, 12))` show?",
              answer: 4,
              solution: "The greatest common divisor of 8 and 12 is 4.",
            },
            {
              q: 'What does `print(Path("a.tar.gz").suffix)` show?',
              answer: ".gz",
              solution: "`suffix` returns the extension after the last dot, which is `.gz`.",
            },
          ],
        },
      ],
      quiz: [
        {
          q: 'Which exception matches a failed `int("abc")`?',
          options: ["ValueError", "TypeError", "KeyError", "NameError"],
          answer: 0,
          why: "The type is fine but the value cannot be parsed, so it is a `ValueError`.",
        },
        {
          q: "Why use `with open(...) as f:`?",
          options: [
            "It closes the file even if an error happens",
            "It makes reads faster",
            "It converts the file to JSON",
            "It encrypts the file",
          ],
          answer: 0,
          why: "The context manager guarantees cleanup, including when the body raises.",
        },
        {
          q: 'A block under `if __name__ == "__main__":` runs when…',
          options: [
            "the file is executed directly",
            "the file is imported",
            "the file is deleted",
            "the function is called",
          ],
          answer: 0,
          why: "Imports set `__name__` to the module name; direct execution sets it to `__main__`.",
        },
      ],
    },
    {
      id: "py-oop",
      title: "Python V · Objects and classes",
      short: "py-oop",
      icon: "🏗️",
      minutes: 30,
      summary: "Classes, inheritance, dunder methods, and dataclasses without the ceremony.",
      sections: [
        {
          h: "Classes and instances",
          p: "A class is a blueprint; an instance is one object built from it. `__init__` sets up a new instance, and `self` is that instance. Attributes stored on `self` belong to each object; attributes defined in the class body are shared.",
          code: `class Counter:
    def __init__(self):
        self.value = 0

    def bump(self, by=1):
        self.value += by
        return self.value

c = Counter()
print(c.bump())     # 1
print(c.bump(3))    # 4`,
          exercises: [
            {
              q: "With `class Box: def __init__(self, n): self.n = n`, what does `print(Box(5).n)` show?",
              answer: 5,
              solution: "`Box(5)` runs `__init__`, which stores 5 on the new instance's `n` attribute.",
            },
            {
              q: "Starting from `c = Counter()` in the example, what does `print(c.bump(2))` show?",
              answer: 2,
              solution: "The counter starts at 0 and `bump(2)` adds 2, returning 2.",
            },
          ],
        },
        {
          h: "Inheritance and composition",
          p: "Inheritance lets a class reuse another class's behaviour. `super().__init__()` runs the parent setup, and an overriding method replaces the parent's version. `isinstance` checks the class and its parents. Prefer composition when an object *has* another object rather than *is* one.",
          code: `class Animal:
    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        return "woof"

print(Dog().speak())             # woof
print(isinstance(Dog(), Animal)) # True`,
          exercises: [
            {
              q: "What does `print(Dog().speak())` show?",
              answer: "woof",
              solution: "`Dog` overrides `speak`, so the dog's version wins.",
            },
            {
              q: "What does `print(isinstance(Dog(), Animal))` show?",
              answer: "True",
              solution: "A `Dog` is also an `Animal` through inheritance, so the check passes.",
            },
          ],
        },
        {
          h: "Dunders and dataclasses",
          p: "Dunder methods hook objects into Python syntax: `__repr__` controls the debug display, `__eq__` controls `==`, and `__len__` powers `len()`. `@dataclass` writes `__init__`, `__repr__`, and `__eq__` for plain data objects so you do not hand-write boilerplate.",
          code: `from dataclasses import dataclass

@dataclass
class Point:
    x: int
    y: int

p = Point(1, 2)
print(p)                  # Point(x=1, y=2)
print(p == Point(1, 2))   # True`,
          exercises: [
            {
              q: "What does `print(Point(0, 0))` show?",
              answer: "Point(x=0, y=0)",
              solution: "`@dataclass` generates a `__repr__` in the form `Point(x=..., y=...)`.",
            },
            {
              q: "What does `print(Point(1, 2) == Point(1, 2))` show?",
              answer: "True",
              solution: "The generated `__eq__` compares field values, and both points hold 1 and 2.",
            },
          ],
        },
      ],
      quiz: [
        {
          q: "Inside a method, `self` refers to…",
          options: ["the current instance", "the class itself", "the parent class", "the module"],
          answer: 0,
          why: "`self` is the object the method was called on.",
        },
        {
          q: "`super().__init__()` is used to…",
          options: [
            "run the parent class initialiser",
            "create a new subclass",
            "delete the parent",
            "copy the object",
          ],
          answer: 0,
          why: "It calls the next class in the MRO so the parent's setup still happens.",
        },
        {
          q: "Which dunder makes `len(obj)` work?",
          options: ["__len__", "__size__", "__count__", "__repr__"],
          answer: 0,
          why: "`len()` looks for `__len__` and uses the integer it returns.",
        },
      ],
    },
    {
      id: "py-idioms",
      title: "Python VI · Generators and the standard library",
      short: "py-idioms",
      icon: "🌊",
      minutes: 30,
      summary: "Lazy iteration, the stdlib toolkit, and the idioms that keep scripts short.",
      sections: [
        {
          h: "Generators and laziness",
          p: "A generator produces values one at a time and remembers where it stopped. `yield` hands a value back without ending the function; the next request resumes after it. Generators are lazy, so they work on huge or infinite sequences without building a list.",
          code: `def countdown(n):
    while n > 0:
        yield n
        n -= 1

print(list(countdown(3)))            # [3, 2, 1]
print(sum(x * x for x in range(4)))  # 14`,
          exercises: [
            {
              q: "What does `print(list(countdown(2)))` show?",
              answer: "[2, 1]",
              solution: "The generator yields 2, then 1, then stops; `list` collects both values.",
            },
            {
              q: "What does `print(sum(x * x for x in range(4)))` show?",
              answer: 14,
              solution: "The squares are 0, 1, 4, 9, which sum to 14.",
            },
          ],
        },
        {
          h: "The standard library toolkit",
          p: "The standard library saves you from rewriting common tools. `collections.Counter` counts items, `itertools` supplies iterator building blocks, `datetime` handles dates, and `argparse` builds command-line interfaces. Reach for the stdlib before adding a dependency.",
          code: `from collections import Counter
import itertools

print(Counter("aab")["a"])                                # 2
print(list(itertools.islice(itertools.count(10, 5), 3)))  # [10, 15, 20]`,
          exercises: [
            {
              q: 'What does `print(Counter("mississippi")["s"])` show?',
              answer: 4,
              solution: "The letter `s` appears four times in `mississippi`.",
            },
            {
              q: "What does `print(list(itertools.islice(range(10, 0, -3), 3)))` show?",
              answer: "[10, 7, 4]",
              solution: "range steps down by 3: 10, 7, 4. `islice` takes the first three.",
            },
          ],
        },
        {
          h: "Idioms, types, and tests",
          p: "Idiomatic Python uses the built-ins first: `enumerate` when you need indexes, `zip` to walk two sequences together, unpacking to name fields, and `with` for cleanup. Type hints document intent, and `assert` (or pytest) turns expectations into checks you can rerun.",
          code: `from pathlib import Path

def word_count(path: Path) -> int:
    return len(path.read_text(encoding="utf-8").split())

assert word_count is not None
print("ready")   # ready`,
          exercises: [
            {
              q: 'What does `print(list(enumerate(["a", "b"])))` show?',
              answer: "[(0, 'a'), (1, 'b')]",
              solution: "`enumerate` pairs each item with its index, starting at 0.",
            },
            {
              q: 'What does `print(len("testing") - 1)` show?',
              answer: 6,
              solution: '`"testing"` has 7 characters; subtracting 1 gives 6.',
            },
          ],
        },
      ],
      quiz: [
        {
          q: "A function that uses `yield` returns…",
          options: ["a generator", "a list", "a tuple", "None"],
          answer: 0,
          why: "Calling it creates a generator object that produces values on demand.",
        },
        {
          q: 'What does `Counter("hello")["l"]` return?',
          options: ["2", "1", "3", "0"],
          answer: 0,
          why: "`hello` contains two `l` characters.",
        },
        {
          q: "`with` is mainly used to…",
          options: [
            "guarantee cleanup even on errors",
            "make code run faster",
            "hide variables",
            "convert types",
          ],
          answer: 0,
          why: "Context managers run their exit step whether the body succeeds or raises.",
        },
      ],
    },
  ],
  project: {
    title: "Build a habit tracker CLI",
    brief:
      "Build a small command-line program that tracks habits across days. It should accept commands like add, done, list, and stats, save data to a JSON file next to the script, and reload it on the next run. Keep the core logic in functions you can test without touching the terminal.",
    hint:
      "Start with argparse and a JSON file, then build the functions in this order: load, save, add, mark_done, summary. Only after that works, add friendly errors for unknown habits and a missing file.",
    doneNote:
      "You can now write, test, and ship a small Python tool. Repeat the loop on a script you actually need.",
    checklist: [
      "Added a habit, marked it done, and saw it in the list",
      "Saved and reloaded habits from a JSON file without losing data",
      "Handled a bad command or unknown habit without crashing",
      "Tested the core functions with asserts or pytest",
    ],
  },
  resources: [
    {
      label: "Python · Official Tutorial",
      href: "https://docs.python.org/3/tutorial/",
    },
    {
      label: "Python · Standard Library Reference",
      href: "https://docs.python.org/3/library/",
    },
  ],
};

window.ROADMAPS = {
  aiml: window.AIML_ROADMAP,
  python: window.PY_ROADMAP,
};
