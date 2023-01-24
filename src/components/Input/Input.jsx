import React from 'react'

const Input = () => {
    return (
        <div className='d-flex align-items-center' style={{ width: '30%' }}>
            <i className='fa-regular fa-circle position-absolute'></i>
            <input type='text' className='form-control px-5' placeholder='Create a new todo...' required />
        </div>
    )
}

export default Input