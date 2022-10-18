import {Card, Button, Form, Row, Col} from "react-bootstrap";

export default function ProductCards(props) {
    
    const product = props.product;

    return (
        <>
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
        
        </>
    )
}