import React, { useState, useEffect } from 'react';
import classes from './ProductGallery.module.css';
import IP1 from '../assets/image-product-1.jpg';
import IP2 from '../assets/image-product-2.jpg';
import IP3 from '../assets/image-product-3.jpg';
import IP4 from '../assets/image-product-4.jpg';
import IP1_Thumb from '../assets/image-product-1-thumbnail.jpg';
import IP2_Thumb from '../assets/image-product-2-thumbnail.jpg';
import IP3_Thumb from '../assets/image-product-3-thumbnail.jpg';
import IP4_Thumb from '../assets/image-product-4-thumbnail.jpg';

const ProductGallery = () => {
	const [currentImage, setCurrentImage] = useState(IP1);

	const changeCurrentImageHandler = (event) => {
		const curProd = event.target.alt;
		const last = curProd.charAt(curProd.length - 1);
		if (last === '1') {
			setCurrentImage(IP1);
		}
		if (last === '2') {
			setCurrentImage(IP2);
		}
		if (last === '3') {
			setCurrentImage(IP3);
		}
		if (last === '4') {
			setCurrentImage(IP4);
		}
	};

	

	return (
		<div className={classes['product-gallery']}>
			<img src={currentImage} alt='Product MainImage' className={classes['main-image']}></img>
			<div className={classes['thumbnails']}>
				<img
					src={IP1_Thumb}
					alt='Product Thumbnail 1'
					className={`${classes['thumbnail-1']} ${classes['active']}`}
					onClick={changeCurrentImageHandler}
				></img>
				<img
					src={IP2_Thumb}
					alt='Product Thumbnail 2'
					className={classes['thumbnail-2']}
					onClick={changeCurrentImageHandler}
				></img>
				<img
					src={IP3_Thumb}
					alt='Product Thumbnail 3'
					className={classes['thumbnail-3']}
					onClick={changeCurrentImageHandler}
				></img>
				<img
					src={IP4_Thumb}
					alt='Product Thumbnail 4'
					className={classes['thumbnail-4']}
					onClick={changeCurrentImageHandler}
				></img>
			</div>
		</div>
	);
};

export default ProductGallery;
