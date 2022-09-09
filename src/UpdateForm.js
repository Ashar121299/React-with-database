import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class UpdateForm extends React.Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.props.updateBook}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>book title</Form.Label>
                            <Form.Control type="text" placeholder="book title" name="title" defaultValue={this.props.currentBook.title}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>book discription</Form.Label>
                            <Form.Control type="text" placeholder="book discription" name="discription"  defaultValue={this.props.currentBook.discription}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>book status</Form.Label>
                            <Form.Control type="text" placeholder="book status" name="status"  defaultValue={this.props.currentBook.status}/>
                        </Form.Group>

                        <Button variant="primary" type="Submit">
                            update
                        </Button>

                    </Form>
                </Modal.Body>
                
            </Modal>
        )
    }
}

export default UpdateForm;