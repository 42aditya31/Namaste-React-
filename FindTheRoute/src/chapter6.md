

## 📦 JavaScript Module Exports

### 1. **Named Export**

* **Definition**: Allows exporting multiple values from a module.
* **Syntax**:

  ```javascript
  // Exporting
  export const add = (a, b) => a + b;
  export const subtract = (a, b) => a - b;

  // Importing
  import { add, subtract } from './math';
  ```
* **Use Case**: When you want to export multiple functions, objects, or variables from a module.

### 2. **Default Export**

* **Definition**: Exports a single value from a module.
* **Syntax**:

  ```javascript
  // Exporting
  export default function multiply(a, b) {
    return a * b;
  }

  // Importing
  import multiply from './math';
  ```
* **Use Case**: When a module is designed to export a single primary value.

### 3. **Namespace Import (`* as`)**

* **Definition**: Imports all named exports from a module as properties of an object.
* **Syntax**:

  ```javascript
  import * as math from './math';

  math.add(2, 3);
  math.subtract(5, 2);
  ```
* **Use Case**: When you want to import all exports from a module under a single namespace.

---

## ⚙️ Importance of `config.js` File

* **Centralized Configuration**: Stores configuration settings like API endpoints, feature flags, and environment-specific variables.
* **Environment Management**: Facilitates switching between development, staging, and production environments without altering the core codebase.
* **Maintainability**: Enhances code maintainability by avoiding hard-coded values scattered throughout the application.

---

## 🚀 Why is React Fast?

**Key Reason**: React's efficiency stems from its **Virtual DOM** and **Reconciliation Algorithm**.

* **Virtual DOM**: A lightweight in-memory representation of the real DOM.
* **Reconciliation**: When the state changes, React calculates the difference between the previous and current Virtual DOM and updates only the parts of the real DOM that changed.

> 🔴 **Note**: React's performance is optimized because it minimizes direct DOM manipulations by updating only the necessary parts through its efficient diffing algorithm.

---

## 🧱 Monolithic vs. Microservices Architecture

### **Monolithic Architecture**

* **Structure**: Single unified codebase handling all aspects of the application.
* **Advantages**:

  * Simpler to develop and deploy initially.
  * Easier to manage in small-scale applications.
* **Disadvantages**:

  * Difficult to scale.
  * Changes in one part can affect the entire system.

### **Microservices Architecture**

* **Structure**: Comprises multiple independent services, each responsible for a specific functionality.
* **Advantages**:

  * Scalability: Services can be scaled independently.
  * Flexibility: Different services can use different technologies.
  * Resilience: Failure in one service doesn't affect the entire system.
* **Disadvantages**:

  * Complexity in managing multiple services.
  * Requires robust inter-service communication mechanisms.

---

## 🔄 React's `useEffect` Hook

* **Purpose**: Handles side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.
* **Execution Flow**:

  1. Component renders.
  2. React runs the `useEffect` callback after updating the DOM.
* **Example**:

  ```javascript
  useEffect(() => {
    // Code to run after render
  }, [dependencies]);
  ```
* **Note**: The effect runs after the render, ensuring that the DOM is updated before any side effects occur.

---

## ❓ Optional Chaining (`?.`)

* **Purpose**: Safely access nested object properties without having to check each level for existence.
* **Syntax**:

  ```javascript
  const userName = user?.profile?.name;
  ```
* **Benefit**: Prevents runtime errors when accessing properties of `undefined` or `null` objects.

---

## ✨ Shimmer UI

* **Definition**: A loading placeholder that mimics the layout of the content being loaded, often with a shimmering animation.
* **Purpose**: Enhances user experience by providing a visual cue that content is loading, reducing perceived wait times.

---

## 🧾 JavaScript Expressions vs. Statements

* **Expression**:

  * Produces a value.
  * Can be used wherever a value is expected.
  * Example: `2 + 2`, `myFunction()`
