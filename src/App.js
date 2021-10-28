import React, { useState, useEffect } from 'react';
import SearchItems from './Components/SearchItems';
import unsplashAPI from './api/unsplashAPI';
import ImageList from './Components/ImageList';
import './App.css';

export default function App() {
	const [term, setTerm] = useState('cat');
	const [images, setImages] = useState([]);

	const onSearchSubmit = (childData) => {
		setTerm(childData);
	};
	useEffect(() => {
		const search = async () => {
			const response = await unsplashAPI.get('/search/photos', {
				params: { query: term, orientation: 'landscape', per_page: '12' },
			});
			console.log(response.data.results);
			setImages(response.data.results);
		};
		search();
	}, [term]);

	return (
		<div>
			<div className='search-container'>
				<SearchItems passQuery={onSearchSubmit} />
			</div>
			<div className='image-container'>
				<ImageList images={images} />
			</div>
		</div>
	);
}
