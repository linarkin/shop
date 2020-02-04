import React from 'react';
import CustomButton from '../customButton/customButton.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButton>Go to checkout</CustomButton>
    </div>
);

export default CartDropdown;