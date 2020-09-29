import React from "react";
//h1 style={{display: !props.question && "none"}} si los dos son verderos aplica el segundo
import s from "../todoitem.module.css";
function TodoItem (props) {   
  
    return (        
            <div className={s.item}>      
                <label for={props.item.id}
                 style={{color: props.item.completed && "gray",textDecoration:props.item.completed && "line-through"}}>
                     {props.item.text}
                </label>
                <input type="checkbox" id={props.item.id}
                    checked={props.item.completed} 
                    onChange={()=>props.handleChange(props.item.id)}
                    />
                <span onClick={()=>props.deleteTodo(props.item.id)} className={s.close}>X</span>
            </div>
    )    
}

export default TodoItem