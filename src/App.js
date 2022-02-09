import React, { useState } from "react";

function App() {
	const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e'])
	const [editNum, setEditNum] = useState(null)
	const [value, setValue] = useState("")

	const result = notes.map((note, index) => {
		return <li key={index} onClick={() => setEditNum(index)}>{note}</li>
	})

	function changeItem(event) {
		setNotes([...notes.slice(0, editNum), event.target.value, ...notes.slice(editNum + 1)])
	}

	let input;
	if(editNum) {
		input = <input value={notes[editNum]} onChange={(event) => {changeItem(event); setValue(event.target.value)} } onBlur={() => {setEditNum(null); }}/>
	} else {
		input = <input value={value} onChange={(event) => setValue(event.target.value)} onBlur={() => setNotes([...notes, value])} />
	}

	return <div>
		<ul>{result}</ul>
		{input}
	</div>
}


export default App;
