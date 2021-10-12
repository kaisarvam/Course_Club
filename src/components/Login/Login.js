import React from 'react';
import { NavLink ,useLocation ,useHistory} from 'react-router-dom';
import './Login.css';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
  const location = useLocation();
    const history = useHistory();
  const {user, SignInGoogle} = useAuth();

console.log("location here is : ",location);
  const redirect_uri = location.state?.from || '/home' ;
  console.log("came from : ",location.state?.from);
  const handleSignIn = ()=>{
      SignInGoogle()
      .then((result)=>{
        history.go(-1);
      })
  }

    return (
   <div className="mt-5 pt-5 ">
       <h1><strong> <span className="text-warning">Login</span> page </strong></h1>
       <br/>   <br/>
       <div className="container w-50">
           <div>
       <div className="input-group">

  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
<br/>

<div className="input-group">
  
  <input type="text" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
<br/>
<button className=" btn btn-success w-25">LogIn</button>
<br/>
<br/>
<p>or use</p>

<button className="facebook"> <i class="fab fa-facebook-square"></i> </button>

<button className="google" onClick={handleSignIn}> <i class="fab fa-google"></i> </button>

<button className="facebook"> <i class="fab fa-github"></i> </button>


<br/>
<br/>
<NavLink to="/forgotpass"> Forgot Password </NavLink>
 or 
<NavLink to="/signup"> Signup </NavLink>
       </div>
     
       </div>
      
   </div>
    );
};

export default Login;