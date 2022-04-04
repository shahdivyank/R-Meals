import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import AboutUs from './Components/AboutUs/AboutUs'

import {
    Route,
    Routes
} from "react-router-dom";
import Goals from './Components/Goals/Goals';

function App() {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/goals' exact element={<Goals />} />
                <Route path='/about-us' exact element={<AboutUs />} />
            </Routes>

        </div>
    );
}

export default App;
