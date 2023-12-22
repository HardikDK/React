import React, { useRef, useState } from 'react';

function Text() {
	// body...
	const username = useRef('');
	let [text, setText] = useState('');
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(username);
		alert(username.current.value);
		setText(username.current.value);
	}
	return (
		<div>
			<input type="text" ref={username} style={{border:"1px solid black"}}/>
			<button onClick={handleSubmit}>Submit</button>
			<p>Text: {text}</p>
		</div>
	);
}
export default Text;