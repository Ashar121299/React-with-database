import React from 'react';
import axios from 'axios';
import Carousel from "react-bootstrap/Carousel";
import BookFormModal from './BookFormModal';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  ComponentDidMount=()=>{
    axios.get(`http://localhost:3001/book`)
    .then(result=>{
      this.setState({
        books:result.data,
      });
    })
    .catch(err=>{
      console.log(err);
    });
  }


 
  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <div>
        <BookFormModal />
        {this.state.books.length ? (
            <Carousel fade>
              {this.state.books.map((item) => {
                return(
                <Carousel.Item>
                  <img src="https://play-lh.googleusercontent.com/DmpYQrVcldrDuz5uyATqGbNvTALsJ1Bg3fpXM0p-VsRNM19osEB9-_ByvdjSbTvZQg=w450-h300-rw"/>
                  <Carousel.Caption>
                    <h2>{item.title}</h2>
                    <h5>{item.discription}</h5>
                    <h5>{item.status}</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                 ); 
                }
              )
           }
            </Carousel>) : ( <h3>No Books Found :( </h3>
            )
          }
            
      </div>
    );
  }
}

export default BestBooks;
