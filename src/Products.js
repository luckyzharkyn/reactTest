import React from "react";
import Product from "./Product";
import { useState } from "react";

function Products() {
    const initProds = [
        {id: 1, name: 'prod1', cost: 'cost1', catg: 'catg1'},
        {id: 2, name: 'prod2', cost: 'cost2', catg: 'catg2'},
        {id: 3, name: 'prod3', cost: 'cost3', catg: 'catg3'},
    ];

    const [prods, setProds] = useState(initProds);

    const result = prods.map(prod => {
        return <Product key={prod.id}
                        id={prod.id}
                        name={prod.name}
                        cost={prod.cost}
                        catg={prod.catg}
                        ChangeText={ChangeText}
                />
    })

    function ChangeText(id, type, event) {
        setProds(prods.map(prod => {
            if(prod.id === id) {
                return {...prod, [type]: event.target.value}
            } else {
                return prod;
            }
        }))
    }

    return <div>
        <table>
            <tbody>
                {result}
            </tbody>
        </table>
    </div>
    
}

export default Products;