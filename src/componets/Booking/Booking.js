import React, { useEffect, useState, useRef } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';


const Booking = () => {
    const { user } = useAuth()
    const { id } = useParams();
    const [service, setService] = useState({});
    const userPhome = useRef()
    const userAddress = useRef()
    const userMessage = useRef()
    useEffect(() => {
        const url = `https://floating-scrubland-94674.herokuapp.com/services/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const { img, name, description, price } = service;

    const handlePlaceBooking = (e) => {
        const userBookingDetails = {
            userName: user.displayName,
            email: user.email,
            phone: userPhome.current.value,
            address: userAddress.current.value,
            message: userMessage.current.value,
            order: {
                orderName: name,
                img: img,
                price: price,
                description: description
            }
        }
        console.log(userBookingDetails)
        fetch('https://floating-scrubland-94674.herokuapp.com/myOrders',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(userBookingDetails)
        })
        .then(res=>res.json())
        .then(data=> console.log(data))
        e.preventDefault()
    }
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
                    <form onSubmit={handlePlaceBooking}>
                        <div className="mb-3">
                            <input type="text" placeholder="Name" className="form-control" defaultValue={user?.displayName} />
                        </div>
                        <div className="mb-3">
                            <input type="email" placeholder="Email" className="form-control" defaultValue={user?.email} />
                        </div>
                        <div className="mb-3">
                            <input type="text" ref={userPhome} placeholder="Phone" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder="Booking Service" className="form-control" value={name} />
                        </div>
                        <div className="mb-3">
                            <textarea type="text" ref={userAddress} placeholder="Address" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <textarea type="text" ref={userMessage} placeholder="Your message" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <input type="submit" placeholder="Booking Service" className="form-control bg-success text-white" value="Submit" />
                        </div>

                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Booking;