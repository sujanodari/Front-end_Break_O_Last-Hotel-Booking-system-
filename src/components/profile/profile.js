
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Navigation from '../dashboard/Navigation';
import Footer from '../dashboard/Footer';
import Axios from 'axios';
import "../dashboard/Room.css";
import { Redirect } from 'react-router-dom'

class Profile extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            delete:false,
            user: null,
            password:'',
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('user_token')}` }
            },
            selectedFile: null,
        }
        }
    

        componentDidMount() {
            Axios.get('http://localhost:3012/api/v1/users',this.state.config)
                .then((response) => {   
                    this.setState({
                        user: response.data
                    })
                }).catch((err)=>{
                   console.log(err)
                })
        }

        handleFileSelect = (e) => {
            this.setState({
                selectedFile: e.target.files[0]
            })
        }
    
        uploadFile = (e) => {
            e.preventDefault();
            const data = new FormData()
            data.append('myFile', this.state.selectedFile)
            Axios.post('http://localhost:3001/upload', data, this.state.config)
                .then((response) => {
                    this.setState({
                        user: { ...this.state.user, image: response.data.filename }
                    })
                }).catch((err) => console.log(err.response))
        }
    
        updateUser = (e) => {
            e.preventDefault();
            Axios.put('http://localhost:3012/users', this.state.user, this.state.config)
                .then().catch()
            this.props.history.push('/dashboard');
        }
    
        handleChange(e) {
            this.setState({
                user: { ...this.state.user, [e.target.name]: e.target.value }
            })
        }
    
        passwordHandelChange(e){
         
          this.setState({password:e.target.value})
         
        }

       
        update=(e)=>{
          var data= {
            password : this.state.password
          }
          console.log(data);
          e.preventDefault();
            Axios.put('http://localhost:3012/api/v1/users/',data,this.state.config )
            .then(function(response){
              console.log(response.data)     
            })
            .catch(function(err){
             console.log(err)
            })      
          }

          delete=(e)=>{
            e.preventDefault();
              Axios.delete('http://localhost:3012/api/v1/users/',this.state.config )
              .then(function(response){
                console.log(response.data)
                if(response.data.status==="success") {
                  localStorage.removeItem('user_token');
                  window.location.reload(); 
               
                  
                }    
              })
              .catch(function(err){
               console.log(err)
              })      
            }
    render(){
      if (localStorage.getItem('user_token')===null) {
        return( <Redirect to={{
             pathname: '/'
           }}/>)
         } else{
        if (this.state.user === null) {
            return <h3>Loading ...</h3>
        } else {
        return(
            <div>
             <React.Fragment>
                <Navigation />
                <h2>Welcome to your Profile</h2>
               
                <Form>
      <Row form>
         <Col md={6}>
          <FormGroup>
            <Label for="exampleUsername">Username</Label>
            <Input type="text" name="username" id="exampleusername" onChange={(e) => this.handleChange(e)} value={this.state.user.username} />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" onChange={(e) => this.handleChange(e)} value={this.state.user.email} />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePhone">Phone</Label>
            <Input type="text" name="phone" id="examplePhone" onChange={(e) => this.handleChange(e)} value={this.state.user.phone} />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleGender">Gender</Label>
            <Input type="text" name="gender" id="exampleGender" onChange={(e) => this.handleChange(e)} value={this.state.user.gender} />
          </FormGroup>
        </Col>
      <Col md={6}>
     <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input type="text" name="address" id="exampleAddress" onChange={(e) => this.handleChange(e)} value={this.state.user.address}/>
      </FormGroup>
      </Col>
      <FormGroup>
        <Label for="exampleProfileImage">Profile Image </Label>
        <br></br>
        <img className="profilePhoto" src={"http://localhost:3012/profile/"+ this.state.user.profileImage}/>
      </FormGroup>
      </Row>
      <Button variant="primary" type="submit" >Update</Button>
    </Form>
    
    <Form>
    <Col md={6}>
    <h3>Update Password</h3>
       <FormGroup>
        <Label for="examplePassword">Enter Password</Label>
        <Input type="password" name="password" id="examplePassword"  onChange={this.passwordHandelChange} hint="Enter Password"/>
      </FormGroup>
      </Col>
      <Button variant="primary" type="submit" onClick={this.update}>Update</Button>

    </Form>
    <br></br>
    <h2>Delete Account</h2>
    <Form>
    <Button variant="primary" type="submit" onClick={this.delete}>Delete</Button>
    </Form>
            </React.Fragment>
            <Footer />
          </div>
        )
        }
      }
    }
}

export default Profile;