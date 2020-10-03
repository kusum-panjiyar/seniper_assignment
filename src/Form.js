import React from "react"
import {Container, Form, Col, Row, Button} from 'react-bootstrap'

class Uform extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                //formName: 'Aromatic bar',
                text: '',
                email: '',
                phone: '',
                name: '',
                rating: '',
                arr:[]
            }
        }
    
     handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            //formName: this.state.formName,
            text: this.state.text,
            email: this.state.email,
            phone: this.state.phone,
            name: this.state.name,
            rating: this.state.rating,
            
        }

    
        var arr = []
        arr.push(formData)
        arr=  arr.concat(JSON.parse(localStorage.getItem('arr') || "[]"))

        const setItem = localStorage.setItem('arr',JSON.stringify(arr))
        if(arr){
            alert("Good job!");
        }
        
    }

     handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value 
        })
    }

     handleRadioChange=(rating)=>{
        this.setState({rating})
    }

    render(){
        return (
            <div>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col>
                            <h4 className="ml-0 border-0 text-left text-info mt-3" style={{outline: "none"}}> Aromatic bar</h4>
                                <p>we are committed to providing you with the best dining experience possible,
                                    so we welcome your comments. please fill out these questionnarie Thank you
                                </p>
                            </Col>
                        </Row>
                        <Row className="pt-3">
                            <Col md={6}>
                                <Form.Label htmlFor="name">Text Field</Form.Label>
                                <Form.Control 
                                    type="text"
                                    id="text"
                                    name="text"
                                    value={this.state.text}
                                    onChange={this.handleChange}
                                    required
                                />
                            </Col>
                            <Col md={6}>
                            <Form.Label htmlFor="email">Email Field</Form.Label>
                            <Form.Control 
                                type="text"
                                id="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                            />
                            </Col>
                        </Row>
    
                       
                        <Row className="pt-3">
                            <Col md={6}>
                                <Form.Label htmlFor="phone">Phone Field</Form.Label>
                                <Form.Control 
                                    type="Number"
                                    id="phone"
                                    name="phone"
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                    required
                                    pattern="[0-9]{10}"
                                />
                            </Col>

                            <Col md={6}>
                            <Form.Label>Radio Button:- </Form.Label>
                            <Row>
                            <Form.Check inline label='Excellent' type="radio" id="excellent" name="rating"
                                    checked={this.state.rating ==='excellent'}
                                    onChange={()=>{this.handleRadioChange('excellent')}}
                                />
                                <Form.Check inline label='Good' type="radio" id="good" name="rating"
                                    checked={this.state.rating==='good'}
                                    onChange={()=>{this.handleRadioChange('good')}}
                                />
                                <Form.Check inline label='Fair' type="radio" id="fair" name="rating"
                                    checked={this.state.rating==='fair'}
                                    onChange={()=>{this.handleRadioChange('fair')}}
                                />
                                <Form.Check inline label='Bad' type="radio" id="bad" name="rating"
                                    checked={this.state.rating==='bad'}
                                    onChange={()=>{this.handleRadioChange('bad')}}
                                />
                            </Row>
                               
                            </Col>                       

                            
                        </Row>

                         <Row>
                         <Col md={6}>
                            <Form.Label htmlFor="name">Name *</Form.Label>
                            <Form.Control 
                                type="text"
                                id="name"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                required
                            />
                            </Col>
                        </Row>
    
                        <Row>
                            <Col md={4}></Col>
                            <Col md={4}>
                        <Button  size="sm" block  className="mt-3 pl-5 pr-5">
                            <input type="submit" className="btn" value="SUBMIT"/></Button>
                            </Col>
                            <col md={4}></col>
                        </Row>
                    </Form>
                </Container>
            </div>
        )
    }
    
}

export default Uform