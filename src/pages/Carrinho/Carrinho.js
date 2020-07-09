  
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { productQuantity, clearProduct } from '../../actions/productQuantity';
import xioamiNote8 from '../../img/xioamiNote8.jpg';
import xioamiNote10 from '../../img/xiaomiNote10.jpg';
import xioamiNote9 from '../../img/xioamiNote9.jpg';

import './Carrinho.css';

function Carrinho({basketProps, productQuantity, clearProduct})  {
  console.log(basketProps);  

  let productsInCart = [];

  Object.keys(basketProps.products).forEach( function(item){
    console.log(item);
    console.log(basketProps.products[item].inCart);
    if(basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item])
    }
    console.log(productsInCart);
  });

  const productImages = (product) => {
    if(product.tagName === 'xiaomiNote8' ) {
      return xioamiNote8;
    } else if (product.tagName === 'xiaomiNote9') { 
      return xioamiNote9; 
    } else if (product.tagName === 'xiaomiNote8denovo' ) {
      return xioamiNote10;
    }
  }
  productsInCart = productsInCart.map( (product, index) => {
    console.log("Meus produtos:")
    console.log(product)

    return (
      <Fragment key={index} >
        <div className="products-info">
          <div className="product"><ion-icon onClick={() => clearProduct(product.tagName)} name="close-circle"></ion-icon><img src={productImages(product)}/>
              <span className="sm-hide">{product.name}</span>
          </div>
          <div className="price sm-hide">R${product.price},00</div>
          <div className="quantity">
            <ion-icon onClick={() => productQuantity('decrease', product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
              <span>{product.numbers}</span>
              <ion-icon onClick={() => productQuantity('increase',  product.tagName)} className="increase" name="arrow-forward-circle-outline"></ion-icon>   
          </div>
          <div className="total">R${product.numbers * product.price},00</div>
        </div>
      </Fragment>
    )
  
  });

  return (
      <div className="container-products">
          <h5 className="product-title">PRODUTO</h5>
          <h5 className="price sm-hide">PREÇO</h5>
          <h5 className="quantity">QUANTIDADE</h5>
          <h5 className="total">TOTAL</h5>
        <div className="products">
          { productsInCart }
        </div>
        <div className="basketTotalContainer">
            <h4 classname="basketTotalTitle">Total no carrinho</h4>
            <h4 className="basketTotal">R${ basketProps.cartCost},00</h4>
        </div>
        <button className="buttoncarro" type="button">Finalizar Compra</button>
      </div>    
      
    )
}
const mapStateToProps = state => ({
  basketProps: state.basketState
});

export default connect(mapStateToProps, { productQuantity, clearProduct }) (Carrinho);