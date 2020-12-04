import React, { Component } from 'react'
import { Button, Input } from 'reactstrap'
import "./Room.css";
import Axios from 'axios';
export default class DeleteRoom extends Component {



    constructor(props){
        super(props)
 
        this.state = {
            roomID:'',
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('admin_token')}` }
            }
        }
        }
   

          delete=(e)=>{
            e.preventDefault();
              Axios.delete('http://localhost:3012/api/v1/admin/rooms/'+this.state.roomID,this.state.config )
              .then(function(response){
               window.location.reload(); 
                this.props.history.push('/rooms');   
              })
              .catch(function(err){
               console.log(err)
              })  
        }
    render() {
        const { room } = this.props
        this.state.roomID=room.id
        return (
                 <tr>
                 <th scope="row">{room.id,this.state.roomID=room.id}</th>
                 <td>{room.hotelName}</td>
                 <td>{room.roomNo}</td>
                 <td>{room.phone}</td>
                 <td>{room.noOfBed}</td>
                 <td>{room.address}</td>
                 <td><img className="photo" src={"http://localhost:3012/profile/"+ room.roomImage}/></td>
                 <td>{room.description}</td>
                <td><Button variant="primary" type="submit" onClick={ this.state.roomID=room.id, this.delete} >Delete</Button></td>
                
                 </tr>
        )
    }
}
