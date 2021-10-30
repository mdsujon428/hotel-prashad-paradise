import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faMap } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    const phone = <FontAwesomeIcon icon={faPhone} />
    const location = <FontAwesomeIcon icon={faMap} />
   
    return (
        <div className='my-5 ' style={{ background: '#dedede', height: 'auto',padding:'5px 0' }}>
            <Container>
                <Row xs={1} md={3}>
                    <Col>
                        <div>
                            <h1 className='text-warning'>Prashad Paradise</h1>
                        </div>
                    </Col>
                    <Col>
                        <div className='text-start'>
                            <h2 style={{ color: '#AFAFAF' }}>LATEST NEWS</h2>
                        </div>
                        <ul className='fs-5 text-start'>
                            <li style={{ listStyle: 'none', color: '#AFAFAF' }}>10 tips for holiday travel</li>
                            <li style={{ listStyle: 'none', color: '#AFAFAF' }}>Are you ready to enjoy your holiday</li>
                            <li style={{ listStyle: 'none', color: '#AFAFAF' }}>Honeymoon at Paradise</li>
                            <li style={{ listStyle: 'none', color: '#AFAFAF' }}>Trave gift idea for every type of travel</li>
                        </ul>
                    </Col>
                    <Col>
                        <div>
                            <h1 style={{ color: '#AFAFAF' }}>Prashad Paradise</h1>
                        </div>
                        <ul className='fs-5 text-start'>
                            <li style={{ listStyle: 'none', color: '#AFAFAF' }}> {phone}017000000</li>
                            <li style={{ listStyle: 'none', color: '#AFAFAF' }}> {location} Hotel- Motel Zone, Plot 9 New Beach Rd, কক্সবাজার 4700</li>
                            
                        </ul>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;