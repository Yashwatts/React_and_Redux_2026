# Creating React Components

## 1. File Extensions

### `.js`

- Stands for JavaScript.
- Contains regular JavaScript code.
- Used for general logic and components.

### `.jsx`

- Stands for JavaScript XML.
- Combines JavaScript with HTML-like tags.
- Makes it easier to design UI components.

## 2. Class vs Function Components

### Class Components

- Stateful: Can manage state.
- Lifecycle: Access to lifecycle methods.
- Verbose: More boilerplate code.
- Not preferred anymore.

### Function Components

- Initially stateless.
- Can use Hooks for state and effects.
- Simpler and more concise.
- More popular in modern React.

## 3. What is JSX?

- JSX defines how the UI will look wherever the component is used.
- Although it resembles HTML, it is JSX (JavaScript XML).
- JSX is converted into regular JavaScript.
- Use [babeljs.io/repl](https://babeljs.io/repl) to see how JSX transforms into JavaScript.

## 4. Exporting Components

- Exporting allows a component to be used in other files.
- Default export: one main export from a module.
- Named export: multiple exports from a module.
- Import the exported component in the destination file using `import` syntax.

### One default export

```jsx
export default function Button() {
  return <button>Click</button>;
}
```

```jsx
import Button from "./Button";
```

### Multiple named exports

```jsx
export function Slider() {
  return <input type="range" />;
}

export function Checkbox() {
  return <input type="checkbox" />;
}
```

```jsx
import { Slider, Checkbox } from "./Features";
```

### Named export(s) with one default export

```jsx
export function Avatar() {
  return <img alt="avatar" />;
}

export default function FriendsList() {
  return <div>Friends</div>;
}
```

## 5. Other Important Points

- Component names must be capitalized; lowercase names are treated as HTML tags.
- In React, you can write HTML-like structure directly using JSX.
- CSS can be imported directly into components for modular styling.

## 6. Dynamic Components

- JSX helps create dynamic and interactive UI components.
- Use `{}` to embed JavaScript expressions such as variables and function calls.

## 7. Reusable Components

- Modularity: Components can be reused across different parts of an application.
- Consistency: Reuse keeps UI consistent.
- Efficiency: Reuse reduces duplicate code.
- Maintainability: Updates in one reused component reflect everywhere it is used.

## 8. Practical Work Done in This Folder

For practical understanding, visit:

- Dynamic components: [src/Hello.jsx](src/Hello.jsx)
- Reusable components: [src/Random.jsx](src/Random.jsx)
- Integration and rendering flow: [src/App.jsx](src/App.jsx)

This folder gives hands-on practice for dynamic and reusable React components.
