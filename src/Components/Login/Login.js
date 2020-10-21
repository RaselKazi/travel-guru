import React, { useContext, useState } from 'react';
import fbLogo from '../../Image/Icon/fb.png';
import googleLogo from '../../Image/Icon/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import Navber from '../Navber/Navber';
import { Link } from '@material-ui/core';
import { useForm } from "react-hook-form";


if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
   }


const Login = () => {

    const [newUser, setNewUser] = useState(true)

    const [loggedIn, setLoggedIn] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };



    // google login
    const  googleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            handleResponse(res)
          })
          .catch(error => {
            handleError(error)
          });
    }

    // facebook login
    const facebookLogin = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            handleResponse(res)
          })
          .catch(error => {
            handleError(error)
          });
    }





   //Handle Submit from
 // handle Submit From--------------------------------------
      const { register, handleSubmit,  errors } = useForm();
      const onSubmit = (data) => {
        console.log(data)
                      if(!newUser && data.email && data.password){

                         firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
                         .then(res => {
                           handleResponse(res)
                           updateUserName(data.name)
                            console.log(res);   
                       })
                        .catch(error => {
                           handleError(error)
                        });
                    }

                    
                    if(newUser && data.email && data.password){

                      console.log(data.email)
                      firebase.auth().signInWithEmailAndPassword(data.email, data.password)
                      .then(res => {
                           handleResponse(res)
                       })
                       .catch(function(error) {
                           handleError(error)
                       });
                  }
            }


      
       //update username
       const updateUserName = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
        displayName: name,
        })
        .then(res => {
            console.log('username updated successfully')
        })
        .catch(error => {
            console.log(error.message)
        });
    }
 


//Handleing Response and error

    const handleResponse = res => {
        const {displayName, email} = res.user;
            const signedInUser = {
                name:displayName,
                email:email,
                isLoggedIn:true
            };
            setLoggedIn(signedInUser);
            history.replace(from)
    }
    
    const handleError = error => {
        const signedInUser = {
            error:error.message,
            isLoggedIn:false
        };
        setLoggedIn(signedInUser)
    }

    
    return (
        <div className="bg-white">
      <Navber color={"black"} ></Navber>
        <div className='w-50 py-3 px-4 bg-light rounded text-center mx-auto border border-secondary '> 
        <div>

        {newUser ?'Login ':'Create an account'}
    <form onSubmit={handleSubmit(onSubmit)}>

      <div class="form-group row">
      { !newUser && <input  type='text' name="name" className="form-control form-control-lg m-4"  ref={register({ required: true })} placeholder="Enter Your name" />}
      {errors.name && <span className="text-danger m-2">Name is required</span>}
      </div>
      

      <div class="form-group row">
      <input name="email" type='email' className="form-control form-control-lg m-4"  ref={register({ required: true, pattern:/^\S+@\S+$/i})} placeholder="Enter Your Email" />
      {errors.email?.type === "required" && <span className="text-danger mx-3">Email is required</span>}
      {errors.email?.type === "pattern" && <span className="text-danger mx-3">please enter a valida email </span>}
      </div>

      <div class="form-group row">
      <input name="password"  type='password' className="form-control form-control-lg m-4"   ref={register({ required: true , maxLength: 10})} placeholder="password" />
      {errors.password?.type === "required" && <span className="text-danger mx-3">password is required</span>}
      {errors.password?.type === "maxLength" && <span className="text-danger mx-3">please enter lase then 10 digit</span>}
  
      </div>
      
      <input className='btn btn-warning w-100 mb-2  rounded p-2'  type="submit" value={newUser ? 'Login' : 'Create an account'}/>
    </form>
        <label htmlFor="newUser">  { newUser ? " Don't have an account ?":" Already have an account?"}</label>
        <Link onClick={() => setNewUser(!newUser)} className='text-primary' style={{cursor:'pointer'}}>{newUser ? ' Create an account' :'Login'}</Link>
    </div>

           <p className='m-auto p-3 text-warning' style={{fontSize:"20px" , textAlign:"center"}}>-------------Or----------</p>
            <div style={{cursor:'pointer'}} onClick={facebookLogin} className='border border-secondary d-flex justify-content-center align-items-center py-1 w-50 mx-auto rounded-pill mb-2' >
                <img className='mx-2 ' style={{width:'30px'}} src={fbLogo} alt=""/>
                <p className='mb-0 text-primary'>Continue with facebook</p>
            </div>
            <div style={{cursor:'pointer'}} onClick={googleLogin} className='border border-secondary d-flex justify-content-center align-items-center py-1 w-50 mx-auto rounded-pill' >
                <img className='mx-2 ' style={{width:'30px'}} src={googleLogo} alt=""/>
                <p className='mb-0 text-warning'>Continue with Google</p>
            </div>
        </div>
        </div>
       
    );
};

export default Login;