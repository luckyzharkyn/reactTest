import React from "react";

function User({id, name, surname, age, ban, addBlock}) {
    return <div>
        <span>{id} </span>
        <span>{name} </span>
        <span>{surname} </span>
        <span>{age} </span>
        <span>status: {ban ? "ban" : "free"}</span>
        <button onClick={() => addBlock(id)}>{ban ? "unBlock" : "block"}</button>
    </div>
}

export default User;