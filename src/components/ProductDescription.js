import React from 'react';
import classes from './ProductDescription.module.css';

const ProductDescription = () => {
	return (
		<div className={classes['product-description']}>
			<div className={classes['description-wrapper']}>
				<p className={classes['sneaker-company']}>Sneaker Company</p>
				<h1 className={classes['fles-title']}>Fall Limited Edition Sneaker</h1>
				<p className={classes['fles-des']}>
					These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer
					sole, they'll withstand everything the weather can offer.
				</p>
				<div className={classes['price-discount']}>
					<span className={classes.price}>$125.00</span>
					<span className={classes.discount}>50%</span>
				</div>
				<p className={classes['original-price']}>$250.00</p>
			</div>
		</div>
	);
};

export default ProductDescription;
