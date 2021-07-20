import React from 'react'
import AccordionComponent from '../Components/AccordionComponent'
import CitySlideComponent from '../Components/CitySlideComponent'
import { Container, Row, Col } from 'react-bootstrap';

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
};

export default MainPageScreen
