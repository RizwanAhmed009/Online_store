import React , {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/CartSlice';
import { fetchproduct,  STATUSES } from '../store/ProductSlice';

const Products = () => {
    const dispatch = useDispatch();
    const [products, setProducts]= useState([]);
    const {data , status} = useSelector((state)=>state.product)
   
    useEffect(() => {  
      dispatch(fetchproduct());
      const fetchProducts =  async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
      }
      fetchProducts();
    }, [])
    
    const handleadd = (product)=>{
    
      dispatch(add(product))
    }

    if(status === STATUSES.LOADING){
      return <h2>"loading......"</h2>
    }
  return (
    <div className='container'>

      <div className=''>
        {
              products.map((product)=>(
                  <div className='card' key={product.id}>
                    <img  src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button type="button" onClick={()=>handleadd(product)} class="btn btn-primary">Add to cart</button>
                  </div>
              ))
        }
      </div>
    </div>
  )
}

export default Products
