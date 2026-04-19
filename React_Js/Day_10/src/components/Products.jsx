import { useContext, useState } from "react";
import { CreateCart } from "../context/CreateCart";

function Products({ item }) {
  const [addCart, setCart] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { cartCount, setCartCount } = useContext(CreateCart);

  return (
    <>
      <div className="card">
        <h2>{item.name}</h2>
        <h3>{item.price}</h3>
        {addCart ? (
          <button
            onClick={() => {
              setCart(false);
              setCartCount((cartCount) => cartCount - 1);
            }}
            style={{ backgroundColor: "darkred" }}
          >
            Remove
          </button>
        ) : (
          <button
            onClick={() => {
              setCart(true);
              setCartCount((cartCount) => cartCount + 1);
            }}
          >
            Add
          </button>
        )}
      </div>
    </>
  );
}
export default Products;
