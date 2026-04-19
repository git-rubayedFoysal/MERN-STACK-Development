import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { CreateCart } from "./context/CreateCart";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <CreateCart.Provider value={{ cartCount, setCartCount }}>
        <Header />
        <Body />
        <Footer />
      </CreateCart.Provider>
    </>
  );
}

export default App;
