import React, { useState,useContext } from 'react'
import classes from './signup.module.css'
import { Link } from 'react-router-dom'
// import Layout from '../../Components/Layout/Layout.jsx'
import {auth} from '../../Utility/firbase';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';
function Auths() {const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [error,setError]=useState('');
const [{user},dispatch]=useContext(DataContext)
console.log(user)
const authHandler=async(e)=>{
  e.preventDefault();
  console.log(e)
  if(e.target.name=='signin'){
    signInWithEmailAndPassword(auth,email,password).then((userInfo)=>{
      dispatch({
        type:Type.SET_USER,
        user:userInfo.user
      })

    }).catch((err)=>{
setError(err.message)
    })
    
  }
  else{
    createUserWithEmailAndPassword(auth,email,password).then((userInfo)=>{
 dispatch({
        type:Type.SET_USER,
        user:userInfo.user
      })

    }).catch((err)=>{
      console.log(err)
    })

  }
  
};

  return (
  <section className={classes.auth_container }>
<Link ><img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" /></Link>
<div className={classes.form_container}>
  <form action="">
    <h1>sign in</h1>
    <label htmlFor="email">Email</label>
    <input  value={email}
    onChange={
      (e)=>setEmail(e.target.value)}
     type="email"
      id='email' />
    <label htmlFor="password">Password</label>
    <input 
    value={password} 
    onChange={(e)=>setPassword(e.target.value)}
     type="password" 
     id='password' />
    <button  type="submit" onClick={authHandler} name='signin' className={classes.login}>Sign In</button>  
    

  </form>
  <div>
     <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p> 
  </div>
   <button type='button' onClick={authHandler} name='signup' className={classes.login_register}>Register</button>
</div>
  </section>
  )

}

export default Auths
