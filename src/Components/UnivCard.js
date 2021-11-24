import './../css/univcard.scss'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Country from '../image/country.png'
import Star from '../image/star.svg'
import { Link } from 'react-router-dom'

const UnivCard = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <div className='card_wrapper'>
            <div className='left_part'>
                <Slider {...settings}>
                    <div>
                        <img src={Country} alt='' />
                    </div>
                    <div>
                        <img src={Country} alt='' />
                    </div>
                    <div>
                        <img src={Country} alt='' />
                    </div>
                    <div>
                        <img src={Country} alt='' />
                    </div>
                </Slider>
            </div>

            <div className='right_part'>
                <div className='part_top'>
                    <div className='part_name'>
                        <h3 className='name_title'>
                            <Link to='/name-university'>Название университета</Link>
                        </h3>
                    </div>
                    <div className='stars'>
                        <ul>
                            <li>
                                <img src={Star} alt='' />
                            </li>
                            <li>
                                <img src={Star} alt='' />
                            </li>
                            <li>
                                <img src={Star} alt='' />
                            </li>
                            <li>
                                <img src={Star} alt='' />
                            </li>
                            <li>
                                <img src={Star} alt='' />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='midle_part'>
                    <div className='middle_left'>
                        <ul className='ul_item one'>
                            <li>
                                <a className='part_links' href='#'>
                                    Бакалавриат
                                </a>
                            </li>
                            <li>
                                <a className='part_links' href='#'>
                                    Магистратура
                                </a>
                            </li>
                        </ul>

                        <ul className='ul_item two'>
                            <li>
                                <a className='part_links' href='#'>
                                    Архитектура
                                </a>
                            </li>
                            <li>
                                <a className='part_links' href='#'>
                                    Архитектура
                                </a>
                            </li>
                            <li>
                                <a className='part_links' href='#'>
                                    Архитектура
                                </a>
                            </li>
                            <li>
                                <a className='part_links' href='#'>
                                    Архитектура
                                </a>
                            </li>
                        </ul>

                        <ul className='ul_item three'>
                            <li>
                                <a className='part_links' href='#'>
                                    Архитектура
                                </a>
                            </li>
                            <li>
                                <a className='part_links' href='#'>
                                    Архитектура
                                </a>
                            </li>
                            <li>
                                <a className='part_links' href='#'>
                                    Архитектура
                                </a>
                            </li>
                            <li>
                                <a className='part_links blue' href='#'>
                                    Еще 30 ...
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='middle_right'>
                        <h2 className='price_smestr'>от 3 000 €</h2>
                        <span className='smestr_still'> за семестр</span>
                    </div>
                </div>

                <div className='part_bottom'>
                    <h3 className='country_loca alone'>
                        <span>Москва</span>, Россия
                    </h3>
                    <h3 className='country_loca'>
                        <span>Москва</span>, Россия
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default UnivCard
