import { useState,useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import initializeAuth from "../components/FireBase/FireBase.initialize";

initializeAuth();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState([]);

  const SignInGoogle = () => {
   return( 
     signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(errorMessage);
      })
      )
  }

const LogOut = ()=>{
    signOut(auth).then(() => {
        setUser({})
      }).catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
}

useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        if(user){
            setUser(user);
        }
    })
},[])

return {
    user,
    SignInGoogle,
    LogOut

}

};

export default useFirebase;
