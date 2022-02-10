import React, { useState } from "react";

function App() {
	const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e'])
	const [editNum, setEditNum] = useState(null)
	const [value, setValue] = useState("")

	const result = notes.map((note, index) => {
		return <li key={index} onClick={() => startEdit(index)}>{note}</li>
	})

	function startEdit(index) {
		setEditNum(index);
		setValue(notes[index])
	}

	function changeInput(event) {
		setValue(event.target.value);

		if(editNum) {
			setNotes([...notes.slice(0, editNum), event.target.value, ...notes.slice(editNum + 1)])
		}
	}

	function addItem(event) {
		if(value != "") {
			if(editNum) {
				setEditNum(null)
			} else {
				setNotes([...notes, value])
			}
			setValue("")
		}
	}

	return <div>
		{result}
		<input value={value} onChange={(event) => changeInput(event)} onBlur={(event) => addItem(event)} />
	</div>
}


export default App;
