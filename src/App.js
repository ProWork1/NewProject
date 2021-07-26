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
            <div>
                <FooterComponent />
            </div>
        </div>
    )
}

export default App
