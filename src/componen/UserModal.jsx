import { Modal, Button, Form } from "react-bootstrap";

const UserModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Management User</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email@gmail.con"
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter Your password"
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Status</Form.Label>
            <Form.Select name="status">
              <option value="1">Active</option>
              <option value="0">In Active</option>
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
export default UserModal;
