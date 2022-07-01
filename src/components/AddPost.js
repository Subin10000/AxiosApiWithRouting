import React from 'react'

const AddPost = ({onAddPost}) => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onAddPost(e.target.title.value,e.target.body.value);
        e.target.title.value = "";
        e.target.body.value = "";
    }
    return (
        <div className="container">
        <div className="center">
            <div className="heading1">Add Post</div>
            <form onSubmit={handleOnSubmit} className="form">
            <label>Title:</label>
            <input type="text" name="title" className='ifield' />
            <label>Body:</label>
            <input type="text" name="body" className='ifield'/>
            <button className="btn">Add</button>
            </form>
            <div className="line"></div>
        </div>
        </div>
    );
}

export default AddPost