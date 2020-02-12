import React, { Component } from 'react'
import { Table } from 'reactstrap'
import Room from './Room';
export default class RoomList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showEdit: false,
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('user_token')}` }
            },
            room: {}
        }
    }

    handleEdit = (roomId) => {
        this.setState({
            room: this.props.rooms.find((room) => {
                return id === id
            })
        })
        this.toggle();
    }


    render() {
        const {rooms} = this.props
        {console.log(rooms)}
        return (
           
            <div>
                <Table>
                    
                    <thead>
                     <tr>
                       <th>#</th>
                       <th>Hotel Name</th>
                       <th>Room Number</th>
                       <th>Contact</th>
                       <th>Number of Bed</th>
                       <th>Address</th>
                       <th>Room Image</th>
                       <th>Description</th>
                         </tr>
                        </thead>
                        <tbody>
                        {
                            rooms.map((room) => {
                                return <Room key={room.id} room={room}
                             />
                            })
                        }
                    </tbody>
                </Table>
                
            </div>
        )
    }
}
