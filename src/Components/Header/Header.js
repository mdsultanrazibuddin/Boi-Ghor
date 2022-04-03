import React from 'react';
// import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'


const Header = () => {
    return (
        <div >
            <div className='link'>
                <nav >
                  
                    <CustomLink className='navbar' to ="/">Home</CustomLink>
                    <CustomLink className='navbar' to="/Reviews">Reviews</CustomLink>
                    <CustomLink className='navbar' to="/DashBoard">DashBoard</CustomLink>
                    <CustomLink className='navbar' to="/Blogs">Blogs</CustomLink>
                    <CustomLink className='navbar' to ="/About">About</CustomLink>

                </nav>
            </div>
            
        </div>
    );
};

export default Header;