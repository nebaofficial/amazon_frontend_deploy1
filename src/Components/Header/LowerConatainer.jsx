import React from 'react'
import { IoMenuOutline } from "react-icons/io5";
import  classes from './header.module.css'
function LowerConatainer() {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li>
          <IoMenuOutline/>
          <p>All</p>
        </li>
        <li> Today'sDeals</li>
        <li>Costenmer services</li>
        <li>Registery</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerConatainer
