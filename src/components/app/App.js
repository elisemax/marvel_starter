import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import {MainPage,ComicsPage} from "../pages";


const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
             <main>
            <Routes>
                <Route path="/comics" exact element={<ComicsPage/>}>

                </Route>
                <Route path="/" exact element={<MainPage/>}>

            </Route>
            </Routes>
            </main> 
            </div>
        </Router>
    );
}

export default App;