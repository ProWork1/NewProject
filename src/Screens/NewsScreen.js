import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BreadcrumbsComponent from '../Components/BreadcrumbsComponent'
import FooterTop from '../Components/FooterTop'
import NewsComponent from '../Components/NewsComponent'
import './../css/news.css'

const NewsScreen = () => {
    const breadcrumbs = {
        title1: 'Новости',
    }

    return (
        <div>
            <div>
                <BreadcrumbsComponent breadcrumbs={breadcrumbs} />
            </div>
            <div className='col-12 news_theme'>
                <p>Новости</p>
            </div>
            <div>
                <Container>
                    <Row className='justify-content-center'>
                        {[...new Array(10)].map(index => (
                            <Col xs={12} sm={10} key={index} className='my-2'>
                                <NewsComponent />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            <div>
                <FooterTop />
            </div>
        </div>
    )
}

export default NewsScreen
