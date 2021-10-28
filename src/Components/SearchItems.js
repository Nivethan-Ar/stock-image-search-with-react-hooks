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
		// console.log(query);
	};

	return (
		<div className='container'>
			<form className='wrapper' action='' onSubmit={(e) => onFormSubmit(e)}>
				<input placeholder='search for any image eg: dog' className='searchInput' type='text' onChange={(e) => onInputChange(e)} />
			</form>
		</div>
	);
}
