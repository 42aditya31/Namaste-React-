

## 🔹 1. Difference between `props` and `state`

| Feature              | `props`                                                                                  | `state`                                                            |
| -------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| **Definition**       | Props (short for "properties") are used to pass data from a parent to a child component. | State is a local data storage managed within a component.          |
| **Mutable?**         | ❌ Immutable – cannot be changed by the child component                                   | ✅ Mutable – can be updated with `useState()` or `this.setState()`  |
| **Managed by**       | Parent Component                                                                         | Component itself                                                   |
| **Used for**         | Passing static or dynamic values between components                                      | Storing dynamic data that can change over time                     |
| **Accessible in**    | Both class and functional components via `this.props` or function parameters             | Both class (`this.state`) and functional (`useState()`) components |
| **Example use-case** | Passing a user name, theme color, or function                                            | Tracking form input, counters, fetched API data                    |

### 🔧 Real-world Analogy:

* **Props** are like **parameters** you pass into a function or configuration for a machine.
* **State** is like the **internal memory** of that machine that can change as it operates.

### 🔍 Example:

```jsx
function Greet(props) {
  return <h1>Hello, {props.name}</h1>; // Using props
}
```

```jsx
function Counter() {
  const [count, setCount] = useState(0); // Using state
  return <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>;
}
```

---

## 🔹 2. What is Props Drilling?

**Props Drilling** refers to the process where you pass data through multiple layers of components, even if some intermediate components don’t need that data — just to get it to a deeply nested child.

### 🔧 Example:

```jsx
<Grandparent>
  <Parent>
    <Child data="I need this" />
  </Parent>
</Grandparent>
```

Here, `Grandparent` has to pass `data` down to `Child`, even if `Parent` doesn’t use it. That’s **props drilling**.

### 🔥 Why it’s a problem:

* Tedious and repetitive
* Harder to maintain and debug
* Breaks modularity

---

## 🔹 3. What is “Lifting State Up”?

“**Lifting state up**” means moving the shared state to the **closest common ancestor component** when **two or more child components** need to access or update the same data.

### 🧠 Why?

Because React data flows **only downward** (from parent to child). If siblings need to **share and update** data, the state must be in a parent that they both share.

### 🔧 Example:

```jsx
function Parent() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <InputBox value={inputValue} onChange={setInputValue} />
      <PreviewBox value={inputValue} />
    </>
  );
}
```

Here, both `InputBox` and `PreviewBox` share the `inputValue`, which lives in the parent → this is **lifting the state up**.

---

## 🔹 4. Why not store everything in global state?

### ❌ Problems with using only global state:

* **Performance issues**: Updating global state may trigger re-renders of many components unnecessarily.
* **Tight coupling**: Components become too dependent on one central store.
* **Less modularity**: It’s harder to isolate features.
* **Debugging difficulty**: More places where state can be mutated.
* **Overhead**: Using global state (like Redux) for small, local state is overkill.

### ✅ Use global state only for:

* Auth/user session
* Global themes or language settings
* Notifications system

---

## 🔹 5. Why do we need `useContext()`?

### 🤔 Problem:

When you want to avoid **props drilling** (passing props through many components), `useContext` lets you **share data globally** — but **without using Redux** or passing props manually.

### ✅ What it is:

A built-in React hook that lets you access values from a **Context Provider** anywhere in the component tree.

---

## 🔹 6. When, Where, and How to Use `useContext`

### ✅ Use Case Scenarios:

* Theme settings (light/dark)
* User authentication
* Language (i18n)
* Online/Offline status

---

### 🔧 Steps to use `useContext()` (Functional Components):

1. **Create Context**

```jsx
import { createContext } from 'react';
export const UserContext = createContext();
```

2. **Provide Context**

```jsx
<UserContext.Provider value={{ name: "Aditya" }}>
  <YourApp />
</UserContext.Provider>
```

3. **Consume Context**

```jsx
import { useContext } from 'react';
import { UserContext } from './context';

function Profile() {
  const user = useContext(UserContext);
  return <h1>Hello, {user.name}</h1>;
}
```

---

## 🔹 7. Why not use Context instead of Props always?

### ❌ Problems:

* **Unnecessary Re-renders**: Every component using the context will re-render if value changes.
* **Harder to test/debug**
* **No flexibility**: Props allow you to pass different values to different children. Context provides the same value to all consumers.

### ✅ Rule of Thumb:

* Use **props** when:

  * Data is only needed by a few components
* Use **context** when:

  * Many components need the same data
  * You want to avoid props drilling

---

## 🔹 8. How to use Context in Class Components

### ✅ Step-by-step:

1. **Create the Context**

```jsx
const ThemeContext = React.createContext('light');
```

2. **Use `ThemeContext.Provider`**

```jsx
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>
```

3. **Consume with `contextType`**

```jsx
class Button extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <button>Current theme: {this.context}</button>;
  }
}
```

> 🎯 `this.context` gives access to the value passed in `Provider`.

---

## 🔹 9. How to Modify Context Value Dynamically

You can modify context by passing both **value and setter** in the provider:

```jsx
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

### Usage:

```jsx
function ToggleButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Switch to {theme === "light" ? "dark" : "light"}
    </button>
  );
}
```

This allows components to **read and modify context values**.

---

## 🧠 Flashcard Summary

| Concept               | One-Liner                                                             |
| --------------------- | --------------------------------------------------------------------- |
| `props`               | Passed from parent to child, immutable                                |
| `state`               | Internal data that can change over time                               |
| Props Drilling        | Passing props through multiple levels unnecessarily                   |
| Lifting State Up      | Moving state to the nearest common parent of components that share it |
| Global State          | Should be used for global/shared data only                            |
| `useContext()`        | Hook to access global values from any component                       |
| Avoid Context Always? | Yes, for frequently changing or component-specific data               |
| Class + Context       | Use `static contextType` and `this.context`                           |
| Modify Context        | Provide state + setState from provider                                |

---

