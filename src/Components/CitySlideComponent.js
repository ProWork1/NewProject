import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Card} from "react-bootstrap";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "../css/CitySlide.css";
import SwiperCore, {
    Navigation, Pagination
} from "swiper";

SwiperCore.use([Navigation,Pagination]);

const CitySlideComponent = () => {
    return (
        <div>
            <div className="slider__relative">
                <Swiper navigation={true} pagination={{clickable: true}} className={"mySwiper"} slidesPerView={4} spaceBetween={20} autoplay={true}
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
                    {[...new Array(10)].map((index) => (
                        <SwiperSlide key={index}>
                            <Card className="border-0 slider__card">
                                <Card.Body>
                                    <div className="mb-2">
                                        <img src="images/image 35.png" alt="slider image" className="slider__img"/>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="slider__title">Россия</span>
                                        <span className="slider__info">15 вузов</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CitySlideComponent;