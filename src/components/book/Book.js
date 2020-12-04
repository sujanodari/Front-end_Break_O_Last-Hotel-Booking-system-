
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './BookList';
import Navigation from '../dashboard/Navigation';
import Footer from '../dashboard/Footer';
import Axios from 'axios';
class Book extends React.Component{


    constructor(props){
        super(props)
 
            this.state={
                    rooms:[],
                    booked:[],
          
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('user_token')}` }
            }
        }
        }
    

    componentDidMount() {
        Axios.get('http://localhost:3012/api/v1/hotel/rooms/book',this.state.config)
            .then((response) => {   
                this.setState({
                    booked: response.data.data
                })
            }).catch((err)=>{
               console.log(err)
            })

                Axios.get('http://localhost:3012/api/v1/hotel/rooms')
                    .then((response) => {   
                        this.setState({
                            rooms: response.data.data
                        })
                    }).catch((err)=>{
                       console.log(err)
                    })
    }


    render(){
        return(
            <div>
              <React.Fragment>
                <Navigation />
                <h2>You can view booked rooms here</h2>
                
                <BookList rooms={this.state.rooms} booked={this.state.booked}/>
            </React.Fragment>
            <Footer />
          </div>
        )
    }
}

export default Book;