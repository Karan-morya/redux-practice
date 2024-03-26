import { createStore, combineReducers } from "redux"
import cartReducer from "./reducers/cartReducer"
import productReducer from "./reducers/productReducer"
import { addToCartItem, decreaseQuantity, increaseQuantity, removeItemFromCart } from "./action/cartActions"
const addToCart = document.querySelector('.addToCart')
const productIdInput = document.querySelector('.productId')
const quantityInput = document.querySelector('.quantity')
const removeFromCart = document.querySelector('.removeFromCart')
const increseQuantity = document.querySelector('.increseQuantity')
const decreseQuantity = document.querySelector('.decreseQuantity')


const reducer = combineReducers({
    products: productReducer,
    cartItems: cartReducer,
})


const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__())


let productId = 0
let quantity = 0
productIdInput.addEventListener('input', (e) => {
    productId = parseInt(e.target.value)
})
quantityInput.addEventListener('input', (e) => {
    quantity = parseInt(e.target.value)
})

addToCart.addEventListener('click', () => {
    store.dispatch(addToCartItem(productId, quantity))
    productIdInput.value = ""
    quantityInput.value = ""
})

removeFromCart.addEventListener('click', () => {
    store.dispatch(removeItemFromCart(productId))

})
increseQuantity.addEventListener('click', () => {
    store.dispatch(increaseQuantity(productId))

})
decreseQuantity.addEventListener('click', () => {
    store.dispatch(decreaseQuantity(productId))
})
store.subscribe(() => {
    console.log(store.getState())
})

