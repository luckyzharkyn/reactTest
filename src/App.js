import React, { useState } from "react";

function App() {

	const [value, setValue] = useState([1, 2, 3, 4, 5]);

	const result = value.map((elem, index) => {
		return <span key={index}>{elem}</span>
	})

	function AddElem() {
		setValue([...value, value.length + 1])
	}

	return <div>
		{result}
		<button onClick={AddElem}>add</button>
	</div>
}


export default App;
