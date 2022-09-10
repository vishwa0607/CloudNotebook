import React from "react";
import noteContext from "./noteContext";
const NoteState=(props)=>{

    const s1={
        "name": "Vishwajeet"

    }
    return(
       <noteContext.Provider value={s1}  >
        {props.children}
       </noteContext.Provider>
    )
}
export default NoteState;