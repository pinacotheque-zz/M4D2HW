import {Component} from 'react'
import { Jumbotron,Button, Col, Container, ListGroup, Row } from 'react-bootstrap'
import LatestRelease from './LatestRelease'

class Home extends Component{
    render (){
    return (
        <div>
        <Container className="bg-light mt-3 jumbotron">
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
        <Col><Button onClick={LatestRelease} variant="success">Fantasy</Button></Col>
        
      </Row>
      </div>
    )
    }
} 

export default Home