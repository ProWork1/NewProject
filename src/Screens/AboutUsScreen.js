import React from 'react'
import AboutComponent from '../Components/AboutComponent'
import BreadcrumbsComponent from '../Components/BreadcrumbsComponent'
import FooterTop from '../Components/FooterTop'
import ServiceComponent from '../Components/ServiceComponent'

const AboutUsScreen = () => {
    const breadcrumbs = {
        title1: 'О нас',
    }

    return (
        <div>
            <div>
                <BreadcrumbsComponent breadcrumbs={breadcrumbs} />
            </div>
            <div>
                <AboutComponent />
            </div>
            <div>
                <ServiceComponent />
            </div>
            <div>
                <FooterTop />
            </div>
        </div>
    )
}

export default AboutUsScreen
