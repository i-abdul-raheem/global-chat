import { Button, Modal } from "react-bootstrap";

export const ChatLeaveGroup = ({ leaveGroupModal, setLeaveGroupModal }) => {
  return (
    <Modal show={leaveGroupModal}>
      <Modal.Header>
        <Modal.Title>Leave Group</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-3">
        <p>Is it certain that you want to leave this group?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setLeaveGroupModal(false)}>
          Cancel
        </Button>
        <Button variant="danger">Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
};
