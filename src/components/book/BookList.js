import React, { Component } from 'react'
import { Table } from 'reactstrap'
import BookItem from './BookItem';
export default class Booklist extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showEdit: false,
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('user_token')}` }
            },
            room: {},
            book: {}
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
        const {booked} = this.props
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
                       <th>Booked Date</th>
                         </tr>
                        </thead>
                       
                        {
                            booked.map((book) => {
                                return (
                                    <tbody>
                                        {rooms.map((room) => { 
                                             if( book.hotelId===room.id){
                                            return <BookItem  key={room.id} room={room} book={book}
                                            />
                                             }
                                            }
                                        )}        
                                       </tbody>
                                );
                            })
                        }
                    
                </Table>
                
            </div>
        )
    }
}
