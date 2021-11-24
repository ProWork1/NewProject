import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, Col, Row } from 'react-bootstrap'
import '../css/userSlider.css'
import SwiperCore, { Navigation, Pagination } from 'swiper'

SwiperCore.use([Navigation, Pagination])

const UserSlideComponent = () => {
    return (
        <div id='userSlider'>
            <Row className='text-center mt-3 mb-3 mt'>
                <Col>
                    <div className='userSliderTopic'>Отзывы наших студентов</div>
                </Col>
            </Row>
            <div className='slider__relative position-relative mt-5 '>
                <Swiper
                    navigation={true}
                    pagination={{ clickable: true }}
                    className={'mySwiper user__slider'}
                    slidesPerView={4}
                    spaceBetween={20}
                    autoplay={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        // 576: {
                        //     slidesPerView: 2,
                        // },
                        776: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {[...new Array(10)].map(index => (
                        <SwiperSlide key={index}>
                            <Card className='border-0 slider__card user__card'>
                                <div className='usercard__border'>
                                    <div className='userimg__wrapper'>
                                        <img src='images/student.png' className='w-100' alt='' />
                                    </div>
                                    <Card.Body>
                                        <div className=''>
                                            <h5 className='usercard__title text-center'>
                                                Александр Иванов
                                            </h5>
                                            <p className='usercard__info'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Ut enim ad minim veniam, quis
                                                nostrud exercitation. Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit!
                                            </p>
                                        </div>
                                    </Card.Body>
                                </div>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default UserSlideComponent
