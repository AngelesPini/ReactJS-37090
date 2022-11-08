import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./cartWidget/cartWidget";
import Secciones from "./Secciones/secciones";
import Logo from '../../assets/logo-min.png'
import '../style.scss';
const navBar = ()=>{
    return(
        <>
        <div className="header_nav">
        <Link to="/"><img src={Logo} alt="logo-wicca-shop"  className="logo"/></Link>
        <Secciones/>
        <CartWidget/>            
        </div>


        </>
    )
}

export default navBar;