
import React, { Component } from 'react'
import { Button, FormGroup, Label, Input, Row, Col, CustomInput, FormText } from 'reactstrap'
import axios from 'axios'
import Footer from './Footer';
import { Redirect } from 'react-router'
class AdminDasbhoard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            hotelName: '',
            roomNo: '',
            description: '',
            address:"",
            noOfBed:'',
            phone: '',
            file:null,
            roomImage:""
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

   

    addRoom=(e)=>{

        //prevent default
        e.preventDefault();
    
        const formdata = new FormData()
        formdata.append('roomImage', this.state.file)
                
        axios.post('http://localhost:3012/api/v1/hotel/rooms/image', formdata, this.state.config)
            .then((response) => {
                localStorage.setItem('myImage',response.data.filename)     
                
                
                var data = {
                    hotelName:this.state.hotelName,
                    roomNo: this.state.roomNo,
                    description: this.state.description,
                    address:this.state.address,
                    noOfBed:this.state.noOfBed,
                    phone: this.state.phone,
                    roomImage:localStorage.getItem('myImage')
    
                }
      //using axois to hit api
      axios.post('http://localhost:3012/api/v1/hotel/rooms',data)
      .then((response)=>{

        console.log(response.data)
          //setting registered to true to redirect to login component
          this.setState({
                     hotelName:'',
                    roomNo: '',
                    description:'',
                    address:'',
                    noOfBed:'',
                    phone:''
                    
    
          })
          console.log(this.state)
      }).catch((err)=>{console.log(err)
    }).catch((err)=>console.log(err))

    })
}


    render(){
    
        if((localStorage.getItem('admin_token')===null)){
            return <Redirect to='/admin' />
          }
        return(
            <div>
            <React.Fragment>  
          <h1 className="welcome">Welcome to Break-O-Last</h1>
             
            <h2>Add Room</h2>
            <Row form>
                 <Col md={6}>
                <FormGroup>
                    <Label for='username'>hotelName</Label>
                    <Input type='text' name='hotelName' id='username'
                        value={this.state.hotelName} onChange={this.handleChange} />
                </FormGroup>
                </Col>
                 <Col md={6}>
                <FormGroup>
                    <Label for='phone'>Room No</Label>
                    <Input type='text' name='roomNo' id='phone'
                        value={this.state.roomNo} onChange={this.handleChange} />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for='email'>Description</Label>
                    <Input type='text' name='description' id='email'
                        value={this.state.description} onChange={this.handleChange} />
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
                    <Label for='number'>Number Of Bed</Label>
                    <Input type='text' name='noOfBed' id='address'
                        value={this.state.noOfBed} onChange={this.handleChange} />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for='cPassowrd'>Phone Number</Label>
                    <Input type='text' name='phone' id='cPassword'
                        value={this.state.phone} onChange={this.handleChange} />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                <Label for='Profile'>Choose room picture</Label>
                    <CustomInput type="file" id="userImage" onChange={this.handleFileSelect}/>
                </FormGroup>
                </Col>
                <Col md={4}>
                <Button color='primary' onClick={this.addRoom}>Add Room</Button>
                </Col>
            </Row>
            </React.Fragment>
            <Footer />
            </div>
        )

    }
}

export default AdminDasbhoard;