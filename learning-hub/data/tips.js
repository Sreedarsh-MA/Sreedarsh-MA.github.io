// Daily tips (TIL). Rotates by day of year, so it changes every 24 h and
// repeats yearly. Original one-liners — not copied from any source.
window.TIPS = [
  { tip: "`enumerate(names, start=1)` gives 1-based indexes without a manual counter.", code: "for i, name in enumerate(names, start=1):\n    print(i, name)" },
  { tip: "`zip(a, b)` stops at the shortest sequence — pad with `zip_longest` from itertools if you need the rest.", code: "from itertools import zip_longest\nlist(zip_longest([1, 2], [\"a\"], fillvalue=\"?\"))" },
  { tip: "Sorting by two keys: pass a tuple. Primary first, tie-breaker second.", code: "rows.sort(key=lambda r: (r[\"grade\"], r[\"name\"]))" },
  { tip: "`dict.get(key, default)` avoids the KeyError that `d[key]` would raise.", code: "count = counts.get(word, 0) + 1" },
  { tip: "A `set` lookup is O(1). Checking `x in seen_set` beats `x in seen_list` for big data.", code: "seen = set()\nif item not in seen:\n    seen.add(item)" },
  { tip: "`str.join` beats repeated `+` for building long strings.", code: 'parts = [\"a\", \"b\", \"c\"]\ntext = \"-\".join(parts)' },
  { tip: "Unpacking swaps two variables with no temporary.", code: "a, b = b, a" },
  { tip: "`collections.Counter` turns counting into one line.", code: "from collections import Counter\nCounter(\"mississippi\")" },
  { tip: "The walrus operator `:=` assigns inside an expression — handy in while loops and comprehensions.", code: 'while (line := input()) != "quit":\n    print(line.upper())' },
  { tip: "`any()` and `all()` short-circuit, so put the cheap check first.", code: "has_admin = any(u.is_admin for u in users)" },
  { tip: "Slicing `s[::-1]` reverses; `s[::2]` takes every second item.", code: '"racecar"[::-1]   # the same backwards' },
  { tip: "`pathlib.Path` reads nicer than os.path string juggling.", code: "from pathlib import Path\ntext = Path(\"notes.txt\").read_text()" },
  { tip: "A trailing comma in a one-element tuple is not optional.", code: 'single = (42,)   # (42) is just 42 in parentheses' },
  { tip: "`help(x)` in the REPL shows the docstring — faster than tabbing to a browser.", code: "help(str.split)" },
  { tip: "`f\"{value:,}\"` formats thousands with commas; `f\"{pct:.1%}\"` formats a fraction as a percent.", code: 'f"{1234567:,}"   # 1,234,567\nf"{0.856:.1%}"   # 85.6%' },
  { tip: "Open files with `with` so they close even when an exception fires.", code: "with open(\"data.txt\") as f:\n    text = f.read()" },
  { tip: "`split()` with no arguments handles any whitespace run and strips the ends.", code: '"  a   b  c ".split()   # [\"a\", \"b\", \"c\"]' },
  { tip: "Comprehensions read best when the expression stays short — loops are fine for long bodies.", code: "squares = [n * n for n in nums]" },
  { tip: "`int(\"42\")` fails on \"42.0\" — `float()` first when the input might carry a decimal.", code: 'value = float("3.5")   # then int(value) if needed' },
  { tip: "Checking `if x is None` instead of `== None` can't be fooled by a class that overloads ==.", code: "if result is None:\n    result = default" },
];
