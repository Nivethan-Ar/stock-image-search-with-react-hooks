import React, { useState } from 'react';
import '../Components/Search.css';

export default function SearchItems(props) {
	const [query, setQuery] = useState('');

	const onFormSubmit = (e) => {
		e.preventDefault();
		props.passQuery(query);
	};

	const onInputChange = (e) => {
		setQuery(e.target.value);
	};

	return (
		<div className='container'>
			<form className='wrapper' action='' onSubmit={onFormSubmit}>
				<input placeholder='search for any image eg: dog' className='searchInput' type='text' onChange={onInputChange}
				/>
			</form>
		</div>
	);
}
