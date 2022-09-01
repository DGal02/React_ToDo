import React from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap/dist/css/bootstrap.min.css';
import './bootstrap-icons/font/bootstrap-icons.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './index.css';


class Todo extends React.Component {
    constructor(pros) {
        super(pros);
        this.state = {
            tasks: [
                {title: "React", description: "I need to learn how to use React and Boostrap+React"},
                {title: "json", description: "How to include json, then how to use it"}
            ],
            showModal: false,
            showModalAdd: false,
            pickedIndex: null
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseAdd = this.handleCloseAdd.bind(this);
    }

    handleClick(index) {
        this.setState({showModal: true, pickedIndex: index});

    }

    handleClose() {
        this.setState({showModal: false});
    }

    handleDelete() {
        const tasks = this.state.tasks.slice();
        tasks.splice(this.state.pickedIndex, 1);
        this.setState({tasks: tasks, showModal: false, pickedIndex: null});

    }

    handleClickAdd() {
        this.setState({showModalAdd: true})
    }

    handleSubmit(e) {
        e.preventDefault();
        if (e.target.title.value.length === 0 || e.target.description.value.length === 0) {
            alert("Fill inputs!");
            return;
        }
        console.log(e.target.title.value + " " + e.target.description.value);
        var item = {title: e.target.title.value, description: e.target.description.value};
        const tasks = this.state.tasks.slice();
        tasks.push(item);
        this.setState({tasks: tasks, showModalAdd: false});

    }

    handleCloseAdd() {
        this.setState({showModalAdd: false})
    }

    render() {
        var tasks = this.state.tasks;
        const items = tasks.map((value, index) => {
            return <Card index={index} handleClick={this.handleClick} key={index} title={value.title}
                         description={value.description}/>
        });
        console.log()
        return (
            <>


                <div className="container mt-5">
                    <div className="text-center">
                        <Button onClick={this.handleClickAdd} variant="success" className="text-center">Add new! <i
                            className="bi bi-plus-circle" role="img"></i></Button>
                    </div>

                    <div className="mx-auto text-center">
                        {items}
                    </div>
                </div>

                <ModalDelete handleDelete={this.handleDelete} handleClose={this.handleClose} tasks={this.state.tasks}
                             pickedIndex={this.state.pickedIndex} show={this.state.showModal}
                             onHide={this.handleClose}/>

                <ModalAdd showModalAdd={this.state.showModalAdd} handleClose={this.handleClose}
                          handleSubmit={this.handleSubmit} handleCloseAdd={this.handleCloseAdd}/>

            </>
        );
    }

}

function Card(props) {

    return (
        <div className="card m-3 display-inline text-start align-top" style={{width: "18rem", minHeight: "10rem"}}>
            <h5 className="card-header">{props.title}</h5>
            <div className="card-body">
                <p className="card-text">{props.description}</p>
                <div className="text-end">
                    <Button variant="danger" onClick={() => props.handleClick(props.index)}>
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );


}

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
                    <textarea type="text" name="description" placeholder="description..."/>
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Todo/>);

