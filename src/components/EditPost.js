import React from 'react'

function EditPost({id,onEdit}) {

    const handleEdit = (e) => {
        e.preventDefault();
        onEdit(id,e.target.title.value,e.target.body.value);
        e.target.title.value = "";
        e.target.body.value = "";
    }

  return (
    <div className='container'>
        <div className="center">
            <div className="heading1">Edit Post</div>
            <form onSubmit={handleEdit} className="form">
            <input type="text" name="title" className='ifield' />
            <input type="text" name="body" className='ifield'/>
            <button className="btn">Edit Post</button>
            </form>
        </div>
    </div>
  )
}

export default EditPost