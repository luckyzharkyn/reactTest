import React, { useState } from "react";

function App() {
	let initNotes = [
		{
			id: 1,
			fields: [
				{name: 'prop1', prop1: 'value11', isEdit: false},
				{name: 'prop2', prop2: 'value12', isEdit: false},
				{name: 'prop3', prop3: 'value13', isEdit: false},
			]
		},
		{
			id: 2,
			fields: [
				{name: 'prop1', value: 'value21', isEdit: false},
				{name: 'prop2', value: 'value22', isEdit: false},
				{name: 'prop3', value: 'value23', isEdit: false},
			]
		},
		{
			id: 3,
			fields: [
				{name: 'prop1', value: 'value31', isEdit: false},
				{name: 'prop2', value: 'value32', isEdit: false},
				{name: 'prop3', value: 'value33', isEdit: false},
			]
		},
	];

	const [notes, setNotes] = useState(initNotes);

	const rows = notes.map(note => {
		const cells = note.fields.map(field => {
			let elem;

			if(!field.isEdit) {
				elem = <span onClick={() => chooseEdit(note.id, field.name, true)}>{field.value}</span>
			} else {
				elem = <input 
					value={field.value}
					onChange={(event) => chooseEdit(note.id, field.name, event.target.value, 'value')}
					onBlur={() => chooseEdit(note.id, field.name, false)}
					/>
			}

			return <td key={field.name}>{elem}</td>
		})

		return <tr key={note.id}>{cells}</tr>
	})

	function chooseEdit(id, name, value, key='isEdit') {
		setNotes(notes.map(note => {
			if(note.id === id) {
				const fields = note.fields.map(field => {
					if(field.name === name) {
						return {...field, [key]: value}
					} else {
						return field;
					}
				})
				return {id, fields};
			} else {
				return note;
			}
		}))
	}

	return <div>
		<table>
			<tbody>
				{rows}
			</tbody>
		</table>

	</div>
}

export default App;
