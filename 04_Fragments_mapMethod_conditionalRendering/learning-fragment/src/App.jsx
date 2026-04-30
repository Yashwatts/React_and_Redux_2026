// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // let foodItems = [];

  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk", "Ghee"];

  // if (foodItems.length === 0) {
  //   return <h3>I am still hungry</h3>;     // If-Else Conditional Rendering
  // }

  let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry</h3> : null; // Ternary Operator Conditional Rendering

  return (
    // <React.Fragment>
    <>
      <h1>Healthy Food</h1>
      {emptyMessage}
      {/* {foodItems.length === 0 && <h3>I am still hungry</h3>} */}
      {/* Logical Operator Conditional Rendering */}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}

        {/* <li class="list-group-item">Dal</li>
        <li class="list-group-item">Green Vegetables</li>
        <li class="list-group-item">Roti</li>
        <li class="list-group-item">Salad</li>
        <li class="list-group-item">Milk</li> */}
      </ul>
    </>
    // </React.Fragment>
  );
}

export default App;
