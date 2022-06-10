import React, { useState, useEffect } from "react";
import "./cart.css";
import {useDispatch, useSelector} from "react-redux"
import {DLT} from "../Redux/actions/action"



const Cart = () => {

	const [price,setPrice ] = useState(0)
	console.log(price)
	const getdata = useSelector((state)=> state.cartreducer.carts);
    console.log(getdata)

	const dispatch = useDispatch();

	const dlt = (id)=>{
		dispatch(DLT(id))
	}

	const total =()=>{
		 let price = 0;
		getdata.map((ele,k)=>{
			price =+ ele.price
		});
		setPrice(price);
	};

	useEffect (()=>{
		total();
	},[total])

  return (
    <>
      <div className="center-wrapper">
        <div className="content">
          <div className="top-bar">
            <i className="fas fa-arrow-left"></i>
            <span>Continue shopping</span>
          </div>
		  { getdata.length ?
			  <>
				<div className="bag">
					<p className="bag-head">
					<span style={{ textTransform: "uppercase" }}>Your Bag</span> - 1
					item
					</p>
				</div>
				{getdata.map((e)=>{
				return(
				<div className="bag-product">
					<div className="image">
					<img
						src={e.image}
						className="product-image"
					/>
					</div>
					<div className="description">
					<p className="product-code small muted">
						{e.id}
					</p>
					<h1>{e.title}</h1>
					<p>Sun</p>
					<p className="description-text">
						{e.desc}
					</p>
					<p style={{ marginBottom: "0.5rem" }}>One Size</p>
					<h2>₹{e.price}</h2>
					<div className="quantity-wrapper">
						<button onClick={()=>dlt(e.id)} className="btn-remove">Remove</button>
					</div>
					</div>
				</div>			  
				)
				})}
			  </>

			  :
			  <>
			  <div className="bag">
				  <p className="bag-head">
				  <span style={{ textTransform: "uppercase" }}>Your Bag is Empty</span> - 0
				  item
				  </p>
			  </div>
			  </>
		  }
          <div className="bag-total">
            <div className="subtotal">
              <p className="small">Subtotal:</p>
              <p className="small">₹{price}.00</p>
            </div>
            <div className="delivery">
              <p className="small">
                Delivery (Standard - 2 working days):
                <br />
                <span className="change-delivery">Change delivery method</span>
              </p>
              <p className="small">Free</p>
            </div>
            <div className="total">
              <h3>Total:</h3>
              <h3>₹{price}.00</h3>
            </div>
            <button className="btn-go-checkout">
              <i className="fas fa-lock"></i>
              <span>Go to Checkout</span>
            </button>
          </div>
          <div className="help">
            <p>Need help? Call free 01234 567 890</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
