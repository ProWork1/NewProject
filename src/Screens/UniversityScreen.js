import React from 'react'
import BreadcrumbsComponent from '../Components/BreadcrumbsComponent'
import FooterTop from './../Components/FooterTop'
import Univ from './../Components/Univ'

const UniversityScreen = () => {
    const breadcrumbs = {
        title1: 'Университеты',
    }

    return (
        <div>
            <div>
                <BreadcrumbsComponent breadcrumbs={breadcrumbs} />
            </div>
            <div>
                <Univ />
            </div>
            <div>
                <FooterTop />
            </div>
        </div>
    )
}

export default UniversityScreen
