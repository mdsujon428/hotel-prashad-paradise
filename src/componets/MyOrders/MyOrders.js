import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`https://floating-scrubland-94674.herokuapp.com/myOrders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(error => console.log(error))
    }, [user.email])

    const handleCancel = (e) => {
        const confirm = window.confirm('Are sure you want to delete this')
        if (confirm) {
            fetch(`http://localhost:9000`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(error => {
                    console.log('Error')
                })
        }
        e.preventDefault()
    }

    return (
        <div>
            <h1>{user?.displayName}</h1>
            <Container>
                <Row xs={1} md={3}>
                    {
                        orders.map(order => <Col>
                            <Card key={order._id}>
                                <Card.Img variant="top" src={order.order.img} />
                                <Card.Body>
                                    <Card.Title>{order.order.name}</Card.Title>
                                    <Card.Text>
                                        {order.order.description}
                                        <br />
                                        <h3 className='btn btn-success mt-2'>$ {order.order.price}</h3>
                                    </Card.Text>

                                </Card.Body>
                                <Card.Footer>
                                    <Button onClick={handleCancel} className='btn btn-danger'>cancel</Button>
                                </Card.Footer>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default MyOrders;

// ,{
//     method:'GET',
//     headers:{
//         'content-type':'application/json'
//     },
//     // body:JSON.stringify(user)
// }