import React from 'react'
import BreadcrumbsComponent from '../Components/BreadcrumbsComponent'
import ServiceComponent from '../Components/ServiceComponent'
import FooterTop from './../Components/FooterTop'

const ServiceScreen = () => {
    const breadcrumbs = {
        title1: 'Услуги',
    }

    return (
        <div>
            <div>
                <BreadcrumbsComponent breadcrumbs={breadcrumbs} />
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

export default ServiceScreen
