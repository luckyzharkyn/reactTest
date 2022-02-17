import React from "react";
import Product from "./Product";
import { useState } from "react";

function Products() {

    const initProds = [
		{id: 1, name: 'product1', cost: 100, isEdit: false},
		{id: 2, name: 'product2', cost: 200, isEdit: false},
		{id: 3, name: 'product3', cost: 300, isEdit: false},
	];

	const [prods, setProds] = useState(initProds);

    const items = prods.map(item => {
        return <Product 
            key={item.id}
            id={item.id}
            name={item.name}
            cost={item.cost}
            isEdit={item.isEdit}
            toggleMode={toggleMode}
            editProd={editProd}
        />;
    })

    function toggleMode(id) {
        setProds(prods.map(prod => {
            if(prod.id === id) {
                prod.isEdit = !prod.isEdit;
            } 
                return prod;
           
        }))
    }

    function editProd(id, field, event) {
        setProds(prods.map(prod => {
            if (prod.id === id) {
                prod[field] = event.target.value;
            }
            
            return prod;
        }));
    }

    return <div>
        {items}
    </div>
}

export default Products;