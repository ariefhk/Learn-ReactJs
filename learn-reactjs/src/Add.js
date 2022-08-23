import { Form, Button, Stack, Card } from "react-bootstrap";
const Add = ({ handleChangeTodoName, todoName, addTodo }) => {
  return (
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
  );
};

export default Add;
