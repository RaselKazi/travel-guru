import React, { useContext} from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import "./Home.css"
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Navber from '../Navber/Navber';
import fakeData from '../../fakeData/placeFakeData';

const Home = () => {
    
    const [place, setPlace] = useContext(UserContext);

    const handleplace = (event) => {
        setPlace(event);
    }

    const history = useHistory();
    const handleBooking = () => {
        history.push('/Booking')
    }
    return (
        <main className="bg-img" >
            <Navber color={"white"} ></Navber>
            <Container className="row m-auto mt-lg-5 ">
                    <section id="travel-details-area" className="col-md-4">
                        <div className="slider-content">
                            <h1>{place.name}</h1>
                            <p>{place.details}</p>
                            <Button variant="warning" onClick={handleBooking} className="ml-2 m-sm-2" ><Link className="bookingBtn" to="/login" >Booking </Link></Button>
                        </div>
                    </section>
                    <section id="travel-slider-area" className="col-md-8">
                        <Row mt={10}>
                            {
                            fakeData.map(place =>
                            <Col md={4}>
                                <div className="slider-item">
                                    <img  onClick={() => handleplace(place)}  src={require(`../../Image/travel/${place.image}`)} alt=""/>
                                    <h2>{place.name}</h2>   
                                </div>
                            </Col>)  
                            }
                        </Row>
                    </section>
                </Container>
        </main>
       
    );
};

export default Home;