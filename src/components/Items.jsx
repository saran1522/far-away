import { useState } from "react";

export default function Items(props) {
  const noOfItems = props.items.length;
  const packedItems = props.items.filter((item) => item.checked).length;
  const packedPercentage = Math.round((packedItems / noOfItems) * 100);
  const sortValues = ["item name", "packed", "add sequence"];
  const [sortBy, setSort] = useState("add sequence");
  let sortedItems = [];
  if (sortBy === "add sequence") sortedItems = props.items;
  if (sortBy === "item name") {
    sortedItems = props.items
      .slice()
      .sort((a, b) => a.desc.localeCompare(b.desc));
  }
  if (sortBy === "packed") {
    sortedItems = props.items
      .slice()
      .sort((a, b) => Number(a.checked) - Number(b.checked));
  }

  return (
    <div className="item-container">
      <div className="sort">
        <label htmlFor="sorts">sort by: </label>
        <select
          name=""
          id="sorts"
          value={sortBy}
          onChange={(e) => {
            setSort(e.target.value);
          }}
        >
          {sortValues.map((srtval) => (
            <option value={srtval} key={Math.floor(Math.random() * 1121224242)}>
              {srtval}
            </option>
          ))}
        </select>
      </div>
      <ul className="list">
        {sortedItems.map((item) => (
          <li
            style={item.checked ? { textDecoration: "line-through" } : {}}
            key={item.id}
          >
            <span>
              <input
                type="checkbox"
                name="check"
                id="inp"
                value={item.checked}
                onChange={() => {
                  props.handleCheck(item.id);
                }}
              />
            </span>
            <span>{item.quant}</span>
            <span>{item.desc}</span>
            <span id="remove" onClick={() => props.handleDelete(item.id)}>
              ❌
            </span>
          </li>
        ))}
      </ul>
      <div className="message">
        {props.items.length
          ? `you have ${noOfItems} items and you have packed ${packedItems} (${packedPercentage}%)`
          : "Add your 1st Item"}
      </div>
    </div>
  );
}
