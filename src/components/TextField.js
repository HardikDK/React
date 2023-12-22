import React, { useState } from 'react';

function TextField() {
	// body...
	const [username, setUsername] = useState('');
	const handleSubmit = (event) => {
		event.preventDefault();
		setUsername(event.target.fName.value)
		console.log(event.target.fName.value)
	}
	return (
		<form onSubmit={handleSubmit}>
			<input type="text" id="fName" name="fName" style={{border:"1px solid black"}}/>
			<button>Submit</button>
			<p>TextField: {username}</p>
		</form>
	);
}
export default TextField;