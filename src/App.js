import React, { useState } from "react";

function App() {
	const [value, setValue] = useState("text");
	const [isEdit, setIsEdit] = useState(false);

	let elem;
	if(!isEdit) {
		elem = <p>{value}</p>
	} else {
		elem = <input value={value} onChange={(event) => setValue(event.target.value)}/>
	}

	return <div>
		{elem}
		<button onClick={() => setIsEdit(true)}>Edit</button>
		<button onClick={() => setIsEdit(false)}>Save</button>
	</div>
}

export default App;
