import React, { useState } from "react";

function App() {

	const [value, setValue] = useState([1, 2, 3, 4, 5]);

	const result = value.map((elem, index) => {
		return <span key={index} onClick={() => {ChangeElem(index)}}>{elem} </span>
	})

	function AddElem() {
		setValue([...value, value.length + 1])
	}

	function RemoveLastElem() {
		let copy = Object.assign([], value);
		copy.pop()
		setValue(copy);
	}

	function ChangeElem(id) {
		setValue([...value.slice(0, id), "!", ...value.slice(id + 1)])
	}

	function ReverseMass() {
		let copy = Object.assign([], value);
		copy = copy.reverse()
		setValue(copy)
	}

	return <div>
		{result}
		<button onClick={AddElem}>add</button>
		<button onClick={RemoveLastElem}>delete</button>
		<button onClick={ReverseMass}>reverse</button>
	</div>
}


export default App;
