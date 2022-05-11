import React, { Component } from "react";
import { Form, Label, Input, FormGroup, Button } from "reactstrap";
import { Redirect } from 'react-router-dom'

export default class CryptoNew extends Component {
    constructor(props) {
    super(props)
    this.state = {
        newCrypto: {
            name: "",
            age: "",
            creator: "",
            image: ""
        },
        submitted: false
        }
    }

    handleChange = (e) => {
        let { newCrypto } = this.state
        newCrypto[e.target.name] = e.target.value
        this.setState({newCrypto: newCrypto})
    }

    handleSubmit = () => {
    this.props.createCrypto(this.state.newCrypto)
    this.setState({submitted: true})
    }

    render() {
        return(
        <div>
            <Form className="new-format">
            <FormGroup>
                <Label for="name">
                Name
                </Label>
                <Input
                name="name"
                placeholder="Crytpo Name?"
                type="text"
                onChange={this.handleChange}
                value={this.state.newCrypto.name}
                />
            </FormGroup>
            <FormGroup>
                <Label for="age">
                Age
                </Label>
                <Input
                name="age"
                placeholder="How long is it being developed?"
                type="text"
                onChange={this.handleChange}
                value={this.state.newCrypto.age}
                />
            </FormGroup>
            <FormGroup>
                <Label for="creator">
                Creator
                </Label>
                <Input
                name="creator"
                placeholder="Name the creator."
                type="text"
                onChange={this.handleChange}
                value={this.state.newCrypto.creator}
                />
            </FormGroup>
            <FormGroup>
                <Label for="image">
                Image
                </Label>
                <Input
                name="image"
                placeholder="Show me that coin."
                type="url"
                onChange={this.handleChange}
                value={this.state.newCrypto.image}
                />
            </FormGroup>
            
            <Button 
                style={{backgroundColor: "#39535c"}}
                name="submit"
                onClick={this.handleSubmit}
                
            >
                Add Coin
                {this.state.submitted && <Redirect to="/cryptoindex" />}
            </Button>
            </Form>
        </div>
        )
    }
}