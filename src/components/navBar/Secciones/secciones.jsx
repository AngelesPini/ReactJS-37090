import { Link } from "react-router-dom";
const Secciones = () => {
    return (
        <div className="categorias_nav">
            <ul>
                <li><Link to="/category/1">Prudence</Link></li>
                <li><Link to="/category/2">Dorcas</Link></li>
                <li><Link to="/category/3">Agatha</Link></li>
                <li><Link to="/category/4">Clásicas</Link></li>
            </ul>
        </div>
    );
}

export default Secciones;
