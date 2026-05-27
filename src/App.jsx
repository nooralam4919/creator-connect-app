import Container from "./components/contianer/Container";
import { Outlet } from "react-router-dom";
import authService from "./Appwrite/Auth";
import { login, logout } from "./store/authSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService
    .getCurrentUser()
    .then((userData) =>{
      if(userData){
        dispatch(login({userData}))
      }
      else {
        dispatch(logout())
      }
    })
    .catch((err) =>{
      console.log()
      dispatch(logout());
    })
    .finally(() =>{
      setLoading(false);
    })
  },[dispatch])

  return !loading ? (
    <Container>
      <Outlet />
    </Container>) : (null)

}
export default App;