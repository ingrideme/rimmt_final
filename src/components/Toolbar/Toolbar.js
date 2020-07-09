import React, { useEffect } from 'react';
import DesenhoBotaoLadim from '../MenuLadim/DesenhoBotaoLadim'
import './Toolbar.css';
import Carrim from '../../img/carrim.png'
import { connect } from 'react-redux';
import { getNumbers } from '../../actions/getAction';
import { Link } from 'react-router-dom';

function Toolbar(props) {
         useEffect(() => {
            getNumbers() }
        , []);

        return (
     
         <header className="toolbar">
            <nav className="toolbar__navigation">
                        
                <div className="toolbar__logo"><Link to="/">RIMMT</Link></div>
                <div className="spacer"/> 
                <div className="toolbar_navigations-items">
                    <ul>    
                        <li><Link to="/carrinho"> {props.basketProps.basketNumbers} <img src={Carrim} alt="carrinho" /> </Link> </li>

                    </ul>   
                </div>
                <div>   
                    <DesenhoBotaoLadim click={props.menuClickHandler}/>
                </div>    
            </nav>
        </header>
         )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})
export default  connect(mapStateToProps, { getNumbers }) (Toolbar);