import React, { useContext, useState, useEffect } from 'react'
import Popup from 'reactjs-popup'
import CartContext from '../context/cartContext'


function CartItems() {

    const { cart } = useContext(CartContext)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        const newTotal = cart.reduce((acc, item) => acc + item.price, 0);
        setTotal(newTotal);
    }, [cart]);



    return (
        <>
            <div className=''>
                <Popup trigger={<button className='text-xl text-white font-bold border-1 border-gray-500 py-2 px-3 ring-2 rounded-md'>Cart Items</button>}
                    position={'center center'}>
                    <div className='flex flex-col w-[400px] justify-between gap-3  p-10 h-auto bg-red-300 rounded-md absolute top-1'>
                       
                        {cart.map((item, index) => (
                            <div className='flex justify-between' key={index}>
                                <p className='font-bold'>{index + 1}</p>
                                <h1>{item.name}</h1>
                                <h1 className='font-bold '>${item.price}</h1>

                            </div>
                        ))}
                        <h4>Total: <span className='font-bold text-center text-xl'>${total.toFixed(2)}</span> </h4>
                    </div>

                </Popup>
            </div >

        </>
    )
}

export default CartItems