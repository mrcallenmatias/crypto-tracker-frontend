import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import { 
    Card, CardImg, CardBody, CardTitle, Row, Col
} from "reactstrap";

export default class CryptoIndex extends Component {
    render() {
        return(
            <div className="index-body">
                <div className="crypto-list"> List of Cryptos</div>
                <br />
                { this.props.cryptos && this.props.cryptos.map(crypto => {
                return (
                    <Row 
                        className="index-padding"  
                        key={crypto.id}
                    >
                    <Col>
                        <Card>
                        <CardImg
                            alt="Card image cap"
                            src={crypto.image}
                        />
                        <CardBody>
                            <CardTitle tag="h4">
                            <NavLink to={`/cryptoshow/${crypto.id}`}>
                                <span>{crypto.name}</span>
                            </NavLink>
                            </CardTitle>
                        </CardBody>
                        </Card>
                    </Col>
                    </Row>
                )
                })}
            </div>
        )
    }
}