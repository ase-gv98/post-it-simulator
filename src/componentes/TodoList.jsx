import React, {useState, useRef} from 'react';
import {v4 as uuid} from 'uuid';
import { TodoItem } from './TodoItem';

export function TodoList(){

const [todos, setTodos]= useState([
   

]);
const taskRef=useRef();
const agregarTarea = () => {
    console.log('Agregar tarea');
    const task=taskRef.current.value;
    console.log(task);

    if(task === '') return;
    setTodos((prevTodos)=>{
const newTask={
    id:uuid(),
    task:task,
    completed:false
}
return [...prevTodos,newTask]

    })
taskRef.current.value=null;
}
const cambiarEstadoTarea =(id) =>{
    console.log(id)
const newTodos=[...todos];
const todo = newTodos.find((todo)=>todo.id===id);
todo.completed=!todo.completed
setTodos(newTodos);


}
const ResumenTareas=()=>{
    const cant =cantidadTareas()
    return <h3>Te quedan {cant} tareas pendientes </h3>


}
const eliminarTarea=()=>{
const newTodos=todos.filter((todo)=>!todo.completed)
setTodos(newTodos)
}

const cantidadTareas=()=>{
    return todos.filter((todo)=>!todo.completed).length;
}
    return(

        <div>
            <h1>Listado de Tareas</h1>
            <div className='input-group mb-3'>
            <input className='form-control' ref={taskRef}type ='text' placeholder='Ingresa una tarea'></input>
            <button className='btn btn-success' onClick={agregarTarea}>+</button>
            <button className='btn btn-danger' onClick={eliminarTarea}>-</button>
            </div>
            <ul className='list-group'> 
                {todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.id} cambiarEstado={cambiarEstadoTarea}    />;
                })}
            </ul>
            <ResumenTareas />

        </div>


    )


}