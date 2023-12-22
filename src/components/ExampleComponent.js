import React, { useEffect } from 'react';

function ExampleComponent() {
	// body...
	useEffect(() => {
		console.log("ExampleComponent mounted just now.");
		alert("ExampleComponent mounted just now.");

		return (() => {
			console.log("ExampleComponent will unmount here.");
			alert("ExampleComponent will unmount here.");
		});
	}, []);
}

export default ExampleComponent;