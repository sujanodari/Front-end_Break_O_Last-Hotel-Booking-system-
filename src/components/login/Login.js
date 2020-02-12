import React,{Component} from 'react';
import {Link,Redirect} from 'react-router-dom';

import axios from 'axios';
import {
    Container, Col, Form,
    FormGroup,FormText, Label, Input,
    Button,
  } from 'reactstrap';

import "./Login.css";

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            phone:"",
            password:"",
            looged:false
        }
    }
//handaling vhange in form
    handleChange=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
    //  console.log(e.target.value)
    }

    login=(e)=>{
        
        // url // data // headers
          axios.post('http://localhost:3012/api/v1/users/signin',this.state )

          .then(function(response){
            //store the token in local storage of broser for future use
            console.log(response.data)     
            localStorage.setItem("user_token",response.data.usertoken)
           
            
          })
          .catch(function(err){
           console.log(err)
           // this.setState({ phone: '', password: '' })
          })
            if(!(localStorage.getItem('user_token')==null)){
              this.setState({
                looged:true
              })
            }
            


        
        }
    

    render(){
      if(this.state.looged==true){
        return <Redirect to='/dashboard' />
      }

        return(
<Container className="App">
<h1 className="welcome">Welcome to Break-O-Last</h1>
        <h2>Sign In</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Phone</Label>
              <Input
                type="text"
                name="phone"
                id="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                placeholder="Phone Number"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button onClick={this.login}>Login</Button>
          <FormText>Not yet a user? <Link to='/register'> Sign Up here!</Link></FormText>
        </Form>
      </Container>
        );
    }

}
export default Login;