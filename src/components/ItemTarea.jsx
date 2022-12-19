import React from "react";
import Checkbox from "./Checkbox";

const ItemTarea = (props) => {
    const handlerClick = (ev) =>{
        props.rmfunc(ev.target.id);
    }
    return (
        <li className="list-group-item mb-3" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
            <div className="row">
                <span className="col">{props.elemento.title}</span>
                {/* Pending to develope <Checkbox isChecked={props.elemento.checked} id={props.elemento.id} updfunc={props.updfunc}/>*/}
                <button onClick={handlerClick} id={props.elemento.id} className="btn btn-danger btn-sm col-auto ms-3">X</button>
            </div>
        </li>)
};

export default ItemTarea;