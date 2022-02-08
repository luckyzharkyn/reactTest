import React, { useState } from "react";

function App() {
	const notes = ['a', 'b', 'c', 'd', 'e'];
	const [value, setValue] = useState(notes);
	const [value2, setValue2] = useState('');

	const result = value.map((elem, index) => {
		return <li key={index} onClick={() => {ChangeElem(index)}}>{elem} </li>
	})

	function AddElem() {
		if(value2 != "") {
			setValue([...value, value2])
			setValue2("")
		} else {
			setValue([...value, value.length + 1])
		}
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
		<ul>{result}</ul>
		<input value={value2} onChange={(event) => {setValue2(event.target.value)}} onBlur={AddElem}/>
		<button onClick={AddElem}>add</button>
		<button onClick={RemoveLastElem}>delete</button>
		<button onClick={ReverseMass}>reverse</button>
	</div>
}


export default App;
