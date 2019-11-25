import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/menu.scss';
import CartCounter from './Atoms/CartCounter';

const MainMenu = () => (
    <nav>
        <ul className="mainMenu">
            <li>
                <NavLink exact to="/" activeClassName="is-active">Home</NavLink> 
            </li>
            <li>
                <NavLink to="/card" activeClassName="is-active">Card</NavLink>
            </li>
            <li>
                <NavLink to="/slider" activeClassName="is-active">Slider</NavLink>
            </li>
            <li>
                <NavLink to="/historial" activeClassName="is-active">Historial</NavLink>
            </li>
            <li>
                <NavLink to="/usuarios" activeClassName="is-active">Usuarios</NavLink>
            </li>
            <li>
                <NavLink to="/formulario" activeClassName="is-active">Formulario</NavLink>
            </li>
            <CartCounter />
        </ul>
    </nav>
)

export default MainMenu;