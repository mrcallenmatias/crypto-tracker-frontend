import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import {Card, CardBody, CardTitle, CardText, Button
} from 'reactstrap'

export default class CryptoShow extends Component {
    handleSubmit = () => {
        this.props.deleteCrypto(this.props.crypto.id)
    }
    render() {
        let { crypto } = this.props
        return(
            <div className="show-body">
                <Card>
                <CardBody>
                    <CardTitle className="show-title">
                    { crypto.name }
                    </CardTitle>
                </CardBody>
                <img
                    alt="Card image cap"
                    src={crypto.image}
                    width="100%"
                />
                <CardBody>
                    <CardText>
                    {crypto.name} was created by {crypto.creator} {crypto.age} years ago.
                    </CardText>
                </CardBody>
                <CardBody>
                    <NavLink to={`/cryptoedit/${this.props.crypto.id}`}>
                        <Button className="edit-show">Edit Crypto</Button>
                    </NavLink>
                    <NavLink to="/cryptoindex">
                        <Button 
                            className="delete-show"
                            onClick={this.handleSubmit}
                        >
                            Delete Crypto
                        </Button>
                        
                    </NavLink>
                </CardBody>
                </Card>
            </div>
        )
    }
}