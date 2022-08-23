import { useState } from "react";
import "./App.css";
import Add from "./Add";
import { Container } from "react-bootstrap";
import List from "./List";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoName, setTodoName] = useState("");

  const addTodo = () => {
    const dataTodo = { todoName, status: false };
    setTodoList([dataTodo, ...todoList]);
    setTodoName("");
  };

  const deleteTodo = (index) => {
    setTodoList(todoList.filter((value, idx) => index !== idx));
  };

  const todoBerhasil = (index) => {
    const cloneTodoList = [...todoList];
    cloneTodoList[index].status = !cloneTodoList[index].status;
    setTodoList(cloneTodoList);
  };

  const handleChangeTodoName = (result) => {
    const data = result.target.value;
    // console.log(data);
    setTodoName(data);
  };

  return (
    <Container>
      <h1 className="text-center mt-5">Todo Web App</h1>
      {/* Input Todo  */}
      <Add
        handleChangeTodoName={handleChangeTodoName}
        todoName={todoName}
        addTodo={addTodo}
      />

      {/* List Todo */}
      <div className="mt-5">
        <List
          todoList={todoList}
          todoBerhasil={todoBerhasil}
          deleteTodo={deleteTodo}
        />
      </div>
    </Container>
  );
}

export default App;
