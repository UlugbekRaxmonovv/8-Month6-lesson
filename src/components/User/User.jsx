import React from 'react';
import { Link } from 'react-router-dom';
import './User.css'

const User = () => {
    return (

        <header>
    <div className='container'>
          <nav>
       <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1788614524.1718755200&semt=ais_user" alt="" />
            <ul>
                <li>
                    <Link to="/">User</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
          </nav>
        </div>
        </header>
    
    );
}

export default User;
