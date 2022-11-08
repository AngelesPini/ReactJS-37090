import React from 'react';
import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import {consultarBDD} from '../../assets/funciones.js'
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        consultarBDD('../json/stock.json').then(productos => {
            const prod = productos.find(productoArray => productoArray.id === parseInt(id))
            setProducto(prod)
        })
    }, []);
    return (
        <>

        <div>
            <div className="item_container">
                <ItemDetail producto={producto}/>
            </div>
        </div>
        </>

    );
}

export default ItemDetailContainer;
