import React,{Component} from 'react';
import {Link,Redirect} from 'react-router-dom';

import axios from 'axios';
import {
   Row, Col,
    FormGroup,FormText, Label, Input,
    Button,
  } from 'reactstrap';

import "./Login.css";
import Footer from '../dashboard/Footer';

class AdminLogin extends Component{
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
        var data={
          phone:this.state.phone,
          password:this.state.password
        }
        // url // data // headers
          axios.post('http://localhost:3012/api/v1/admin/signin',data )

          .then(function(response){
            //store the token in local storage of broser for future use 
            localStorage.setItem("admin_token",response.data.usertoken)
           
            
          })
          .catch(function(err){
           console.log(err)
           // this.setState({ phone: '', password: '' })
          })

            if(!(localStorage.getItem('admin_token')==null)){
              this.setState({
                looged:true
              })
            }
            


        
        }
    

    render(){
      if(this.state.looged==true){
        return <Redirect to='/adminDashboard' />
      }
      if(!(localStorage.getItem('admin_token')==null)){
        return <Redirect to='/adminDashboard' />
      }

        return(
          <div>
          <React.Fragment>  
        <h1 className="welcome">Welcome to Break-O-Last</h1>
        <h2>Sign In</h2>
      
        <Row form>
         <Col md={6}>
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
          <Col md={6}>
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
          <Col md={4}>
          <Button onClick={this.login}>Login</Button>
          </Col>
        </Row>
      </React.Fragment>
      <Footer />
      </div>
        );
    }

}
export default AdminLogin;