import React from 'react';
import HeaderComponent from '../Components/AccordionComponent';
import MainPageScreen from '../Screens/MainPageScreen'
import AboutUsScreen from '../Screens/AboutUsScreen';
import ServiceScreen from '../Screens/ServiceScreen';
import University from '../Screens/UniversityScreen';
import StudentsScreen from '../Screens/StudentsScreen';
import NewsScreen from '../Screens/NewsScreen';
import ContactScreen from '../Screens/ContactScreen';
import FooterComponent from '../Components/FooterComponent';

export const ROUTES = [
    {
        url: "",
        component: () => <HeaderComponent />,
        exact: true
    },
    {
        url: "/",
        component: () => <MainPageScreen />,
        exact: true
    },
    {
        url: "/aboutus",
        component: () => <AboutUsScreen />,
        exact: true
    },
    {
        url: "/service",
        component: () => <ServiceScreen />,
        exact: true
    },
    {
        url: "/university",
        component: () => <University />,
        exact: true
    },
    {
        url: "/students",
        component: () => <StudentsScreen />,
        exact: true
    },
    {
        url: "/news",
        component: () => <NewsScreen />,
        exact: true
    },
    {
        url: "/contact",
        component: () => <ContactScreen />,
        exact: true
    },
    {
        url: "",
        component: () => <FooterComponent />,
        exact: true
    },
    
]
