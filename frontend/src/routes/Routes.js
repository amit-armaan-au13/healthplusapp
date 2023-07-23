import { Route } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen'
import ProductDetails from '../screens/ProductDetails'
import Cart from '../components/Cart'
// import Login from '../components/Login'
import LoginScreen from '../screens/loginScreen';
import RegisterScreen from "../screens/RegisterScreen";
import ProfileScreen from '../screens/ProfileScreen';
const Routes=()=>{
    return (
      <>
        <Route path="/" exact component={HomeScreen}></Route>
        <Route
          path="/productDetails/:id"
          exact
          component={ProductDetails}
        ></Route>
        <Route path="/cart/:id?" exact component={Cart}></Route>
        <Route path="/login" exact component={LoginScreen}></Route>

        <Route path="/register" exact component={RegisterScreen}></Route>
        <Route path="/profile" exact component={ProfileScreen}></Route>
      </>
    );
}
export default Routes