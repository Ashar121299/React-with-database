import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Card from "react-bootstrap/Card";


class BookFormModal extends React.component{
    constructor (props){
        super(props);
        this.state={
            addedBooks:[],
        }
    }


    addBook =(e)=>{
        e.preventDefault();
        const obj={
            booktitle :e.target.title.value,
            bookdiscription :e.target.discription.value,
            bookstatus :e.target.status.value,
       };
       axios.post(`http://localhost:3010/book`,obj)
       .then(result=>{
        this.setState({
            addedBooks:result.data,
        })
        

       })
      .catch(err=>{
       console.log(err);
       })
         
    }
    deletebook= (id) => {
        axios
        .delete(`http://localhost:3010/deletebook/${id}`) //http://localhost:3010/deletebook?id=${id}
        .then(result =>{
          this.setState({
            addedBooks : result.data
          })
        })
        .catch(err=>{
          console.log(err);
        })
      }
    render() {
        return(
            <div>
                <>
                    <input type='text' name='title' placeholder="enter your book title"></input>
                    <input type='text' name='discription' placeholder="enter your book discription"></input>
                    <input type='text' name='status' placeholder="enter your book status"></input>
                    


                </>
                <Card>
                    <Card.Body>
                    {this.state.addedBooks.map((item)=>{
                        return(
                            <div>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                <h5>{item.discription}</h5>
                                <h5>{item.status}</h5>
                                <button onClick={() => this.deletebook(item._id)}> X </button>  
                            </Card.Text>
                            </div>
                           
                        );
                    })
                    }
                    </Card.Body>
                </Card>

            </div>       
            
        );
    }
}

export default BookFormModal ;