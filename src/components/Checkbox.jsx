import React from "react";

const Checkbox = (props) => {

const handleCheckChange = (ev) => {
    const isChecked = ev.target.checked;
    const id = ev.target.id;
    props.updfunc(id, isChecked);
};

    return (
    <input type="checkbox" id={props.id} checked={props.isChecked} onChange={handleCheckChange} className="col-1"></input>
)};


export default Checkbox;