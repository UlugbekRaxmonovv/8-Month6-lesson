import { useState } from 'react'
import User from './components/User/User'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import { Route,Routes } from 'react-router-dom'
import Modul from './components/Modul/Modul'
import { useGetInputValue } from './components/Hooks/useGetInputValur'
import './App.css'
import axios from './components/Api/index'
const intialstate = {
  UserName:"",
  password: ""
}
function App() {
  const [islogin, setIsLogin] = useState(false);
  const {state,setstate,handelChange} = useGetInputValue(intialstate)

  const handelSubmit = (e)=>{
    e.preventDefault();
    setstate(intialstate);
    axios
    .post("/auth/sign-in", state)
    .then(res=>{
       localStorage.setItem("x-auth/token",res.data.data.token )
     })

}

 return (
    <>
    {
      islogin ?
      <Modul close={setIsLogin}>
      <div>
        <form action="" onSubmit={handelSubmit}>
        <h2>Login</h2>
          <input placeholder='UserName' value={state.UserName} onChange={handelChange} name='UserName' type="text" />
          <input placeholder="password " value={state.password} onChange={handelChange} name='password' type="text" />
          <button>Submit</button>
        </form>
         </div>
       </Modul>
       :
       <></>
    }

   
   
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login btn1={setIsLogin }/>} />
      </Routes>
      
    </>
  )
}

export default App
