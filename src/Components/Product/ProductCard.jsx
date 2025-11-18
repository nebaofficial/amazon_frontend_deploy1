import React, { useContext } from "react";
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrenyFormat/CurrencyFormat';
import classes from './Product.module.css'
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider.jsx";
import { Type } from "../../Utility/action.type.js";

function ProductCard({product,flex,renderDescription, renderAdd}) {
  const {image,title,id,rating,price,description} = product || {};
  const rate = rating?.rate || 0;
  const count = rating?.count || 0;
   const [state,dispatch]= useContext(DataContext)
   const addtocart=()=>{
    dispatch({
      type:Type.ADD_TO_CART,
      items: {image,title,id,rating,price,description}
    })
   }
console.log(state);

  return (
    <div className={`${classes.product_card} ${flex ? classes.flex : ''}`}>
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <p>{id}</p>
        <h3>{title}</h3>
        {renderDescription && <p style={{maxWidth:"905px",overflow:"hidden"}} className={classes.description}>{description}</p>}
        <div className={classes.rating}>
          <Rating value={rate} precision={0.5} />

          {/*counting*/}
          <small>{count}
            {/* <span> ratings</span> */}
          </small>
        </div>
        <div className={classes.price}>
          {/**price */}
          <CurrencyFormat amount={price} />
        </div>
        {
          renderAdd && <button className={classes.button} onClick={addtocart}>Add to Cart</button>
        }
      </div>
    </div>
  );
}

export default ProductCard;
