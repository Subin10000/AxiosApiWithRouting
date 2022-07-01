import React from 'react'

const AddUser = ({onAddUser}) => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onAddUser(e.target.id.value,e.target.name.value,e.target.email.value);
        e.target.name.value = "";
        e.target.email.value = "";
    }
    return (
        <div className="container">
        <div className="center">
            <div className="heading1">Add User</div>
            <form onSubmit={handleOnSubmit} className="form">
                <label>Name:</label>
            <input type="text" name="name" className='ifield' />
                <label>Email:</label>
            <input type="text" name="email" className='ifield'/>
            <button className="btn">Add</button>
            </form>
            <div className="line"></div>
        </div>
        </div>
    );
}

export default AddUser