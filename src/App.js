import Input from "./components/Input/Input";
import Task from "./components/Task/Task";
import Title from "./components/Title/Title";

function App() {
  return (
    <>

      <div className="d-flex flex-column align-items-center header">
        <Title />
        <Input />
      </div>
      <div className="task-container d-flex flex-column align-items-center py-2">
        <Task />
        <Task />
        <Task />
      </div>

    </>
  );
}

export default App;
