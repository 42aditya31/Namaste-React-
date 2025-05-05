
### ✅ 1. What is NPM?

**NPM** stands for **Node Package Manager**.

* It's a **command-line tool** used to install, update, and manage packages (libraries/tools) in a Node.js or JavaScript project.
* It comes **bundled with Node.js**.
* Think of it like an "app store" for JavaScript libraries (React, Express, Lodash, etc).

---

### ✅ 2. `package.json` is the configuration file of npm

Yes! `package.json` is the **heart of a Node project**. It:

* Describes your project (name, version, author).
* Lists all **dependencies** and **devDependencies**.
* Contains custom **scripts** (like `npm start`, `npm run build`).
* Helps others (and tools) to install the same versions of packages.

---

### ✅ 3. What are Transitive Dependencies?

These are **dependencies of your dependencies**.

Example:

* You install `React`.
* React depends on `loose-envify`.
* You didn't install `loose-envify` directly, but it still gets installed = **transitive dependency**.

---

### ✅ 4. What is Parcel / Webpack? Why do we need them?

They are **module bundlers**.

#### We need them because:

* Browsers don’t understand things like JSX, SCSS, or ES6 modules.
* Bundlers convert modern JS code into **browser-compatible code**.
* They also optimize: minify, compress, code-split, etc.

---

### ✅ 5. What is `parcel-cache`?

* A folder created by Parcel.
* It **stores processed files**, so the next build is faster.
* Parcel skips reprocessing unchanged files using this cache.

---

### ✅ 6. What is `npx`?

* `npx` is like a **temporary executor**.
* It allows you to **run a package without installing it globally**.

Example:

```bash
npx create-react-app myApp
```

This runs `create-react-app` **without needing to install** it manually.

---

### ✅ 7. `dependencies` vs `devDependencies`

| Type              | Used In...                            | Installed on Production? |
| ----------------- | ------------------------------------- | ------------------------ |
| `dependencies`    | Core of your app (React, Axios)       | ✅ Yes                    |
| `devDependencies` | For development only (Parcel, ESLint) | ❌ No                     |

---

### ✅ 8. What is Tree Shaking?

* A way to **remove unused code** during bundling.
* Helps reduce file size by “shaking off” the dead (unused) code.

Example:

```js
import { add } from 'math-lib'; // If you're only using 'add', the rest is removed.
```

---

### ✅ 9. What is Hot Module Replacement (HMR)?

* It updates **only the changed module** in the browser without reloading the entire page.
* Used during development.
* Helps preserve app **state** while editing (like form inputs).

---

### ✅ 10. 5 Superpowers of Parcel (Pick 3 to explain)

**Top 5 Superpowers:**

1. **Zero Config**
2. **Hot Module Replacement (HMR)**
3. **Fast Bundling with Caching**
4. **Automatic Transpilation (Babel, TypeScript)**
5. **Tree Shaking**

**In my own words:**

1. **Zero Config**:
   Just install Parcel and run – no need for huge config files like Webpack.
   Parcel figures out everything (JS, CSS, images) automatically.

2. **HMR**:
   Changes reflect immediately in the browser without reloading – super helpful while developing UIs.

3. **Fast Bundling with Cache**:
   Parcel uses `.parcel-cache` to speed up future builds by reusing already compiled files.

---

### ✅ 11. What is `.gitignore`?

* A file that **tells Git to ignore certain files/folders** while committing.

#### Common entries:

* `node_modules/`
* `.env`
* `.parcel-cache/`
* `dist/`

#### Do NOT ignore:

* `src/`
* `package.json`
* `public/`

---

### ✅ 12. `package.json` vs `package-lock.json`

| File                | Purpose                                                                       |
| ------------------- | ----------------------------------------------------------------------------- |
| `package.json`      | High-level dependency list and config                                         |
| `package-lock.json` | **Exact versions** of every dependency (even transitive ones) for consistency |

---

### ✅ 13. Why should I not modify `package-lock.json`?

* It is auto-generated.
* Ensures **everyone uses the same versions**.
* Manually editing can break dependency chains and lead to bugs.

---

### ✅ 14. What is `node_modules`?

* A folder where all your **installed npm packages** live.
* It can get huge, even thousands of files.

🛑 **Do NOT push `node_modules` to Git.**

* It’s unnecessary and slows down cloning.
* Instead, push `package.json` + `package-lock.json`, and others can run `npm install`.

---

### ✅ 15. What is the `dist` folder?

* Short for “distribution”.
* Contains the **final bundled files** (JS, CSS, HTML) ready to deploy.

Example: After running `parcel build index.html`, it outputs the result in `dist/`.

---

### ✅ 16. What is `browserslist`?

* A config inside `package.json` (or `.browserslistrc`) to tell tools like Babel/Autoprefixer which browsers to support.

Example:

```json
"browserslist": [
  "> 0.5%",
  "last 2 versions",
  "not dead"
]
```

---

### ✅ 17. What is the difference between ^ (caret) and \~ (tilde)?

| Symbol | Meaning                      | Example  | Installs              |
| ------ | ---------------------------- | -------- | --------------------- |
| `^`    | Accept minor & patch updates | `^1.2.3` | 1.x.x (but not 2.0.0) |
| `~`    | Accept only patch updates    | `~1.2.3` | 1.2.x (but not 1.3.0) |

---

### ✅ 18. Script types in HTML

#### Types of `<script>`:

1. **`<script>`** – Default, blocks rendering
2. **`<script async>`** – Loads script asynchronously and executes as soon as ready.
3. **`<script defer>`** – Loads in parallel but executes after HTML is fully parsed.

| Type    | Loading  | Execution   | Order Preserved |
| ------- | -------- | ----------- | --------------- |
| Normal  | Blocking | Immediately | ✅               |
| `async` | Async    | When ready  | ❌               |
| `defer` | Async    | After DOM   | ✅               |

---
