import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({btn2}) => {

    const navigate = useNavigate();
    return (
        <div  className='container'>
              <div className="login">
            <div className="login_all">
                <button onClick={() => navigate('/')}>Logaut</button>
            </div>
            <div className="login_alll">
                <button onClick={() => btn2(true)}>Modal</button>
            </div>
          </div>
        </div>
    );
}

export default Register;
