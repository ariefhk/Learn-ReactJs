import { Button, Card, Row, Col } from "react-bootstrap";
import { VscCheck, VscClose } from "react-icons/vsc";

const List = ({ todoList, todoBerhasil, deleteTodo }) => {
  return todoList.map((value, index) => {
    return (
      <Card className="mt-2" key={index}>
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
                {value.status ? <VscCheck /> : <VscClose />}
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
  });
};

export default List;
