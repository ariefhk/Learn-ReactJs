import { useState } from "react";
import "./App.css";
import {
  Container,
  Form,
  Button,
  Stack,
  Card,
  Row,
  Col,
} from "react-bootstrap";

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

  console.log(todoList);

  return (
    <Container>
      <h1 className="text-center mt-5">Todo Web App</h1>
      {/* Input Todo  */}
      <Card className="mt-5">
        <Card.Body>
          <Stack direction="horizontal" gap={3}>
            <Form.Control
              type="text"
              placeholder="Masukkan Todo"
              onChange={handleChangeTodoName}
              value={todoName}
            />
            <Button onClick={addTodo}>Add</Button>
          </Stack>
        </Card.Body>
      </Card>

      {/* List Todo */}
      <div className="mt-5">
        {todoList.map((value, index) => {
          return (
            <Card className="mt-2">
              <Card.Body>
                <Row>
                  {/* Nama Todo */}
                  <Col>
                    <h3>{value.todoName}</h3>
                  </Col>
                  {/* Button Todo */}
                  <Col xl="1">
                    <Button
                      onClick={() => {
                        todoBerhasil(index);
                      }}
                      variant={value.status ? "success" : "warning"}
                    >
                      {value.status ? "Selesai" : "Belum Selesai"}
                    </Button>
                  </Col>
                </Row>
                <Button
                  variant="danger"
                  className="mt-2"
                  onClick={() => {
                    deleteTodo(index);
                  }}
                >
                  Hapus
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Container>
  );
}

export default App;
