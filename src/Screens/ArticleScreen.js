import React from 'react'
import { Container } from 'react-bootstrap'
import ArticleNewsComponent from '../Components/ArticleNewsComponent'
import BreadcrumbsComponent from '../Components/BreadcrumbsComponent'
import FooterTop from '../Components/FooterTop'
import ArticleSlideComponent from './../Components/ArticleSlideComponent'

const ArticleScreen = () => {
    const breadcrumbs = {
        title1: 'Новости',
        link1: '/news',
        title2: 'Lorem ipsum dolor...'
    }

    return (
        <div>
            <div>
                <BreadcrumbsComponent breadcrumbs={breadcrumbs} />
            </div>
            <div>
                <Container>
                    <ArticleNewsComponent />
                </Container>
            </div>
            <div>
                <Container>
                    <ArticleSlideComponent />
                </Container>
            </div>
            <div>
                <FooterTop />
            </div>
        </div>
    )
}

export default ArticleScreen
