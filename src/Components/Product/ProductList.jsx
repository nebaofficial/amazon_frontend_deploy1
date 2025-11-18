import { useState ,useEffect} from "react"
import axios from'axios'
import ProductCard from './ProductCard'
import classes from './Product.module.css'
import Loader from "../Loader/Loader.jsx";


function ProductList() {
   const [products,setProducts]=  useState([])
   const [isLoading, setIsLoading] = useState(false); 
   useEffect(()=>{
    setIsLoading(true);
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
        setProducts(res.data)
        setIsLoading(false);
    })
    .catch((err)=>{
        console.log(err)
        setIsLoading(false);
    })

   },[])
  return (
    <> 
    {isLoading?(<Loader />):(<section className={classes.product_List}>
    {
products.map((singelProduct)=>{
     return <ProductCard product={{...singelProduct}} key={singelProduct.id} renderAdd={true} />
}
)
}

  </section>)}
    
     
    </>


  )
}

export default ProductList;
