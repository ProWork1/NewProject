import React from 'react'
import MainPageScreen from '../Screens/MainPageScreen'
import AboutUsScreen from '../Screens/AboutUsScreen'
import ServiceScreen from '../Screens/ServiceScreen'
import StudentsScreen from '../Screens/StudentsScreen'
import NewsScreen from '../Screens/NewsScreen'
import ContactScreen from '../Screens/ContactScreen'
import Unknown from '../Screens/Unknown'
import ApplicationScreen from '../Screens/ApplicationScreen'
import UniversityNameScreen from './../Screens/UniversityNameScreen'
import ArticleScreen from '../Screens/ArticleScreen'
import Consultation from '../Components/Consultation';

export const ROUTES = [
    {
        url: '/',
        component: () => <MainPageScreen />,
        exact: true,
    },
    {
        url: '/aboutus',
        component: () => <AboutUsScreen />,
        exact: true,
    },
    {
        url: '/Consultation',
        component: () => <Consultation />,
        exact: true,
    },
    {
        url: '/service',
        component: () => <ServiceScreen />,
        exact: true,
    },
    {
        url: '/students',
        component: () => <StudentsScreen />,
        exact: true,
    },
    {
        url: '/news',
        component: () => <NewsScreen />,
        exact: true,
    },
    {
        url: '/contact',
        component: () => <ContactScreen />,
        exact: true,
    },
    {
        url: '/application',
        component: () => <ApplicationScreen />,
        exact: true,
    },
    {
        url: '/name-university',
        component: () => <UniversityNameScreen />,
        exact: true,
    },
    {
        url: '/article',
        component: () => <ArticleScreen />,
        exact: true,
    },
    {
        component: () => <Unknown />,
        exact: true,
    },
]
