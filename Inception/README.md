

# 🧠 React Inception: The Fundamentals Every Developer Must Know

---

## 🔹 1. **Library vs Framework**

### ✅ Key Difference:

* A **library** offers **tools you call** to perform tasks.
* A **framework** provides a **structure that calls your code** to fit into its system.

| Feature     | Library                     | Framework                                      |
| ----------- | --------------------------- | ---------------------------------------------- |
| Control     | You are in control          | Framework is in control (Inversion of Control) |
| Flexibility | More flexible, use anywhere | Opinionated, defines architecture              |
| Example     | React                       | Angular                                        |

### 🎯 Interview Insight:

> **Q:** Why is React a library and not a framework?
> **A:** Because it focuses only on the view layer (UI) and allows the developer to decide how to structure the rest of the application.

---

## 🔹 2. **What is Emmet?**

### ✅ Emmet:

A **plugin** that provides **abbreviations for HTML and CSS**, making code writing super fast.

### ✨ Example:

Typing:

```
div>ul>li*3
```

Generates:

```html
<div>
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
```

### 🎯 Interview Insight:

> **Q:** What does Emmet do in VS Code?
> **A:** It auto-expands abbreviations into full HTML/CSS snippets.

---

## 🔹 3. **What is a CDN and Why Use It?**

### ✅ CDN (Content Delivery Network):

A **distributed network of servers** that deliver content (like JS, CSS, images) **faster** by serving it from the server closest to the user.

### 💡 Why Use It?

* Reduces load time
* Increases performance
* Handles traffic efficiently

### 📌 Example:

```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
```

### 🎯 Interview Insight:

> **Q:** Why do we use CDN for React?
> **A:** To include React in a project quickly without installing via npm, ideal for testing or playgrounds.

---

## 🔹 4. **Why is React Called React?**

### ✅ Origin of the Name:

React was built by Facebook to create **reactive UIs** that **react** to changes in state/data efficiently.

* The core idea is **"reactivity"** – UIs automatically update when data changes.

---

## 🔹 5. **What is crossorigin in a Script Tag?**

### ✅ crossorigin:

The `crossorigin` attribute handles **CORS (Cross-Origin Resource Sharing)** when loading scripts from a different domain.

### 📌 Example:

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
```

### 💡 Used for:

* Allowing error tracking (e.g., Sentry)
* Enabling fetch of the file without security blocks

---

## 🔹 6. **Creating Elements: HTML vs JS vs React**

### ✅ HTML Version:

```html
<div id="parent">
  <div id="child">
    <h1>Namste everyOne !! this is the h1 tag</h1>
  </div>
</div>
```

---

### ✅ JavaScript Version (DOM API):

```js
const h1 = document.createElement("h1");
h1.innerText = "Namste everyOne !! this is the h1 tag";

const child = document.createElement("div");
child.setAttribute("id", "child");
child.appendChild(h1);

const parent = document.createElement("div");
parent.setAttribute("id", "parent");
parent.appendChild(child);

document.body.appendChild(parent);
```

---

### ✅ React Version:

```js
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Namste everyOne !! this is the h1 tag"),
    React.createElement("h2", {}, "Namste everyOne !! this is the h2 tag"),
  ])
);
```

### 📌 Explanation:

* `React.createElement()` takes 3 args:

  1. Tag name (like `"div"`)
  2. Props (like `{ id: "parent" }`)
  3. Children (text, element, or array of elements)

### 🧠 Behind-the-Scenes:

* `React.createElement()` returns a **JS object** representing the virtual DOM.
* `ReactDOM.render()` compares it with previous VDOM, then updates the real DOM via **reconciliation**.

---

## 🔹 7. **What Happens If Root Already Has Content?**

### ✅ React DOM Behavior:

If there's already content inside the root div, React **will overwrite it** during `.render()`.

### Example:

If HTML already has:

```html
<div id="root"><h1>Old Content</h1></div>
```

After render:

```js
root.render(<h2>New Content</h2>);
```

✅ Output:

```html
<div id="root"><h2>New Content</h2></div>
```

---

## 🔹 8. **React vs ReactDOM**

| React                                         | ReactDOM                       |
| --------------------------------------------- | ------------------------------ |
| Core library for creating components and VDOM | Handles rendering into the DOM |
| `React.createElement()`                       | `ReactDOM.render()`            |
| Used for logic/UI                             | Used to link UI to the browser |

### 🎯 Interview Insight:

> **Q:** Can React work without ReactDOM?
> **A:** Not for web apps. React needs ReactDOM to render into the browser's DOM.

---

## 🔹 9. **react.development.js vs react.production.js**

| File                   | Use Case               | Features                       |
| ---------------------- | ---------------------- | ------------------------------ |
| `react.development.js` | Development            | Warnings, error messages       |
| `react.production.js`  | Final Production Build | Optimized, no warnings, faster |

---

## 🔹 10. **What is `async` and `defer` in Script Tags?**

### ✅ async:

* Loads script **asynchronously** while parsing HTML.
* **Executes as soon as it loads.**

### ✅ defer:

* Loads script **asynchronously**, but
* **Executes only after HTML parsing completes.**

### 📌 Example:

```html
<script async src="file.js"></script>
<script defer src="file.js"></script>
```

| Attribute | Loading  | Execution          |
| --------- | -------- | ------------------ |
| `async`   | Parallel | When ready         |
| `defer`   | Parallel | After HTML parsing |

### 🎯 When to use defer?

* For non-blocking React apps, use `defer` to prevent render delays.

---

## 📝 Summary & Key Takeaways

| Concept              | Key Point                                                             |
| -------------------- | --------------------------------------------------------------------- |
| Library vs Framework | React is a library (flexible, focused on UI)                          |
| Emmet                | HTML/CSS shorthand for fast coding                                    |
| CDN                  | Faster script loading via global servers                              |
| React Name           | Derived from reactive UI behavior                                     |
| crossorigin          | Used to control CORS policy for script                                |
| HTML vs JS vs React  | React uses `createElement()` to generate VDOM                         |
| ReactDOM             | Renders React elements to the DOM                                     |
| Script Loading       | `async` = load & run when ready; `defer` = wait till parsing finishes |
| Dev vs Prod Builds   | Dev = helpful errors, Prod = optimized                                |

---

## ✍️ Practice Exercise

1. Convert this HTML to React using `React.createElement()`:

```html
<div>
  <h1>Hello</h1>
  <p>This is a paragraph</p>
</div>
```

2. Create your own CDN-based HTML file that loads a React app using:

   * `react.development.js`
   * `ReactDOM.createRoot()`

---

## 🎯 Interview Questions Recap

1. What's the difference between a library and a framework?
2. Why is React not a framework?
3. What is Emmet and how does it help in coding?
4. Why is React loaded using a CDN in playgrounds?
5. What does the `crossorigin` attribute do?
6. Explain the difference between `React` and `ReactDOM`.
7. What are `async` and `defer`? Which one is better for React?
8. What’s the difference between development and production builds of React?

---
