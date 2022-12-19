import React, { useState } from "react";

const Formulario = (props) => {
    const [texto, setTexto] = useState("");
    const changeHandler = (ev) => {
        setTexto(ev.target.value);
    } 

    const submitHandler = (ev) => {
        ev.preventDefault();
        if (texto !== "") {
        props.tdHandler(texto);
        setTexto("");
        }
        else {
         const alerta = document.getElementById("alerta");
         alerta.classList.remove("d-none");
         setTimeout(()=>{
            alerta.classList.add("d-none");
        }, 4000);
        }
        return false;
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="row px-3">
                <input type="text" value={texto} onChange={changeHandler}  className="form-control col-12 col-md" placeholder="Describe aquí tu próxima tarea" />
                <input type="submit" value="Añadir a la lista" className="btn btn-succesfull col-12 mt-3 col-md-auto mt-md-0 ms-md-3" />
            </div>
            <div id="alerta" className="alert d-none alert-warning" data-bs-dismiss="alert" role="alert">No puedo añadir tareas invisibles</div>
        </form>
    )
}

export default Formulario;






