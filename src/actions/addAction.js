import { ADD_PRODUCT_BASKET } from './types';

export const addBasket =(productName) => {
    return(dispatch) => {
        console.log("Adicionando ao carrinho");
        console.log("Produto: ", productName );
        dispatch({
            type: ADD_PRODUCT_BASKET,
            payload: productName
        });
    }
}