import React from "react";
import '../archivos-style/header.css';


export function Header(props){
    return( 
    <header className="contenedor-p-header">
        <div className="logo">
        <img src={require('../imagenes/opi.png')} alt="logo de la empresa de stream"/>
        </div>
        <nav>
            <ul className="nav-menu">
                <li><a href="#">Ingresar</a></li>
                <li><a href="#">Olvide mi contraseña</a></li>
                <li><a href="#">Registrarme</a></li>
            </ul>
        </nav>
        <a className="boton" href="#"><button className="account">Mi cuenta</button></a>
    </header>
    );
}

