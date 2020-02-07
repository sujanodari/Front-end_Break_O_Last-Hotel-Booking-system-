import React from 'react';
import {Link,Redirect} from 'react-router-dom';

import axios from 'axios';
import {
    Container, Col, Form,
    FormGroup,FormText, Label, Input,
    Button,
  } from 'reactstrap';

class Login extends React.Component{
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

        console.log(this.state)
        
        // url // data // headers
          axios.post('http://localhost:3012/api/v1/users/signin',this.state )

          .then(function(response){
        
            //console.log(response.data)
        
            //store the token in local storage of broser for future use 
        
            localStorage.setItem("user_token",response.data.usertoken)
        
          })
          .catch(function(err){
        
          })
        
        }
    

    render(){

        return(
<Container className="App">
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