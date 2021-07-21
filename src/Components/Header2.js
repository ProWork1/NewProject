import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, {
    Pagination
} from 'swiper/core';

import '../css/header copy.css';

SwiperCore.use([Pagination]);

const Header2 = () => {

    return (
        <div className="header">
            <Swiper spaceBetween={30} pagination={{
                "clickable": true
            }} className="mySwiper">
                <SwiperSlide>
                    <div className="container">
                        <div className="row m-0">
                            <div className="col-12 col-sm-12 col-md-10 col-lg-8">
                                <h1 className="title">
                                    Грант и контрактное обучение в <span>зарубежных </span> вузах
                                </h1>
                                <p className="text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    <img src="../images/header/header_vektor.png" className="d-none d-md-block" alt="vektor" />
                                </p>

                                <button>
                                    <div className="button-block">
                                        <i>
                                            <img src="../images/header/header_phone.png" alt="phone" />
                                        </i>
                                        <span>Связаться с нами</span>
                                    </div>
                                </button>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="row m-0">
                            <div className="col-12 col-sm-12 col-md-10 col-lg-8">
                                <h1 className="title">
                                    Грант и контрактное обучение в <span>зарубежных </span> вузах
                                </h1>
                                <p className="text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    <img src="../images/header/header_vektor.png" className="d-none d-md-block" alt="vektor" />
                                </p>

                                <button>
                                    <div className="button-block">
                                        <i>
                                            <img src="../images/header/header_phone.png" alt="phone" />
                                        </i>
                                        <span>Связаться с нами</span>
                                    </div>
                                </button>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="row m-0">
                            <div className="col-12 col-sm-12 col-md-10 col-lg-8">
                                <h1 className="title">
                                    Грант и контрактное обучение в <span>зарубежных </span> вузах
                                </h1>
                                <p className="text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    <img src="../images/header/header_vektor.png" className="d-none d-md-block" alt="vektor" />
                                </p>

                                <button>
                                    <div className="button-block">
                                        <i>
                                            <img src="../images/header/header_phone.png" alt="phone" />
                                        </i>
                                        <span>Связаться с нами</span>
                                    </div>
                                </button>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="row m-0">
                            <div className="col-12 col-sm-12 col-md-10 col-lg-8">
                                <h1 className="title">
                                    Грант и контрактное обучение в <span>зарубежных </span> вузах
                                </h1>
                                <p className="text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    <img src="../images/header/header_vektor.png" className="d-none d-md-block" alt="vektor" />
                                </p>

                                <button>
                                    <div className="button-block">
                                        <i>
                                            <img src="../images/header/header_phone.png" alt="phone" />
                                        </i>
                                        <span>Связаться с нами</span>
                                    </div>
                                </button>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="header-bottom">
                <div className="container d-flex">
                        <div className="d-flex align-items-center" style={{marginRight: "30px"}}>
                            <img src="../images/header/location.png" alt="location" />
                            <p>
                                <span>г. Город</span>
                                ул. Улица, 24 (Офис 24)
                            </p>
                        </div>
                        <div className="d-flex align-items-center">
                            <img className="oclock" src="../images/header/oclock.png" alt="location" />
                            <p>
                                <span>Пн-Пт 9:00 - 18:00</span>
                            </p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Header2
