import React, { Component } from 'react';

import './style.css';

export default class Posts extends Component {
	state = {
		posts: [],
	}

	componentDidMount() {
		this.Renderizar();
	}

	// I know that we can use Axios to do Requests here.
	// But i'm learn Next.js do use React.js into Node.js.
	// Doing it, we can get a React application with SEO for Google.
	Renderizar = () => {
		this.setState({ posts: [
			'Hello', 'World'
		] });
	}

	render() {
		const { posts } = this.state;

		return (
			<div className='Posts'>
				{posts.map(post => (
					<h1>{post}</h1>
				))}
			</div>
		);
	}
}