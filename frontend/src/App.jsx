
import {Routes, Route,Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useEffect } from "react";
import { Provider, useDispatch,useSelector } from "react-redux";
import { checkAuth } from "./authSlice";
function App() {

const {isAuthenticated}=useSelector((state)=>state.auth);
const dispatch=useDispatch();
useEffect(()=>{
  dispatch(checkAuth())
},[dispatch]);
  return(
    <Provider>
    <Routes>
      <Route path="/" element={isAuthenticated?<HomePage></HomePage>:<Navigate to="/signup"></Navigate>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
    </Routes>
    </Provider>
  )

}
export default App
