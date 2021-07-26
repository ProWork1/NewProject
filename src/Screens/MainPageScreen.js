import React from 'react'
import AccordionComponent from '../Components/AccordionComponent'
import CitySlideComponent from '../Components/CitySlideComponent'
import { Container, Row, Col } from 'react-bootstrap'
import CardUI from './../Components/CardUI'
import Header from '../Components/Header'
import FooterTop from '../Components/FooterTop'
import UserSlideComponent from '../Components/UserSlideComponent'
import Why from '../Components/Why'

// const arr = [
//     { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?' },
//     { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?' },
//     { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?' },
//     { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?' },
// ]

const MainPageScreen = () => {
    return (
        <div>
            <div id='header'>
                <Header />
                <img id='bg_header_image' src='/images/Group2.png' alt='bg-image' />
            </div>
            <div className='cardui mb-3' style={{}}>
                {/* <CardUI /> */}
                <Why />
            </div>
            <div>
                <CitySlideComponent />
            </div>
            <div>
                <Container>
                    <UserSlideComponent />
                </Container>
            </div>
            <div>
                <Container>
                    <Row className={'mt-5'} style={{ marginRight: 0 }}>
                        {[...new Array(4)].map(index => (
                            <Col md={6} key={index}>
                                <AccordionComponent />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            <div>
                <FooterTop />
            </div>
        </div>
    )
}

export default MainPageScreen
