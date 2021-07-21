import React from 'react'
import AccordionComponent from '../Components/AccordionComponent'
import CitySlideComponent from '../Components/CitySlideComponent'
import { Container, Row, Col } from 'react-bootstrap'
import CardUI from './../Components/CardUI'
import Header2 from '../Components/Header2'

const arr = [
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?' },
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?' },
]

const MainPageScreen = () => {
    return (
        <div>
            <div id="header">
                <Header2 />
            </div>
            <Container>
                <Header2 />
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
                <Row className={'mt-5'}>
                    {arr.map((item, index) => (
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
