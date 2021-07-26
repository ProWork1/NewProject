import React from 'react'
import AboutComponent from '../Components/AboutComponent'
import FooterTop from '../Components/FooterTop'
import ServiceComponent from '../Components/ServiceComponent'

const AboutUsScreen = () => {
    return (
        <div>
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
