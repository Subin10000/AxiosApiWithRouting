import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import {useLocation}  from 'react-router-dom';

function DisplayPosts(props) {
  const [post, setPost] = useState();  

  const postidVal = useLocation();

  console.log(postidVal.state.id);

  useEffect(() => {
    getPost();
  },[])

 
  const getPost = () => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${postidVal.state.id}`)
    .then(response => {
      console.log(response.data)
      setPost(response.data);
    }).catch(error => {
      console.log(error);
    })
  }
  // console.log(user)

  const displayPost = 
        <ul >
          <li>
            <div className='container'>
                <div className='objects'>
                    <p className='heading'>{post?.id}. {post?.title}</p>
                    <p className='description'>{post?.body}</p>
                </div>
            </div>
          </li>
        </ul>

  
  return (
    <div>
        {displayPost}
        {/* item */}
    </div>
  )
}


export default DisplayPosts