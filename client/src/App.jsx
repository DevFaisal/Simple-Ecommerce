import Products from './components/Products';
import CartContextProvider from './context/cartContextProvider';
import React from 'react';
import Cart from './components/Cart';
import CartItems from './components/CartItems';

function App() {

  return (
    <>
      <CartContextProvider>
        <div className="bg-slate-500 flex justify-between items-center w-full py-4 px-3">
          <h1 className="text-xl text-white">Store</h1>
          <CartItems />
          <Cart />
        </div>
        <Products />
      </CartContextProvider>
    </>
  )
}

export default App
