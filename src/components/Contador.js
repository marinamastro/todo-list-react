import React,{useState} from "react";
//que es one flow way data , ejemplo de data pasada de hijos a padre es por evento
function ShowCount (props){
    return (<div>
        <h1>Dont miss the count!!</h1>
        <h3>Count : {props.contador}</h3>
        <button onClick={props.addCount}>Sum!!!</button>
    </div>)
}

function Contador (props){
    const [count,setCounter] = useState(props.counter);
    const addCount = ()=>{
        setCounter(count+1)
    }
    return (
        <div>
           
            <ShowCount contador = {count} addCount={addCount} /> 
            {/* le paso el estado count y va a empezar del numero que le pase en Contador en prop counter */}
        </div>
       
    )
}

export default Contador