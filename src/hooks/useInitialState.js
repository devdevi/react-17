import {useState} from 'react'
import initalState from '../initalState'

const useInitalState = () =>{
    const [state, setState] =useState(initalState)

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeFromCart = payload => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id)
        })
    }

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: payload
        })
    }

    const addNewOrder = payload => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        })
    }

    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
        state
    }
}
// Se encarga de manejar el estado
export default useInitalState