import React from 'react';
import Card from "./Card";
import Button from "react-bootstrap/Button";
import ModalDelete from "./ModalDelete";
import ModalAdd from "./ModalAdd";

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

        let item = {title: e.target.title.value, description: e.target.description.value};
        const tasks = this.state.tasks.slice();
        tasks.push(item);
        this.setState({tasks: tasks, showModalAdd: false});

    }

    handleCloseAdd() {
        this.setState({showModalAdd: false})
    }

    render() {
        let tasks = this.state.tasks;
        const items = tasks.map((value, index) => {
            return <Card index={index} handleClick={this.handleClick} key={index} title={value.title}
                         description={value.description}/>
        });

        return (
            <>


                <div className="container mt-5">
                    <div className="text-center">
                        <Button onClick={this.handleClickAdd} variant="success" className="text-center">Add new! <i
                            className="bi bi-plus-circle" role="img"></i></Button>
                    </div>

                    <div className="mx-auto text-center d-flex justify-content-center">
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

export default Todo;