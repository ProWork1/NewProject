import React from 'react'
import AccordionComponent from '../Components/AccordionComponent'
import CitySlideComponent from '../Components/CitySlideComponent'
import { Container, Row, Col } from 'react-bootstrap'
import CardUI from './../Components/CardUI'

const MainPageScreen = () => {
    return (
        <div>
            <Container>
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
                {/*country carousel*/}
                <CitySlideComponent />
            </Container>
        </div>
    )
}

export default MainPageScreen
