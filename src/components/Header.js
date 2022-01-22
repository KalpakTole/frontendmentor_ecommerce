import React from 'react';
import classes from './Header.module.css';
import AppLogo from '../assets/logo.svg';
import CartIcon from '../assets/icon-cart.svg';
import UserAvatar from '../assets/image-avatar.png';

const Header = () => {
	return (
		<>
			<header className={classes['app-header']}>
				<div className={classes['menu-container']}>
					<img src={AppLogo} alt='Snee-Commerce Logo' className={classes['app-logo']} />
					<span className={classes['menu-collections']}>Collections</span>
					<span className={classes['menu-men']}>Men</span>
					<span className={classes['menu-women']}>Women</span>
					<span className={classes['menu-about']}>About</span>
					<span className={classes['menu-contact']}>Contact</span>
				</div>
				<div className={classes['profile-container']}>
					<img src={CartIcon} alt='Cart Icon' className={classes['cart-icon']} />
					<img src={UserAvatar} alt='User Avatar' className={classes['user-avatar']} />
				</div>
			</header>
		</>
	);
};

export default Header;
