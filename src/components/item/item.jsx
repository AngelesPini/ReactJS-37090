
import { Link } from 'react-router-dom';
const Item = ({prodStock}) => {
    return (
        <div className="card_producto">
            <img src={`../img/${prodStock.img}`} className="card-img-top" alt="imagen de producto" />
                <div className="card-body">
                <h5 className="card-title">{prodStock.nombre} {prodStock.modelo}</h5>
                <p className="card-text">Precio: ${prodStock.precio}</p>
                <p className="card_span">Unidades disponibles: {prodStock.stock}</p>
            <button className="boton_card"><Link to={`/product/${prodStock.id}+${prodStock.modelo}`}>ver detalles</Link></button>
                </div>
        
    </div>
    );
}

export default Item;
