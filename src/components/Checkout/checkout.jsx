import React from "react"
import { Link } from "react-router-dom";

const Checkout = () => {
    const datosFormulario = React.useRef()
    const consultarFormulario= (e) =>{
        e.preventDefault()
        console.log(datosFormulario)
        const datForm = new FormData(datosFormulario.current)
        const valoresObtenidos = Object.fromEntries(datForm)
        console.log(valoresObtenidos)
        e.target.reset()
    }

    const alerta = () => {
        alert('formulario enviado con éxito')
    }


    return (
        <div className='container'>
            <form className="needs-validation" noValidate onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="col-md-12">
                    <label htmlFor="nombre" className="form-label">Nombres</label>
                    <input type="text" className="form-control" name='nombre' required />

                </div>
                <div className="col-md-12">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" name='apellido' required />

                </div>
                <div className="col-md-12">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name='dni' required />

                </div>
                <div className="col-md-12">
                    <label htmlFor="localidad" className="form-label">Localidad</label>
                    <div className="input-group has-validation">
                    <input type="text" className="form-control" name='localidad' required />

                    </div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" name='email' required />

                </div>
                <div className="col-md-12">
                    <label htmlFor="telefono" className="form-label">Telefono</label>
                    <input type="number" className="form-control" name='telefono' required />
                </div>
                    <Link to={"/"}>
                    <button type='submit' className='btn-principal' onClick={alerta}>Confirmar</button>
                    </Link>

                </form>
        </div>
    );
}

export default Checkout;
