import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Header from "./components/Header";
import Items from "./components/Items";
import Buttons from "./components/Buttons";

function App() {
  const addeditems = [
    { id: nanoid(), quant: 2, desc: "shirts", checked: false },
    { id: nanoid(), quant: 2, desc: "pants", checked: false },
    { id: nanoid(), quant: 1, desc: "laptop", checked: false },
    { id: nanoid(), quant: 5, desc: "food items", checked: false },
  ];
  const [items, setItems] = useState(addeditems);
  const [desc, setDesc] = useState("");
  const [quant, setQuant] = useState(1);

  function handleDescChange(e) {
    setDesc(e.target.value);
  }

  function handleNumChange(e) {
    setQuant(e.target.value);
  }

  function handleCheck(itemId) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!desc) return;
    const newItem = {
      id: nanoid(),
      quant,
      desc,
      checked: false,
    };
    setItems((prevItems) => [...prevItems, newItem]);
    setDesc("");
    setQuant(1);
  }

  function handleDelete(itemId) {
    setItems((prevItem) => prevItem.filter((item) => item.id !== itemId));
  }

  function handleRemoveAll() {
    if (confirm("Do you want to clear the list?")) setItems([]);
    // setItems((prevItems) => prevItems.splice(0, prevItems.length)); this will also work
  }

  return (
    <div>
      <Header
        desc={desc}
        handleDescChange={handleDescChange}
        quant={quant}
        handleNumChange={handleNumChange}
        handleSubmit={handleSubmit}
      />
      <Items
        items={items}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
      <Buttons handleRemoveAll={handleRemoveAll} />
    </div>
  );
}

export default App;
