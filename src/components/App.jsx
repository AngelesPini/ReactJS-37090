import React from "react";
import {Routes, Route} from "react-router-dom";

import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import Cart from "./Cart/Cart";
import Header from "./header/header";
import NavBar from "./navBar/navBar";
import Footer from "./Footer/footer";
import './style.scss';
function App() {
  return (
    <>    
    <NavBar/>
    <Header/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/product/:id" element={<ItemDetailContainer/>}/>
      <Route path="/category/:category" element={<ItemListContainer/>} />
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
<Footer/>
    </>
  );
}

export default App;
