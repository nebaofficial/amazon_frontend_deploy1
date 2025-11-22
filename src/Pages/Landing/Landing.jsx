import React from 'react'
import Layout from '../../Components/Layout/Layout';
import CarouselEffect from '../../Components/Carousel/Carousel.jsx'
import Catagory from '../../Components/Catagory/Catagory.jsx'
import ProductList from '../../Components/Product/ProductList.jsx'

function Landing() {
  return (
    <Layout>
      <CarouselEffect />
      <Catagory />
      <ProductList />

  </Layout>
  );
}

export default Landing
