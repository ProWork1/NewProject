import React from 'react'
import AccordionComponent from '../Components/AccordionComponent'
import CitySlideComponent from '../Components/CitySlideComponent'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../Components/Header'
import FooterTop from '../Components/FooterTop'
import UserSlideComponent from '../Components/UserSlideComponent'
import Why from '../Components/Why'
import StudentPhotos from './../Components/StudentPhotos'

const MainPageScreen = () => {
    return (
        <div>
            <div id='header'>
                <Header />
                <img id='bg_header_image' src='/images/Group2.png' alt='bg-image' />
            </div>
            <div
                style={{
                    backgroundImage: 'url("/images/fon.png")',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center bottom',
                }}
            >
                <div>
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
            </div>
            <div
                style={{
                    backgroundImage: 'url("/images/Group 21.png")',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPositionY: '0px',
                }}
            >
                <div>
                    <div>
                        <StudentPhotos />
                    </div>
                    <div className='position-relative'>
                        {/* <div> */}
                        <Container className='position-absolute l-300'>
                            <Row className={'mt-5'} style={{ marginRight: 0 }}>
                                {[...new Array(4)].map(index => (
                                    <Col md={6} key={index}>
                                        <AccordionComponent />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
            <div style={{ paddingTop: '400px' }}>
                <FooterTop />
            </div>
        </div>
    )
}

export default MainPageScreen
