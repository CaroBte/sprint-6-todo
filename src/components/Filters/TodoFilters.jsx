import React from 'react'
import { BtnFiltersContainer, FilterBtn, FiltersContainer, ItemsLeft } from './TodoFiltersComponents'

const TodoFilters = () => {
    return (
        <FiltersContainer>
            <ItemsLeft />
            <BtnFiltersContainer>
                <FilterBtn filter="All" />
                <FilterBtn filter="Active" />
                <FilterBtn filter="Completed" />
            </BtnFiltersContainer>
            <p className='col-4 filter-text clear-filter'>
                Clear Completed
            </p>
        </FiltersContainer>
    )
}

export default TodoFilters