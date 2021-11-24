import './../css/univ.scss'
import { FilterOne, FilterTwo, FilterThree } from './Filter'

import Before4 from '../image/before4.svg'
import Before5 from '../image/before5.svg'
import Before6 from '../image/before6.svg'

import UnivCard from './UnivCard'

import Arrow from '../image/arrow.svg'
import Close from '../image/close.png'
import Allow from '../image/allow.svg'
import Filter from '../image/filter.svg'

const Univ = () => {
    function Toglle() {
        document.querySelector('#toggle_one').classList.toggle('active')
        document.querySelector('.img_one').classList.toggle('active')
    }
    function ToglleOne() {
        document.querySelector('#toggle_two').classList.toggle('active')
        document.querySelector('.img_two').classList.toggle('active')
    }
    function ToglleThre() {
        document.querySelector('#toggle_thre').classList.toggle('active')
        document.querySelector('.img_thre').classList.toggle('active')
    }

    function AddActive() {
        document.querySelector('.sidebar_block').classList.add('active')
        document.querySelector('.univ_wrapper').classList.add('active')
    }

    function CloseActive() {
        document.querySelector('.sidebar_block').classList.remove('active')
        document.querySelector('.univ_wrapper').classList.remove('active')
    }

    return (
        <div className='univ_wrapper'>
            <div className='inner_univ container'>
                <div className='page_title'>
                    <h1 className='page_name'>Университеты</h1>
                </div>

                <div className='page_main'>
                    <div className='page_filter'>
                        <div className='filter_top'>
                            <h3 className='filters' onClick={AddActive}>
                                <div className='filter_img'>
                                    <img src={Filter} alt='' />
                                </div>
                                <span>Фильтры</span>
                            </h3>
                        </div>
                        <div className='input_item'>
                            <input placeholder='Поиск' className='search_item' type='search' />
                        </div>
                        <div className='filter_link'>
                            <ul>
                                <li className='has_bef3'>
                                    <img src={Before4} alt='' />
                                    <a href='#'>По популярности</a>
                                </li>
                                <li className='has_bef2'>
                                    <img src={Before5} alt='' />
                                    <a href='#'>По цене</a>
                                </li>
                                <li className='none_pad has_bef1'>
                                    <img src={Before6} alt='' />
                                    <a href='#'>По цене</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='page_main__items'>
                        <div className='sidebar_block'>
                            <div className='close_btn' onClick={CloseActive}>
                                <img src={Close} alt='' />
                            </div>
                            <h3 id='filter_id'>
                                <span>Фильтры</span>
                            </h3>
                            <div className='filter_icons'>
                                <div className='filter_one after'>
                                    <div className='filter_name' onClick={Toglle}>
                                        <h3 className='countr_name before_one'>Страны</h3>
                                        <img src={Arrow} alt='' className='img_one' />
                                    </div>
                                    <div className='filter_items' id='toggle_one'>
                                        <FilterOne />
                                    </div>
                                </div>

                                <div className='filter_two after'>
                                    <div className='filter_name' onClick={ToglleOne}>
                                        <h3 className='countr_name before_two'>Форма обучения</h3>
                                        <img src={Arrow} alt='' className='img_two' />
                                    </div>
                                    <div className='filter_items' id='toggle_two'>
                                        <FilterTwo />
                                    </div>
                                </div>

                                <div className='filter_three'>
                                    <div className='filter_name' onClick={ToglleThre}>
                                        <h3 className='countr_name before_three'>
                                            Направление обучения
                                        </h3>
                                        <img src={Arrow} alt='' className='img_thre' />
                                    </div>
                                    <div className='filter_items' id='toggle_thre'>
                                        <FilterThree />
                                    </div>
                                </div>
                            </div>
                            <a id='apply_id' href='#'>
                                <div className='img_allow'>
                                    <img src={Allow} alt='' />
                                </div>
                                <span>Применить</span>
                            </a>
                        </div>

                        <div className='universty_blocks'>
                            {[...new Array(9)].map(() => (
                                <UnivCard />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Univ
