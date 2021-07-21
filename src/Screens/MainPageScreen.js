import React from 'react'
import AccordionComponent from '../Components/AccordionComponent'
import CitySlideComponent from '../Components/CitySlideComponent'
import { Container, Row, Col } from 'react-bootstrap'
import CardUI from './../Components/CardUI'
import { Container, Row, Col } from 'react-bootstrap';
import Header2 from '../Components/Header2';

const arr = [
    {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?"},
    {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?"},
    {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?"},
    {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?"},
]

const MainPageScreen = () => {
    return (
        <div>
            <Container>
<<<<<<< HEAD
                <Header2 />
=======
                <div className='cardui mb-3' style={{}}>
                    <CardUI />
                </div>
                <div>
                    <Row className={'mt-5'}>
                        {[...new Array(4)].map(index => (
                            <Col md={6} key={index}>
                                <AccordionComponent />
                            </Col>
                        ))}
                    </Row>
                </div>
>>>>>>> bd79886bbf627782e59b69fdcd5104a40cb51217
                <Row className={'mt-5'}>
                    {arr.map((item,index) => (
                        <Col md={6} key={index}>
                            <AccordionComponent />
                        </Col>
                    ))}
                </Row>
                {/*country carousel*/}
                <CitySlideComponent />
            </Container>
        </div>
    )
}

export default MainPageScreen
