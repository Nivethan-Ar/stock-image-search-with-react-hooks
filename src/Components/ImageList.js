import React from 'react';
import '../Components/ImageList.css';

export default function ImageList(props) {
	const image = props.images.map((cimage,index) => {
		return (
			<div key={index} className='card'>
				<img  src={cimage.urls.small} alt='' />
			</div>
		);
	});
	return (
		<div>
			<ul className='grid'>{image}</ul>
		</div>
	);
}
