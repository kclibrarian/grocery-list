import React, { useState } from "react";
import "./App.css";
import "./App.css";
import Item from "./components/item";
const initList = [
  { name: "tomato", calorie: 30 },
  { name: "cantaloupe", calorie: 20},
  { name: "ground beef", calorie: 100 },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Grocery List</h2>
        {DataTransferItemList.list.map((v, k) => {
          return <Item />;
        })}
      </header>
    </div>
  );
}

export default App;
