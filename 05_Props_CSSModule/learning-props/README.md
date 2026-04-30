# Passing Data via Props

A React learning project demonstrating how to use props for passing data between components.

## What are Props?

**Props** (short for properties) are a fundamental concept in React that allow you to pass data from parent to child components.

### Key Characteristics

- **Short for properties** - Props are like function parameters in React
- **Mechanism for passing data** - Transfer information between components
- **Read-only by default** - Props are immutable and cannot be modified by child components

## Why Use Props?

- **Reusability** - Makes components reusable across your application
- **Component Communication** - Enable parent-to-child data flow
- **Maintainability** - Centralize data management in parent components

## How Props Work

### Usage Pattern

```jsx
// Passing props from parent component
<FoodItems items={foodItems} />

// Receiving props in child component
function FoodItems({ items }) {
  return (
    <div>
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}
```

### Key Points

- **Data flows one-way** (downwards) - From parent to child only
- **Props are immutable** - Child components cannot modify props directly
- **Used for component communication** - Defines component interfaces

## Practical Work Done in This Folder

For practical understanding, visit these files:

- Parent component with the `foodItems` array and prop passing:
  [src/App.jsx](src/App.jsx)
- List rendering component that receives `items` and maps them into `Item` components:
  [src/components/FoodItems.jsx](src/components/FoodItems.jsx)
- Single item component that displays one food item:
  [src/components/Item.jsx](src/components/Item.jsx)
- Conditional message component that checks whether the list is empty:
  [src/components/ErrorMessage.jsx](src/components/ErrorMessage.jsx)

## Example

This project uses props to pass the food list from the parent component to child components:

```jsx
function App() {
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}
```

The `FoodItems` component loops through the array and renders each value as a separate list item, while `ErrorMessage` shows a message when the list is empty.

---

# CSS Modules

A React learning project demonstrating CSS Modules for scoped, component-specific styling.

## What are CSS Modules?

**CSS Modules** are stylesheets where all class names and animations are scoped locally to a component by default. This prevents naming conflicts and allows styles to be tightly coupled with components.

### Key Characteristics

- **Scoped class names** - Each class is unique to its component, avoiding global conflicts
- **Locally scoped** - Styles are only applied to the component importing them
- **Unique naming** - CSS modules automatically generate unique class names at build time
- **Component-specific** - Promotes modular and maintainable styling

## Why Use CSS Modules?

- **Avoid naming conflicts** - No need to worry about class name collisions globally
- **Better organization** - Keep styles with their components
- **Reusable components** - Safe to copy components without style conflicts
- **Maintainability** - Easy to modify styles without affecting other parts of the app
- **Flexibility** - Can be used alongside global CSS when needed

## How CSS Modules Work

### 1. Create a CSS Module File

```css
/* Item.module.css */
.my-item {
  background-color: khaki;
  padding: 10px;
  border-radius: 4px;
}
```

### 2. Import in Component

```jsx
import styles from './Item.module.css';

export default function Item() {
  return <li className={styles.my-item}>Food Item</li>;
}
```

### 3. Generated Output

The build tool automatically transforms the class name to a unique identifier:

```css
/* Generated in browser */
._my-item_j3xk {
  background-color: khaki;
  padding: 10px;
  border-radius: 4px;
}
```

## Practical Work Done in This Folder

For practical understanding, visit these files:

- Component using CSS modules for scoped styling:
  [src/components/Item.jsx](src/components/Item.jsx)
- CSS module file with scoped styles:
  [src/components/Item.module.css](src/components/Item.module.css)