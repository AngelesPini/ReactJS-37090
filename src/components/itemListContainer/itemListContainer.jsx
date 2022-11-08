
import { useState, useEffect } from "react";
import ItemList from '../itemList/itemList'
import {consultarBDD} from '../../assets/funciones.js';
import { useParams } from "react-router-dom";
import Banner from "../../banner/banner.jsx";
const ItemListContainer = () =>{

    const [productos, setProductos] = useState([]);
    const {category} = useParams();

    useEffect(() => {
        if(category){
            consultarBDD('../json/stock.json').then(productosFuncion => {
                const productsList = productosFuncion.filter(prod => prod.idCat === parseInt(category))
                const cardProducto = ItemList({productsList})
                setProductos(cardProducto)
            }
        )
        } else {
            consultarBDD('./json/stock.json').then(productsList => {
                const cardProducto = ItemList({productsList})
                setProductos(cardProducto)
            })
        }


    },[category])

    return(
        <>
            <Banner/>


            <div className="body_main">
                <div className="contenedor-cards">
                {productos}   
                </div>                
            </div>

            
        </>
    )
}
export default ItemListContainer;