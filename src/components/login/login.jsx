import React from "react";
import { Link } from 'react-router-dom';
import Input from "./input/input";
import Header from "../header/header";
const Login = () =>{
    return(
        <>
        <div className="body">
            <Header/>
            <div className="body_main">
                <h3>LOGIN</h3>
                    <div className="main_formulario">
                        <Input/>
                        <Input/>
                        <Link to={`/home`} ><button>INICIAR SESIÓN</button></Link>

                    </div>
                    <div className="main_registrarse">
                        <p>¿no tenés cuenta? <Link to={`/registro`} ><button className="registrarse_button">registrate</button></Link></p>
                    </div>
            </div>

        </div>
        </>
    )
}

export default Login;