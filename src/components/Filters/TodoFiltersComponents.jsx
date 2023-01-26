import React from 'react'

const FiltersContainer = ({ children }) => {
    return (
        <div className='row filter-container'>
            {children}
        </div>
    )
}

const ItemsLeft = ({ total = 0 }) => {
    return (
        <>
            <p className='col-3 filter-text'>{total} Items left</p>
        </>
    )

}

const BtnFiltersContainer = ({ children }) => {
    return (
        <div className='col-5 filter-text'>
            {children}
        </div>
    )
}

const FilterBtn = ({ action, active, filter }) => {
    return (
        <div className='row'>
            <p className='col-4 filter-text'>
                All
            </p>
            <p className='col-4 filter-text'>
                Active
            </p>
            <p className='col-4 filter-text'>
                Completed
            </p>

        </div>
    )
}

export { FiltersContainer, ItemsLeft, BtnFiltersContainer, FilterBtn }