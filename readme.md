# 🥪 mayank-ui — React Toast Notification Library

**mayank-ui** is a lightweight, customizable React toast notification library with smooth animations and built-in themes. Ideal for alerting users about success, errors, warnings, and info messages — all with just one simple API.

---

## 📦 Installation

Install via **npm**:

```bash
npm install mayank-ui
```
## 🛠️ Usage
#### 1. Import the CSS (Required)
Add this line at the top of your main file (main.jsx, index.js, or App.jsx):
```bash
import 'mayank-ui/dist/index.css';
```
#### 2. Setup the ToastManager Component
You need to include the ToastManager component once in your component tree (usually at the top level):
```bash
import React from 'react';
import { ToastManager, toast } from 'mayank-ui';
import 'mayank-ui/dist/index.css';

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <ToastManager />

      <h2>Hello, Mayank's Toast Demo 🍞</h2>

      <button onClick={() => toast('✅ Success toast!', { type: 'success' })}>
        Show Success
      </button>

      <button onClick={() => toast('❌ Error occurred!', { type: 'error' })}>
        Show Error
      </button>

      <button onClick={() => toast('⚠️ Warning ahead!', { type: 'warning' })}>
        Show Warning
      </button>

      <button onClick={() => toast('ℹ️ Just some info', { type: 'info' })}>
        Show Info
      </button>
    </div>
  );
};

export default App;
```
### 🧾 Available Options

| Option     | Type     | Default | Description                                                  |
|------------|----------|---------|--------------------------------------------------------------|
| `type`     | `string` | `"info"`| Type of toast — `"success"`, `"error"`, `"warning"`, or `"info"` |
| `duration` | `number` | `3000`  | Auto-dismiss duration in milliseconds                        |


## 🌈 Styling
There are 4 default toast types, each styled with a different color:

✅ success

❌ error

⚠️ warning

ℹ️ info

If you want to override the styles, you can:

Copy and edit index.css from the package.

Use your own custom classNames and styles in the toast renderer (advanced).

## 🧪 Example with Vite

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm install mayank-ui
```
Update your main.jsx:

```bash
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'mayank-ui/dist/index.css'; // ✅ Import toast styles
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
## 🚀 Build Your Own
This package is built with:

React

Rollup

Babel

PostCSS

