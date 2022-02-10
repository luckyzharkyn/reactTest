import React, { useState } from "react";

function App() {

	const initProds = [
		{id: 1, name: 'prod1', catg: 'catg1', cost: 100},
		{id: 2, name: 'prod2', catg: 'catg2', cost: 200},
		{id: 3, name: 'prod3', catg: 'catg3', cost: 300},
	];
	const [notes, setNotes] = useState(initProds);
	
	const result = notes.map(note => {
		return <tr key={note.id}>
			<td>{note.name}</td>,
			<td>{note.catg}</td>,
			<td>{note.cost}</td>,
		</tr>;
	});
		
	
	return <div>
		<table><tbody>{result}</tbody></table>
	</div>;
}


export default App;
