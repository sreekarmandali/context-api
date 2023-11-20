
import Header from "./Layout/Header/Header";
import Cart from "./UI/Components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./Store/Context-Provider";

function App() {
  const [showModal,setShowModal] = useState(false)
  const displayModal = () => {
    setShowModal(true)
  }
  const hideModal = () => {
    setShowModal(false)
  }
    return (
      <CartProvider >
       {showModal && <Cart hideCartHandler={hideModal}/>}
        <Header cartClickHandler={displayModal}></Header>
      </CartProvider>
    );
  }
  
  export default App;
  