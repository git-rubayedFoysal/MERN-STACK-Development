import { useState } from "react";
import Products from "./Products";

function Body() {
  const [items, setItems] = useState([
    { id: 1, name: "Air Pod", price: 300 },
    { id: 2, name: "Keyboard", price: 500 },
    { id: 3, name: "Mouse", price: 200 },
    { id: 4, name: "Monitor", price: 3000 },
    { id: 5, name: "Charger", price: 500 },
    { id: 6, name: "Air Pod", price: 300 },
    { id: 7, name: "Keyboard", price: 500 },
    { id: 8, name: "Mouse", price: 200 },
    { id: 9, name: "Monitor", price: 3000 },
    { id: 10, name: "Charger", price: 500 },
  ]);

  return (
    <>
      <div id="body-con">
        <div className="left">
          {items.map((item) => (
            <Products key={item.id} item={item} />
          ))}
        </div>
        <div className="right">
          <h2>This is Sidebar</h2>
        </div>
      </div>
    </>
  );
}
export default Body;
