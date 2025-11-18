import React from "react";
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrenyFormat/CurrencyFormat';
import classes from './Product.module.css'
import { Link } from "react-router-dom";
function ProductCard({image,title,id,rating,price}) {
  const rate = rating?.rate || 0;
  const count = rating?.count || 0;
  return (
    <div className={classes.product_card}>
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <p>{id}</p>
        <h3>{title}</h3>
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
        <button className={classes.button}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
