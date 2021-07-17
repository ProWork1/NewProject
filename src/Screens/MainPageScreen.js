import React from 'react'
import AccordionComponent from "../Components/AccordionComponent";
import CitySlideComponent from "../Components/CitySlideComponent";
import {Container, Row, Col} from 'react-bootstrap';

const MainPageScreen = () => {
    return (
        <div>
            <Container>
                <Row className={"mt-5"}>
                    {[...new Array(4)].map((index) => (
                    <Col md={6} key={index}>
                        <AccordionComponent/>
                    </Col>
                ))}
                </Row>
            {/*country carousel*/}
            <CitySlideComponent/>
            </Container>
        </div>
    )
};

export default MainPageScreen
