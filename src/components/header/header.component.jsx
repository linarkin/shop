import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


const Header = ({currentUser, hidden}) => (
    <div className="header">
        <div><Link to="/">Logo</Link></div>
        <div className="header__menu">
            <Link className="option header__link" to="/shop">Shop</Link>
            <Link className="option header__link" to="/contact">Cntact</Link>
            {
                currentUser ? 
                    <div className="option header__link" onClick={()=> auth.signOut()}>Sign out</div>
                
                : (
                    <Link className="option header__link" to="/signin">Sign in</Link>
                )
            }
            <CartIcon/>
        </div>
        {
            hidden ? null : <CartDropdown/>
        }
    </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);