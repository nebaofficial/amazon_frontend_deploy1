import React,{useContext} from 'react'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import classes from './header.module.css';
import { Link } from 'react-router-dom';
import LowerContainer from './LowerConatainer'
import { DataContext } from '../DataProvider/DataProvider.jsx';
import { auth } from '../../Utility/firbase';

function Header() {
  const [{ user, cart }, dispatch] = useContext(DataContext);
  
  console.log(dispatch);
  console.log(cart);
  console.log(user);
  return (
    <>
    <section className={classes.fixed}>

  
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://mui.com/static/branding/companies/amazon-dark.svg"
                alt="amazon logo"
              />
            </Link>
          </div>

          <div className={classes.delivery}>
            <LocationOnIcon className={classes.location_icon} />
            <div className={classes.delivery_text}>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>

          <div className={classes.search}>
            <select aria-label="search category">
              <option value="all">ALL</option>
            </select>
            <input type="text" placeholder="Search" aria-label="search input" />
            <button type="button" className={classes.search_button} aria-label="search">
              <SearchIcon fontSize="small" size={38} />
            </button>
          </div>

          <div className={classes.order_container}>
            <div className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt="flag"
              />
              <select aria-label="language">
                <option value="en">EN</option>
              </select>
            </div>

            <Link to= { !user && "/Auths"} className={classes.link_block}>
            <div>    {
              user ? (
              <>


              <p> Hello {user?.email?.split('@')[0]}
                </p><span onClick={()=>auth.signOut()}>sign out</span> </>)
                 : 
              (
                <>

                 <p> Hello, Sign in</p>
                  <span>Account & Lists</span>
              </>
               
              
              )}
              
       
      </div>
          
              
            </Link>

            <Link to="/orders" className={classes.link_block}>
              <p>Returns</p>
              <span>& Orders</span>
            </Link>

            <Link to="/cart" className={`${classes.cart} ${classes.link_block}`}>
              <ShoppingCartIcon fontSize="small" />
              <span className={classes.cart_count}>{cart?.reduce((amount,item)=>{
                return item.quantity + amount
              },0)}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerContainer />  
      </section>
    </>
  );
}

export default Header;