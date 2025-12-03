import React, { useState, useContext } from 'react'
import classes from './signup.module.css'
import { Link ,useNavigate } from 'react-router-dom'
// import Layout from '../../Components/Layout/Layout.jsx'
import { auth } from '../../Utility/firbase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';
import { ClipLoader } from 'react-spinners'

function Auths() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [{ user }, dispatch] = useContext(DataContext)
  const [loading, setLoading] = useState({ signin: false, signup: false });
  const navigate=useNavigate();

  const authHandler = async (e) => {
    e.preventDefault();
    // Detect which button submitted the form
    const action = e.nativeEvent?.submitter?.name;
    if (!action) return;

    setError('');
    if (action === 'signin') {
      try {
        setLoading(prev => ({ ...prev, signin: true }));
        const userInfo = await signInWithEmailAndPassword(auth, email, password);
        dispatch({
           type: Type.SET_USER,
            user: userInfo.user
           });
           navigate('/');
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(prev => ({ ...prev, signin: false }));
      }
    } else if (action === 'signup') {
      try {
        setLoading(prev => ({ ...prev, signup: true }));
        const userInfo = await createUserWithEmailAndPassword(auth, email, password);
        dispatch({ 
          type: Type.SET_USER, 
          user: userInfo.user 
        });
        navigate('/');
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(prev => ({ ...prev, signup: false }));
      }
    }
  }

  return (
    <section className={classes.auth_container}>
      <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" /></Link>
      <div className={classes.form_container}>
        <form onSubmit={authHandler}>
          <h1>sign in</h1>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id='email'
            required
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id='password'
            required
          />
          <div>
            <button
              type="submit"
              name='signin'
              className={classes.login}
            >
              {loading.signin ? (<ClipLoader color={'#000'} size={15} />) : ('Sign In')}
            </button>
          </div>

          <div>
            <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
          </div>

          <div>
            <button
              type='submit'
              name='signup'
              className={classes.login_register}
            >
              {loading.signup ? (<ClipLoader color={'#000'}  />) : ('Create Account')}
            </button>
          </div>

          {error && <small style={{ color: "red", padding: "10px" }}>{error}</small>}
        </form>
      </div>
    </section>
  )
}

export default Auths
