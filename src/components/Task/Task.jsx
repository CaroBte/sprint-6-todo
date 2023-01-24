import React from 'react'

const Task = () => {
    return (
        <div className='d-flex align-items-center justify-content-between task'>
            <div className="d-flex align-items-center justify-content-between">
                <span><i className='fa-regular fa-circle'></i></span>
                <p className='task-text'>Task bla bla</p>
                <span><i class="fa-solid fa-xmark"></i></span>
            </div>
        </div >
    )
}

export default Task