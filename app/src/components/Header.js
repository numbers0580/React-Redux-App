import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div>
            <h1>Market Comparison Tool</h1>
            <nav>
                <Link to='/search'><button>Begin Search</button></Link>
                <Link to='/'><button>Clear Page</button></Link>
            </nav>
        </div>
    );
};

export default Header;