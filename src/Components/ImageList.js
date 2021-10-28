import React from 'react';
import '../Components/ImageList.css';

export default function ImageList(props) {
	const imageList = props.images.map((currentImage, index) => {
		return (
			<div key={index} className='card'>
				<img src={currentImage.urls.small} alt='' />
			</div>
		);
	});
	return (
		<div>
			<ul className='grid'>{imageList}</ul>
		</div>
	);
}
