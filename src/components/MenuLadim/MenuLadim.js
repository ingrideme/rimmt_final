import React from 'react';
import './MenuLadim.css';
import { Link } from 'react-router-dom';

const menuLadim = props => {
    let menuClasses = 'menu-ladim';
    if (props.show) {
        menuClasses = 'menu-ladim open';
    }
    return(
    <nav className={menuClasses}>
        <ul>
            <li><Link to="/cadastro">Cadastro</Link></li>
            <li><Link to="/carrinho">Carrinho</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/">Produtos</Link></li>
        </ul>
    </nav>
    )};

export default menuLadim;