import { useState } from "react";
import Input from "./components/Input/Input";
import TaskList from "./components/TaskList/TaskList";
import Title from "./components/Title/Title";


function App() {

  const [tasks, setTasks] = useState([
    {
      id: 0,
      title: "Complete Sprint 2",
      completed: true,
    }
  ])

  const [counterId, setCounterId] = useState(1)

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


  return (
    <>
      <div className="d-flex flex-column align-items-center header">
        <Title />
        <Input addTask={addTask} />
      </div>
      <div className="task-container d-flex flex-column align-items-center">
        <TaskList tasks={tasks}
          deleteTask2={deleteTask} />
      </div>

    </>
  );
}

export default App;
