import React, { useState } from 'react';

function Search() {
	// body...
	const [search, setSearch] = useState('');
	const [filteredFruits, setFilteredFruits] = useState([]);
	const fruits = ['banana', 'apple', 'orange', 'mango', 'pineapple', 'watermelon'];
	return(
		<div>
			{fruits.map(fruit => <ul>
				<li key="fruit.key">{fruit}</li>
			</ul>)}
		</div>
	);
}

export default Search;