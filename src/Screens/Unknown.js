import React from 'react'
import BreadcrumbsComponent from '../Components/BreadcrumbsComponent'

const Unknown = () => {
    const breadcrumbs = {
        title1: 'Unknown',
    }

    return (
        <div>
            <div>
                <BreadcrumbsComponent breadcrumbs={breadcrumbs} />
            </div>
            <div>
                <h1>Hello 404</h1>
            </div>
        </div>
    )
}

export default Unknown
