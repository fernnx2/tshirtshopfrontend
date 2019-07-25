import axios from 'axios'
export const SHOW_PRODUCTS = 'SHOW_PRODUCTS'

export function showProducts(page,limit,length){
    return (dispatch,getState)=> {
        axios.get('http://localhost:8080/products?page='+page+"&limit="+limit+"&description_length="+length).then(response=>{
            dispatch({type:SHOW_PRODUCTS,payload:response.data});
        })
    }
}