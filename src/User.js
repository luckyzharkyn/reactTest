import React from "react";
import FieldUser from "./FieldUser";

function User({id, name, surname, age, ban, isEdit, addBlock, toggleMode, editProd}) {
    return <div>
        <span>{id} </span>

        <FieldUser 
            id={id} 
            text={name} 
            type={"name"} 
            editProd={editProd}
            isEdit={isEdit}
        />

        <FieldUser 
            id={id} 
            text={surname} 
            type={"surname"} 
            editProd={editProd}
            isEdit={isEdit}
        />

        <FieldUser 
            id={id} 
            text={age} 
            type={"age"} 
            editProd={editProd}
            isEdit={isEdit}
        />
        
        <span>status: {ban ? "ban" : "free"}</span>
        <button onClick={() => addBlock(id)}>{ban ? "unBlock" : "block"}</button>
        <button onClick={() => toggleMode(id)}>{isEdit ? "save" : "edit"}</button>

    </div>
}

export default User;