import React, { Component } from 'react'
import { Button} from 'reactstrap'
import "../dashboard/Room.css";
import Axios from 'axios';
export default class Room extends Component {



    constructor(props){
        super(props)
 
        this.state = {
            bookId:'',
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('user_token')}` }
            }
        }
        }
    dateHandelChange(e){
         
        this.setState({date:e.target.value})
       
      }


    book=(e)=>{
        // var params = {
        //   id:this.state.bookId
        // }
        e.preventDefault();
          Axios.delete('http://localhost:3012/api/v1/hotel/rooms/'+this.state.bookId,this.state.config )
          .then(function(response){
            console.log(response.data)
            window.location.reload(); 
          })
          .catch(function(err){
           console.log(err)
          })      
        }
    render() {
        const { room } = this.props
        const { book } = this.props
        
        return (
                 <tr>
                 <th scope="row">{room.id}</th>
                 <td>{room.hotelName}</td>
                 <td>{room.roomNo}</td>
                 <td>{room.phone}</td>
                 <td>{room.noOfBed}</td>
                 <td>{room.address}</td>
                 <td><img className="photo" src={"http://localhost:3012/profile/"+ room.roomImage}/></td>
                 <td>{room.description}</td>
                 <td>{book.date}</td>
                <td><Button variant="primary" type="submit" onClick={this.state.bookId=book.id,this.book } >Delete Book</Button></td>
                </tr>
                
        )
    }
}
