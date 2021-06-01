import { Col, Container, Row } from "react-bootstrap"
import {Component} from 'react'



class MyFooter extends Component{
    render(){
        return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                    <p>Contact <a href="">Gamze</a> </p>
                    </Col>
                    <Col xs={12} md={6}>
                    <p>Contact <a href="">Gamze</a> </p>
                    </Col>
                </Row>
                
            </Container>
        </footer>
        )
    }
}

export default MyFooter

