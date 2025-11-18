import React from 'react'
import Layout from '../../Components/Layout/Layout';
import CarasoulEffect from '../../Components/Carosul/Carasoul.jsx'
import Catagory from '../../Components/Catagory/Catagory.jsx'
import ProductList from '../../Components/Product/ProductList.jsx'

function Landing() {
  return (
    <Layout>
      <CarasoulEffect />
      <Catagory />
      <ProductList />

  </Layout>
  );
}

export default Landing
