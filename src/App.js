import React, { useState,useRef } from 'react';
import TodoItem from "./components/TodoItem";
import todosData from "./todosData";
import s from "./App.module.css";

function App (){
  let input = useRef(null);
  const [todos,setTodos] = useState(todosData)
  const items = todosData.map(x=>{
  return <TodoItem 
    key={x.id}
    item={x} 
    handleChange={handleChange}
    deleteTodo={deleteTodo}/>})

  function handleChange(id){
    setTodos(todosData.map(x=>{
      if(x.id===id){
        x.completed = !x.completed
      }
  }))}

  function addTodo (){
    const value = input.current.value;
    if(!value){
    alert("You must write something")
    }else{
    setTodos(todosData.push({id:todosData.length+2,
      text:value,
      completed:false
  }))}
  }

  function deleteTodo(id){
    setTodos(todosData.map(x=>{
      if(x.id===id){
       let pos = todosData.indexOf(x);
       todosData.splice(pos,1)
      }
  }))
  }

  function deleteAll () {
    setTodos(todosData.splice(0))
  }

  return (
  <div className={s.container}>
    <h1 className={s.titulo}>Todo List</h1>
    {items}
    <input type="text" ref={input} placeholder="I have to" className={s.inputText}></input>
    <button onClick={()=>addTodo()} className={s.button}>Add</button>
    <button onClick={()=>deleteAll()} className={s.buttonDelete}>Delete All</button>   
    </div>)
}



export default App;
