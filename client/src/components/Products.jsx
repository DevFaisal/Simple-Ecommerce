import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import CartContext from '../context/cartContext';

function Products() {

    let { cart, setCart } = useContext(CartContext)

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    console.log("Cart has :", cart);
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((response) => {
                setProducts(response.data)
            }).catch((error) => {
                console.log(error);
            });
    }, [])

    return (
        <>
            <div className='grid md:grid-cols-3 p-10 gap-3'>

                {products.map((product) => (
                    <div className='flex flex-col justify-center items-center m-1 text-white h-[200px] w-auto bg-yellow-400 rounded-md' key={product.id}>
                        <div className='flex flex-col justify-center items-center gap-3 text-black'>
                            <h1 className='text-3xl'>{product.name}</h1>
                            <h2 className='text-2xl font-bold'>${product.price}</h2>
                            <button onClick={() => addToCart(product)} className='px-3 py-2 bg-gray-500 rounded-md font-semibold text-white hover:bg-slate-800'>Add to Cart</button>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default Products