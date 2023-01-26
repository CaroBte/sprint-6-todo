import React from 'react'
import { useState } from 'react'

const Task = ({ task, deleteTask }) => {
    let { title, completed, id } = task

    const [completedState, setCompletedState] = useState(completed)

    const completeTask = () => {
        completedState ? setCompletedState(false) : setCompletedState(true)
    }

    return (
        <div className='d-flex align-items-center task'>
            <div className="d-flex align-items-center my-2">
                {completedState ? (<img onClick={completeTask} src='/check-solid.svg' />)
                    : (<span onClick={completeTask} className='span-circle'><i className='fa-regular fa-circle'></i></span>)
                }
                {completedState ? <p className="task-text my-2 text-decoration-line-through">{title}</p> : <p className={'task-text my-2'}>
                    {title}
                </p>}
                <span onClick={() => { deleteTask(id) }} className='span-xmark'><i className="fa-solid fa-xmark"></i></span>
            </div>
        </div >
    )
}

export default Task