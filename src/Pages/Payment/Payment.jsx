import {useState} from 'react'
import Layout from "../../Components/Layout/Layout";
import classes from "./Payment.module.css"
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { useContext } from 'react';
import ProductCard from '../../Components/Product/ProductCard';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import CurrencyFormat from '../../Components/CurrenyFormat/CurrencyFormat';
import {instance} from '../../Api/axios';
import { ClipLoader } from 'react-spinners'
import {db} from '../../Utility/firbase'
import { useNavigate } from 'react-router-dom';
  import {
     collection, 
  doc, 
  setDoc, 
  serverTimestamp 
} from "firebase/firestore";

function Payment() {
const [{user, cart}]=useContext(DataContext);
console.log(user)

   const totalItems = cart?.reduce((amount,item)=>{
                return item.quantity + amount
              },0);
              const total = cart.reduce((amount, item) => {
    return item.price * item.quantity + amount;
  }, 0);
  const stripe = useStripe();
  const elements = useElements();
  const [error,setError]=useState()
  const [processing,setProcessing]=useState(false)
  const navigate=useNavigate();

const handleChange = async (event) => {
    console.log(event);
event?.error?.message ? setError(event.error.message) : setError()

  }

const handlePayment= async(e)=>{
    e.preventDefault();
    setProcessing(true);


    try{ 
      // 1, backend payment api call

      const response=await instance({
        method:"post",
        url:`/payment/create?total=${total *100}`,
      });
      console.log("payment response" ,response.data)

      const clientSecret=response.data?.clientSecret; 


      // 2, confirm client side (react side confirmation)

      const {paymentIntent}=await stripe.confirmCardPayment(clientSecret,
        {
        payment_method:{
        card:elements.getElement(CardElement)
      }});

      // console.log("payment confiramtion",paymentIntent)
    
 // 3,after confirmition  order firbase save and clear the cart   */}
const orderRef = doc(
        db,
        "users",
        user?.uid,
        "orders",
        paymentIntent.id
    );

    await setDoc(orderRef, {
        cart: cart,
        amount: paymentIntent.amount,
        created: serverTimestamp()
    });

navigate('/orders', {state:{msg:"order successfull"}});
 setProcessing(false);
    }
   
    catch(err){
        console.log(err);
        setProcessing(false);
    }
   





   






   


}


  return (
<Layout> 
{/* {header}  */}
      <div className={classes.payment_header}>CheckOut ({totalItems}) items</div>
      {/* {
        payment method
      } */}

      <section className={classes.payment_container}>

        {/* {payment Address} */}
        <div className={classes.flex}>
          <h3> Delivery Address</h3>
          <div>
            <div>{user.email}</div>
            <div>123 Main St</div>
            <div>Addis Ababa, Ethiopia</div>
          </div>
        </div>
        <hr />
        {/* {product} */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
{
cart?.map((item)=><ProductCard product={item} flex={true}/>)
}
          </div>
        </div>
        {/* {card form} */}
        <div className={classes.flex}>
          <h3>Payment Method</h3>
          <div className={classes.payment_description}>
            <div className={classes.card_element}>
              <form onSubmit={handlePayment}>
                {error && <small style={{color:"red"}}>{error}</small>}
                <CardElement onChange={handleChange}/>

                {/* {price} */}
                <div className={classes.payment_price }>
                  <span style={{display:'flex',gap:'10px',marginTop:'10px',alignItems:'center'}}>
                    Total order <CurrencyFormat amount={total} />
                  </span>
                
                </div>
                <div>
                  <button type="submit" >
                     {
                     processing?(
              
                        <span className={classes.loading} >
                          <ClipLoader color={'#000'} size={15} /><p>please wait..</p>
                          </span> 
                          
                    

                     ):" Buy Now"
                     }
                   
                   

                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Payment
