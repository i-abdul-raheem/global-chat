import { Button, Modal } from "react-bootstrap";

export const ChatLogout = ({ logoutModal, setLogoutModal }) => {
  return (
    <Modal show={logoutModal}>
      <Modal.Header>
        <Modal.Title>Logout</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-3">
        <p>Is it certain that you want to logout?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setLogoutModal(false)}>
          Cancel
        </Button>
        <Button variant="danger">Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
};
