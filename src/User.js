import React from "react";

function User({id, name, surname, age, ban, isEdit, addBlock, toggleMode, editProd}) {
    return <div>
        <span>{id} </span>

        {isEdit
        ? <input value={name} onChange={(event) => editProd(id, "name", event)}/>
        : <span>{name} </span>}

        {isEdit
        ? <input value={surname} onChange={(event) => editProd(id, "surname", event)}/>
        : <span>{surname} </span>}

        {isEdit
        ? <input value={age} onChange={(event) => editProd(id, "age", event)}/>
        : <span>{age} </span>}

        <span>status: {ban ? "ban" : "free"}</span>
        <button onClick={() => addBlock(id)}>{ban ? "unBlock" : "block"}</button>
        <button onClick={() => toggleMode(id)}>{isEdit ? "save" : "edit"}</button>

    </div>
}

export default User;