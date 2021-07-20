import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import './App.css';
import { ROUTES } from "./Routes/routes";

function App() {
    return (
        <div className='App'>
            <div>
                <HeaderComponent />
            </div>
            <Switch>
                {ROUTES.map((route, index) => {
                    return <Route exact={route.exact} key={index} path={route.url} component={route.component} />
                })}
            </Switch>
            
            {/* <Route path='/rfcscreen' component={RFCScreen} exact />
                    <Route path='/universityname' component={UniversityNameScreen} exact />
                    <Route path='/article' component={ArticleScreen} exact /> */}

            <div>
                <FooterComponent />
            </div>
        </div>
    )
}

export default App
