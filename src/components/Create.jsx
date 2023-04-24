import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const Create = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const naviagate = useNavigate();
    const BASE_URL = 'https://crudcrud.com/api/5f9fd62462f34a20b6b077c0da693016/StudenData'
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post(BASE_URL, {
            Name: name,
            Age: age,
            Email: email,
        }).then(() => {
            naviagate('/');
        })
        setName('')
        setAge('')
        setEmail('')
    }
    return (
        <div className='row p-2'>
            <div className='col-md-4 p-1'>
                <div className="mb-2 mt-2">
                    <Link to={'/'}>
                        <button className="btn btn-info">Read Data</button>
                    </Link>
                </div>
                <form onSubmit={onSubmitHandler}>
                    <div className='bg-primary p-2 text-center'>
                        <h1>Create Data</h1>
                    </div>
                    <div className='form-group pt-2'>
                        <label>Enter Name : </label>
                        <input type="text" className='form-control' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className='form-group pt-2'>
                        <label>Enter Age : </label>
                        <input type="number" className='form-control' placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} required />
                    </div>
                    <div className='form-group pt-2'>
                        <label>Enter Email : </label>
                        <input type="email" className='form-control' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div><br />
                    <div className='d-grid'>
                        <input type="submit" className='btn btn-primary' value={'Submit'} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create
