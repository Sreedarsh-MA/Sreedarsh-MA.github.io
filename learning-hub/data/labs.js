// Interactive labs: quick auto-graded challenges, different from Projects
// (which are build-from-scratch). Two kinds:
//   "predict" — read the snippet, choose what it prints
//   "bug"     — find the line that breaks it
// All questions are original.
window.LABS = [
  {
    id: "pred-slice",
    kind: "predict",
    title: "Slice surprise",
    level: "Beginner",
    prompt: "What does this print?",
    code: `text = "learninghub"
print(text[4:8])`,
    options: ["ning", "ningh", "rnin", "ingh"],
    answer: 0,
    why: "Indexes 4 through 7 are 'n','i','n','g' — index 8 is excluded, so 'ning'.",
  },
  {
    id: "pred-default-arg",
    kind: "predict",
    title: "The mutable default",
    level: "Intermediate",
    prompt: "What does the second call print?",
    code: `def add(item, box=[]):
    box.append(item)
    return box

print(add("a"))
print(add("b"))`,
    options: ['["b"]', '["a", "b"]', '["a"]', "Error"],
    answer: 1,
    why: "The default list is created once at def time and shared between calls, so 'b' lands in the same list as 'a'.",
  },
  {
    id: "bug-loop-delete",
    kind: "bug",
    title: "Deleting while looping",
    level: "Beginner",
    prompt: "This is meant to remove all odd numbers. Which line breaks it?",
    code: `nums = [1, 2, 3, 4, 5, 6]
for n in nums:
    if n % 2 == 1:
        nums.remove(n)
print(nums)`,
    options: ["Line 2: the for loop", "Line 4: nums.remove(n)", "Line 1: the list literal", "Nothing is wrong"],
    answer: 1,
    why: "Removing during iteration shifts everything left, so the element after a removed one is skipped. Build a new list instead: [n for n in nums if n % 2 == 0].",
  },
  {
    id: "pred-compare-chain",
    kind: "predict",
    title: "Chained comparison",
    level: "Beginner",
    prompt: "What does this print?",
    code: `x = 5
print(1 < x < 10 < 9)`,
    options: ["True", "False", "Error", "None"],
    answer: 1,
    why: "Chained comparisons short-circuit as (1 < x) and (x < 10) and (10 < 9) — the last one is False.",
  },
  {
    id: "bug-int-input",
    kind: "bug",
    title: "input() is always a string",
    level: "Beginner",
    prompt: "The user types 10. What happens?",
    code: `age = input("Age: ")
next_year = age + 1
print(next_year)`,
    options: ["Prints 11", "TypeError", "Prints 101", "ValueError"],
    answer: 1,
    why: "input() returns a str, and str + int raises TypeError. Convert first: int(input(...)).",
  },
  {
    id: "pred-dict-get",
    kind: "predict",
    title: "get() with a default",
    level: "Beginner",
    prompt: "What does this print?",
    code: `counts = {"a": 1}
counts["b"] = counts.get("b", 0) + 1
print(counts)`,
    options: ['{"a": 1, "b": 1}', '{"a": 1}', "KeyError", '{"b": 1}'],
    answer: 0,
    why: "get('b', 0) returns 0 because 'b' is missing, then 0 + 1 = 1 is stored under 'b'.",
  },
  {
    id: "bug-is-vs-eq",
    kind: "bug",
    title: "is vs ==",
    level: "Intermediate",
    prompt: "This should catch an empty result, but sometimes misses. Which line is the bug?",
    code: `result = fetch_items()
if result is []:
    print("nothing found")`,
    options: ["Line 1: fetch_items()", "Line 2: the is comparison", "Line 3: print", "Nothing is wrong"],
    answer: 1,
    why: "is compares identity, and a freshly-built [] is a different object from result's list. Use if not result: (or result == []).",
  },
  {
    id: "pred-zip-dict",
    kind: "predict",
    title: "zip into a dict",
    level: "Intermediate",
    prompt: "What does this print?",
    code: `keys = ["a", "b"]
vals = [1, 2, 3]
print(dict(zip(keys, vals)))`,
    options: ['{"a": 1, "b": 2, "c": 3}', '{"a": 1, "b": 2}', "ValueError", '{"a": 1}'],
    answer: 1,
    why: "zip stops at the shortest iterable, so the extra 3 is dropped.",
  },
  {
    id: "bug-return-loop",
    kind: "bug",
    title: "Return inside the loop",
    level: "Beginner",
    prompt: "find_negative should return the first negative number, but it only ever checks the first item. Which line is the bug?",
    code: `def find_negative(nums):
    for n in nums:
        if n < 0:
            return n
        else:
            return None`,
    options: ["Line 3: the if", "Line 5: else return None", "Line 2: the for loop", "Nothing is wrong"],
    answer: 1,
    why: "The else runs on every non-negative number, returning None after the first item. Move return None outside the loop.",
  },
  {
    id: "pred-str-multiply",
    kind: "predict",
    title: "String repetition",
    level: "Beginner",
    prompt: "What does this print?",
    code: `print("ab" * 2 + "c" * 3)`,
    options: ["ababccc", "ab2c3", "ababccc3", "Error"],
    answer: 0,
    why: "* repeats a string: 'ab' twice then 'c' three times, concatenated.",
  },
  {
    id: "bug-global-counter",
    kind: "bug",
    title: "The global counter",
    level: "Intermediate",
    prompt: "This raises UnboundLocalError. Which line causes it?",
    code: `count = 0

def bump():
    count += 1
    print(count)

bump()`,
    options: ["Line 1: count = 0", "Line 4: count += 1", "Line 5: print(count)", "Nothing is wrong"],
    answer: 1,
    why: "Assigning to count inside the function makes it local, so += reads it before it exists. Declare 'global count' or use a mutable/returned value.",
  },
  {
    id: "pred-sorted-key",
    kind: "predict",
    title: "Sort by length",
    level: "Intermediate",
    prompt: "What does this print?",
    code: `words = ["fig", "banana", "kiwi"]
words.sort(key=len)
print(words)`,
    options: ['["fig", "kiwi", "banana"]', '["banana", "fig", "kiwi"]', '["kiwi", "fig", "banana"]', '["banana", "kiwi", "fig"]'],
    answer: 0,
    why: "key=len sorts by string length: fig (3), kiwi (4), banana (6). Python's sort is stable, keeping fig before kiwi.",
  },
];
