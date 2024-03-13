import React from 'react'

const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>

            <div className='flex items-center'>

                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className='w-full h-full object-cover object-top'
                        src='https://artwithmanasi.com/cdn/shop/products/unisex-premium-t-shirt-black-front-608c2276bc605_1024x1024@2x.jpg?v=1619796610' alt='' />
                </div>

                <div className='ml-5 space-y-1'>

                    <p className='font-semibold'>Cotten shirt</p>
                    <p className='opacity-70'>Size:L,white</p>

                    <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                        <p className='font-semibold'>₹199</p>
                        <p className='line-through opacity-50'>₹1999</p>
                        <p className='text-green-600 font-semibold'>5% OFF</p>
                    </div>
                </div>



            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4 ml-[160px]'>
                <button>
                    remove
                </button>
            </div>

        </div>
    )
}

export default CartItem