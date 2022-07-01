import React from 'react'

function EditUser({id,onEdit}) {

    const handleEdit = (e) => {
        e.preventDefault();
        onEdit(id,e.target.name.value,e.target.email.value);
        e.target.name.value = "";
        e.target.email.value = "";
    }

  return (
    <div className='container'>
        <div className="center">
            <div className="heading1">Edit Post</div>
            <form onSubmit={handleEdit} className="form">
            <input type="text" name="name" className='ifield' />
            <input type="text" name="email" className='ifield'/>
            <button className="btn">Edit Post</button>
            </form>
        </div>
    </div>
  )
}

export default EditUser