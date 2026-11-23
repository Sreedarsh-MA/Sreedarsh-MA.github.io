// Guided lessons. Each lesson maps to card topics so "review cards" can build a focused session.
window.LESSONS = [
  {
    id: "values",
    title: "Values, types & truth",
    short: "values",
    icon: "🔢",
    summary: "Numbers, strings, None, and how Python decides what equals what.",
    minutes: 8,
    topics: ["Basics", "Data types"],
    sections: [
      {
        h: "Division has two flavors",
        p: "`/` always gives a float, even for two integers. `//` gives the floor (rounded down) result, and `%` gives the remainder. This is the first place Python surprises people coming from C or Java.",
        code: `print(3 / 2)    # 1.5
print(7 // 2)   # 3
print(7 % 2)    # 1`,
      },
      {
        h: "Types are attached to values",
        p: "Every value has a type: `int`, `float`, `str`, `bool`, `NoneType`. `type(x)` tells you which one you have, and the type name is used when converting: `int(\"42\")`, `float(\"3.14\")`, `str(42)`.",
        code: `age = "42"
print(type(age))          # <class 'str'>
print(int(age) + 1)       # 43
print(type(3.0))          # <class 'float'>`,
      },
      {
        h: "== compares values, is compares identity",
        p: "Use `==` for value equality and `is` for identity (same object). The one place you almost always want `is` is `None`: write `x is None`, never `x == None`. Strings and small ints are often interned, so `is` can look correct in a quick test and then fail on real data.",
        code: `a = [1, 2]
b = [1, 2]
print(a == b)      # True  (same contents)
print(a is b)      # False (two different lists)

value = None
print(value is None)   # True`,
      },
      {
        h: "Comments and style",
        p: "Comments start with `#` and run to the end of the line — Python has no block comment. PEP 8 is the official style guide: `snake_case` for variables and functions, `PascalCase` for classes, spaces around operators, and two blank lines between top-level functions.",
      },
    ],
    quiz: [
      {
        q: "What does `7 // 2` evaluate to?",
        options: ["3.5", "3", "4", "1"],
        answer: 1,
        why: "`//` is floor division, so 7 divided by 2 becomes 3. The fractional part is dropped.",
      },
      {
        q: "Which is the recommended None check?",
        options: ["x == None", "x is None", "x = None", "None == x"],
        answer: 1,
        why: "`is` checks identity, which is exactly what None needs. `==` can be overridden by custom classes.",
      },
      {
        q: "What is PEP 8?",
        options: ["A package installer", "Python's style guide", "A built-in debugger", "A Python version"],
        answer: 1,
        why: "PEP 8 is the official style guide for Python code — naming, spacing, and formatting.",
      },
    ],
    task: {
      title: "Convert and double",
      brief:
        'Write a program that converts the string "3.5" to a float, doubles it, and prints both the type and the value using an f-string.',
      hint: 'value = float("3.5") * 2 — then print(type(value), value) or an f-string.',
    },
  },
  {
    id: "collections",
    title: "Collections that fit the job",
    short: "collections",
    icon: "🗂️",
    summary: "Lists, tuples, dicts, slicing, and the methods you reach for daily.",
    minutes: 10,
    topics: ["Collections"],
    sections: [
      {
        h: "Lists and tuples",
        p: "Lists are mutable and ordered — `append` adds one item, `extend` adds each item from another iterable. Tuples are immutable, which makes them safe as dict keys and communicates \"this record should not change\".",
        code: `items = [1, 2]
items.append(3)        # [1, 2, 3]
items.extend([4, 5])   # [1, 2, 3, 4, 5]

point = (10, 20)       # tuple
# point[0] = 99        # TypeError: tuples are immutable`,
      },
      {
        h: "Indexing and slicing",
        p: "Indexes start at 0. Slices include the start and exclude the stop: `s[1:4]` returns indexes 1, 2, 3. `range` follows the same rule, so `range(1, 5)` produces 1, 2, 3, 4.",
        code: `nums = [10, 20, 30, 40, 50]
print(nums[1:4])   # [20, 30, 40]
print(nums[-1])    # 50
print(list(range(1, 5)))   # [1, 2, 3, 4]`,
      },
      {
        h: "Dicts: keys, defaults, and iteration",
        p: "Test membership with `key in d`. When a key might be missing, `d.get(key, default)` avoids a `KeyError`. Iterating a dict gives keys by default; use `.items()` for pairs.",
        code: `ages = {"sreed": 22, "ana": 24}
print("ana" in ages)             # True
print(ages.get("sam", 0))        # 0

for name, age in ages.items():
    print(name, age)`,
      },
      {
        h: "Choosing the right one",
        p: "List: ordered and changeable. Tuple: ordered and fixed. Dict: lookup by key. Set: unique values. Picking the right type usually beats writing clever code around the wrong one.",
      },
    ],
    quiz: [
      {
        q: "Which collection is mutable?",
        options: ["tuple", "str", "list", "frozenset"],
        answer: 2,
        why: "Lists can be changed in place with methods like append, extend, and remove.",
      },
      {
        q: "What does `len(range(1, 5))` return?",
        options: ["3", "4", "5", "Error"],
        answer: 1,
        why: "range excludes the stop value, so it contains 1, 2, 3, 4 — four numbers.",
      },
      {
        q: "Best way to read a dict key with a fallback?",
        options: ["d[key]", "d.get(key, 0)", "d[key] or 0", "d.fetch(key)"],
        answer: 1,
        why: "`get` returns the fallback when the key is missing. `d[key]` raises KeyError.",
      },
    ],
    task: {
      title: "Class marks",
      brief:
        "Build a dict of three students and their marks, print each pair with an f-string, then print the average using sum(d.values()) / len(d).",
      hint: "Iterate with d.items(); compute the average outside the loop.",
    },
  },
  {
    id: "loops",
    title: "Loop like a Pythonista",
    short: "loops",
    icon: "🔁",
    summary: "Comprehensions, enumerate, zip, and generators that compute lazily.",
    minutes: 9,
    topics: ["Comprehensions", "Generators"],
    sections: [
      {
        h: "Comprehensions replace simple loops",
        p: "A list comprehension builds a list in one expression. The same pattern works for dicts. Read it as \"for each item, produce this value\" — and stop when the logic needs more than one condition or side effects.",
        code: `nums = [1, 2, 3, 4]
print([n * n for n in nums])          # [1, 4, 9, 16]
print([n for n in nums if n % 2 == 0])  # [2, 4]

d = {"a": 1, "b": 2}
print({v: k for k, v in d.items()})   # {1: 'a', 2: 'b'}`,
      },
      {
        h: "enumerate and zip",
        p: "`enumerate` gives index/item pairs so you don't need a manual counter. `zip` walks several iterables in parallel and stops at the shortest one.",
        code: `names = ["ana", "sreed", "sam"]
for i, name in enumerate(names, start=1):
    print(i, name)

letters = ["a", "b", "c"]
numbers = [1, 2]
print(list(zip(letters, numbers)))   # [('a', 1), ('b', 2)]`,
      },
      {
        h: "Generators produce values on demand",
        p: "A function with `yield` returns a generator. It computes each value only when asked, so it can stream data without building the whole list in memory. Use a list comprehension when you need the full list; use a generator when you just iterate once.",
        code: `def countdown(n):
    while n > 0:
        yield n
        n -= 1

for value in countdown(3):
    print(value)   # 3, 2, 1`,
      },
    ],
    quiz: [
      {
        q: "What does `[x * x for x in range(3)]` produce?",
        options: ["[0, 1, 2]", "[0, 1, 4]", "[1, 4, 9]", "[1, 2, 3]"],
        answer: 1,
        why: "range(3) yields 0, 1, 2; squaring each gives 0, 1, 4.",
      },
      {
        q: "`enumerate(items)` yields…",
        options: ["items only", "index, item pairs", "a reversed list", "a dict"],
        answer: 1,
        why: "It pairs a counter with each item, so you can write `for i, item in enumerate(items)`.",
      },
      {
        q: "What does `yield` do inside a function?",
        options: ["Returns once and exits", "Makes the function a generator", "Raises an error", "Prints a value"],
        answer: 1,
        why: "`yield` pauses the function and produces one value at a time, making it a generator.",
      },
    ],
    task: {
      title: "Evens squared",
      brief:
        "Given nums = [4, 1, 7, 2], print the squares of only the even numbers using a comprehension, then use zip to pair each original number with its square.",
      hint: "Build the evens list first, then zip(evens, [n * n for n in evens]).",
    },
  },
  {
    id: "functions",
    title: "Functions & arguments",
    short: "functions",
    icon: "🔧",
    summary: "Defaults, keyword arguments, *args/**kwargs, lambdas, and the mutable-default trap.",
    minutes: 9,
    topics: ["Functions"],
    sections: [
      {
        h: "Defaults and keyword arguments",
        p: "A parameter with a default can be skipped at the call site. Arguments can be passed by name, which makes calls readable when there are several options.",
        code: `def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Sreed"))                 # Hello, Sreed!
print(greet("Sreed", greeting="Hi"))  # Hi, Sreed!`,
      },
      {
        h: "Collecting extra arguments",
        p: "`*args` collects extra positional arguments into a tuple; `**kwargs` collects extra keyword arguments into a dict. They are useful for wrappers — don't reach for them when a named parameter would be clearer.",
        code: `def total(*numbers, **labels):
    print(numbers)   # tuple of positional values
    print(labels)    # dict of keyword values
    return sum(numbers)

print(total(1, 2, 3, note="demo"))`,
      },
      {
        h: "The mutable default trap",
        p: "Defaults are evaluated once, when the function is defined. A mutable default such as `items=[]` is shared by every call, so appends leak between calls. Use `None` and create the list inside the function.",
        code: `def bad(item, bucket=[]):     # shared default
    bucket.append(item)
    return bucket

def good(item, bucket=None):
    if bucket is None:
        bucket = []
    bucket.append(item)
    return bucket`,
      },
      {
        h: "Small anonymous functions",
        p: "A lambda is a one-expression function, handy for short callbacks like the `key=` argument of `sorted`. If the logic needs a name or several lines, write a `def`.",
        code: `pairs = [("ana", 24), ("sreed", 22)]
print(sorted(pairs, key=lambda pair: pair[1]))  # by age`,
      },
    ],
    quiz: [
      {
        q: "With `def f(x, y=10)`, what is `f(3)`?",
        options: ["Error", "f(3, 3)", "f(3, 10)", "f(10, 3)"],
        answer: 2,
        why: "The missing argument falls back to its default, so y becomes 10.",
      },
      {
        q: "`*args` collects extra positional arguments as…",
        options: ["a list", "a tuple", "a dict", "a set"],
        answer: 1,
        why: "Extra positional arguments are packed into a tuple.",
      },
      {
        q: "Why is `def f(items=[])` risky?",
        options: ["Lists can't be defaults", "The list is shared across calls", "It raises TypeError", "It copies on every call"],
        answer: 1,
        why: "Defaults are created once, so mutations persist between calls. Use `None` and build a new list inside.",
      },
    ],
    task: {
      title: "Stats helper",
      brief:
        "Write def stats(*nums, round_to=2) that returns a tuple (minimum, maximum, mean) with the mean rounded. Call it with several numbers and a custom round_to.",
      hint: "Use min(nums), max(nums), sum(nums) / len(nums), and round(value, round_to).",
    },
  },
  {
    id: "idioms",
    title: "Errors, files & everyday idioms",
    short: "idioms",
    icon: "🧭",
    summary: "Handle failures, read files safely, and write idiomatic loops and strings.",
    minutes: 10,
    topics: ["Errors", "Files", "Idioms"],
    sections: [
      {
        h: "Catch only what you expect",
        p: "`try` / `except` catches an exception; `else` runs when nothing failed, and `finally` always runs. Catch the specific exception you can handle, and raise with a message so the failure is understandable.",
        code: `def parse(text):
    try:
        return int(text)
    except ValueError as err:
        raise ValueError(f"not a number: {text!r}") from err

try:
    print(parse("42"))
except ValueError as e:
    print("failed:", e)`,
      },
      {
        h: "Files close themselves with with",
        p: "`with open(...) as f` closes the file even when an exception happens inside the block. Pass an explicit encoding for text files, and prefer iterating line by line for large files.",
        code: `with open("notes.txt", "w", encoding="utf-8") as f:
    f.write("first line\\nsecond line\\n")

with open("notes.txt", encoding="utf-8") as f:
    for line in f:
        print(line.rstrip())`,
      },
      {
        h: "Idioms you will type every day",
        p: "Use f-strings to embed values, `enumerate` when you need an index, `zip` to walk in parallel, and `sorted(..., key=lambda ...)` to sort by a derived value. These replace manual counters and index math.",
        code: `name = "Sreed"
score = 92
print(f"{name} scored {score}%")

rows = [("ana", 81), ("sreed", 92)]
for i, (student, mark) in enumerate(sorted(rows, key=lambda r: -r[1]), 1):
    print(f"{i}. {student}: {mark}")`,
      },
    ],
    quiz: [
      {
        q: "When does a `finally` block run?",
        options: ["Only on success", "Only on error", "Always", "Only if caught"],
        answer: 2,
        why: "`finally` always runs, which makes it the place for cleanup.",
      },
      {
        q: "Idiomatic way to read a text file?",
        options: ["f = open(...); f.read()", "with open(...) as f: f.read()", "read(file)", "open.read(file)"],
        answer: 1,
        why: "The `with` statement closes the file automatically, even on errors.",
      },
      {
        q: "Sort `pairs` by its second element:",
        options: ["pairs.sort(1)", "sorted(pairs, key=lambda t: t[1])", "sorted(pairs[1])", "sort(pairs, 1)"],
        answer: 1,
        why: "The `key` function extracts the value to compare — here, the tuple's second element.",
      },
    ],
    task: {
      title: "Skip the bad values",
      brief:
        'Parse the list ["3", "x", "5"] with a loop and try/except: sum the valid integers, count the failures, then print the total and the count with f-strings.',
      hint: "Inside except ValueError: failures += 1. Keep going after the failure.",
    },
  },
  {
    id: "decorators",
    title: "Decorators that wrap behavior",
    short: "decorators",
    icon: "🎁",
    summary: "Functions that modify functions — timing, caching, and access control.",
    minutes: 10,
    topics: ["Functions"],
    sections: [
      {
        h: "A decorator is a function that takes a function",
        p: "A decorator receives a function, adds behavior before or after it runs, and returns a new function. `functools.wraps` copies the original function's name and docstring so the wrapped function still looks like itself.",
        code: `from functools import wraps

def announce(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        print(f"Calling {fn.__name__}")
        return fn(*args, **kwargs)
    return wrapper

@announce
def add(a, b):
    return a + b

print(add(2, 3))   # Calling add, then 5`,
      },
      {
        h: "@ syntax is just sugar",
        p: "`@announce` above `def add` means exactly `add = announce(add)`. The @ line runs at import time, not each call — the wrapping happens once.",
      },
      {
        h: "Real uses: timing and caching",
        p: "`time.perf_counter()` around the call measures execution. `functools.lru_cache` memoizes results so repeated calls with the same arguments skip the work entirely — a decorator you get for free.",
        code: `from functools import lru_cache
import time

def timed(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = fn(*args, **kwargs)
        print(f"{fn.__name__}: {time.perf_counter() - start:.4f}s")
        return result
    return wrapper

@lru_cache
def fib(n):
    return n if n < 2 else fib(n - 1) + fib(n - 2)`,
      },
      {
        h: "Decorators with arguments need one more layer",
        p: "`@retry(times=3)` is a decorator factory: `retry(times=3)` returns the actual decorator, which then wraps the function. Each extra layer of configuration is one more nested function.",
      },
    ],
    quiz: [
      {
        q: "What does `@wraps(fn)` do inside a decorator?",
        options: ["Makes the function async", "Copies the original function's metadata", "Caches the result", "Prevents recursion"],
        answer: 1,
        why: "Without @wraps the wrapper would show up as 'wrapper' with no docstring; wraps preserves __name__ and __doc__.",
      },
      {
        q: "`@announce` on `def add` is the same as:",
        options: ["add = announce", "add = announce(add)", "announce(add())", "add(announce)"],
        answer: 1,
        why: "The decorator line rebinds the name to the result of calling the decorator on the function — once, at import time.",
      },
      {
        q: "Which standard-library decorator memoizes results?",
        options: ["functools.wraps", "functools.lru_cache", "itertools.chain", "time.perf_counter"],
        answer: 1,
        why: "lru_cache remembers recent calls and returns the cached result for repeated arguments.",
      },
    ],
    task: {
      title: "Time a function",
      brief:
        "Write a `timed` decorator that prints how many seconds a function took, apply it to a function that sums range(1_000_000), and call it.",
      hint: "Save time.perf_counter() before calling fn, print the difference after. Remember to return fn's result.",
    },
  },
  {
    id: "oop",
    title: "Classes & objects",
    short: "oop",
    icon: "🏛️",
    summary: "Bundling data with behavior — classes, __init__, methods, and dataclasses.",
    minutes: 11,
    topics: [],
    sections: [
      {
        h: "A class bundles state with behavior",
        p: "A class is a template; an object is one instance. `__init__` runs at creation to attach attributes, and methods are functions that receive the instance as their first argument, `self`.",
        code: `class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self.balance

acct = BankAccount("Sreed", 100)
acct.deposit(50)
print(acct.balance)   # 150`,
      },
      {
        h: "Dunder methods hook into syntax",
        p: "Methods like `__str__`, `__eq__`, and `__len__` plug your object into built-ins: `print(obj)` uses `__str__`, `==` uses `__eq__`, `len(obj)` uses `__len__`. You implement them, Python's syntax calls them.",
        code: `class Card:
    def __init__(self, front, back):
        self.front = front
        self.back = back

    def __str__(self):
        return f"{self.front} -> {self.back}"

    def __eq__(self, other):
        return self.front == other.front and self.back == other.back

print(Card("len()", "number of items"))`,
      },
      {
        h: "@property computes on demand",
        p: "A method marked `@property` is accessed like an attribute but runs like a function — useful for derived values you want to keep in sync, like a read-only balance.",
        code: `class Circle:
    def __init__(self, radius):
        self.radius = radius

    @property
    def area(self):
        return 3.14159 * self.radius ** 2

c = Circle(2)
print(c.area)   # no parentheses — 12.56636`,
      },
      {
        h: "dataclasses write the boilerplate for you",
        p: "When a class is mostly data, `@dataclass` generates `__init__`, `__repr__`, and `__eq__` from the field annotations. Reach for it before writing a plain class with only an `__init__`.",
        code: `from dataclasses import dataclass

@dataclass
class Flashcard:
    front: str
    back: str
    seen: int = 0

card = Flashcard("tuple", "immutable list")
print(card)   # Flashcard(front='tuple', back='immutable list', seen=0)`,
      },
    ],
    quiz: [
      {
        q: "What is `self` in a method?",
        options: ["A reserved keyword", "The instance the method was called on", "The class itself", "A copy of the arguments"],
        answer: 1,
        why: "Python passes the instance as the first argument automatically — naming it self is only a convention, but a universal one.",
      },
      {
        q: "Which method controls what `print(obj)` shows?",
        options: ["__init__", "__str__", "__eq__", "__len__"],
        answer: 1,
        why: "__str__ returns the human-readable string for print() and str().",
      },
      {
        q: "When is @dataclass the right choice?",
        options: [
          "When the class is mostly data and you want __init__/__repr__/__eq__ generated",
          "When you need fast numeric loops",
          "When the class has no attributes",
          "Only inside async code",
        ],
        answer: 0,
        why: "Dataclasses remove boilerplate for data-holding classes by generating the common dunder methods from annotations.",
      },
    ],
    task: {
      title: "Model a flashcard deck",
      brief:
        "Write a @dataclass Flashcard with front, back, and seen fields, then a Deck class with an add(card) method and a due() method returning cards where seen < 3. Create a deck, add two cards, print the due count.",
      hint: "Deck needs an __init__ that sets self.cards = []. due() is a list comprehension filtering self.cards.",
    },
  },
];
