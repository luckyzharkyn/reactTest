import React from "react";

function FieldUser({id, text, type, editProd, isEdit}) {
    return isEdit
        ? <input value={text} onChange={(event) => editProd(id, type, event)}/>
        : <span>{text} </span>
}

export default FieldUser;