import { Card, Col, Container, Button, Row } from 'react-bootstrap'
import books from '../data/fantasy.json'



const LatestRelease =(props) => {
        
     return <Container>
     <Row className="justify-content-center mt-3"> 
     
     { books.map ((book,index) => ( 

        <Card  key={index} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
            Some quick 
            </Card.Text>
            <Button variant="primary">Buy</Button>
        </Card.Body>
        </Card>))
        }
        </Row>
        </Container>
        
    
}

export default LatestRelease