import { Modal, Button } from "react-bootstrap";

const AppModal = ({
  show,
  handleClose,
  title,
  children,
  submitText,
  variant,
  formId,
  isLoading = false,
}) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={handleClose} disabled={isLoading}>
          Cancel
        </Button>
        <Button
          variant={variant}
          type="submit"
          form={formId}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : submitText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AppModal;
