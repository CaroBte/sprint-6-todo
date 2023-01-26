import React from 'react'
import TodoFilters from '../Filters/TodoFilters'
import Task from '../Task/Task'

const TaskList = ({ tasks, deleteTask2 }) => {
    return (
        <>
            {tasks.map(task => {
                return (
                    <Task key={task.id} task={task} deleteTask={(_id) => { deleteTask2(_id) }} />
                )
            })}
            <TodoFilters />
        </>

    )
}

export default TaskList