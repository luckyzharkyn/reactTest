import React, { useState } from "react";

function App() {
	const initProds = [
		{
			id: 1,
			name: 'prod1',
			cost: 'cost1',
			desc: 'long description 1',
			comm: 'my super comment 1',
			descShow: false,
			commShow: false
		},
		{
			id: 2,
			name: 'prod2',
			cost: 'cost2',
			desc: 'long description 2',
			comm: 'my super comment 2',
			descShow: false,
			commShow: false
		},
		{
			id: 3,
			name: 'prod3',
			cost: 'cost3',
			desc: 'long description 3',
			comm: 'my super comment 3',
			descShow: false,
			commShow: false
		},
	];

	const [notes, setNotes] = useState(initProds);

	const result = notes.map(note => {
		let descShow, commShow;
		if(note.descShow) {
			descShow = ", " + note.desc;
		}
		if(note.commShow) {
			commShow = ", " + note.comm;
		}


		return <li key={note.id}>{note.name}, {note.cost} {descShow} {commShow} 
		<button onClick={() => showDesc(note.id)}>{note.descShow ? "hideDesc" : "showDesc"}</button>
		<button onClick={() => showComm(note.id)}>{note.commShow ? "hideComm" : "showComm"}</button>
		</li>
	})

	function showDesc(id) {
		setNotes(notes.map(note => {
			if(note.id === id) {
				return {...note, descShow: !note.descShow}
			} else {
				return note;
			}
		}))
	}

	function showComm(id) {
		setNotes(notes.map(note => {
			if(note.id === id) {
				return {...note, commShow: !note.commShow}
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
