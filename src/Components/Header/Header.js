import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'


const Header = () => {
    return (
        <div >
            <div className='link'>
                <nav >
                  
                    <Link className='navbar' to ="/">Home</Link>
                    <Link className='navbar' to="/Reviews">Reviews</Link>
                    <Link className='navbar' to="/DashBoard">DashBoard</Link>
                    <Link className='navbar' to="/Blogs">Blogs</Link>
                    <Link className='navbar' to ="/About">About</Link>

                </nav>
            </div>
            
        </div>
    );
};

export default Header;