* **Statement**:

  * Performs an action.
  * Does not return a value.
  * Example: `if (condition) { ... }`, `for (let i = 0; i < 5; i++) { ... }`

---

## 🔀 Conditional Rendering in React

* **Purpose**: Render different UI elements based on certain conditions.
* **Example**:

  ```javascript
  {isLoggedIn ? <Dashboard /> : <Login />}
  ```
* **Alternative Syntaxes**:

  * Logical AND: `{isLoggedIn && <Dashboard />}`
  * Ternary Operator: `{condition ? <ComponentA /> : <ComponentB />}`

---

## 🌐 Cross-Origin Resource Sharing (CORS)

* **Definition**: A security feature implemented by browsers to restrict web applications from making requests to a different domain than the one that served the web page.
* **Purpose**: Prevents malicious websites from accessing sensitive data on another domain without permission.
* **Implementation**: Servers must include specific headers to allow cross-origin requests.

---

## 🕰️ Async and Await in JavaScript

* **`async` Function**: Declares an asynchronous function that returns a promise.
* **`await` Keyword**: Pauses the execution of an `async` function until the promise is resolved.
* **Example**:

  ```javascript
  async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  }
  ```

---

## 🧠 Understanding `const json = await data.json();`

* **Context**: After fetching data using the Fetch API, the response needs to be parsed to JSON.
* **Explanation**:

  * `data.json()` returns a promise that resolves to the parsed JSON object.
  * `await` ensures that the code waits for the parsing to complete before proceeding.
* **Purpose**: Converts the raw response into a usable JavaScript object.

---

## 🔍 Deep Dive into Controlled Components and `onChange` Handler

### Code Snippet:

```javascript
const [searchText, setSearchText] = useState("");

<input
  type="text"
  value={searchText}
  onChange={(e) => {
    setSearchText(e.target.value);
  }}
  placeholder="Search products, categories..."
/>
```

### Explanation:

* **Controlled Component**: The input field's value is controlled by React state (`searchText`), ensuring that the displayed value always reflects the state.
* **`onChange` Handler**:

  * Triggered every time the input value changes.
  * Updates the state with the new value using `setSearchText`.
* **Benefits**:

  * Enables real-time validation.
  * Facilitates features like live search or dynamic suggestions.
  * Ensures a single source of truth for form data.

---

## 🧩 In-Depth Analysis of the Provided React Component

### Overview:

* **State Variables**:

  * `restroList`: Stores the complete list of restaurants fetched from the API.
  * `searchText`: Holds the current value of the search input.
  * `filteredrestroList`: Contains the list of restaurants filtered based on the search input.

### Data Fetching with `useEffect`:

* **Purpose**: Fetch data from an external API when the component mounts.
* **Implementation**:

  ```javascript
  useEffect(() => {
    fetchData();
  }, []);
  ```

  * The empty dependency array ensures the effect runs only once after the initial render.

### `fetchData` Function:

* **Process**:

  1. Fetch data from the API.
  2. Parse the response to JSON.
  3. Update `restroList` and `filteredrestroList` with the fetched data.

### Search Functionality:

* **Input Field**:

  * Controlled component with `value` tied to `searchText`.
  * `onChange` handler updates `searchText` state.

* **Search Button**:

  * Filters `restroList` based on the `searchText`.
  * Updates `filteredrestroList` with the filtered results.

### Filter Button ("Top Rated Only"):

* **Functionality**:

  * Filters `restroList` to include only items with a rating greater than 4.
  * Updates `restroList` state with the filtered data.

### Conditional Rendering:

* **Purpose**: Display a loading indicator (`Shimmer`) while data is being fetched.
* **Implementation**:

  ```javascript
  return restroList.length === 0 ? (
    <Shimmer />
  ) : (
    // Render the main content
  );
  ```

### Rendering Restaurant Cards:

* **Process**:

  * Maps over `filteredrestroList`.
  * Renders a `RestroCard` component for each restaurant, passing relevant props.

---
