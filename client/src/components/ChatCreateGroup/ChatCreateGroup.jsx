import { Button, Form, Modal } from "react-bootstrap";

export const ChatCreateGroup = ({ createGroupModal, setCreateGroupModal }) => {
  return (
    <Modal show={createGroupModal}>
      <Modal.Header>
        <Modal.Title>Create Group</Modal.Title>
      </Modal.Header>
      <form action="" method="post">
        <Modal.Body className="p-3">
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Group Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              id="name"
              placeholder="Enter group name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="image">Display Picture</Form.Label>
            <Form.Control type="file" name="image" id="image" required />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setCreateGroupModal(false)}
          >
            Cancel
          </Button>
          <Button variant="success">Create</Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};
