import React from 'react'
import { useContext } from 'react'
import CartContext from '../context/cartContext'

function Cart() {
    const { cart } = useContext(CartContext)
    return (
        <div>
            <button><h3 className='text-white font-bold text-xl'>Cart : <span className='text-red-300'>{cart.length}</span></h3></button>
        </div>
    )
}

export default Cart