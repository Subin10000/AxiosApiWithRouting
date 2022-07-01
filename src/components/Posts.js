import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import {Link}  from 'react-router-dom';
import AddPost from './AddPost';
import EditPost from './EditPost';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [conditional,setConditional] = useState(null);
  
  useEffect(() => {
    getPosts();
  },[])

  // fetch data
  const getPosts = () => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      setPosts(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  // add data

  const onAddPost = (id,title,body) => {
    Axios.post("https://jsonplaceholder.typicode.com/posts",{
      id,
      title,
      body
    })
    .then(response => {
      // console.log(response.data);
      setPosts([...posts,response.data]);
    }).catch(error => {
      console.log(error);
    })
  }
  // delete function
  const handleDelete = (id) => {
    console.log(id)
    Axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => {
      setPosts(posts.filter((post) =>{
        return post.id !== id;
      }))
    }).catch(error => {
      console.log(error);
    })
  }

  // edit 
   
 

  const onEdit = (id,title,body) => {
    Axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      title,
      body
    })
    .then(response => {
      // console.log(id);
      const editRes = [...posts].filter((post) =>{
        return post.id !== id;
      })
      let res = []
      res.push(response.data) 
      
      console.log(editRes)
      console.log(response.data)


      setPosts([...editRes, ...res])

      

            
    }).catch(error => {
      console.log(error); 
    })
  }

  
  posts.sort((a, b) => {
    return a.id - b.id;
});


  const displayUsers = posts.map((post) => {
    return (
        <ul key={post.id}>
          <li className='Displaylist'>
            <Link to={`/users/${post.id}`} state={{id : post.id}} className="DisplayItems">
              <h3>{post.id}. {post.title}</h3>
              <div className='showMore'>Show more</div>
            </Link>
            <div className='buttonGroup'>
              <button className='btn1' onClick={() => { return setConditional(post.id)}}>Edit</button>
              <button className='btn1' onClick={() => setConditional(null)}>Close</button>  
              <button className='btn1' onClick={() => handleDelete(post.id)}>Delete</button>
              
            </div>
            {conditional === post.id ? (<EditPost id={post.id} onEdit={onEdit} />) : (null) }
            
          </li>
          <div className='line'></div>
        </ul>
    )
  })
  
  return (
    <>
    <AddPost onAddPost={onAddPost}/>
    {displayUsers}
    </>
  )
}


export default Posts