import React, { useState } from "react";

function App() {
	const mass = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	const [notes, setNotes] = useState(mass);

	const result = notes.map((note, index) => {
		return <p key={index}>{note}</p>
	})

	const inputs = notes.map((note, index) => {
		return <input key={index} value={note} onChange={(event) => changeInput(index, event.target.value)}/>
	})

	function changeInput(id, value) {
		setNotes([...notes.slice(0, id), value, ...notes.slice(id + 1)])
	}

	return (
		<div>
			{result}
			{inputs}
		</div>
	)
	
}


export default App;
