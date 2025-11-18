import React from "react";
import classes from "./catagory.module.css";
import { Link } from "react-router-dom";

function CatagoryCard({ data }) {
  return (
    <div className={classes.catagory}>
      <Link to={`/catagory/${data.apiCategory}`}>
        <span>{data?.title}</span>
        <img src={data?.imageLink} alt={data?.title} />
        <p>shop now</p>
      </Link>
    </div>
  );
}

export default CatagoryCard;
