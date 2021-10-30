import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = () => {
    const { id } = useParams();
    const [service, setService] = useState({})
    useEffect(() => {
        const url = `http://localhost:9000/services/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const { img, name, description, price } = service;
    return (
        <Container className='p-5'>
            <div className='my-3'>
            <h2 className='text-success'>Booking your service </h2>
            </div>
            <Row xs={1} md={2}>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {description}
                                <br />
                                <h3 className='btn btn-success mt-2'>$ {price}</h3>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <form>
                        <div className="mb-3">
                            <input type="text" placeholder="Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <input type="email" placeholder="Email" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder="Phone" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder="Booking Service" className="form-control" value={name} />
                        </div>
                        <div className="mb-3">
                            <textarea type="text" placeholder="Address" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <textarea type="text" placeholder="Your message" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <input type="submit" placeholder="Booking Service" className="form-control bg-success text-white" value="Submit"/>
                        </div>

                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Booking;