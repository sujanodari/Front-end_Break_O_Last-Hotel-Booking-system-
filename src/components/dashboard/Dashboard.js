
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomList from './RoomList';
import Navigation from './Navigation';
import Footer from './Footer';
import {
    Nav,
    Container,
    Col,
    Row,
    Table
} from 'react-bootstrap'
import Axios from 'axios';
class Dashboard extends React.Component{


    constructor(props){
        super(props)
 
            this.state={
                    rooms:[]
            }
        }
    

    componentDidMount() {
        Axios.get('http://localhost:3012/api/v1/hotel/rooms')
            .then((response) => {   
                this.setState({
                    rooms: response.data.data
                })
            }).catch((err)=>{
               console.log(err)
            })

         
            // Axios.get('http://localhost:3012/api/v1/users', this.state, this.state.config)
            // .then((response) => {
            //   //  console.log(response.data)
            //     this.setState({
            //         user_id: response.data._id
            //     })
            // })

    }

    Footer = () => {
        return (
            <div className="p-3 mb-2 bg-light">
                <Row>
                    <Col sm = {6}>
                        Contact us: dsa
                    </Col>
                    <Col sm = {6}>
                        dsakhkjsda
                    </Col>
                </Row>
            </div>
        )
    }

    render(){
        return(
            <div>

            {/* <Container>
            <BookList room={this.state.rooms}/>
            </Container> */}
            

              <React.Fragment>
                <Navigation />
                <RoomList rooms={this.state.rooms}/>
            </React.Fragment>
            <Footer />
          </div>
        )
    }
}

export default Dashboard;