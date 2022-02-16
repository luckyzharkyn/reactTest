import React, { useState } from "react";
import Product from "./Product";
import User from "./User";

function App() {
	const prods = [
		{id: 1, name: 'product1', cost: 100},
		{id: 2, name: 'product2', cost: 200},
		{id: 3, name: 'product3', cost: 300},
	];

	const users = [
		{id: 4, name: "Zharkyn", surname:"Markabayev", age:"24"},
		{id: 5, name: "Edil", surname:"Kenesbek", age:"30"},
		{id: 6, name: "Papa", surname:"Markabayev", age:"50"},
	];

	const result = users.map(user => {
		return <User name={user.name} surname={user.surname} age={user.age} />
	})

	return <div>
		{/* <Product name={prods[0].name} cost={prods[0].cost}/>
		<Product name={prods[1].name} cost={prods[1].cost}/>
		<Product name={prods[2].name} cost={prods[2].cost}/> */}

		<table>
			<tbody>
				{result}
			</tbody>
		</table>
	</div>
}

export default App;
