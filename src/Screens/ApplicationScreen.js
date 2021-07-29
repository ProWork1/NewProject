import React from 'react'
import BreadcrumbsComponent from '../Components/BreadcrumbsComponent'
import Consultation from '../Components/Consultation'

const ApplicationScreen = () => {
    const breadcrumbs = {
        title1: 'Заявка на консультацию',
    }

    return (
        <div>
            <div>
                <BreadcrumbsComponent breadcrumbs={breadcrumbs} />
            </div>
            <div>
                <Consultation />
            </div>
        </div>
    )
}

export default ApplicationScreen
