import {useContext,useEffect,useState} from 'react';
import Layout from '../../Components/Layout/Layout';
import { db } from '../../Utility/firbase';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard';
 import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query
} from "firebase/firestore";
import classes from './Orders.module.css';

function Orders(){
    const [{user },dispatch] = useContext(DataContext);
    const [orders,setOrders]=useState([]);
    useEffect(()=>{

        if(user){
           const userRef = doc(db, "users", user.uid);
  const ordersRef = collection(userRef, "orders");

  // Query: order by created desc
  const q = query(ordersRef, orderBy("created", "desc"));

  // Real-time listener
    const unsubscribe = onSnapshot(q, (snapshot) => {
  const ordersList = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
  setOrders(ordersList);
});
return unsubscribe;

            
        }
        else{
            setOrders([]);

        }


    },[]);
    return(

        <Layout>
             <section className={classes.container}>
             <div className={classes.orders_container}>
             <h2>
             Your orders
             </h2>
             <div>
                {/* Display user's orders here */}

             </div>
             {
                orders?.map((eachOrder,i)=>{

                    return (
                        <div key={i}>
                            <hr />
                            <p> order ID:{eachOrder?.id}</p>
                          {
                         eachOrder?.cart?.map((item) => {

                                return(
                                    <ProductCard

                                    flex={true}
                                    product={item}
                                    key={item.id}
                                    />
                                )
                            })
                          }  
                    
                        </div>
                    )
})
             }



             </div>
             </section>
        </Layout>

    )
}
export default Orders;