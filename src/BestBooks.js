import React from 'react';
import axios from 'axios';
import Carousel from "react-bootstrap/Carousel";

class BestBooks extends React.Component {
constructor(props){
  super(props);
  this.state = {
    bookArr : []
  }
}

  componentDidMount = () => {
    axios
    .get(`http://localhost:3001/book`)
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

 
  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
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
