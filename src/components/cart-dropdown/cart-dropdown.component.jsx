import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../customButton/customButton.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustomButton>Go to checkout</CustomButton>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItemsCount(state)
});

export default connect(mapStateToProps)(CartDropdown);