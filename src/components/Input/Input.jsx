import React from 'react'

const Input = () => {
    return (
        <>
            <form style={{ width: '30%' }}>
                <input className='form-control' placeholder='Create a new todo...' required />
            </form>
        </>
    )
}

export default Input