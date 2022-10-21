import React from "react";
import { Routes, Route} from "react-router-dom";
import './style.scss';

import Login from './login/login';
import Home from './home/home';
import Registro from './registro/registro';
import ItemListContainer from "./itemListContainer/itemListContainer";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path = "/home" element={<Login/>}/>
      <Route exact path = "/registro" element={<Registro/>}/>
      <Route exact path="/itemListContainer" element={<ItemListContainer/>}/>
    </Routes>
  );
}

export default App;
