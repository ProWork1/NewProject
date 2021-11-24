import React from 'react'
import UniverSlide from '../Components/UniverSlideComponent'
import UniverAccordComponent from '../Components/UniverAccordComponent'
import FooterTop from './../Components/FooterTop'
import AboutUniversity from './../Components/AboutUniversity'
import UniversityName from './../Components/UniversityName'
import { Container } from 'react-bootstrap'
import BreadcrumbsComponent from '../Components/BreadcrumbsComponent'

const UniversityNameScreen = () => {
    const breadcrumbs = {
        title1: 'Университеты',
        link1: '/university',
        title2: 'Название университета'
    }

    return (
        <div>
            <div>
                <BreadcrumbsComponent breadcrumbs={breadcrumbs} />
            </div>
            <div>
                <UniversityName />
            </div>
            <div>
                <AboutUniversity />
            </div>
            <div>
                <Container>
                    {[...new Array(2)].map(index => (
                        <UniverAccordComponent key={index} />
                    ))}
                </Container>
            </div>
            <div>
                <Container>
                    <UniverSlide />
                </Container>
            </div>
            <div>
                <FooterTop />
            </div>
        </div>
    )
}

export default UniversityNameScreen
