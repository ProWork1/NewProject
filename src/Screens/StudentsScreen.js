import React from 'react'
import BreadcrumbsComponent from '../Components/BreadcrumbsComponent'
import FooterTop from '../Components/FooterTop'
import Students from '../Components/Students'

const StudentsScreen = () => {
    const breadcrumbs = {
        title1: 'Услуги',
    }

    return (
        <div>
            <div>
                <BreadcrumbsComponent breadcrumbs={breadcrumbs} />
            </div>
            <div>
                <Students />
            </div>
            <div>
                <FooterTop />
            </div>
        </div>
    )
}

export default StudentsScreen
