import React, { useState, useEffect } from 'react';

function Posts(){
	const [posts, setPosts] = useState([]);
	const fetchData = async () => {
		try{
			// You can await here
			const response = await fetch('https://dummyjson.com/todos');
			// ...
			// 
			const data = await response.json()
						console.log("data=>" ,data);

			setPosts(data.todos)
		} catch (e) {
			console.log("error" , e)
		}
	}
	// clearTimeout(() => {
	// 	fetchData();
	// }, 1000);
	useEffect(() => {
		fetchData();
	}, []);
	return(
		<div>
			<ul>
				{posts.map(post => <li key={post.id}>{post.id}. {post.todo}</li>)}
			</ul>
		</div>
	);
}

export default Posts;