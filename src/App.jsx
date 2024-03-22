import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Header from "./components/Header";
import Items from "./components/Items";

function App() {
  const [items, setItems] = useState(
    localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : []
  );
  const [desc, setDesc] = useState("");

  function handleDescChange(e) {
    setDesc(e.target.value);
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
      desc,
      checked: false,
    };
    setItems((prevItems) => [...prevItems, newItem]);
    localStorage.setItem("items", JSON.stringify([...items, newItem]));
    setDesc("");
  }

  function handleDelete(itemId) {
    setItems((prevItem) => prevItem.filter((item) => item.id !== itemId));
    localStorage.setItem(
      "items",
      JSON.stringify(items.filter((item) => item.id !== itemId))
    );
  }

  function handleRemoveAll() {
    if (confirm("Do you want to clear the list?")) {
      setItems([]);
      localStorage.setItem("items", JSON.stringify([]));
    }
  }

  return (
    <div>
      <Header
        desc={desc}
        handleDescChange={handleDescChange}
        handleSubmit={handleSubmit}
      />
      <Items
        items={items}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
        handleRemoveAll={handleRemoveAll}
      />
    </div>
  );
}

export default App;
