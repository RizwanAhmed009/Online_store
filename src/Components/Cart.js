import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/CartSlice';

const Cart = () => {
  const products = useSelector(state=>state.cart)
  const dispatch = useDispatch();

  const handleRemove=(productId)=>{
     dispatch(remove(productId))     
  }
  return (
    <div className='container'>
      
         <div className="cartproduct">
          
      <h1>Cart</h1>
        {products.map((product)=>(
          <div className="cartCard">
            <img src={product.image} alt=""/>
             <h3>{product.title}</h3>
             <h4>{product.price}</h4>
             <button className='btn-remove' onClick={()=>handleRemove(product.id)}>Remove</button>
            </div>
          
        ))}
          
        </div>
      
      </div>
    
  )
}

export default Cart
