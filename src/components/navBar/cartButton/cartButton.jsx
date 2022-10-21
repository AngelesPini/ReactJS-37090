import React from 'react';
import Cart from '../../multimedia/cart.png';


const CartButton = () => {
    return (
        <>
        <button className='btn'>
        <img src={Cart} alt="icono carrito para boton" />
        </button>
        </>
    );
}

export default CartButton;
