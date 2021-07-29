import React from 'react'
import BreadcrumbsComponent from '../Components/BreadcrumbsComponent'
import ContactComponent from '../Components/ContactComponent'

const ContactScreen = () => {
    const breadcrumbs = {
        title1: 'Контакты',
    }

    return (
        <div>
            <div>
                <BreadcrumbsComponent breadcrumbs={breadcrumbs} />
            </div>
            <div>
                <ContactComponent />
            </div>
        </div>
    )
}

export default ContactScreen
