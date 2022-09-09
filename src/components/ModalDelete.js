import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ModalDelete(props) {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Items manager</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete item titled
                "{(props.pickedIndex || props.pickedIndex === 0) ? props.tasks[props.pickedIndex].title : " "}"?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={props.handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalDelete;