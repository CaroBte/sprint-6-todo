import React from 'react'
import { useState } from 'react'




const TodoFilters = () => {
    const [all, setAll] = useState(true)
    const [completed, setCompleted] = useState(false)
    const [active, setActive] = useState(false)

    const handleClick = (_data1, _data2, _data3) => {
        setAll(_data1)
        setCompleted(_data2)
        setActive(_data3)
    }

    return (
        <div className='row'>
            <p className={`col-4 filter-text ${all ? 'active' : 'holi'}`}
                onClick={() => { handleClick(true, false, false) }}>
                All
            </p>
            <p className={`col-4 filter-text ${active ? 'active' : 'holi'}`}
                onClick={() => { handleClick(false, false, true) }}>
                Active
            </p>
            <p className={`col-4 filter-text ${completed ? 'active' : 'holi'}`}
                onClick={() => { handleClick(false, true, false) }}>
                Completed
            </p>
        </div>
    )
}

export default TodoFilters