import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Products, StateProps } from '../../type';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/Ai';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { decreaseQuantity, deleteProduct, increaseQuantity } from '@/redux/shoppingSlice';
import FormattedAmount from './FormattedAmount';

const CartItem = () => {
  const { productData } = useSelector((state: StateProps) => state?.shopping);
	const dispatch = useDispatch()
  return (
    <div className="flex flex-col gap-y-2">
      <div className="hidden lg:inline-flex items-center justify-between font-bold bg-white p-2 rounded-lg">
        <p className="w-1/3">Product</p>
        <p className="w-1/3 flex items-center justify-center">Quantity</p>
        <p className="w-1/3 flex items-center justify-end">Subtotal</p>
      </div>
      {/* Generate the product */}
      <div className='flex flex-col gap-y-2'>
        {productData.map((item: Products) => (
          <div key={item._id} className='w-full bg-white flex flex-col md:flex-row items-center justify-between gap-4 px-5'>
            <div className='flex items-center gap-x-3 w-full md:w-1/3'>
              <span className='text-lg hover:text-red-600 cursor-pointer duration-200' onClick={() => dispatch(deleteProduct(item._id))}>
								<AiOutlineClose/>
							</span>
              <Image
                src={item?.image}
                width={500}
                height={500}
                alt="product image"
                className="w-20 h-20 object-cover"
                priority
              />
            </div>

						{/* quantity */}
						<div className='flex items-center justify-start gap-x-3 border-[1px] border-slate-300 py-2 px-4 w-full md:w-auto'>
							<p>Quantity</p>
							<div className='flex items-center text-lg w-20 justify-between'>
							<span className='cursor-pointer' onClick={() => dispatch(decreaseQuantity(item))}>
								<FiChevronLeft />
							</span>
							<span>{item?.quantity}</span>
							<span className='cursor-pointer' onClick={() => dispatch(increaseQuantity(item))}>
								<FiChevronRight />
							</span>
							</div>
						</div>
						<div className='w-full md:w-1/3 flex items-end justify-start md:justify-end'>
							<p className='text-lg font-semibold'><FormattedAmount amount={item?.price * item?.quantity}/></p>
						</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
