import React from "react";
import s from "../todoitem.module.css";
import {AiFillDelete} from "react-icons/ai";

function TodoItem (props) {     
    return (        
            <div className={s.item}>      
                <label htmlfor={props.item.id}
                 style={{color: props.item.completed && "gray",textDecoration:props.item.completed && "line-through"}}>
                     {props.item.text}
                </label>
                <input type="checkbox"                    
                    id={props.item.id}
                    checked={props.item.completed} 
                    onChange={()=>props.handleChange(props.item.id)}
                    />
                <span onClick={()=>props.deleteTodo(props.item.id)} className={s.close}><AiFillDelete/></span>
            </div>
    )    
}

export default TodoItem