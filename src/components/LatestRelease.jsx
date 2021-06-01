import { Card, Col, Container, Button, Row } from 'react-bootstrap'
import books from '../data/fantasy.json'
// import books from '../data/history.json'
// import books from '../data/horror.json'
// import books from '../data/romance.json'
// import books from '../data/scifi.json'



const LatestRelease =(props) => {

    
        
     return <Container>
     <Row className="justify-content-center mt-3"> 
     
     { books.map ((book,index) => ( 
        // this.setState={selected: book}
        <Card className="mt-3 mx-3" key={index}  style={{ width: '14rem'}}>
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