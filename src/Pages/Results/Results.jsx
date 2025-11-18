import { useState, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../Api/EndPoint.jsx";
import ProductCard from "../../Components/Product/ProductCard.jsx";
import classes from "./results.module.css";
import Loader from "../../Components/Loader/Loader.jsx";

function Results() {
  const [results, setResults] = useState([]);
  const { catagoryName } = useParams();
const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    console.log("PARAM:", catagoryName);
setIsLoading(true);
    axios
      .get(`${API_URL}/products/category/${catagoryName}`)
      .then((res) => {
        console.log("API DATA:", res.data);
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("ERROR:", error);
        setIsLoading(false);
      });
  }, [catagoryName]);

  return (
    <Layout>
      <section> 
        <p style={{padding:"30px"}} >Results for</p>
        <p style={{padding:"30px"}}>Category/ {catagoryName}</p>
{isLoading ? (
  <Loader />
) : (
  <div className={classes.results_container}>
    {results.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        renderAdd={true}
      />
    ))}
  </div>
)}
     
   
      </section>
    </Layout>
  );
};

export default Results;
