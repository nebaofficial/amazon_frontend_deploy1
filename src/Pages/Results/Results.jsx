import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../Api/EndPoint.jsx";
import ProductCard from "../../Components/Product/ProductCard.jsx";
import classes from "./results.module.css";

function Results() {
  const [results, setResults] = useState([]);
  const { catagoryName } = useParams();

  useEffect(() => {
    console.log("PARAM:", catagoryName);

    axios
      .get(`${API_URL}/products/category/${catagoryName}`)
      .then((res) => {
        console.log("API DATA:", res.data);
        setResults(res.data);
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  }, [catagoryName]);

  return (
    <Layout>
      <section>
        <h2>Results for "{catagoryName}"</h2>
        <div className={classes.results_container}>
         {results.map((product)=>(
  <ProductCard
    key={product.id}
    image={product.image}
    title={product.title}
    id={product.id}
    rating={product.rating}
    price={product.price}
  />
))}

        </div>
      </section>
    </Layout>
  );
}

export default Results;
