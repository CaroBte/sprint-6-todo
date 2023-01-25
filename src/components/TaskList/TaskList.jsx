import React from 'react'
import TodoFilters from '../Filters/TodoFilters'
import Task from '../Task/Task'

const TaskList = ({ children }) => {
    return (
        <>
            {children}
            <TodoFilters />
        </>

    )
}

export default TaskList