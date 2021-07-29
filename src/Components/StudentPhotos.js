import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import './../css/student_photos.css'

import SwiperCore, { Pagination, Navigation } from 'swiper/core'

SwiperCore.use([Pagination, Navigation])

const StudentPhotos = () => {
    return (
        <div id='student_photos'>
            <div className='container'>
                <div className='title'>
                    <h4>Фотографии наших студентов</h4>
                    <div className='all_block'>
                        <p className='m-0'>
                            Истории студентов
                            <i>
                                <svg
                                    width='10'
                                    height='14'
                                    viewBox='0 0 10 14'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M2 2L7 7L2 12'
                                        stroke='url(#paint0_linear)'
                                        stroke-width='3'
                                        stroke-linecap='round'
                                    />
                                    <defs>
                                        <linearGradient
                                            id='paint0_linear'
                                            x1='8.38158'
                                            y1='-7.47368'
                                            x2='-11.0958'
                                            y2='7.03216'
                                            gradientUnits='userSpaceOnUse'
                                        >
                                            <stop stopColor='#B1E2FF' />
                                            <stop offset='1' stopColor='#68C7FF' />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </i>
                        </p>
                    </div>
                </div>
                <div className='student_photos_carousel'>
                    <div>
                        <div className='slider__relative position-relative mt-5 '>
                            <Swiper
                                navigation={true}
                                pagination={{ clickable: true }}
                                className={'mySwiper user__slider'}
                                slidesPerView={4}
                                spaceBetween={32}
                                autoplay={true}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    // 576: {
                                    //     slidesPerView: 2,
                                    // },
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
                                        <div className='carousel_container'>
                                            <img
                                                className='w-100'
                                                src='/images/image 43.png'
                                                alt='img1'
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentPhotos
