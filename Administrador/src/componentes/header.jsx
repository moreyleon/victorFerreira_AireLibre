import { Link } from "react-router-dom";


export default function Header() {

    return (
        <div>

            <div className="logo">
                <h1>Aire Libre</h1>
                <h3>Vive tu propia aventura....!!</h3>
            </div>

            <div className="navegacion">
                <nav>
                    <ul>
                        <li><Link to="/">
                        <span>Inicio</span>
                        </Link></li>
                        <li><Link to="/Productos">
                        <span>Productos</span>
                        </Link></li>
                        <li><Link to="/Usuarios">
                        <span>Usuarios</span>
                        </Link></li>
                        
                    </ul>
                </nav>
            </div>


          
        </div>
    );
}

