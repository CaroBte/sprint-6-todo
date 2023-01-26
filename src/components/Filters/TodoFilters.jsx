import React from 'react'
import { useState } from 'react'

const TodoFilters = ({ itemsLeft, clearCompleted, filter }) => {
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
            <div className="col-3">
                <p className="filter-text">{itemsLeft} items left</p>
            </div>
            <div className='col-5'>
                <div className="row">
                    <p className={`col-4 filter-text ${all ? 'active' : ''}`}
                        onClick={() => { handleClick(true, false, false); filter('all') }}>
                        All
                    </p>
                    <p className={`col-4 filter-text ${active ? 'active' : ''}`}
                        onClick={() => { handleClick(false, false, true); filter('active') }}>
                        Active
                    </p>
                    <p className={`col-4 filter-text ${completed ? 'active' : ''}`}
                        onClick={() => { handleClick(false, true, false); filter('completed') }}>
                        Completed
                    </p>
                </div>
            </div>
            <div className="col-4">
                <p onClick={clearCompleted} className="filter-text">Clear completed</p>
            </div>
        </div>
    )
}

export default TodoFilters