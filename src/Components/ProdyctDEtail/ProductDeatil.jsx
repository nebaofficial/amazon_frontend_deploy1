import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import ProductCard from "../../Components/Product/ProductCard.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../Api/EndPoint.jsx";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/products/${productId}`)
      .then((res) => {
        console.log("PRODUCT DETAIL:", res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [productId]);

  return (
    <Layout>
      <h2>Product Detail Page</h2>
      {product && (
        <ProductCard
          image={product.image}
          title={product.title}
          id={product.id}
          rating={product.rating}
          price={product.price}
        />  
      )}
    </Layout>
  );
}

export default ProductDetail;
