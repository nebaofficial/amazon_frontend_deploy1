import React from 'react'
import { CategoryImage } from "./CatagoryImage";
import CatagoryCard from './CatagoryCard'
import classes from "./catagory.module.css";
function Catagory() {
  return (
    <section className={classes.catagory_container}>
      {CategoryImage.map((infos, index) => (
        <CatagoryCard key={index} data={infos} />
      ))}
    </section>
  );
}

export default Catagory
