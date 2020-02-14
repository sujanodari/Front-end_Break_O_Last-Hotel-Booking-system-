import React, { Component } from 'react'
import { Button, Input } from 'reactstrap'
import "./Room.css";
import Axios from 'axios';
export default class Room extends Component {



    constructor(props){
        super(props)
 
        this.state = {
            roomID:'',
            date:'',
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('user_token')}` }
            }
        }
        }
    dateHandelChange(e){
         
        this.setState({date:e.target.value})
       
      }


    book=(e)=>{
        var data= {
          date : this.state.date,
          hotelId:this.state.roomID
        }
        console.log(data);
        e.preventDefault();
          Axios.post('http://localhost:3012/api/v1/hotel/rooms/book/',data,this.state.config )
          .then(function(response){
            console.log(response.data)     
          })
          .catch(function(err){
           console.log(err)
          })      
        }
    render() {
        const { room } = this.props
        
        return (
                 <tr>
                 <th scope="row">{room.id}</th>
                 <td>{room.hotelName}</td>
                 <td>{room.roomNo}</td>
                 <td>{room.phone}</td>
                 <td>{room.noOfBed}</td>
                 <td>{room.address}</td>
                 <td><img className="photo" src={"http://localhost:3012/room/"+ room.roomImage}/></td>
                 <td>{room.description}</td>
                 <td><Input type="date" name="date" id="exampleDate"  onChange={this.dateHandelChange} hint="Enter Date"/>
                </td>
                <td><Button variant="primary" type="submit" onClick={ this.state.roomID=room.id, this.book} >Book</Button></td>
                
                 </tr>
        )
    }
}
