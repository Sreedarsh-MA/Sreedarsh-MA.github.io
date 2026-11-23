// AI/ML roadmap: a gated curriculum inside the Tracks tab. Each stage teaches
// first, then a 3-question test unlocks the next stage. A final project closes
// the roadmap. Content is original; the resource links at the bottom credit
// the two public roadmaps that shaped the stage order.
window.AIML_ROADMAP = {
  id: "aiml",
  title: "AI/ML Roadmap",
  icon: "🧠",
  level: "Advanced",
  summary:
    "Six math classes (algebra → information theory), then seven ML stages — each with practice problems and a test that unlocks the next.",
  stages: [
    {
      id: "math-algebra",
      title: "Math I · Algebra you'll reuse",
      short: "math-algebra",
      icon: "🔢",
      minutes: 20,
      summary: "Exponents, factorials, summations, and logs — the notation every later equation uses.",
      sections: [
        {
          h: "Exponents and radicals",
          p: "An exponent counts repeated multiplication: `aⁿ` means `a` multiplied by itself `n` times. When you multiply powers of the same base, add the exponents; when you raise a power to a power, multiply them. A negative exponent means reciprocal, and a fractional exponent is a root: `a^(1/2) = √a`.",
          code: `# Same base: add the exponents
print(2**3 * 2**2)     # 32  = 2**5
# Power of a power: multiply
print((2**3)**2)       # 64  = 2**6
# Roots are fractional powers
print(81**0.5)         # 9.0`,
          exercises: [
            {
              q: "Evaluate `2³ · 2²`.",
              answer: 32,
              solution: "Same base, so add the exponents: 2^(3+2) = 2⁵ = 32.",
            },
            {
              q: "Evaluate `√81`.",
              answer: 9,
              solution: "√81 = 81^(1/2) = 9, because 9 · 9 = 81.",
            },
          ],
        },
        {
          h: "Factorials and summations",
          p: "A factorial multiplies every whole number down to 1: `n! = n · (n−1) · … · 1`, and `0! = 1` by definition. The summation sign `Σ` is a loop in disguise: `Σ from i=1 to n of i²` means add up `i²` for every value of `i` in that range. Nearly every ML loss is written as a summation or an average.",
          code: `import math

print(math.factorial(5))        # 120
print(sum(i**2 for i in range(1, 5)))   # 30
# range(1, 5) yields 1, 2, 3, 4`,
          exercises: [
            {
              q: "Evaluate `5!`.",
              answer: 120,
              solution: "5 · 4 · 3 · 2 · 1 = 120.",
            },
            {
              q: "Evaluate `Σ i²` for i = 1 to 4.",
              answer: 30,
              solution: "1² + 2² + 3² + 4² = 1 + 4 + 9 + 16 = 30.",
            },
          ],
        },
        {
          h: "Scientific notation and logarithms",
          p: "Scientific notation writes a number as a coefficient times a power of ten, which keeps very large and very small numbers readable. A logarithm answers a different question: to what power do I raise the base? `log₂ 8 = 3` because `2³ = 8`. Logs turn products into sums, which is why they appear in loss functions and in information theory.",
          code: `print(f"{25000:.2e}")   # 2.50e+04
print(3.2e-3)           # 0.0032
print(2**3 == 8)        # log2(8) = 3`,
          exercises: [
            {
              q: "Write `2.5 × 10⁴` as a plain number.",
              answer: 25000,
              solution: "10⁴ = 10000, and 2.5 × 10000 = 25000.",
            },
            {
              q: "Evaluate `log₂ 32`.",
              answer: 5,
              solution: "32 = 2⁵, so log₂ 32 = 5.",
            },
          ],
        },
      ],
      quiz: [
        {
          q: "Simplify `aᵐ · aⁿ`.",
          options: ["a^(m+n)", "a^(m·n)", "a^(m−n)", "(2a)^(m+n)"],
          answer: 0,
          why: "Multiplying powers of the same base adds the exponents.",
        },
        {
          q: "What is `0!`?",
          options: ["0", "1", "Undefined", "0.5"],
          answer: 1,
          why: "By definition 0! = 1 — it makes the counting formulas work.",
        },
        {
          q: "What is `log₂ 8`?",
          options: ["2", "3", "4", "8"],
          answer: 1,
          why: "2³ = 8, so the exponent you need is 3.",
        },
      ],
    },
    {
      id: "math-vectors",
      title: "Math II · Vectors & products",
      short: "math-vectors",
      icon: "➡️",
      minutes: 24,
      summary: "Scalars, vectors, addition, the dot product, and the Hadamard product.",
      sections: [
        {
          h: "Scalars, vectors, and components",
          p: "A scalar is a single number; a vector is an ordered list of numbers. In ML a vector usually describes one example (height, weight, age) or one direction in feature space. Components are zero-indexed in code: `v[0]` is the first. The length (L2 norm) of a vector is the square root of the sum of squared components — this is Pythagoras in any number of dimensions.",
          code: `import numpy as np

u = np.array([2, -1, 4])
print(u[1])                 # -1
print(np.linalg.norm([6, 8]))   # 10.0`,
          exercises: [
            {
              q: "`u = [2, −1, 4]`. What is `u[1]`?",
              answer: -1,
              solution: "Index 1 is the second component: −1.",
            },
            {
              q: "What is the L2 norm (length) of `v = [6, 8]`?",
              answer: 10,
              solution: "√(6² + 8²) = √(36 + 64) = √100 = 10.",
            },
          ],
        },
        {
          h: "Adding and scaling vectors",
          p: "Vector addition works component by component, and scaling multiplies every component by the same number. Together they make a linear combination `a·u + b·v`. A network layer is exactly this idea at scale: multiply the inputs by weights and add a bias.",
          code: `u = np.array([1, 2])
v = np.array([3, -5])

print(u + 2 * v)      # [7, -8]
print(0.5 * u)        # [0.5, 1.0]`,
          exercises: [
            {
              q: "`u = [1, 2]`, `v = [3, −5]`. What is the first component of `u + 2v`?",
              answer: 7,
              solution: "First component: 1 + 2·3 = 7.",
            },
            {
              q: "`u = [2, 4]`, `v = [1, 1]`. Find the scalar `c` with `u = c · v`.",
              answer: 2,
              solution: "Both components: 2 = c·1 and 4 = c·2, so c = 2.",
            },
          ],
        },
        {
          h: "Dot product, Hadamard product, cosine",
          p: "The dot product multiplies matching components and sums them; it measures alignment. The Hadamard product multiplies matching components but keeps them separate, producing a vector. The cosine similarity is the dot product divided by both lengths, which removes size and leaves direction — why it is popular for embeddings.",
          code: `a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

print(a @ b)            # 32   dot product
print(a * b)            # [4, 10, 18]   Hadamard
print(np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b)))
# 0.9746 — nearly aligned`,
          exercises: [
            {
              q: "Compute `[1, 2, 3] · [4, 5, 6]`.",
              answer: 32,
              solution: "1·4 + 2·5 + 3·6 = 4 + 10 + 18 = 32.",
            },
            {
              q: "Hadamard product `[1, 2] ⊙ [3, 4]`: what is the first component?",
              answer: 3,
              solution: "Hadamard is element-wise: 1·3 = 3 (the vector is [3, 8]).",
            },
          ],
        },
      ],
      quiz: [
        {
          q: "A large positive dot product between two vectors means they…",
          options: [
            "Point in similar directions",
            "Are exactly perpendicular",
            "Have the same length",
            "Contain the same number of zeros",
          ],
          answer: 0,
          why: "The dot product is large and positive when components push the same way — vectors align.",
        },
        {
          q: "How does the Hadamard product differ from the dot product?",
          options: [
            "It returns a vector of element-wise products",
            "It returns a single number",
            "It only works on matrices",
            "It sorts the components",
          ],
          answer: 0,
          why: "Hadamard multiplies matching entries and keeps the result per-entry; the dot product sums them into a scalar.",
        },
        {
          q: "Two nonzero vectors have a dot product of 0. What is their angle?",
          options: ["0°", "45°", "90°", "180°"],
          answer: 2,
          why: "Zero dot product means perpendicular — cosine similarity 0, a 90° angle.",
        },
      ],
    },
    {
      id: "math-matrices",
      title: "Math III · Matrices & decompositions",
      short: "math-matrices",
      icon: "🧮",
      minutes: 25,
      summary: "Matrix multiplication, transpose, tensors, eigenvectors, SVD, and PCA.",
      sections: [
        {
          h: "Matrices and tensors",
          p: "A matrix is a 2D grid: rows × columns. `A[i][j]` means row `i`, column `j` — the first index picks the row. A tensor generalises this to any number of dimensions: a grayscale image is 2D, a colour image is 3D (height × width × channels), and a batch of colour images is 4D.",
          code: `import numpy as np

A = np.array([[2, 3], [4, 5]])
print(A[1][0])        # 4  (row 1, col 0)
print(np.zeros((3, 4)).size)   # 12 numbers`,
          exercises: [
            {
              q: "`A = [[2, 3], [4, 5]]`. What is `A[1][0]`?",
              answer: 4,
              solution: "Row 1 is the second row, column 0 is the first value: 4.",
            },
            {
              q: "How many numbers does a `3 × 4` matrix contain?",
              answer: 12,
              solution: "3 rows × 4 columns = 12 entries.",
            },
          ],
        },
        {
          h: "Matrix multiplication and transpose",
          p: "For `A @ B`, the columns of `A` must equal the rows of `B`, and the result is (rows of A) × (columns of B). Unlike ordinary multiplication, order matters. The transpose `Aᵀ` flips rows and columns, so a 2 × 3 matrix becomes 3 × 2. The identity matrix leaves vectors unchanged, like multiplying by 1.",
          code: `A = np.array([[1, 2], [3, 4]])
B = np.array([[1], [0]])
print((A @ B).ravel())   # [1, 3]
print(A.T.shape)         # (2, 2)`,
          exercises: [
            {
              q: "First entry (row 0, col 0) of `[[1, 2], [3, 4]] @ [[1], [0]]`?",
              answer: 1,
              solution: "1·1 + 2·0 = 1. The second entry would be 3·1 + 4·0 = 3.",
            },
            {
              q: "`A` is `2 × 3`. How many rows does `Aᵀ` have?",
              answer: 3,
              solution: "Transpose swaps shape: 2 × 3 becomes 3 × 2, so 3 rows.",
            },
          ],
        },
        {
          h: "Eigenvectors, SVD, and PCA",
          p: "An eigenvector of `A` is a direction that `A` only stretches: `A·v = λ·v`, where the eigenvalue `λ` is the stretch factor. SVD factors any matrix into rotation, scaling, and rotation: `A = U · Σ · Vᵀ`, with singular values on the diagonal of `Σ`. PCA uses the eigenvectors of the covariance matrix to find the directions where the data varies most — useful for compression before a model sees the data.",
          code: `vals, vecs = np.linalg.eig(np.array([[2, 0], [0, 3]]))
print(vals)     # [2. 3.]
# Both coordinate axes are eigenvectors here`,
          exercises: [
            {
              q: "If `A·v = 3v` with `v ≠ 0`, what is the eigenvalue?",
              answer: 3,
              solution: "The eigenvalue is the stretch factor in front of v: λ = 3.",
            },
            {
              q: "A `4 × 2` matrix via SVD has at most how many singular values?",
              answer: 2,
              solution: "Σ has the smaller shape, 4 × 2, so at most min(4, 2) = 2 singular values.",
            },
          ],
        },
      ],
      quiz: [
        {
          q: "`A` is `2 × 3` and `B` is `3 × 4`. What shape is `A @ B`?",
          options: ["3 × 3", "2 × 4", "4 × 2", "Multiplication is invalid"],
          answer: 1,
          why: "Inner dimensions match (3 = 3), so the result takes A's rows and B's columns: 2 × 4.",
        },
        {
          q: "An eigenvector of `A` is a direction that `A`…",
          options: [
            "Rotates by 90°",
            "Only stretches or flips",
            "Deletes entirely",
            "Sorts by size",
          ],
          answer: 1,
          why: "By definition A·v = λ·v — the direction stays the same, only its length changes.",
        },
        {
          q: "What does PCA look for?",
          options: [
            "Directions of maximum variance in the data",
            "The largest label value",
            "Rows with missing values",
            "The slowest features",
          ],
          answer: 0,
          why: "PCA projects data onto the directions that capture the most variance, compressing it with the least loss.",
        },
      ],
    },
    {
      id: "math-calculus",
      title: "Math IV · Derivatives & gradients",
      short: "math-calculus",
      icon: "📈",
      minutes: 24,
      summary: "Slopes, partial derivatives, the gradient, and the chain rule behind training.",
      sections: [
        {
          h: "Derivatives measure change",
          p: "The derivative `f'(x)` is the slope of a function at a point: how much the output changes when the input nudges slightly. For powers, `d/dx xⁿ = n·x^(n−1)`; constants vanish and `d/dx (c·x) = c`. When the derivative is positive, increasing the input increases the output; when it is negative, the reverse.",
          code: `# f(x) = x**2  ->  f'(x) = 2x
x = 3
print(2 * x)        # 6 — slope at x = 3
# d/dx (5x) = 5 everywhere`,
          exercises: [
            {
              q: "What is the derivative of `x²` at `x = 3`?",
              answer: 6,
              solution: "d/dx x² = 2x, so at x = 3 the slope is 6.",
            },
            {
              q: "What is `d/dx (5x)`?",
              answer: 5,
              solution: "The derivative of a constant multiple is the constant: 5.",
            },
          ],
        },
        {
          h: "Partial derivatives and the gradient",
          p: "A function of several inputs has a partial derivative per input: differentiate with respect to one variable while holding the others fixed. Stack those partials into a vector and you get the gradient `∇f`, which points toward the steepest increase. Multiply the gradient by a small step and you can climb or descend the surface.",
          code: `# f(x, y) = x**2 * y
# df/dx = 2xy      df/dy = x**2
print(2 * 2 * 3)     # 12 at (2, 3)
print(2**2)          # 4  at (2, 3)`,
          exercises: [
            {
              q: "`f(x, y) = x²y`. What is `∂f/∂x` at `(2, 3)`?",
              answer: 12,
              solution: "∂f/∂x = 2xy = 2 · 2 · 3 = 12.",
            },
            {
              q: "`f(x, y) = x²y`. What is `∂f/∂y` at `(2, 3)`?",
              answer: 4,
              solution: "∂f/∂y = x² = 4.",
            },
          ],
        },
        {
          h: "The chain rule and training steps",
          p: "The chain rule differentiates composed functions by multiplying the outer derivative by the inner one: `d/dx f(g(x)) = f'(g(x)) · g'(x)`. Backpropagation is the chain rule applied layer by layer. Gradient descent then updates a weight as `w ← w − lr · ∂L/∂w` — step opposite the gradient to reduce loss.",
          code: `# f(x) = (3x)**2  ->  f'(x) = 18x
print(18 * 1)        # 18 at x = 1

w, grad, lr = 2.0, 4.0, 0.1
print(w - lr * grad) # 1.6`,
          exercises: [
            {
              q: "`f(x) = (3x)²`. What is `f'(1)`?",
              answer: 18,
              solution: "f(x) = 9x², so f'(x) = 18x and f'(1) = 18.",
            },
            {
              q: "`w = 2`, gradient `= 4`, learning rate `= 0.1`. What is the new `w`?",
              answer: 1.6,
              solution: "w ← 2 − 0.1·4 = 1.6.",
            },
          ],
        },
      ],
      quiz: [
        {
          q: "To minimise a loss, you update weights…",
          options: [
            "In the gradient's direction",
            "Opposite the gradient",
            "Randomly",
            "By doubling them each step",
          ],
          answer: 1,
          why: "The gradient points uphill for the loss, so you take steps against it.",
        },
        {
          q: "What does the chain rule let you do?",
          options: [
            "Differentiate composed functions",
            "Multiply matrices faster",
            "Sort a dataset",
            "Compute a median",
          ],
          answer: 0,
          why: "It multiplies outer and inner derivatives, which is exactly how backpropagation works through layers.",
        },
        {
          q: "A learning rate that is far too high causes…",
          options: [
            "Slow but steady progress",
            "The loss to oscillate or diverge",
            "The model to memorise less",
            "Gradients to disappear instantly",
          ],
          answer: 1,
          why: "Oversized steps keep jumping past the minimum, so the loss bounces or blows up.",
        },
      ],
    },
    {
      id: "math-stats",
      title: "Math V · Statistics & probability",
      short: "math-stats",
      icon: "🎲",
      minutes: 24,
      summary: "Mean, median, variance, covariance, probability rules, distributions, and Bayes.",
      sections: [
        {
          h: "Mean, median, and mode",
          p: "The mean is the sum divided by the count; the median is the middle value once sorted; the mode is the most frequent value. The mean uses every value, so outliers drag it; the median only looks at position, so it is robust. Report both when your data might be skewed.",
          code: `import statistics as st

xs = [2, 4, 6, 8]
print(st.mean(xs))       # 5
print(st.median([3, 1, 4, 2, 5]))   # 3`,
          exercises: [
            {
              q: "What is the mean of `[2, 4, 6, 8]`?",
              answer: 5,
              solution: "Sum 20 ÷ 4 values = 5.",
            },
            {
              q: "What is the median of `[3, 1, 4, 2, 5]`?",
              answer: 3,
              solution: "Sorted: 1, 2, 3, 4, 5. The middle value is 3.",
            },
          ],
        },
        {
          h: "Variance, standard deviation, and covariance",
          p: "Variance averages the squared distance from the mean, and standard deviation is its square root (back in the original units). Squaring means large deviations count disproportionately. Covariance does the same for two variables together: positive means they rise together, negative means they move in opposite directions.",
          code: `import numpy as np

xs = np.array([2, 4, 6])          # population
print(xs.var())                    # 2.6667
print(xs.std())                    # 1.633`,
          exercises: [
            {
              q: "Population variance of `[2, 4, 6]`?",
              answer: 2.6667,
              tol: 0.01,
              solution: "Mean 4. Squared gaps: 4, 0, 4. Average = 8/3 ≈ 2.667.",
            },
            {
              q: "Standard deviation of `[2, 4, 6]`?",
              answer: 1.633,
              tol: 0.01,
              solution: "√(8/3) ≈ 1.633.",
            },
          ],
        },
        {
          h: "Probability rules, distributions, and Bayes",
          p: "Probabilities lie between 0 and 1, and complementary events sum to 1: `P(not A) = 1 − P(A)`. Independent events multiply. A distribution describes how probability is spread over outcomes — the normal distribution puts about 68% of its mass within one standard deviation of the mean. Bayes' theorem updates a belief with evidence: `P(A|B) = P(B|A)·P(A) / P(B)`.",
          code: `# Bayes: P(A)=0.5, P(B|A)=0.8, P(B)=0.4
print(0.8 * 0.5 / 0.4)   # 1.0
# Normal: ~68% within 1 sigma, ~95% within 2`,
          exercises: [
            {
              q: "`P(A) = 0.6`. What is `P(not A)`?",
              answer: 0.4,
              solution: "Complements sum to 1: 1 − 0.6 = 0.4.",
            },
            {
              q: "`P(A) = 0.5`, `P(B|A) = 0.8`, `P(B) = 0.4`. What is `P(A|B)`?",
              answer: 1,
              tol: 0.001,
              solution: "P(A|B) = 0.8 · 0.5 / 0.4 = 0.4 / 0.4 = 1.",
            },
          ],
        },
      ],
      quiz: [
        {
          q: "Which statistic is most robust to a single extreme outlier?",
          options: ["Mean", "Median", "Sum", "Range"],
          answer: 1,
          why: "The median depends on position, not magnitude, so one huge value barely moves it.",
        },
        {
          q: "Which formula is Bayes' theorem?",
          options: [
            "P(A|B) = P(B|A)·P(A) / P(B)",
            "P(A|B) = P(A) + P(B)",
            "P(A|B) = P(A)·P(B)",
            "P(A|B) = P(B) / P(A)",
          ],
          answer: 0,
          why: "It rescales the likelihood P(B|A) by the prior P(A) and normalises by P(B).",
        },
        {
          q: "In a normal distribution, roughly what share of values lie within one standard deviation of the mean?",
          options: ["34%", "50%", "68%", "95%"],
          answer: 2,
          why: "About 68% within 1σ, about 95% within 2σ.",
        },
      ],
    },
    {
      id: "math-info",
      title: "Math VI · Information theory",
      short: "math-info",
      icon: "📡",
      minutes: 20,
      summary: "Entropy, cross-entropy, and KL divergence — the language of classification loss.",
      sections: [
        {
          h: "Entropy measures uncertainty",
          p: "Entropy is the expected information of a distribution: `H(p) = −Σ pᵢ · log₂ pᵢ`, measured in bits. A fair coin has 1 bit of entropy; a coin that always lands heads has 0. Entropy is largest when all outcomes are equally likely, which matches intuition: uncertainty is highest when anything could happen.",
          code: `import numpy as np

def entropy(p):
    p = np.asarray(p, dtype=float)
    return -np.sum(p * np.log2(p))

print(entropy([0.5, 0.5]))   # 1.0
print(entropy([1, 0]))       # 0.0`,
          exercises: [
            {
              q: "Entropy in bits of a fair coin?",
              answer: 1,
              solution: "H = −(0.5·log₂0.5 + 0.5·log₂0.5) = 1 bit.",
            },
            {
              q: "Entropy in bits of a uniform distribution over 8 outcomes?",
              answer: 3,
              solution: "Each outcome has probability 1/8 and contributes (1/8)·3 bits; ×8 = 3 bits.",
            },
          ],
        },
        {
          h: "Cross-entropy scores predictions",
          p: "Cross-entropy compares the true distribution `p` with the model's predicted distribution `q`: `H(p, q) = −Σ pᵢ · log₂ qᵢ`. It only cares about the probability the model gave to the true class, and it punishes confident wrong answers severely, because `−log q` explodes as `q → 0`. This is the standard loss for classification.",
          code: `# True class index 0, model says 0.9 for it
print(-np.log2(0.9))     # 0.152
# Model says 0.1 for the true class:
print(-np.log2(0.1))     # 3.322`,
          exercises: [
            {
              q: "`p = [1, 0]`, `q = [0.9, 0.1]`. Cross-entropy in bits?",
              answer: 0.152,
              tol: 0.005,
              solution: "Only the true class counts: −log₂ 0.9 ≈ 0.152 bits.",
            },
            {
              q: "Cross-entropy in bits when the model gives the true class probability `0.5`?",
              answer: 1,
              solution: "−log₂ 0.5 = 1 bit.",
            },
          ],
        },
        {
          h: "KL divergence measures wasted bits",
          p: "KL divergence is the extra cost of using `q` instead of the true `p`: `KL(p‖q) = Σ pᵢ · log₂(pᵢ / qᵢ)`. It is never negative and is zero only when the distributions match exactly. Cross-entropy decomposes cleanly: `H(p, q) = H(p) + KL(p‖q)`, which is why minimising cross-entropy also minimises KL when the data distribution is fixed.",
          code: `def kl(p, q):
    p = np.asarray(p, float)
    q = np.asarray(q, float)
    return np.sum(p * np.log2(p / q))

print(kl([0.5, 0.5], [0.5, 0.5]))   # 0.0`,
          exercises: [
            {
              q: "`KL(p‖q)` when `p = q`?",
              answer: 0,
              solution: "Every log ratio is log(1) = 0, so KL = 0 — perfect match.",
            },
            {
              q: "`H(p) = 1`, `KL(p‖q) = 0.5`. What is the cross-entropy `H(p, q)`?",
              answer: 1.5,
              solution: "CE = H + KL = 1 + 0.5 = 1.5 bits.",
            },
          ],
        },
      ],
      quiz: [
        {
          q: "When is entropy of a distribution highest?",
          options: [
            "When one outcome has probability 1",
            "When all outcomes are equally likely",
            "When the mean is zero",
            "When there are exactly two outcomes",
          ],
          answer: 1,
          why: "Uniform distributions spread probability evenly, so uncertainty — and entropy — is maximal.",
        },
        {
          q: "Why does cross-entropy punish a confident wrong prediction so strongly?",
          options: [
            "Because −log q grows without bound as q approaches 0",
            "Because it squares the error",
            "Because it uses the median",
            "Because it clips probabilities at 0.5",
          ],
          answer: 0,
          why: "Assigning a tiny probability to the true class makes −log q very large, so the loss explodes.",
        },
        {
          q: "Which statement about KL divergence is true?",
          options: [
            "It can be negative",
            "It is zero only when the distributions are identical",
            "It ignores the true distribution",
            "It measures variance",
          ],
          answer: 1,
          why: "KL ≥ 0 by Gibbs' inequality, and equality holds exactly when p = q.",
        },
      ],
    },
    {
      id: "data",
      title: "Data before models",
      short: "data",
      icon: "🗃️",
      minutes: 20,
      summary: "Most ML work is data work: tables, cleaning, and honest splits.",
      sections: [
        {
          h: "A dataset is a table",
          p: "Rows are examples, columns are features, and usually one column is the label you want to predict. Before writing any model code, look at the table: `head()` shows real values, `describe()` shows ranges and missing counts.",
          code: `import pandas as pd

df = pd.read_csv("titanic.csv")
print(df.head())
print(df.describe())      # count, mean, min, max per column
print(df.isna().sum())    # missing per column`,
        },
        {
          h: "Clean before you train",
          p: "Models can't learn from `NaN` or text pretending to be numbers. Decide per column: drop rows that are mostly empty, fill numeric gaps with the median (not the mean, which outliers drag), and encode categories with `get_dummies` one-hot columns.",
          code: `df["age"] = df["age"].fillna(df["age"].median())
df = df.dropna(subset=["fare"])
df = pd.get_dummies(df, columns=["embarked"], dtype=int)`,
        },
        {
          h: "Split first, then look",
          p: "A test set is your only honest estimate of future performance. Lock it away before you explore, filter, or scale anything — any statistic computed on the full table leaks information from the test set into training. Fit preprocessing on the training split only.",
          code: `from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)`,
        },
      ],
      quiz: [
        {
          q: "Why hold out a test set at all?",
          options: [
            "It speeds up training",
            "It estimates performance on data the model never saw",
            "It removes missing values",
            "It is required by pandas",
          ],
          answer: 1,
          why: "Training accuracy is optimistic. Only unseen data tells you how the model will behave in real use.",
        },
        {
          q: "You scale features using the mean of the *whole* dataset, then split. What is the problem?",
          options: [
            "Nothing — scaling is always safe",
            "Data leakage: test-set statistics influenced training",
            "Scaling deletes rows",
            "The model will not converge",
          ],
          answer: 1,
          why: "The scaler saw test data before evaluation. Fit preprocessing on the training split, then transform the test split.",
        },
        {
          q: "In a table, one row usually represents…",
          options: [
            "One feature",
            "One example (e.g. one person or one event)",
            "One model parameter",
            "One training epoch",
          ],
          answer: 1,
          why: "Rows are examples; columns are features (plus the label column).",
        },
      ],
    },
    {
      id: "how-models-learn",
      title: "How models learn",
      short: "learning",
      icon: "📈",
      minutes: 24,
      summary: "Features, labels, loss, and gradient descent — the loop behind every model.",
      sections: [
        {
          h: "A model is a function with knobs",
          p: "Supervised learning gives the model inputs `X` and the right answers `y`. The model is a function with parameters: predictions = f(X; w). Learning means finding the `w` that makes predictions match `y` as closely as possible.",
          code: `from sklearn.linear_model import LinearRegression

model = LinearRegression()
model.fit(X_train, y_train)          # find the parameters
preds = model.predict(X_test)        # use them`,
        },
        {
          h: "Loss scores the guess",
          p: "The loss turns predictions into one number that says how wrong you are. For regression, mean squared error is standard: square each error (so signs don't cancel, and big misses count more), then average.",
          code: `errors = preds - y_test
mse = (errors ** 2).mean()
print(mse)`,
        },
        {
          h: "Gradient descent improves the knobs",
          p: "Training repeats four moves: predict, measure loss, compute gradients (which direction each parameter should move), and nudge the parameters. Repeat until the loss stops improving. Early stopping — quitting when held-out loss stops dropping — is your first defence against overfitting.",
          code: `for epoch in range(200):
    preds = f(X_train, w)
    loss = mse(preds, y_train)
    grads = gradient(loss, w)
    w = w - lr * grads`,
        },
      ],
      quiz: [
        {
          q: "What does the loss measure?",
          options: [
            "How long training takes",
            "How wrong the model's predictions are",
            "How many features you have",
            "How large the dataset is",
          ],
          answer: 1,
          why: "Loss compresses prediction error into one number; training's whole job is to reduce it.",
        },
        {
          q: "Your loss jumps up and down and never settles. What is the most likely cause?",
          options: [
            "The learning rate is too high",
            "The dataset is too clean",
            "The test set is too large",
            "You have too few epochs to notice",
          ],
          answer: 0,
          why: "Big steps overshoot the minimum repeatedly. Lower the learning rate and watch the loss curve settle.",
        },
        {
          q: "Overfitting means the model…",
          options: [
            "Fits training data well but generalises poorly",
            "Fails on the training data",
            "Has too few parameters",
            "Trains too slowly",
          ],
          answer: 0,
          why: "It memorises training noise instead of the pattern, so held-out performance drops.",
        },
      ],
    },
    {
      id: "classification",
      title: "From prediction to decisions",
      short: "classify",
      icon: "🎯",
      minutes: 22,
      summary: "Spam or not spam: linear models, probabilities, and thresholds.",
      sections: [
        {
          h: "Classification predicts categories",
          p: "Regression predicts a number; classification predicts a class — fraud/not fraud, cat/dog/ship. Many classifiers actually output a probability, then a threshold (usually 0.5) turns it into a decision. You can move that threshold when mistakes on one side cost more.",
          code: `from sklearn.linear_model import LogisticRegression

clf = LogisticRegression(max_iter=1000)
clf.fit(X_train, y_train)

print(clf.predict(X_test[:3]))        # labels
print(clf.predict_proba(X_test[:3]))  # [P(class 0), P(class 1)]`,
        },
        {
          h: "A decision boundary divides the space",
          p: "A linear classifier draws a line (or plane) through feature space. Points on one side get one label. Real datasets often need curved boundaries — that is what feature engineering and, later, neural networks buy you.",
        },
        {
          h: "Preprocessing belongs inside the pipeline",
          p: "Scaling, encoding, and imputing must be learned on training data and reapplied to test data identically. `Pipeline` wires this together so the same transformation is used at training and at prediction time.",
          code: `from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

model = make_pipeline(StandardScaler(), LogisticRegression())
model.fit(X_train, y_train)
print(model.score(X_test, y_test))`,
        },
      ],
      quiz: [
        {
          q: "You want to predict a house price. Which task type is that?",
          options: [
            "Classification — prices form categories",
            "Regression — the output is a continuous number",
            "Clustering — there are no labels to predict",
            "Neither; prices are not data",
          ],
          answer: 1,
          why: "A price can take any numeric value, so it is regression. Classification predicts discrete classes.",
        },
        {
          q: "What does `predict_proba` give you that `predict` does not?",
          options: [
            "The probability of each class",
            "The training accuracy",
            "The feature importances",
            "A faster prediction",
          ],
          answer: 0,
          why: "`predict_proba` returns confidence per class; `predict` just applies a threshold to it.",
        },
        {
          q: "For cancer screening you would lower the threshold below 0.5 because…",
          options: [
            "It makes the model faster",
            "Missing a positive case is worse than a false alarm",
            "It increases accuracy on balanced data",
            "Higher thresholds cause overfitting",
          ],
          answer: 1,
          why: "Lower thresholds flag more cases — more recall, fewer missed positives — at the cost of more false alarms.",
        },
      ],
    },
    {
      id: "evaluation",
      title: "Measure before you trust",
      short: "evaluate",
      icon: "🧪",
      minutes: 20,
      summary: "Accuracy lies on imbalanced data. Precision, recall, and cross-validation don't.",
      sections: [
        {
          h: "Accuracy hides imbalance",
          p: "If 5% of transactions are fraud, a model that always says 'not fraud' scores 95% accuracy and catches nothing. Always check the class balance first, then pick metrics that describe the errors you actually care about.",
          code: `df["fraud"].value_counts(normalize=True)
# False    0.95
# True     0.05   -> accuracy is a trap`,
        },
        {
          h: "Precision and recall describe the two failure modes",
          p: "Precision: of everything you flagged, how many were right? Recall: of everything that was true, how many did you catch? Raising the threshold usually raises precision and lowers recall; lowering it does the reverse. The F1 score balances both.",
          code: `from sklearn.metrics import classification_report

print(classification_report(y_test, preds))
#              precision    recall  f1-score
# positive         0.81      0.64      0.71`,
        },
        {
          h: "Cross-validation beats one lucky split",
          p: "A single train/test split can flatter or punish a model by chance. K-fold cross-validation trains k times on different slices and averages the score, which is a much steadier estimate — especially on small datasets.",
          code: `from sklearn.model_selection import cross_val_score

scores = cross_val_score(model, X, y, cv=5, scoring="f1")
print(scores.mean(), scores.std())`,
        },
      ],
      quiz: [
        {
          q: "95% of emails are normal, 5% are spam. Your model always says 'normal'. What is its accuracy and its recall on spam?",
          options: [
            "95% accuracy, 0% spam recall",
            "50% accuracy, 50% spam recall",
            "5% accuracy, 95% spam recall",
            "100% accuracy, 100% spam recall",
          ],
          answer: 0,
          why: "It is right on the 95% majority and wrong on every spam — perfect for accuracy, useless for detection.",
        },
        {
          q: "Precision answers which question?",
          options: [
            "Of the true cases, how many did we catch?",
            "Of the cases we flagged, how many were correct?",
            "How fast is the model?",
            "How many features does it use?",
          ],
          answer: 1,
          why: "Precision = true positives / all flagged positives. Recall = true positives / all actual positives.",
        },
        {
          q: "Why use 5-fold cross-validation?",
          options: [
            "It trains five models simultaneously",
            "It averages performance over five splits for a steadier estimate",
            "It guarantees 100% accuracy",
            "It removes the need for a test set",
          ],
          answer: 1,
          why: "Averaging over folds reduces the luck of one split. Keep a final untouched test set for the last honest check.",
        },
      ],
    },
    {
      id: "neural-nets",
      title: "Neural networks without the fog",
      short: "neural",
      icon: "🕸️",
      minutes: 25,
      summary: "A neuron is a weighted sum with a twist; training is still just gradients.",
      sections: [
        {
          h: "One neuron: weighted sum, then activation",
          p: "A neuron computes a dot product of its inputs with weights, adds a bias, then passes the result through a nonlinear activation like ReLU. Without nonlinearity, stacked layers collapse into one big linear function — activations are what let networks learn curves.",
          code: `import torch

x = torch.tensor([1.0, 2.0])
w = torch.tensor([0.5, -0.5])
b = 0.1

z = x @ w + b          # 1*0.5 + 2*(-0.5) + 0.1 = -0.4
h = torch.relu(z)      # max(0, z) -> 0.0`,
        },
        {
          h: "Layers stack simple units",
          p: "Feed the output of one layer into the next and early layers learn simple features (edges, word patterns) while later layers combine them. Two or three hidden layers already handle most tabular problems; deep networks earn their keep on images, audio, and text.",
          code: `model = torch.nn.Sequential(
    torch.nn.Linear(10, 32),
    torch.nn.ReLU(),
    torch.nn.Linear(32, 32),
    torch.nn.ReLU(),
    torch.nn.Linear(32, 1),
)`,
        },
        {
          h: "Training is four moves, repeated",
          p: "Forward pass to predict, loss to score, `backward()` to compute every gradient automatically, optimizer step to update weights. That loop is the whole of deep learning; the art is in data, architecture, and hyperparameters.",
          code: `opt = torch.optim.Adam(model.parameters(), lr=1e-3)

for xb, yb in dataloader:
    opt.zero_grad()
    pred = model(xb)
    loss = torch.nn.functional.mse_loss(pred, yb)
    loss.backward()     # gradients for every weight
    opt.step()          # apply them`,
        },
      ],
      quiz: [
        {
          q: "Why does a network need a nonlinear activation like ReLU?",
          options: [
            "To make training faster",
            "Without it, stacked layers collapse into one linear function",
            "To normalise the inputs",
            "To prevent overfitting completely",
          ],
          answer: 1,
          why: "Linear functions compose into linear functions. Nonlinearity is what lets the network model curved boundaries.",
        },
        {
          q: "What does `loss.backward()` compute?",
          options: [
            "The next batch of data",
            "The gradient of the loss for every parameter",
            "The final accuracy",
            "A new learning rate",
          ],
          answer: 1,
          why: "Backpropagation applies the chain rule to fill each parameter's `.grad` with the direction that increases loss.",
        },
        {
          q: "What does `optimizer.step()` do?",
          options: [
            "Draws a sample of data",
            "Updates the weights using the gradients",
            "Resets the model",
            "Evaluates on the test set",
          ],
          answer: 1,
          why: "It applies the update rule (e.g. Adam) to nudge each weight against its gradient.",
        },
      ],
    },
    {
      id: "vision-language",
      title: "Vision & language models",
      short: "vision+nlp",
      icon: "👁️",
      minutes: 24,
      summary: "Convolutions find image patterns; embeddings and attention give words context.",
      sections: [
        {
          h: "Convolutions slide a pattern detector across an image",
          p: "A convolution reuses one small filter over every position, so the same edge detector works top-left or bottom-right. That weight sharing makes CNNs far more parameter-efficient than fully connected layers on pixels, and it is why they dominated vision for a decade.",
          code: `layer = torch.nn.Conv2d(
    in_channels=3, out_channels=16,
    kernel_size=3, padding=1,
)
out = layer(torch.rand(8, 3, 64, 64))   # 8 images, 64x64
print(out.shape)                        # (8, 16, 64, 64)`,
        },
        {
          h: "Words become vectors",
          p: "Embeddings map each token to a dense vector where similar meanings sit close together. That geometry is learnable arithmetic: 'king' minus 'man' plus 'woman' lands near 'queen'. Every modern language model starts with an embedding lookup.",
          code: `emb = torch.nn.Embedding(num_embeddings=10000, embedding_dim=64)
ids = torch.tensor([12, 87, 45])
vecs = emb(ids)
print(vecs.shape)     # (3, 64)`,
        },
        {
          h: "Attention weighs what matters",
          p: "In a transformer, every token looks at every other token and decides how much to listen to each one. Attention is computed as queries against keys to produce weights over values. This is how a model resolves 'it' in 'the cat sat on the mat because it was tired'.",
        },
      ],
      quiz: [
        {
          q: "Why do CNNs share the same filter across all image positions?",
          options: [
            "It makes images smaller",
            "One pattern detector works anywhere in the image, with far fewer parameters",
            "It removes the need for activation functions",
            "It only works on grayscale images",
          ],
          answer: 1,
          why: "Weight sharing gives translation tolerance and cuts parameter count dramatically.",
        },
        {
          q: "If two word embeddings are close in vector space, it usually means…",
          options: [
            "The words share similar meaning or usage",
            "The words have the same length",
            "The words appear the same number of times",
            "Nothing — embeddings are random",
          ],
          answer: 0,
          why: "Training places tokens with similar contexts near each other; distance becomes a rough similarity measure.",
        },
        {
          q: "Attention exists so the model can…",
          options: [
            "Store every input verbatim",
            "Weigh which other tokens matter for each token",
            "Skip embedding entirely",
            "Compress the image to one pixel",
          ],
          answer: 1,
          why: "Attention computes relevance weights between tokens, giving each word a context-aware representation.",
        },
      ],
    },
    {
      id: "llm-agents",
      title: "LLMs, RAG, and agents",
      short: "llm",
      icon: "🤖",
      minutes: 24,
      summary: "Prompting, retrieval, and tool loops — how a model becomes a usable product.",
      sections: [
        {
          h: "Prompts are programs",
          p: "A prompt is an interface: state the task, give an example or two, and specify the output format. Asking for structured output (a JSON object with named fields) turns a chat model into a function you can call from code. Temperature trades determinism for variety.",
          code: `messages = [
    {"role": "system", "content": "Classify the topic. Reply with JSON: {\\"topic\\": str}"},
    {"role": "user", "content": "How does gradient descent work?"},
]
# -> {"topic": "machine learning"}`,
        },
        {
          h: "RAG grounds answers in your data",
          p: "Retrieval-augmented generation embeds your documents, stores the vectors, and at question time retrieves the most similar chunks to put in the prompt. The model answers from supplied context instead of memory, which cuts hallucination and makes citations possible.",
          code: `chunks = split(notes)          # your documents
index = embed_and_store(chunks)

hits = search(index, question, k=4)
answer = llm(context=hits, question=question)`,
        },
        {
          h: "Agents use tools in a loop",
          p: "An agent is a model with tools and a loop: decide an action, call the tool, observe the result, repeat until the task is done. Typical tools are search, code execution, and file access. Log every step and keep permissions tight — an agent is only as safe as the tools you give it.",
        },
      ],
      quiz: [
        {
          q: "What does RAG add to a plain LLM call?",
          options: [
            "Faster inference",
            "Retrieved context from your own documents",
            "A larger max token limit",
            "Automatic fine-tuning",
          ],
          answer: 1,
          why: "RAG supplies relevant chunks at question time, grounding answers in your data without retraining.",
        },
        {
          q: "Which is the best first defence against hallucinated answers?",
          options: [
            "Raise the temperature",
            "Ground answers in retrieved sources and allow 'I don't know'",
            "Ask the model twice and average",
            "Use a longer prompt only",
          ],
          answer: 1,
          why: "Grounding plus an explicit escape hatch makes unverifiable claims less likely and easier to spot.",
        },
        {
          q: "An agent loop consists of…",
          options: [
            "Embed, store, retrieve",
            "Plan an action, call a tool, observe the result, repeat",
            "Train, evaluate, deploy once",
            "Tokenise, embed, softmax once",
          ],
          answer: 1,
          why: "The loop repeats tool calls until the task completes or a stopping rule fires.",
        },
      ],
    },
  ],
  project: {
    title: "Ship a tiny AI service",
    brief:
      "Pick a text task you actually care about — classify your study notes by topic, detect spam messages, or route lesson questions into the right Learn tab. Build the smallest honest version: a labelled dataset, a trained model, a real metric, and a script you can call with new text.",
    hint:
      "Start with 50+ labelled examples, split them properly, and report precision and recall — not just accuracy. A logistic regression with a TF-IDF vectorizer is a legitimate first model; PyTorch can come after it works.",
    doneNote:
      "You built the loop: data, model, metric, service. Repeat it on a problem you actually have.",
    checklist: [
      "Built a labelled dataset of at least 50 examples",
      "Trained a model and reported precision, recall, and where it fails",
      "Wrapped it in a script or service you can call with new text",
    ],
  },
  resources: [
    {
      label: "freeCodeCamp · All the Math You Need in AI",
      href: "https://www.freecodecamp.org/news/all-the-math-you-need-in-artificial-intelligence/",
    },
    {
      label: "krishnaik06 · Complete RoadMap To Learn AI",
      href: "https://github.com/krishnaik06/Complete-RoadMap-To-Learn-AI",
    },
    {
      label: "aadi1011 · AI-ML Roadmap from Scratch",
      href: "https://github.com/aadi1011/AI-ML-Roadmap-from-scratch",
    },
    {
      label: "Daniel Bourke · PyTorch for Deep Learning",
      href: "https://github.com/mrdbourke/pytorch-deep-learning",
    },
  ],
};
