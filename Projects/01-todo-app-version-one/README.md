![Image of Project](src/assets/image.png)

# Todo App Version One

This is a beginner React project created with Vite.
It is the first version of a Todo App UI.

## What We Built

1. Created a Todo App layout using React components.
2. Added Bootstrap for grid and button styling.
3. Added custom CSS for spacing, heading and button sizing.
4. Split the UI into reusable component files.

## File Wise Work

- src/main.jsx
	- React app entry point.
	- Imports Bootstrap CSS.
	- Renders the main App component.

- src/App.jsx
	- Main layout component.
	- Combines AppName, AddTodo, TodoItem1 and TodoItem2.
	- Wraps todo items in an items container.

- src/App.css
	- Styles heading size and weight.
	- Makes inputs full width.
	- Adds spacing using my-row class.
	- Sets minimum width for buttons with my-button.

- src/components/AppName.jsx
	- Shows the title: TODO App.

- src/components/AddTodo.jsx
	- Input section for todo text and due date.
	- Add button UI (no functionality yet).

- src/components/TodoItem1.jsx
	- Displays one hardcoded todo item.
	- Shows todo name, date and delete button.

- src/components/TodoItem2.jsx
	- Displays second hardcoded todo item.
	- Same structure as TodoItem1.

## Current Limitation

This project is currently hardcoded.
Todo items are written again and again in separate components (TodoItem1 and TodoItem2).

In upcoming advanced topics, we will remove this repetition by using props and reusable components.

## Run The Project

```bash
npm install
npm run dev
```
