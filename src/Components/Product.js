import React, {useState, useEffect}from 'react'
import './Product.css'
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';



const Product = ({id ,title, image, rating, price}) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
 
  useEffect(() => {
   async function getAllProduct() {
    try {
     const items = await axios.get("http://localhost:3333/products")
    //  console.log(items.data);
     setItems(items.data);
    } catch (error) {
     console.log("Something is Wrong");
    }
   }
   getAllProduct();
  }, [])
  return (
    <>
    {items.map((product, i)=>(
    <div className='product' key={i}>
        <div className='product__info'>
            <p style={{cursor: "pointer"}} onClick={() => navigate(`/product/${product.id}`)}>{product.title}</p>
            <p className='product__price'>
                <small>₹</small>
                <strong>{product.price}</strong>
            </p>
        <div className='product__rating'>
            {Array(product.rating)
            .fill()
            .map((_, i)=>(
            <p>⭐</p>
            ))}
        </div>
        </div>
        <img style={{cursor: "pointer"}} onClick={() => navigate(`/product/${product.id}`)} src={product.image} alt=''/>
        <button style={{cursor: "pointer"}} onClick={() => navigate(`/product/${product.id}`)}>View Product</button>
    </div>
    ))} 
    </>
  )
}

export default Product