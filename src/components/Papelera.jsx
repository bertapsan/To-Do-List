import React from "react";


const Papelera = (props)=> {
    const handlerClick = (ev) =>{
        props.rmall(ev);
    }
    
    return (
        <button onClick={handlerClick} type="button" className={`btn btn-secondary ${props.itemsLength === 0 ? 'd-none' : ' '} `}>Eliminar todas las tareas <i className="bi bi-trash"></i>
        </button>
        )
};

export default Papelera;