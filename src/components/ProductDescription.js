import React, { useState, useEffect } from 'react';
import classes from './ProductDescription.module.css';
import CartIcon from '../assets/icon-cart.svg';
import MinusIcon from '../assets/icon-minus.svg';
import PlusIcon from '../assets/icon-plus.svg';

const ProductDescription = () => {
	const [curAmount, setCurAmount] = useState(0);
	const [showDecrease, setShowDecrease] = useState(false);

	const amountHandler = (type) => {
		if (type === 'decrease') {
			setCurAmount((prevState) => prevState - 1);
		} else if (type === 'increase') {
			setCurAmount((prevState) => prevState + 1);
		}
	};

	const addToCartHandler = () => {};

	useEffect(() => {
		if (curAmount <= 0) {
			setShowDecrease(false);
		} else {
			setShowDecrease(true);
		}
	}, [curAmount]);

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
				<div className={classes['button-container']}>
					<span className={classes['change-amount']}>
						<button
							className={classes['minus-button']}
							disabled={!showDecrease}
							onClick={() => amountHandler('decrease')}
						>
							<img src={MinusIcon} alt='Decrease quantity to be added' />
						</button>
						<span className={classes['current-amount']}>{curAmount}</span>
						<button className={classes['plus-button']} onClick={() => amountHandler('increase')}>
							<img src={PlusIcon} alt='Increase quantity to be added' />
						</button>
					</span>
					<button className={classes['add-to-cart']} onClick={addToCartHandler}>
						<img src={CartIcon} alt='Add to cart Icon' className={classes['add-to-cart-icon']} />
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductDescription;
