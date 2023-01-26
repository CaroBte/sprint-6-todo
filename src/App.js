import { useEffect, useState } from "react";
import TodoFilters from "./components/Filters/TodoFilters";
import Input from "./components/Input/Input";
import TaskList from "./components/TaskList/TaskList";
import Title from "./components/Title/Title";


function App() {

  const [tasks, setTasks] = useState([
    {
      id: 0,
      title: "Complete Sprint 2",
      completed: false,
    }
  ])

  const [counterId, setCounterId] = useState(1)
  const [itemsLeftNumber, setItemsLeftNumber] = useState(0)
  const [filterOption, setFilterOption] = useState('all')

  const addTask = (taskInput) => {
    console.log(taskInput)
    let template = {
      id: counterId,
      title: taskInput,
      completed: false
    }
    setCounterId(counterId + 1)
    console.log(template);
    tasks.push(template)
    console.log(tasks);
  }

  const deleteTask = (_id) => {
    setTasks(oldValues => {
      return oldValues.filter(task => task.id !== _id)
    })
  }

  const changeTaskState = (_id) => {
    let index = tasks.findIndex(task => task.id === _id)
    let tempArray = tasks
    tempArray[index].completed = !tempArray[index].completed
    setTasks(tempArray)
    console.log('hola desde change');
    updateItemsLeft()

  }

  const updateItemsLeft = () => {
    let taskLeft = 0
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].completed === false) {
        taskLeft++
      }
    }

    setItemsLeftNumber(taskLeft)
    console.log('hola effect');
  }

  useEffect(() => {
    updateItemsLeft()
  }, [tasks, counterId])

  const clearCompleted = () => {
    setTasks(oldValues => {
      return oldValues.filter(task => task.completed === false)
    })
  }


  return (
    <>
      <div className="d-flex flex-column align-items-center header">
        <Title />
        <Input addTask={addTask} />
      </div>
      <div className="task-container d-flex flex-column">
        <TaskList
          tasks={tasks}
          deleteTask2={deleteTask}
          completedState={changeTaskState}
          filter={filterOption} />
        <TodoFilters itemsLeft={itemsLeftNumber} clearCompleted={clearCompleted} filter={(option) => { setFilterOption(option) }} />
      </div>

    </>
  );
}

export default App;
