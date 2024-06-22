import {useState} from "react";
function Player({name,symbol,isActive,change}){
    const[playerName,setPlayerName]=useState(name);
    const[isEditing,setIsEditing]=useState(false);

    function changeAman(){
        setIsEditing((prevIsEditing) => !prevIsEditing);
        if(isEditing){
            change({ symbol, name: playerName });
        }
    }
    function handleChange(event){        
        setPlayerName(event.target.value);
    }
    let editble=<span className="player-name">{playerName}</span>        
    if(isEditing){
        editble=<input value={playerName} onChange={handleChange}/>
    }
    return(
        <li className={isActive?"active":undefined}>
            <span className="player">
              {editble} 
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={changeAman}>{!isEditing?"Edit":"Save"}</button>
        </li>
    )
}
export default Player;