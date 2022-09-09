import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ModalAdd(props) {
    return (

        <Modal show={props.showModalAdd} onHide={props.handleCloseAdd}>
            <Modal.Header closeButton>
                <Modal.Title>Add new item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={props.handleSubmit}>
                    <legend>Title:</legend>
                    <input type="text" name="title" placeholder="title..."/>
                    <legend>Description:</legend>
                    <br/>
                    <textarea name="description" placeholder="description..."/>
                    <br/>
                    <Button type="submit" variant="success">
                        Add
                    </Button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleCloseAdd}>
                    Close
                </Button>

            </Modal.Footer>
        </Modal>

    );
}

export default ModalAdd;