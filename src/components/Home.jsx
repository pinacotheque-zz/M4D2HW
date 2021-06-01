import {Component} from 'react'
import { Jumbotron,Button, Col, Container, ListGroup, Row } from 'react-bootstrap'

class Home extends Component{
    render (){
    return (
        <div>
        <Container className="bg-warning mt-3 jumbotron">
            <Col xs={12} md={8}>
            <Jumbotron fluid className="text-align-center">
            <h1 className="pt-3 justify-content-center">Welcome!</h1>
            <p>
            You can find any book you want.
            </p>
            <p>
            <Button variant="success">Explore</Button>
            </p>
        </Jumbotron>
        </Col>
      </Container>
      <Row className ="mx-5 mt-5 ">
        <Col><Button variant="success">Fantasy</Button></Col>
        <Col><Button variant="success">History</Button></Col>
        <Col><Button variant="success">Horror</Button></Col>
        <Col><Button variant="success">Romance</Button></Col>
        <Col><Button variant="success">Sci-Fi</Button></Col>
      </Row>
      </div>
    )
    }
} 

export default Home