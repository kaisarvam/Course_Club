import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AllCourses from './components/AllCourses/AllCourses';
import DetailCourse from './components/DetailCourse/DetailCourse';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound'
import Gallery from './components/Gallery/Gallery';
import Faq from './components/Faq/Faq';
import {useState} from 'react';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import ForgotPass from './components/ForgotPass/ForgotPass';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Payment from './components/Payment/Payment';

function App() {
  const [cart,setCart] = useState([]);

  const handleCart = (value)=>{
    if(cart){
      const NewValue = [...cart,value]
      setCart(NewValue);
    }else{
      setCart(value);
    }
    }
    
    console.log ("from App",cart);
  
  return (
    <div className="App">
      <AuthProvider> 
      <BrowserRouter>
      
      <Header cart={cart}></Header>
      <Switch>

        <Route exact path="/">
       <Home></Home>
        </Route>
        <Route  path="/home">
       <Home handleCart={handleCart}></Home>
        </Route>
        <Route  path="/about">
       <AboutUs></AboutUs>
        </Route>
        <Route  path="/courses">
       <AllCourses handleCart={handleCart} ></AllCourses>
        </Route>
        <Route  path="/gallery">
       <Gallery></Gallery>
        </Route>
        <Route  path="/login">
       <Login></Login>
        </Route>
        <Route  path="/signup">
       <SignUp></SignUp>
        </Route>
        
        <PrivateRoute  path="/payment">
       <Payment></Payment>
        </PrivateRoute>

        <Route  path="/forgotpass">
       <ForgotPass></ForgotPass>
        </Route>

        <Route  path="/faq">
       <Faq></Faq>
        </Route>

        <Route path="/cart">
        <Cart cart={cart}></Cart>
          </Route>

        <Route  path="/course/:courseId">
       <DetailCourse></DetailCourse>
        </Route>

        <Route  path="*">
       <NotFound></NotFound>
        </Route>

      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
