import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useSelector} from "react-redux"
import { NavLink, useNavigate } from 'react-router-dom';



const Header = () => {
    const getdata = useSelector((state)=> state.cartreducer.carts);
    console.log(getdata)

    const navigate = useNavigate();


  return (
    <div className='header'>
        <NavLink to='/'>
       <img className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=""/>
        </NavLink>
        <div className='header__search'>
            <input className='header__searchInput' type='text' />
            <SearchIcon className='header__searchIcon'/>
        </div>
        <div className='header__nav'>
            
            <div className='header__optionBasket'>
                <ShoppingBasketIcon style={{cursor: "pointer"}} onClick={() => navigate("/cart")}/>
                <span className='header__optionLineTwo header__basketCount' style={{cursor: "pointer"}}>
                    {getdata.length}
                </span>
            </div>
        </div>
    </div>
  )
}

export default Header