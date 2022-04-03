import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>amr nam sultan razib uddin</h1>
            <nav>
            <Link to ="/">Home</Link>
            <Link to="/Reviews">Reviews</Link>
            <Link to="/DashBoard">DashBoard</Link>
            <Link to="/Blogs">Blogs</Link>
            <Link to ="/About">About</Link>

            </nav>
            
        </div>
    );
};

export default Header;