import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import {Link}  from 'react-router-dom';
import AddUser from './AddUser';
import EditUser from './EditUser';

function Users() {
  const [users, setUsers] = useState([]);
  const [conditional,setConditional] = useState(null);
  
  useEffect(() => {
    getUsers();
  },[])

  // fetch data
  const getUsers = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      setUsers(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  // add data

  const onAddUser = (id,name,email) => {
    Axios.post("https://jsonplaceholder.typicode.com/users",{
      id,
      name,
      email
    })
    .then(response => {
      // console.log(response.data);
      setUsers([...users,response.data]);
    }).catch(error => {
      console.log(error);
    })
  }
  // delete function
  const handleDelete = (id) => {
    console.log(id)
    Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => {
      setUsers(users.filter((user) =>{
        return user.id !== id;
      }))
    }).catch(error => {
      console.log(error);
    })
  }

  // edit 
   
 

  const onEdit = (id,name,email) => {
    Axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`,{
      name,
      email
    })
    .then(response => {
      console.log(id);
      const editRes = [...users].filter((user) =>{
        return user.id !== id;
      })
      let res = []
      res.push(response.data) 
      
      console.log(editRes)
      console.log(response.data)


      setUsers([...editRes, ...res])

      

            
    }).catch(error => {
      console.log(error); 
    })
  }

  
  users.sort((a, b) => {
    return a.id - b.id;
});


  const displayUsers = users.map((user) => {
    return (
        <ul key={user.id}>
          <li className='Displaylist'>
            <Link to={`/users/${user.id}`} state={{id : user.id}} className="DisplayItems">
              <h3>{user.id}. {user.name}</h3>
              <div className='showMore'>Show more</div>
            </Link>
            <div className='buttonGroup'>
              <button className='btn1' onClick={() => setConditional(user.id)}>Edit</button>
              <button className='btn1' onClick={() => setConditional(null)}>Close</button>
              <button className='btn1' onClick={() => handleDelete(user.id)}>Delete</button>
              
              
            </div>
           {conditional === user.id ? (<EditUser id={user.id} onEdit={onEdit} />) : (null) }
            
          </li> 
          <div className='line'></div>
        </ul>
    )
  })
  
  return (
    <>
    <AddUser onAddUser={onAddUser}/>
    {displayUsers}
    </>
  )
}


export default Users