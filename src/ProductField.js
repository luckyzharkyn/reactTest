import React, { useState } from "react";

function ProductField( {id, text, type, ChangeText} ) {
    const [isEdit, setIsEdit] = useState(false);

    const result = 
        isEdit
        ? <input 
        value={text} 
        onChange={(event) => ChangeText(id, type, event)}
        onBlur={() => setIsEdit(false)}
        />
        : <td onClick={() => setIsEdit(true)}>{text}</td>
    
    return <td>{result}</td>;
}

export default ProductField;