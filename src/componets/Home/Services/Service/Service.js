import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {img,_id,name,description,price} = props.service;
    return (
        <div>
            <Col>
                <Card >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                            <br/>
                            <h3 className='btn btn-success mt-2'>$ {price}</h3>
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer>
                       <Link to={`/home/${_id}`}> <Button  className='btn btn-success'> Book Now</Button> </Link> 
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Service;