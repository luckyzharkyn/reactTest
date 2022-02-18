import React from "react";
import ProductField from "./ProductField";

function Product( {id, name, cost, catg, ChangeText} ) {
    return <tr>
        <td>{id}</td>
        <ProductField
            id={id}
            text={name}
            type={"name"}
            ChangeText={ChangeText}
        />
         <ProductField
            id={id}
            text={cost}
            type={"cost"}
            ChangeText={ChangeText}
        />
         <ProductField
            id={id}
            text={catg}
            type={"catg"}
            ChangeText={ChangeText}
        />
    </tr>
}

export default Product;