import React from 'react'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
    const navigate = useNavigate();
    const handelCheckout = () => {
        navigate("/checkout?step=2")
    }
    return (
        <div className='mt-[50px]'>
            <div className='lg:grid grid-cols-3 lg:px-16 relative'>
                <div className='col-span-2'>
                    {[1, 1, 1, 1].map((item) => <CartItem />)}
                </div>


                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>

                    <div className='border'>

                        <p className='uppercase font-bold opacity-60 pb-4'>Price details0</p>
                        <hr />

                        <div className='space-y-3 font-semibold'>

                            <div className='flex justify-between pt-3 text-black '>
                                <span>Price</span>
                                <span>₹7697</span>
                            </div>

                            <div className='flex justify-between pt-3 '>
                                <span>disscount</span>
                                <span className='text-green-600'>₹3419</span>
                            </div>

                            <div className='flex justify-between pt-3  '>
                                <span>Delivery Charges</span>
                                <span className='text-green-600'>Free</span>
                            </div>

                            <div className='flex justify-between pt-3  font-bold '>
                                <span>Total Amount</span>
                                <span className='text-green-600'>₹1278</span>
                            </div>

                        </div>

                        <button onClick={handelCheckout}
                            type="submit"
                            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            CHECKOUT
                        </button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cart;