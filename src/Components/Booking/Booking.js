import React, { useContext} from 'react';
import {useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import "./Booking.css"
import Navber from '../Navber/Navber';


const Booking = () => {

    const [place] = useContext(UserContext);
    const {name, details} = place;

    const history = useHistory()
    const handleCheckout = () => {
        history.push('/travel')
    }
    return (
        <main className="bg-img">
        <Navber color={"white"} ></Navber>
        <Container className="travel-section">
                    <Row>
                        <Col md={6}>
                            <div id="travel-info-sec">
                                <h1>{name}</h1>
                                <p>{details}</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="travel-form">
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Origin</Form.Label>
                                        <Form.Control className="Bookingl-input" type="text" defaultValue="Dhaka" required />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Destination</Form.Label>
                                        <Form.Control className="Booking-input" type="text" defaultValue={name} required />
                                    </Form.Group>
                                    
                                    <div className="row justify-content-between px-3">
                                        <Form.Group controlId="formBasicDate1">
                                            <Form.Label>Form</Form.Label>
                                            <Form.Control className="Booking-input" type="date" required />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicDate2">
                                            <Form.Label>To</Form.Label>
                                            <Form.Control className="Booking-input" type="date" required />
                                        </Form.Group>
                                    </div>
                                    <Button  onClick={handleCheckout}  variant="warning"  className=" w-100" type="submit">
                                        Start Booking
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
        </main>
        
    );
};

export default Booking;