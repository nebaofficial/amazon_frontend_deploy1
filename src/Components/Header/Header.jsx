import React from 'react'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import  SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import classes from './header.module.css';
import { Link } from 'react-router-dom';
// import classes from './header.module.css';
import LowerContainer from './LowerConatainer'

function Header() {
  
  return (
  <>
    <section>
      <div className={classes.header_container}>
        <div className={classes.logo_container}>
          <Link to="/">
            {/* <img src="../../assets/img/10001.jpg" alt="logo" /> */}
            <img
              src="https://mui.com/static/branding/companies/amazon-dark.svg"
              alt="amazon logo"
            />
          </Link>

          <div className={classes.delivery}>
            <span>
              <LocationOnIcon />
            </span>
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
            <div className={classes.search}>
              <select name="" id="">
                <option value="">ALL</option>
              </select>
              <input type="text" placeholder='Search' />
              <SearchIcon size={25} />
            </div>
            </div>
            <div className={classes.order_container}>
              <a href="" className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                  alt=""
                />
                <select name="" id="">
                  <option value="">EN</option>
                </select>
              </a>
             <Link to={"/signup"}>
                <p>sign up</p>
                <span>Account & Listes</span>
              </Link>
              <Link to={"/orders"}> 
                <p>returns</p>
                <span>&Orders</span>
              </Link>

              <Link to={"/cart"} className={classes.cart}>
                <ShoppingCartIcon size={25} />
                <span>0</span>
              </Link>

            </div>
          </div>
        </div>
      {/* </div> */} 
    
    </section> 
      <LowerContainer/>
</>
  
  );
}

export default Header;
