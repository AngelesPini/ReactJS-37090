import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({producto}) => {
    return (
        <div className='detail-container'>
            <div className="cardDetalle">
                <div className="contenedor-imagen">
                <img src={`../img/${producto.img}`} alt="imagen de produto seleccionado"/>                    
                </div>

                <div className="descripcion-articulo">
                <h5>{producto.nombre} {producto.modelo}</h5>
                <p className='itemCount'>Cantidad: <ItemCount/></p>
                <p className='precio_articulo'>Precio: ${producto.precio}</p>
                <span>Cantidad disponible: {producto.stock}</span>
                <div className="contenedor-boton">
                <button>añadir al carrito</button>                    
                </div>

                </div>

            </div>
        </div>
    );
}

export default ItemDetail;
