import { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import ProductCard from "../../Components/Product/ProductCard.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../Api/EndPoint.jsx";
import Loader from "../Loader/Loader.jsx";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
const [isLoading, setIsLoading] = useState(false); 
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${API_URL}/products/${productId}`)
      .then((res) => {
        console.log("PRODUCT DETAIL:", res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, [productId]);

  return (
    <Layout>
      
{isLoading ? (
  <Loader />
) : product ? (
  <ProductCard
    product={product}
    renderDescription={true}
    flex={true}
    renderAdd={true}
  />
) : null}
      
    </Layout>
  );
}

export default ProductDetail;
