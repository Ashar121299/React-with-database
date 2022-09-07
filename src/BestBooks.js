import React from 'react';
import axios from 'axios';
import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

class BestBooks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bookArr : []
    }
  }
  
    componentDidMount = () => {
      axios
      .get(`https://class12backend.herokuapp.com/book`)
      .then(result =>{
        console.log(result.data);
        this.setState({
          bookArr : result.data
        })
      })
      .catch(err=>{
        console.log(err);
      })
      
    }


    addBook = (event) =>{
      //event.preventDefault();
      
      const obj = {
        title : event.target.title.value,
        discription: event.target.discription.value,
        status: event.target.status.value,

      }
  
      axios
      .post(`https://class12backend.herokuapp.com/book`, obj)
      .then(result =>{
        this.setState({
          bookArr : result.data
        })
      })
      .catch(err=>{
        console.log(err);
      })
    }

    deleteBook = (id) => {
      axios
        .delete(`https://class12backend.herokuapp.com/book/${id}`)
        .then((result) => {
          console.log('done');
          
          this.setState({
            bookArr: result.data,
          });
          this.componentDidMount();
          
        })
        .catch((err) => {
          console.log(err);
        });
  
        
      };

 
  render() {

    /* TODO: render all the books in a Carousel */

    return (
      
      <>
      <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>AddBook</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <Form onSubmit={this.addBook} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="text" name='title' placeholder="Enter Book title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control type="text" name='discription' placeholder="Enter book discription" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Control type="text" name='status' placeholder="Enter book status" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSubmitbox">
      <Button type='Submit' >Add</Button>
      </Form.Group>
      </Form>
      
      </Modal.Body>

      <Modal.Footer>
        
      </Modal.Footer>
    </Modal.Dialog>
      
        {this.state.bookArr.length ? 
            <Carousel fade>
              {this.state.bookArr.map(item => {
                return(
                  <Carousel.Item>
                    <img class="d-block w-100" height="480" src={require("./bg_slide.jpg")} alt="Slide"/>
                    <Carousel.Caption>
                        <h3>Book title: {item.title}</h3>
                        <p>Book discription:{item.discription}</p>
                        <p>Book status :{item.status}</p>
                        <Button  onClick={() => this.deleteBook(item._id)}>Delete</Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              }
            )
          }
          </Carousel>
          : <h3>No Books Found </h3> 
        }
      </>
    
   );
  }
}

export default BestBooks;
