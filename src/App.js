import React, { useState } from "react";

function App() {
	function getReadyObj() {
		return {
			id: 4,
			name: '',
			catg: '',
			cost: ''
		}
	}

	const initProds = [
		{id: 1, name: 'prod1', catg: 'catg1', cost: 100},
		{id: 2, name: 'prod2', catg: 'catg2', cost: 200},
		{id: 3, name: 'prod3', catg: 'catg3', cost: 300},
	];
	const [notes, setNotes] = useState(initProds);
	const [obj, setObj] = useState(getReadyObj());
	
	const result = notes.map(note => {
		return <tr key={note.id}>
			<td>{note.name}</td>
			<td>{note.catg}</td>
			<td>{note.cost}</td>
			<td><button onClick={(event) => remItem(note.id)}>delete this</button></td>
		</tr>;
	});

	function remItem(id) {
		setNotes(notes.filter(note => note.id !== id))
	}

	function changeObj(propName, event) {
		setObj({...obj, [propName]: event.target.value})
	}

	function addItem() {
		setNotes([...notes, obj])
	}
	
	return <div>
		<table><tbody>{result}</tbody></table>

		<input value={obj.name} onChange={(event) => changeObj('name', event)} />
		<input value={obj.catg} onChange={(event) => changeObj('catg', event)} />
		<input value={obj.cost} onChange={(event) => changeObj('cost', event)} />
		<button onClick={addItem}>add new obj</button>
	</div>;
}


export default App;
