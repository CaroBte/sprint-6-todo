import TodoFilters from "./components/Filters/TodoFilters";
import Input from "./components/Input/Input";
import Task from "./components/Task/Task";
import TaskList from "./components/TaskList/TaskList";
import Title from "./components/Title/Title";


function App() {
  return (
    <>
      <div className="d-flex flex-column align-items-center header">
        <Title />
        <Input />
      </div>
      <div className="task-container d-flex flex-column align-items-center">
        <TaskList>
          <Task />
          <Task />
          <Task />
          <Task />
        </TaskList>


      </div>

    </>
  );
}

export default App;
