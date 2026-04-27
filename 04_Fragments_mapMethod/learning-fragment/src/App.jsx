// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk", "Ghee"];

  return (
    // <React.Fragment>
    <>
      <h1>Healthy Food</h1>
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
