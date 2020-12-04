
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomList from './RoomList';
import Navigation from './Navigation';
import Footer from './Footer';
import Axios from 'axios';
import { Redirect } from 'react-router'
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
    }


    render(){
         if (localStorage.getItem('user_token')===null){
           return( <Redirect to={{
                pathname: '/'
              }}/>)
            } else{
        return(
            <div>
              <React.Fragment>
                <Navigation />
                <h2>You can book rooms here</h2>
                <RoomList rooms={this.state.rooms}/>
            </React.Fragment>
            <Footer />
          </div>
        )
        }
    }
}

export default Dashboard;