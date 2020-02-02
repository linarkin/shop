import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({currentUser}) => (
    <div className="header">
        <div><Link to="/">Logo</Link></div>
        <div>
            <Link className="option header__link" to="/shop">Shop</Link>
            <Link className="option header__link" to="/contact">Cntact</Link>
            {
                currentUser ? 
                    <div className="option header__link" onClick={()=> auth.signOut()}>Sign out</div>
                
                : (
                    <Link className="option header__link" to="/signin">Sign in</Link>
                )
            }
        </div>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);