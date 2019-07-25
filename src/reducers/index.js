import {combineReducers} from 'redux'
import {showProducts} from './products'

const rootReducer = combineReducers({
    product: showProducts
});

export default rootReducer;
