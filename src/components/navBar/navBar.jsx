import React from "react";

import CartButton from "./cartButton/cartButton";
import Sections from "./sections-nav/sections";
import Dropdown from "./dropdown/dropdown";
const navBar = ()=>{
    return(
        <>
        <Sections/>
        <Dropdown/>
        <CartButton/>

        </>
    )
}

export default navBar;