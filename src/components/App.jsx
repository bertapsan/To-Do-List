import React, { useState, useEffect } from "react";
import Title from "./Title";
import Formulario from "./Formulario";
import Listado from "./Listado";
import {v4 as uuidV4} from "uuid";
import AOS from "aos"


const App = () => {
    const [toDos, setToDos] = useState([]);
    const toDoHandler = (descripcionToDo, isChecked) => {
        const newToDos = [...toDos, {id: uuidV4(), title: descripcionToDo, checked: isChecked}];
        setToDos(newToDos);
    }

    const updateCheckedHandler = (id, isChecked) => {
      const newToDos = [...toDos];
      newToDos.filter((el) => {
        if (id === el.id){
          el.checked = isChecked;
        }
      });
      setToDos(newToDos);
    }

    const removeToDoHandler = (idItem) => {
        const newToDos = toDos.filter((el) => el.id !== idItem);
        setToDos(newToDos);
    }

    const removeAllToDoHandler = () => {
        const newToDos = toDos.splice(toDos.length , 0);
        setToDos(newToDos);
    }


    useEffect(() => {
      let data = localStorage.getItem('tasks')
      if (data) {
        setToDos(JSON.parse(data));
      } 
      AOS.init();
    }, []);
    
    
    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(toDos))
      }, [toDos]);

    return (
    <>
     <img src="../src/To_Do_List_logo.png" alt="To Do List logo" className="img-fluid w-100 logo" data-aos="zoom-in" data-aos-duration="1500"/>
     <h1 className="pt-4">To Do List</h1>
     <div className="row">
      <div className="col-12 col-lg-6">
        <Title texto="¿Qué quieres añadir a la lista?" />
        <Formulario tdHandler={toDoHandler} />
      </div>
      <div className="col-12 col-lg-6">
        <Title texto="Lista de tareas pendientes" />
        <Listado items={toDos} updfunc={updateCheckedHandler} rmfunc={removeToDoHandler} rmall={removeAllToDoHandler}/>
      </div>
     </div>
    </>
   )
}

export default App;