import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Task = ({ task, deleteTask, _completedState, _filter }) => {
    let { title, completed, id } = task

    const [completedState, setCompletedState] = useState(completed)
    const [showTasks, setShowTasks] = useState(true)

    useEffect(() => {
        if (_filter === 'all') {
            setShowTasks(true);
        } else if (_filter === 'active' && completedState === false) {
            setShowTasks(true)
        } else if (_filter === 'completed' && completedState === true) {
            setShowTasks(true)
        } else {
            setShowTasks(false)
        }
    }, [_filter])

    const completeTask = () => {
        completedState ? setCompletedState(false) : setCompletedState(true)
        _completedState(id)
    }

    return (
        <div className={`d-flex align-items-center task ${showTasks ? '' : 'hidden'}`}>
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