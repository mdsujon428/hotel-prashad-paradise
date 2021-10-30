import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Guests = () => {
    const [guests,setGuests] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:9000/guests`)
        .then(res=> res.json())
        .then(data => setGuests(data.guests))
    },[])
    return (
        <div className='m-3'>
            <div>
                <h1 className='text-warning'> Our Guests Says</h1>
            </div>
            <Row  xs={1} md={3} className="g-4">
                {guests.map((guest) => (
                    <Col key={guest._id}>
                        <Card style={{width:'400px'}}>
                            <Card.Img style={{height:'350px'}}  variant="top" src={guest.img} />
                            <Card.Body>
                                <Card.Title>{guest.name}</Card.Title>
                                <Card.Text>
                                   {guest.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Guests;