import { Route, BrowserRouter as Router } from 'react-router-dom'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import MainPageScreen from './Screens/MainPageScreen'
import AboutUsScreen from './Screens/AboutUsScreen'
import ServiceScreen from './Screens/ServiceScreen'
import University from './Screens/UniversityScreen'
import StudentsScreen from './Screens/StudentsScreen'
import NewsScreen from './Screens/NewsScreen'
import ContactScreen from './Screens/ContactScreen'
import RFCScreen from './Screens/RFCScreen'
import UniversityNameScreen from './Screens/UniversityNameScreen'
import ArticleScreen from './Screens/ArticleScreen'
import './App.css'

function App() {
    return (
        <div className='App'>
            <Router>
                <div>
                    <HeaderComponent/>
                </div>
                <div>
                    <Route path='/' component={MainPageScreen} exact />
                    <Route path='/aboutus' component={AboutUsScreen} exact />
                    <Route path='/service' component={ServiceScreen} exact />
                    <Route path='/university' component={University} exact />
                    <Route path='/students' component={StudentsScreen} exact />
                    <Route path='/news' component={NewsScreen} exact />
                    <Route path='/contact' component={ContactScreen} exact />
                    {/* <Route path='/rfcscreen' component={RFCScreen} exact />
                    <Route path='/universityname' component={UniversityNameScreen} exact />
                    <Route path='/article' component={ArticleScreen} exact /> */}
                </div>
                <div>
                    <FooterComponent />
                </div>
            </Router>
        </div>
    )
}

export default App
