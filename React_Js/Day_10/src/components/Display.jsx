import { useContext } from "react";
import { CreateCart } from "../context/CreateCart";

function Display() {
  const { cartCount } = useContext(CreateCart);
  return (
    <>
      <h2>Cart: {cartCount}</h2>
    </>
  );
}

export default Display;
