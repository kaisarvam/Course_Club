import React from 'react';
import { NavLink } from 'react-router-dom';

const ForgotPass = () => {
    return (
        <div className="mt-5 pt-5 ">
            <div className="container">
       <h1 className="text-center"><strong> PassWord <span className="text-warning">Reset</span>  Page </strong></h1>
       <br/>   <br/>
       <div className="container ">
           <div className="container w-50">
       <div className="input-group ">

  <input type="email" className="form-control" placeholder="Your Email here ..." aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
<br/>
<button className=" btn btn-success ">Request New password </button>
<br/>
<br/>
<NavLink to="/login"> SignIn </NavLink>


       </div>
     
       </div>
      
   </div>
            
        </div>
    );
};

export default ForgotPass;