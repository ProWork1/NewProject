import React from 'react'
// import MaskedInput from 'react-text-mask'
import './../css/consultation.css'

const Consultation = () => {
    return (
        <div id='consultation' className='container'>
            <div id='title'>
                <button>
                    <i class='fas fa-angle-left'></i>
                    Назад
                </button>
                <h1>Заявка на консультацию</h1>
            </div>
            <div className='body'>
                <div className='row align-items-end m-0 pt-5'>
                    <div className='col-12 col-md-6'>
                        <div className='form-group'>
                            <label>
                                <i class='fas fa-user label-icon'></i>
                                ФИО
                            </label>
                            <input type='text' className='form-control' placeholder='Имя' />
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='form-group pt-2'>
                            <input type='text' className='form-control' placeholder='Фамилия' />
                        </div>
                    </div>
                </div>
                <div className='row m-0 pt-4'>
                    <div className='col-12 col-md-6'>
                        <div className='form-group'>
                            <label>
                                <i class='fas fa-gift label-icon'></i>
                                Дата рождения
                            </label>
                            <div className='d-flex'>
                                <input
                                    type='number'
                                    className='form-control date-day'
                                    placeholder='День'
                                />
                                <select className='form-control' placeholder='Месяц'>
                                    <option>Месяц</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                                <input
                                    type='text'
                                    className='form-control date-year'
                                    placeholder='Год'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row align-items-end m-0 pt-4'>
                    <div className='col-12 col-md-6'>
                        <div className='form-group'>
                            <label>
                                <i class='fas fa-map-marker-alt label-icon'></i>
                                Контактные данные
                            </label>
                            <input type='text' className='form-control' placeholder='Город' />
                        </div>
                        <div className='form-group pt-2'>
                            <MaskedInput
                                className='form-control'
                                placeholder='+998 (____) ___ - __ - __'
                                mask={[
                                    '+',
                                    '9',
                                    '9',
                                    '8',
                                    ' ',
                                    '(',
                                    ' ',
                                    /[1-9]/,
                                    /\d/,
                                    ' ',
                                    ')',
                                    ' ',
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    '-',
                                    /\d/,
                                    /\d/,
                                    '-',
                                    /\d/,
                                    /\d/,
                                ]}
                            />
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='form-group'>
                            <input type='text' className='form-control' placeholder='E-mail' />
                        </div>
                    </div>
                </div>
                <div className='row align-items-end m-0 pt-4'>
                    <div className='col-12 col-md-6'>
                        <label className='pl-3 pb-3'>
                            <i class='fas fa-chart-line label-icon'></i>
                            Уровень английского
                        </label>
                        <div className='form-group radio'>
                            <input id='11' type='radio' name='english_level' className='' />
                            <label for='11'>Начинающий (А1 - А2)</label>
                        </div>
                        <div className='form-group radio'>
                            <input id='12' type='radio' name='english_level' className='' />
                            <label for='12'>Средний (B1 - B2)</label>
                        </div>
                        <div className='form-group radio'>
                            <input id='13' type='radio' name='english_level' className='' />
                            <label for='13'>Продвинутый (C1 - C2)</label>
                        </div>
                    </div>
                </div>
                <div className='row align-items-end m-0 pt-4'>
                    <div className='col-12 col-md-6'>
                        <label className='pl-3 pb-3'>
                            <i class='fas fa-graduation-cap label-icon'></i>
                            Предпочтительная программа
                        </label>
                        <div className='form-group radio'>
                            <input id='21' type='radio' name='preferred_program' className='' />
                            <label for='21'>Бакалавр</label>
                        </div>
                        <div className='form-group radio'>
                            <input id='22' type='radio' name='preferred_program' className='' />
                            <label for='22'>Foundation</label>
                        </div>
                        <div className='form-group radio'>
                            <input id='23' type='radio' name='preferred_program' className='' />
                            <label for='23'>Магистр</label>
                        </div>
                    </div>
                </div>
                <div className='row m-0 pt-4'>
                    <div className='col-12 col-md-6'>
                        <div className='form-group'>
                            <label>
                                <i class='far fa-calendar-alt label-icon'></i>
                                Предпочтительная дата начала
                            </label>
                            <div className='d-flex'>
                                <input
                                    type='number'
                                    className='form-control date-day'
                                    placeholder='День'
                                />
                                <select className='form-control' placeholder='Месяц'>
                                    <option>Месяц</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                                <input
                                    type='text'
                                    className='form-control date-year'
                                    placeholder='Год'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row m-0 pt-4 pb-5'>
                    <div className='col-12 col-md-6'>
                        <div className='form-group'>
                            <textarea
                                className='form-control'
                                placeholder='Дополнительные комментарии'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Consultation
