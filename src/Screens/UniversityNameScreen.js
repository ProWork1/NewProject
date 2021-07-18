import React from 'react'
import UniverSlide from '../Components/UniverSlideComponent';
import UniverAccordComponent from "../Components/UniverAccordComponent";
import {Container, Col, Row, Accordion} from 'react-bootstrap';

const UniversityNameScreen = () => {
    return (
        <div>
            <Container>
                {[...new Array(2)].map((index) =>
                    <UniverAccordComponent key={index}/>
                )}
                <UniverSlide/>
            </Container>
        </div>
    )
};

export default UniversityNameScreen
