import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2026",
    },
    {
      name: "Go To College",
      dueDate: "4/10/2026",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
      {/* <div className="items-container">
        <TodoItem todoDate="4/10/2026" todoName="Buy Milk"></TodoItem>
        <TodoItem todoDate="4/10/2026" todoName="Go To College"></TodoItem>
      </div> */}
    </center>
  );
}

export default App;
