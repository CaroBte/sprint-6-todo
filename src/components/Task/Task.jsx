import React from 'react'

const Task = () => {
    return (
        <div className='d-flex align-items-center task'>
            <div className="d-flex align-items-center my-2">
                <span className='span-circle'><i className='fa-regular fa-circle'></i></span>
                <p className='task-text my-2'>Task bla bla </p>
                <span className='span-xmark'><i className="fa-solid fa-xmark"></i></span>
            </div>
        </div >
    )
}

export default Task