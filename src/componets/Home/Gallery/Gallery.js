import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Gallery = () => {
    const [gallery, setGallery] = useState([])
    useEffect(() => {
        fetch('http://localhost:9000/gallery')
            .then(res => res.json())
            .then(data => setGallery(data))
    }, [])
    return (
        <div>
            <div className="my-3">
                <h1 className="text-warning">PRASHAD PARADISE.GALLERY</h1>
            </div>
            <Row xs={2} md={4} className="g-2 px-2">
                {gallery.map((item) => (
                    <Col key={item._id}>
                        <Card>
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title className="text-warning">{item.name}</Card.Title>     
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Gallery;