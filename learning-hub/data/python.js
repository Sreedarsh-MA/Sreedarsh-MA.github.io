// Python study deck. Add cards as { t: "Topic", q: "Question", a: "Answer — `code` renders in monospace." }.
window.DECKS = [
  {
    id: "python",
    name: "Python",
    description: "Core syntax, collections, functions, and idioms",
    cards: [
      {
        t: "Basics",
        q: "What is the output type of `3 / 2`?",
        a: "`float` — `/` always performs true division, even between integers.",
      },
      {
        t: "Basics",
        q: "How do you write a single-line comment?",
        a: "Start the line with `#`. Python has no multi-line comment syntax — use `#` on each line.",
      },
      {
        t: "Basics",
        q: "What does `type()` return?",
        a: "The class of an object: `type(5)` gives `<class 'int'>`.",
      },
      {
        t: "Basics",
        q: "What is PEP 8?",
        a: "Python's official style guide — naming, spacing, and formatting conventions.",
      },
      {
        t: "Data types",
        q: "What's the difference between `==` and `is`?",
        a: "`==` compares values; `is` checks whether both names point to the same object in memory.",
      },
      {
        t: "Data types",
        q: "How do you test a value for `None`?",
        a: "Use `x is None`, not `== None`.",
      },
      {
        t: "Data types",
        q: "Convert the string `\"42\"` to an integer.",
        a: "`int(\"42\")`. For decimals use `float(\"3.14\")`.",
      },
      {
        t: "Collections",
        q: "List vs. tuple — what's the difference?",
        a: "Lists are mutable (`[1, 2]`); tuples are immutable (`(1, 2)`), so tuples can be dict keys.",
      },
      {
        t: "Collections",
        q: "`list.append(x)` vs. `list.extend(xs)`?",
        a: "`append` adds one item; `extend` adds each element of an iterable.",
      },
      {
        t: "Collections",
        q: "How do you check whether a key exists in a dict?",
        a: "`key in d` — or `d.get(key, default)` when you want a fallback value.",
      },
      {
        t: "Collections",
        q: "What does `range(1, 5)` produce?",
        a: "`1, 2, 3, 4` — the stop value is exclusive.",
      },
      {
        t: "Collections",
        q: "What does `s[1:4]` return?",
        a: "The items at indexes 1, 2, 3 — start inclusive, stop exclusive.",
      },
      {
        t: "Comprehensions",
        q: "Write a list comprehension with the squares of 0–9.",
        a: "`[x * x for x in range(10)]`",
      },
      {
        t: "Comprehensions",
        q: "Write a dict comprehension that swaps keys and values.",
        a: "`{v: k for k, v in d.items()}`",
      },
      {
        t: "Functions",
        q: "What do `*args` and `**kwargs` collect?",
        a: "`*args` — extra positional arguments as a tuple; `**kwargs` — extra keyword arguments as a dict.",
      },
      {
        t: "Functions",
        q: "Why are mutable default arguments dangerous?",
        a: "The default is created once and shared across calls, so mutations leak between calls. Use `None` and create the value inside the function.",
      },
      {
        t: "Functions",
        q: "What is a lambda?",
        a: "A small anonymous function: `lambda x: x + 1`. Best for short callbacks, e.g. the `key=` argument of `sorted`.",
      },
      {
        t: "Functions",
        q: "In `def f(x, y=10)`, can you call `f(3)`?",
        a: "Yes — `y` falls back to its default, so it behaves as `f(3, 10)`.",
      },
      {
        t: "Errors",
        q: "How do you catch an exception?",
        a: "`try:` / `except ValueError as e:` / optionally `finally:` which always runs.",
      },
      {
        t: "Errors",
        q: "How do you raise an exception with a message?",
        a: "`raise ValueError(\"bad input\")`",
      },
      {
        t: "Files",
        q: "What's the idiomatic way to read a file?",
        a: "`with open(\"file.txt\") as f: data = f.read()` — the `with` block closes the file automatically.",
      },
      {
        t: "Idioms",
        q: "What does `enumerate(items)` give you?",
        a: "`(index, item)` pairs: `for i, item in enumerate(items):`",
      },
      {
        t: "Idioms",
        q: "What does `zip(a, b)` do?",
        a: "Pairs items from two or more iterables in parallel, stopping at the shortest.",
      },
      {
        t: "Idioms",
        q: "How do you embed a variable in a string?",
        a: "An f-string: `f\"Hello {name}\"`.",
      },
      {
        t: "Idioms",
        q: "Sort `pairs` by the second element of each tuple.",
        a: "`sorted(pairs, key=lambda t: t[1])`",
      },
      {
        t: "Generators",
        q: "What does `yield` do inside a function?",
        a: "Turns it into a generator that produces values lazily, one at a time, when iterated.",
      },
      {
        t: "Basics",
        type: "recall",
        q: "Type the built-in function that returns the number of items in a list.",
        a: "len",
        alt: ["len()"],
      },
      {
        t: "Collections",
        type: "recall",
        q: "Type the list method that removes and returns the last item.",
        a: "pop",
        alt: ["pop()", ".pop()"],
      },
      {
        t: "Functions",
        type: "recall",
        q: "Type the keyword that defines a small anonymous function.",
        a: "lambda",
      },
      {
        t: "Strings",
        type: "recall",
        q: "Type the string method that removes whitespace from both ends.",
        a: "strip",
        alt: ["strip()", ".strip()"],
      },
      {
        t: "Predict the output",
        type: "predict",
        q: "What does this print?\n`print(len('hello'))`",
        a: "5",
      },
      {
        t: "Predict the output",
        type: "predict",
        q: "What does this print?\n`print(2 ** 3)`",
        a: "8",
      },
      {
        t: "Predict the output",
        type: "predict",
        q: "What does this print?\n`print('ab' * 2)`",
        a: "abab",
      },
      {
        t: "Predict the output",
        type: "predict",
        q: "What does this print?\n`print(list(range(3)))`",
        a: "[0, 1, 2]",
        alt: ["[0,1,2]"],
      },
      {
        t: "Order the code",
        type: "parsons",
        q: "Tap the lines in the right order to define a doubling function and print the result for 4.",
        lines: ["def double(n):", "    return n * 2", "print(double(4))"],
      },
      {
        t: "Order the code",
        type: "parsons",
        q: "Tap the lines in the right order to count the vowels in 'banana'.",
        lines: ["count = 0", "for c in 'banana':", "    if c in 'aeiou':", "        count += 1", "print(count)"],
      },
      {
        t: "Order the code",
        type: "parsons",
        q: "Tap the lines in the right order to build a list of squares with a loop and print it.",
        lines: ["squares = []", "for x in range(5):", "    squares.append(x * x)", "print(squares)"],
      },
    ],
  },
];
