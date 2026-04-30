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