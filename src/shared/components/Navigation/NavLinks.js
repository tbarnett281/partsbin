import React from 'react';
import './NavLinks.css';
import { NavLink } from 'react-router-dom';

const NavLinks = props => {
    return <ul className='nav-links'>
    <li>
        <NavLink to='/' exact> ALL USERS </NavLink>
    </li>
    <li>
        <NavLink to = '/hardware/inventory'>Inventory</NavLink>
    </li>
    <li>
        <NavLink to = '/hardware/create/rma'>RMA</NavLink>
    </li>
    <li>
        <NavLink to = '/hardware/replacements'>Hardware Replacements</NavLink>
    </li>
    <li>
        <NavLink to='/auth'>Authenticate</NavLink>
    </li>
    </ul>
};

export default NavLinks;