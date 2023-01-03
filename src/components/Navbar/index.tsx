import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='wrapper-navbar'>
            <NavLink className='nav-link' to="/">Home</NavLink>
            <NavLink className='nav-link' to="/create">Create</NavLink>
            <NavLink className='nav-link' to="/delete">Delete</NavLink>
            <NavLink className='nav-link' to="/pagination">Pagination</NavLink>
            <NavLink className='nav-link' to="/update">Update</NavLink>
        </div>
    )
}

export default NavBar;