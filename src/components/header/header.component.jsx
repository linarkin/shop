import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <div className="header">
        <div><Link to="/">Logo</Link></div>
        <div>
            <Link class="header__link" to="/shop">Shop</Link>
            <Link class="header__link" to="/contact">Cntact</Link>
            <Link class="header__link" to="/signin">Sign in</Link>
        </div>
    </div>
);

export default Header;