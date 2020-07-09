import { INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from './types';

export const productQuantity = (action, name) => {
    return (dispatch) => {
        console.log("qtd produto");
        console.log("A action é ", action);
        console.log("O nome do produto é ", name);
        dispatch({
            type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
            payload: name

        })
    }
}

export const clearProduct = (name) => {
    return (dispatch) => {
        console.log("limpar produto");
        console.log("produto nome ", name);
        
        dispatch({
            type: CLEAR_PRODUCT,
            payload: name

        })
    }

}