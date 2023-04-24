import axios from 'axios'
import React, { useState } from 'react'

const Create = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('https://crudcrud.com/api/2fd9da3031094e3e8a77d033a9048eda/StudenData', {
            Name: name,
            Age: age,
            Email: email,
        })
        setName('')
        setAge('')
        setEmail('')
    }
    return (
        <div className='row'>
            <div className='col-md-4'>
                <form onSubmit={onSubmitHandler}>
                    <div className='bg-primary p-2 text-center'>
                        <h1>Create Data</h1>
                    </div>
                    <div className='form-group'>
                        <label>Enter Name : </label>
                        <input type="text" className='form-control' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className='form-group'>
                        <label>Enter Age : </label>
                        <input type="number" className='form-control' placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} required />
                    </div>
                    <div className='form-group'>
                        <label>Enter Email : </label>
                        <input type="email" className='form-control' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div><br />
                    <div className='d-grid'>
                        <input type="submit" className='btn btn-primary' value={'Submit'} />
                    </div>
                </form>
                {name}<br />
                {age}<br />
                {email}
            </div>
        </div>
    )
}

export default Create
