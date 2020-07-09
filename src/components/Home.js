import React, { useState } from 'react';
import xioamiNote8 from '../img/xioamiNote8.jpg';
import xioamiNote9 from '../img/xioamiNote9.jpg';
import xioamiNote10 from '../img/xiaomiNote10.jpg';
import './Home.css'
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';
import { getNumbers } from '../actions/getAction';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
    console.log(props)
        useEffect(() => {
            getNumbers()
        }, []);


        return(
        <div className="containerdocard">
        <div className="imagem">
        <Link to="/produto"> 
        <img src={xioamiNote8} alt="Xioami Note 8"/>
        </Link>
          <a onClick={() =>props.addBasket('xiaomiNote8')} className="addCarrinho cart1" href="#">Adicionar ao Carrinho</a>
         
          <Link to="/produto"> 
          <h3>Xiaomi Note 8 </h3>
          <h3>R$ 1.498,00 </h3>
          </Link>
        </div>

        
        <div className="imagem">
            <Link to="produto2">
            <img src={xioamiNote9} alt=""/>
            </Link> 
            <a onClick={() =>props.addBasket('xiaomiNote9')} className="addCarrinho cart2" href="#">Adicionar ao Carrinho</a>
            <Link to="produto2">
            <h3>Xiaomi Note 9S</h3>
            <h3>R$ 2.349,00</h3>
            </Link>
        </div>


        <div className="imagem">
            <Link to="produto3">
            <img src={xioamiNote10} alt="Xioami Note 8"/>
            </Link>
            <a onClick={() =>props.addBasket('xiaomiNote8denovo')} className="addCarrinho cart3" href="#">Adicionar ao Carrinho</a>
            <Link to="produto3">
            <h3>Xiaomi Note 10 </h3>
            <h3>R$ 3.679,00 </h3>
            </Link>
        </div>

    </div>    


)
};




export default connect(null, { addBasket } )(Home);

