import React, { useState } from "react";
import "./App.css";
import item from "./components/item";
import Item from "./components/item";
import useList from "./hooks/useList";

const initList = [
  { name: "tomato", calorie: 30 },
  { name: "cantaloupe", calorie: 20},
  { name: "ground beef", calorie: 100 },
];

function App() {
  const items = useList(initList);
  const [editable, setEditable] = useState(false);

  function removeItemHandle(e) {
    items.removeItem(e.target.name)
    //   //Moved to hook
    // const filteredList = list.filter(v => v.name !== e.target.name);
    // setList(filteredList);
  }

  function makeEditableHandle(){
    setEditable(true);

  }

  function keyPressHandle(e, i) {
    if(e.key === "Enter") {
      setEditable(!editable);
      item.saveItem(i, e.target.value)
      // //Moved to Hook
      // const copyList = [...list];
      // copyList[i].name = e.target.value;
      // items.saveItem(i, e.target.value);
    }
  }
  // function removeUnhealthyHandle() {

  //   const filteredList = list.filter(v => v.calorie <= 50)
  //   setList(filteredList);
  // }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Grocery List</h2>
        {
          items.list.map( (v, k )=> {
            return (
              <Item
                key={`${k}${v.name}${v.calorie}`}
                item={v}
                onClick={removeItemHandle}
                editable={editable}
                onDoubleClick={makeEditableHandle}
                onKeyPress={keyPressHandle}
              />
            );
          })
        }

      </header>
    </div>
  )
}

export default App;
