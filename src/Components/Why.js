import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './../css/why.css'

const texts = [
    {
        className: 'mx1',
        image: '/images/121.png',
        span: <>Сертифицированные услуги <br /></>,
        text1: '',
        text2: <>нашей профессиональной <br /> команды</>,
    },
    {
        className: 'mx2',
        image: '/images/image 26.png',
        span: <>Высокие </>,
        text1: '',
        text2: <>визовые ставки <br /> (98% наших студентов <br /> получили визу)</>,
    },
    {
        className: 'mx3',
        image: '/images/image29.png',
        span: <>престижных <br /></>,
        text1: <>Учеба в </>,
        text2: <>университетах, которые <br /> входят в Топ-1000</>,
    },
]

const Why = () => {
    return (
        <div>
            <div id='why' className='position-relative'>
                <div style={{ backgroundImage: 'url("/images/tree.png")', backgroundRepeat: 'no-repeat' }} className='position-absolute l-0 top-tree w-100 h-100' />
                <Container>
                    <Row className='text-center'>
                        <Col>
                            <div className={'allText'}>
                                <span style={{ fontWeight: 'bold !important' }}>
                                    Добро пожаловать {' '}
                                </span>
                                в нашу группу <br /> иностранного образования
                            </div>
                        </Col>
                    </Row>
                    <Row className='text-center mt-3 mb-3'>
                        <Col>
                            <div className='whyTopic'>Почему мы?</div>
                        </Col>
                    </Row>
                    <Row>
                        {texts.map(text => (
                            <Col md={4} className={`mt ${text.className}`}>
                                <div className='whyBorder1'>
                                    <div className='whyBorder2 position-relative'>
                                        <div className='whyImage d-block position-absolute'>
                                            <div
                                                className='mx-auto'
                                                style={{ backgroundImage: `url('${text.image}')` }}
                                            />
                                        </div>
                                        <div className='whyText text-center d-block allText'>
                                            <div>
                                                {text.text1}
                                                <span>{text.span}</span> {text.text2}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Why
