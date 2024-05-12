import './styles/header.css';
export function Header() {
    return (
        <div>
            <header className='headerr'>INVENTARIO-BETA</header>
            <nav className="nav">
                <ul className="list">
                    <li className='list_button'>
                        <img src="" className='list_img' alt="" />
                        <a  href="#services">Inicio</a>
                    </li>
                    <li className='list_button'>
                        <img src="" className='list_img' alt="" />
                        <a  href="#services">Productos</a>
                    </li>
                    <li className='list_button'>
                        <img src="" className='list_img' alt="" />
                        <a  href="#services">Proveedores</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

