import React, { useContext } from 'react';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import Layout from '../../Components/Layout/Layout';
import ProductCard from '../../Components/Product/ProductCard';
import CurrencyFormat from '../../Components/CurrenyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import classes from './cart.module.css';
import { Type } from '../../Utility/action.type';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Cart() {
  const [{ cart, user }, dispatch] = useContext(DataContext);
  const total = cart.reduce((amount, item) => {
    return item.price * item.quantity + amount;
  }, 0);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_CART,
      items: item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_CART,
      id: id,
    });
  };

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {cart?.length === 0 ? (
            <p>Opps! No item in your cart</p>
          ) : (
            cart?.map((item, i) => {
              return (
                <section className={classes.cart_product} key={i}>
                  <ProductCard
                    product={item}
                    renderDescription={true}
                    renderAdd={false}
                    flex={true}
                  />
                  <div className={classes.btn_container}>
                    <button
                      className={classes.btn}
                      onClick={() => increment(item)}
                    >
                      <IoIosArrowUp size={20}/>
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className={classes.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <IoIosArrowDown size={20}/>
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>

        {cart?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({cart?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payment">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
