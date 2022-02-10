import React, { useState } from "react";

function App() {
	const [obj, setObj] = useState({
		prop1: 'value1',
		prop2: 'value2',
		prop3: 'value3'
	})

	function changeInput(prop, event) {
		setObj({...obj, ...{[prop]: event.target.value}})
	}

	return <div>
		<input value={obj.prop1} onChange={(event) => changeInput('prop1', event)} />
		<input value={obj.prop2} onChange={(event) => changeInput('prop2', event)} />
		<input value={obj.prop3} onChange={(event) => changeInput('prop3', event)} />

		<br />

		{obj.prop1} - {obj.prop2} - {obj.prop3}
	</div>
}


export default App;
