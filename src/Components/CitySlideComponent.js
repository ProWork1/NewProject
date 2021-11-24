import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import '../css/CitySlide.css'

SwiperCore.use([Navigation, Pagination])

const CitySlideComponent = () => {
    return (
        <div id='citySlide'>
            <Container>
                <Row className='text-center mt-3 mb-3 mt'>
                    <Col>
                        <div className='citySlideTopic'>Университеты</div>
                    </Col>
                </Row>
                <Row className='text-center mb-4'>
                    <Col>
                        <div className={'allText'}>
                            В нашем каталоге вы найдете более
                            <span>
                                100
                                <br /> университетов{' '}
                            </span>{' '}
                            из более чем <span>14 стран</span>
                        </div>
                    </Col>
                </Row>
                <div className='slider__relative'>
                    <Swiper
                        navigation={true}
                        pagination={{ clickable: true }}
                        className={'mySwiper'}
                        slidesPerView={4}
                        spaceBetween={20}
                        autoplay={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 2,
                            },
                            776: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {[...new Array(10)].map(index => (
                            <SwiperSlide key={index}>
                                <Card className='border-0 slider__card'>
                                    <Card.Body>
                                        <div className='mb-2'>
                                            <img
                                                src='images/image 35.png'
                                                alt='slider image'
                                                className='slider__img'
                                            />
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <span className='slider__title'>Россия</span>
                                            <span className='slider__info'>15 вузов</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </div>
    )
}

export default CitySlideComponent
