import { useState } from "react"

export default function Player({name,symbol,isActive,onChangeName}){

const[playName,setplayName]=useState(name)

const[isEditing, setIsEditing]=useState(false);

 function handleEditClick(){
setIsEditing((editing=>!editing));

if(isEditing){
onChangeName(symbol, playName);
}
 }


function handleChange(event){
setplayName(event.target.value);
}

let playerName = <span className="player-name" >{playName}</span>;
let btnCaption="Edit"

if(isEditing){
playerName=<input type="text" required value={playName} onChange={handleChange}/>
btnCaption="Save"
}
return(
    <li className={isActive ? "active":undefined}>
        <span className="player" >
        {playerName}
    <span className="player-symbol">{symbol}</span>
    </span>
    <button  onClick={handleEditClick} >{btnCaption}</button>
 </li>
)

}