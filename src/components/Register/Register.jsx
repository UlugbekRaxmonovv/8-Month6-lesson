import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetInputValue } from '../Hooks/useGetInputValur';
import Modul from '../Modul/Modul';
import axios from '../Api/index';
const intialstate = {
  UserName:"",
  password: "",
  FirstName:"",
  LastName:"",
  phones: "",
}
const Register = () => {
    const [isregistor, setIsregistor] = useState(false);
    const navigate = useNavigate();
    const {state,setstate,handelChange} = useGetInputValue(intialstate)

    const handelSubmitUser = (e)=>{
      e.preventDefault();
      state.phones = [state.phones]
      setstate(intialstate);
      axios
      .post('/auth/user/sign-up',state)
}
    return (
        <div  className='container'>
              <div className="login">
            <div className="login_all">
                <button onClick={() => navigate('/')}>Logaut</button>
            </div>
            <div className="login_alll">
                <button onClick={() => setIsregistor(true)}>Modal</button>
            </div>
          </div>
          {
      isregistor ?  
      <Modul close={setIsregistor}>
      <div>
        <form action="" onSubmit={handelSubmitUser}>
        <h2>Login</h2>
          <input value={state.UserName} onChange={handelChange} name='UserName' placeholder='UserName' type="text" />
          <input value={state.password} onChange={handelChange} name='password' placeholder='Password' type="text" />
          <input value={state.FirstName} onChange={handelChange} placeholder='FirstName' name='FirstName' type="text" />
          <input value={state.LastName} onChange={handelChange} name='LastName' placeholder='LastName' type="text" />
          <input value={state.phones} onChange={handelChange} name='phones' placeholder='phones' type="text" />
          <button>Submit</button>
        </form>
         </div>
       </Modul>
       :
       <></>
    }
        </div>
    );
}

export default Register;
