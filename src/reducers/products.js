import {SHOW_PRODUCTS} from "../actions/products";

const initialState = {
    list: []
}

export function showProducts(state = initialState, action) {
    switch (action.type) {
        case SHOW_PRODUCTS:
            return Object.assign({}, state, {list: action.payload});
        default:
            return state;
    }
}