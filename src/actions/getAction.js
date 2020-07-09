import { GET_NUMBERS_CARRINHO } from "./types";

import { GET_NUMBERS_BASKET } from './types';

export const getNumbers = () => {
    return (dispatch) => {
        console.log("Pegando quantidade do carrinho");
        dispatch({
            type: GET_NUMBERS_BASKET
        })
    }

}