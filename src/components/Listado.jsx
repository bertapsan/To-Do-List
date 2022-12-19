import React from "react";
import ItemTarea from "./ItemTarea";
import Papelera from "./Papelera";

const Listado = (props) => {
    return (
        <>
    <ul className="list-group">
        {
            props.items.map((el) => {
                return <ItemTarea updfunc={props.updfunc} rmfunc={props.rmfunc} elemento={el} key={el.id} />
            } )
        }
    </ul>
    <div><Papelera itemsLength={props.items.length} rmall={props.rmall}/></div>
    </>
    )
};

export default Listado;