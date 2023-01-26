import React from 'react'
import Task from '../Task/Task'

const TaskList = ({ tasks, deleteTask2, completedState, filter }) => {
    return (
        <>
            {tasks.map(task => {
                return (
                    <Task key={task.id} task={task}
                        deleteTask={(_id) => { deleteTask2(_id) }}
                        _completedState={(_id) => { completedState(_id) }}
                        _filter={filter} />
                )
            })}
        </>

    )
}

export default TaskList