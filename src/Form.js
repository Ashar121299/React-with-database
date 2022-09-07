import React from 'react';
import Button from 'react-bootstrap/Button';


class Form extends React.Component() {
    render()
    {
        return (
            
        <Form onSubmit={this.state.addBook}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Book title</Form.Label>
        <Form.Control type="text" placeholder="Enter Book title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Book description</Form.Label>
        <Form.Control type="text" placeholder="Enter book discription" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Enter Book status</Form.Label>
        <Form.Control type="text" placeholder="Enter book status" />
        </Form.Group>
        <Button variant="primary" type="submit">
        AddBook
        </Button>
        </Form>
        );
    }
}

export default Form;