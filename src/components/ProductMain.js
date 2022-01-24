import React from 'react';
import ProductGallery from './ProductGallery';
import ProductDescription from './ProductDescription';
import classes from './ProductMain.module.css';

const ProductMain = () => {
	return (
		<div className={classes['product-main']}>
			<ProductGallery />
			<ProductDescription />
		</div>
	);
};

export default ProductMain;
