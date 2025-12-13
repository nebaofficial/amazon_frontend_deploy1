import React from 'react'
import {useContext, useEffect } from 'react'
import AppRouter from './Router.jsx'
import './App.css'
import { DataContext } from './Components/DataProvider/DataProvider.jsx';
// import Header from './Components/Header/Header.jsx'
// import CarasoulEffect from './Components/Carosul/Carasoul.jsx'
// import Catagory from './Components/Catagory/Catagory.jsx'
// import ProductList from './Components/Product/ProductList.jsx'
import { Type } from './Utility/action.type.js';
import { auth } from './Utility/firbase.js';
function App() {
  const [{user},dispatch]=useContext(DataContext)
  useEffect(()=>{

   const unsebscribe= auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        // console.log('user is logged in ',authUser);
        dispatch({
          type:Type.SET_USER,
          user:authUser,
        })
      }
      else{
        dispatch({
          type:Type.SET_USER,
          user:null,
        })
      }
    })
    return ()=>{
      unsebscribe();

    }

  },[dispatch])
  

  return (
    <>
     {/* <Header/> */}
     {/* <CarasoulEffect/>
     <Catagory/>
     <ProductList/> */}
<AppRouter/>




    </>
  )
}

export default App
