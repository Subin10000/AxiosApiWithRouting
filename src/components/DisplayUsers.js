import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import {useLocation}  from 'react-router-dom';
import "../Css/style.css";

function DisplayUsers(props) {
  const [user, setUser] = useState();  

  const useridVal = useLocation();

  console.log(useridVal.state.id);

  useEffect(() => {
    getUser();
  },[])

 
  const getUser = () => {
    Axios.get(`https://jsonplaceholder.typicode.com/users/${useridVal.state.id}`)
    .then(response => {
      console.log(response.data)
      setUser(response.data);
    }).catch(error => {
      console.log(error);
    })
  }
  // console.log(user)

  const displayUser = 
        <ul >
          <li>
          <div className='container'>
                <div className='objects'>
                  <div></div>
                    <p className='heading'>{user?.id}. {user?.name}</p>
                    <div className='data'>
                    <label>Email</label>
                    <p className='description'> {user?.email}</p>
                    </div>
                    
                    <div className='data'>
                    <label>Username</label>
                    <p className='description'> {user?.username}</p>
                    </div>
                    
                    <div className='data'>
                    <label>City</label>
                    <p className='description'> {user?.address.city}</p>
                    </div>
                    
                    <div className='data'>
                    <label>Zip-code:</label>
                    <p className='description'> {user?.address.zipcode}</p>
                    </div>
                    
                    <div className='data'>
                    <label>Street</label>
                    <p className='description'> {user?.address.street}</p>
                    </div>
                    
                    <div className='data'>
                    <label>Phone</label>
                    <p className='description'> {user?.phone}</p>
                    </div>
                    
                    <div className='data'>
                    <label>Website</label>
                    <p className='description'> {user?.website}</p>
                    </div>
                    
                </div>
            </div>
          </li>
        </ul>

  
  return (
    <div>
        {displayUser}
        {/* item */}
    </div>
  )
}


export default DisplayUsers