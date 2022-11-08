import React from 'react';
import Cart from '../../multimedia/cart.png';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <>

            <Link to="/cart">        
            <button className='btn'>
                <img src={Cart} alt="icono carrito para boton" />
            </button>
            </Link>
 

        </>
    );
}

export default CartWidget;
