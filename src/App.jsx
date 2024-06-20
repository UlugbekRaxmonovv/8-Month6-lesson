import { useState } from 'react'
import User from './components/User/User'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import { Route,Routes } from 'react-router-dom'
import Modul from './components/Modul/Modul'
import './App.css'

function App() {
  const [islogin, setIsLogin] = useState(false);
  const [isregistor, setIsregistor] = useState(false);
  

 return (
    <>
    {
      islogin ?
      <Modul close={setIsLogin}>
      <div>
        <form action="">
        <h2>Login</h2>
          <input type="text" />
          <input type="text" />
          <button>Submit</button>
        </form>
         </div>
       </Modul>
       :
       <></>
    }

    {
      isregistor ?  
      <Modul close={setIsregistor}>
      <div>
        <form action="">
        <h2>Login</h2>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button>Submit</button>
        </form>
         </div>
       </Modul>
       :
       <></>
    }
   
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/register" element={<Register  btn2={setIsregistor} />} />
        <Route path="/login" element={<Login btn1={setIsLogin }/>} />
      </Routes>
      
    </>
  )
}

export default App
