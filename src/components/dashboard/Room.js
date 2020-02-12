import React, { Component } from 'react'
import { Button } from 'reactstrap'
import "./Room.css";
export default class Room extends Component {
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
                
                 </tr>
        )
    }
}
