import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import addproducticon from '../../Assets/Product_Cart.svg'
import listproduct from '../../Assets/productlist.svg'
const Sidebar = () => {
  return (
    <div  className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
            <div className='sidebar-item'>
                <img src={addproducticon} alt=''/>
                <p>Add Product</p>
            </div>
        </Link>

        <Link to={'/listproduct'} style={{textDecoration:"none"}}>
            <div className='sidebar-item'>
                <img src={listproduct} alt=''/>
                <p> Product List</p>
            </div>
        </Link>
      
    </div>
  )
}

export default Sidebar
