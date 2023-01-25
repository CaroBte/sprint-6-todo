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
            <div className='d-flex justify-content-between'>
                {children}
            </div>
        </div>
    )
}

const FilterBtn = ({ action, active, filter }) => {
    return (
        <p className={`btns-filter`}>{filter}</p>
    )
}

export { FiltersContainer, ItemsLeft, BtnFiltersContainer, FilterBtn }