import React, { Component } from 'react'
import { Button, FormGroup, Label, Input, Row, Col, CustomInput, FormText } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import Footer from '../dashboard/Footer';

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username: '',
            gender: '',
            phone: '',
            address:"",
            email:'',
            password: '',
            cPassword:'',
            file:null,
            profileImage:"",
            isRegistered: false
        }
    }

      //to handle change of form
      handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
       // console.log(e.target.value)
    }


    handleFileSelect=(e)=>{
        this.setState({
            file: e.target.files[0]
        })
    }

   

    register=(e)=>{

        //prevent default
        e.preventDefault();
    
        const formdata = new FormData()
        formdata.append('profileImage', this.state.file)
                
        axios.post('http://localhost:3012/api/v1/users/profile', formdata, this.state.config)
            .then((response) => {
                localStorage.setItem('myImage',response.data.filename)     
                
                
                var data = {
                    username:this.state.username,
                    gender: this.state.gender,
                    phone: this.state.phone,
                    address:this.state.address,
                    email:this.state.email,
                    password: this.state.password,
                    cPassword:this.state.cPassword,
                    profileImage:localStorage.getItem('myImage')
    
                }
      //using axois to hit api
      axios.post('http://localhost:3012/api/v1/users/signup',data)
      .then((response)=>{

        console.log(response.data)
          //setting registered to true to redirect to login component
          this.setState({
            username: '',
            gender: '',
            phone: '',
            address:"",
            email:'',
            password: '',
            cPassword:'',
            isRegistered: true
          })
          console.log(this.state)
      }).catch((err)=>{console.log(err)
    }).catch((err)=>console.log(err))

    })
}


    render(){
        if (this.state.isRegistered === true) {
            return <Redirect to='/' />
        }
        if(!(localStorage.getItem('user_token')==null)){
            return <Redirect to='/dashboard' />
          }
        return(
            <div>
            <React.Fragment>  
          <h1 className="welcome">Welcome to Break-O-Last</h1>
             
            <h2>Sign Up</h2>
            <Row form>
                 <Col md={6}>
                <FormGroup>
                    <Label for='username'>Username</Label>
                    <Input type='text' name='username' id='username'
                        value={this.state.username} onChange={this.handleChange} />
                </FormGroup>
                </Col>
                <Col md={4}>
                 <FormGroup>
                        <Label for="exampleSelect">Gender</Label>
                        <Input type="select" name="gender" id="gender" value={this.state.gender} onChange={this.handleChange} >
                        <option>Choose Here:</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                        </Input>
                    </FormGroup>
                    </Col>
                 <Col md={6}>
                <FormGroup>
                    <Label for='phone'>Phone</Label>
                    <Input type='text' name='phone' id='phone'
                        value={this.state.phone} onChange={this.handleChange} />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for='email'>Email</Label>
                    <Input type='email' name='email' id='email'
                        value={this.state.email} onChange={this.handleChange} />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for='address'>Address</Label>
                    <Input type='text' name='address' id='address'
                        value={this.state.address} onChange={this.handleChange} />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for='password'>Password</Label>
                    <Input type='password' name='password' id='password'
                        value={this.state.password} onChange={this.handleChange} />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for='cPassowrd'>Confirm Password</Label>
                    <Input type='password' name='cPassword' id='cPassword'
                        value={this.state.cPassword} onChange={this.handleChange} />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                <Label for='Profile'>Choose profile picture</Label>
                    <CustomInput type="file" id="userImage" onChange={this.handleFileSelect}/>
                </FormGroup>
                </Col>
                <Col md={4}>
                <Button color='primary' onClick={this.register}>Sign Up</Button>
                </Col>
                <Col md={4}>
                <FormText>Already a user? <Link to='/'> Login here!</Link></FormText>
                 </Col>
            </Row>
            </React.Fragment>
            <Footer />
            </div>
        )

    }
}

export default Register;