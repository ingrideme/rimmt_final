import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, DECREASE_QUANTITY, INCREASE_QUANTITY, CLEAR_PRODUCT } from "../actions/types";

const initialState = {
    basketNumbers: 0,
    cartCost: 0, 
    products: {
        xiaomiNote8: {
            name: "Xiaomi Note 8",
            tagName: 'xiaomiNote8',
            price: 1498,
            numbers: 0,
            inCart: false
        },
        xiaomiNote9: {
            name: "Xiaomi Note 9",
            tagName: 'xiaomiNote9',
            price: 1730,
            numbers: 0,
            inCart: false
        },
        xiaomiNote8denovo: {
            name: "Xiaomi Note 10",
            tagName: 'xiaomiNote8denovo',
            price: 3679,
            numbers: 0,
            inCart: false
        },
    }
}

export default (state = initialState, action) => {
    let productSelected = "";
    
    switch(action.type) {    
        case ADD_PRODUCT_BASKET:
           productSelected = { ...state.products[action.payload]}
           
           productSelected.numbers += 1;
            productSelected.inCart = true;
            console.log(productSelected);

        return {
            ...state, 
            basketNumbers: state.basketNumbers + 1,
            cartCost: state.cartCost + state.products[action.payload].price,
            products: {
                ...state.products,
                [action.payload]: productSelected
            }
        }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        case INCREASE_QUANTITY:
            productSelected = { ...state.products[action.payload]}
            productSelected.numbers += 1;
                return {
                    ...state,
                    basketNumbers: state.basketNumbers + 1,
                    cartCost: state.cartCost + state.products[action.payload].price,
                    products: {
                        ...state.products, 
                        [action.payload]: productSelected
                    }
                }
         case DECREASE_QUANTITY:
            productSelected = { ...state.products[action.payload]};
                let newCartCost = 0;
                let newBasketNumbers = 0;
                if(productSelected.numbers === 0) {
                    productSelected.numbers = 0;
                    newCartCost = state.cartCost
                    newBasketNumbers = state.basketNumbers
                }else {
                    productSelected.numbers -= 1;
                    newCartCost = state.cartCost - state.products[action.payload].price
                    newBasketNumbers = state.basketNumbers - 1
                }

                return {
                    ...state,
                    basketNumbers: newBasketNumbers,
                    cartCost: newCartCost,
                    products: {
                        ...state.products, 
                        [action.payload]: productSelected
                    }
                }
                case CLEAR_PRODUCT:
                    productSelected = { ...state.products[action.payload]}; 
                    let numbersBackup = productSelected.numbers;
                    productSelected.numbers = 0
                    productSelected.inCart = false;
                    return {
                        ...state,
                        basketNumbers: state.basketNumbers - numbersBackup,
                        cartCost: state.cartCost - (numbersBackup * productSelected.price),
                        products: {
                            ...state.products, 
                            [action.payload]: productSelected
                        }
                    }                                        
                        default:  
                            return state;
   }
 }
