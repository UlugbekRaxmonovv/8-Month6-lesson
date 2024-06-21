import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import './User.css'
import axios from '../Api/index';

const User = () => {
    const [category, setCategory] = useState(null);
    console.log(category);
    useEffect(() => {
     axios
     .get('/users/search',{
        params:{
            limit:10000
        }
     })
     .then((res) => setCategory(res.data.data.users))

    }, [])


    let user = category?.map((category) =>(
        <div className="card" key={category.id}>
         <h2>{category.FirstName}</h2>
         <h3>{category.LastName}</h3>
         <h5>{category.phones[0]}</h5>
         <p>{category.id}</p>

        </div>
    ))
    return (

       <>
       
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

        <div className="wrapper">
           {user}
        </div>
       </>
    
    );
}

export default User;
