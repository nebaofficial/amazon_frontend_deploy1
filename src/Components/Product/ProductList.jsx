import { useState ,useEffect} from "react"
import axios from'axios'
import ProductCard from './ProductCard'
import classes from './Product.module.css'


function ProductList() {
   const [products,setProducts]=  useState([])
   useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
        setProducts(res.data)
    })
    .catch((err)=>{
        console.log(err)

    })

   },[])
  return (
  <section className={classes.product_List}>
    {
products.map((singelProduct)=>{
     return <ProductCard {...singelProduct} key={singelProduct.id} />
}
)
}

  </section>
  )
}

export default ProductList;
