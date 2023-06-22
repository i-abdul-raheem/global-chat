import { Badge, Button, Form, Modal } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { AiOutlineClose } from "react-icons/ai";
import "react-bootstrap-typeahead/css/Typeahead.css";

export const ChatAddToGroup = ({ addMemberModal, setAddMemberModal }) => {
  const options = [
    "Apple",
    "Banana",
    "Orange",
    "Pineapple",
    "Strawberry",
    "Watermelon",
  ];
  return (
    <Modal show={addMemberModal}>
      <Modal.Header>
        <Modal.Title>Add Member to Group</Modal.Title>
      </Modal.Header>
      <form action="" method="post">
        <Modal.Body className="p-3">
          <Form.Group className="mb-3">
            <Form.Label htmlFor="search">Search</Form.Label>
            <Typeahead options={options} placeholder="Search..." />
          </Form.Group>
          <Badge pill bg="primary" className="me-2">
            Primary
            <AiOutlineClose style={{ marginLeft: 10 }} />
          </Badge>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setAddMemberModal(false)}>
            Cancel
          </Button>
          <Button variant="success">Create</Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};
