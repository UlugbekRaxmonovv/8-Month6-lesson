import React from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = ({btn1}) => {
    const navigate = useNavigate();
    return (
        <div  className='container'>
          <div className="login">
            <div className="login_all">
                <button onClick={() => navigate('/')}>Logout</button>
            </div>
            <div className="login_alll">
                <button onClick={() => btn1(true)}>Modal</button>
            </div>
          </div>
        </div>
    );
}

export default Login;
