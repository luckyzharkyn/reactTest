import React, { useState } from "react";

function App() {
	const initNotes = [
		{	id: 1,
			text: 'note1',
			isEdit: false
		},
		{	id: 2,
			text: 'note2',
			isEdit: false
		},
		{	id: 3,
			text: 'note3',
			isEdit: false
		}
	]; 

	const [notes, setNotes] = useState(initNotes);

	const result = notes.map(note => {
		let elem;

		if(!note.isEdit) {
			elem = note.text;
		} else {
			elem = <input value={note.text} onChange={(event) => changeText(note.id, event)}/>
		}

		return <li key={note.id}>{elem}
		<button onClick={() => startChoose(note.id, note.isEdit)}>{note.isEdit ? "save" : "change"}</button>
		</li>
	});

	function changeText(id, event) {
		changeIsEdit(id, event.target.value, 'text')
	}

	function startChoose(id, isEdit) {
		if(!isEdit) {
			changeIsEdit(id, true);
		} else {
			changeIsEdit(id, false);
		}
	}

	function changeIsEdit(id, value, key='isEdit') {
		setNotes(notes.map(note => {
			if(note.id === id) {
				return {...note, [key]: value}
			} else {
				return note;
			}
		}))
	}

	return <div>
		<ul>{result}</ul>
	</div>
}

export default App;
