import React from 'react'
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='Container1'>
        <div className="Wrapper1">
            <div className="Left">
                  <span className="Language">EN</span>
                  <div className="SearchContainer">
                    <input placeholder="Search" className='Input' />
            <Search style={{ color: "gray", fontSize: 16 }} /></div>
             </div>
                <div className="Center">
           <h1 className="Logo">D1Nz0 shop</h1>
                 </div>
                    <div className="Right">
                   <div className="MenuItem">
                           <Link to='Register'>Register</Link> 
                        </div>
                        <div className="MenuItem">
                            <Link to="Login">Log in</Link>
                        </div>
                        <div className="MenuItem">
                            <Link to="Cart"><Badge badgeContent={4} color="primary"><ShoppingCartOutlined /> </Badge></Link>
                        </div>
                    </div>

        </div>
    </div>
  )
}

export default Navbar