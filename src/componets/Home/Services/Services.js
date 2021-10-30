import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className='p-3'>
            <h1 className='my-3 text-success'>Our Services </h1>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service key={service._id} service={service}> </Service>)
                }

            </Row>
        </div>
    );
};

export default Services;