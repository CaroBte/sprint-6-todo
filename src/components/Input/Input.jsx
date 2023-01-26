import React from 'react'
import { useState } from 'react'

const Input = ({ addTask }) => {
    const [inputTask, setInputTask] = useState("")

    return (
        <form className='d-flex align-items-center' style={{ width: '30%' }}
            onSubmit={(e) => {
                e.preventDefault()
                addTask(inputTask)
                setInputTask("")
            }}>
            <i className='fa-regular fa-circle position-absolute'></i>
            <input type='text' className='form-control px-5' placeholder='Create a new todo...' value={inputTask}
                onChange={(e) => {
                    setInputTask(e.target.value)
                }} required />
        </form>
    )
}

export default Input