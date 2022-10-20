import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import { lazy,Suspense } from "react";
import { Helmet } from "react-helmet";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import('../pages/Page404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SinglePage = lazy(() => import('../pages/SinglePage'));
const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicLayout'));
const SingleCharacterLayout = lazy(() => import('../pages/singleCharacterLayout/SingleCharacterLayout'));


const App = () => {

    return (
        <>
        <Helmet>
            <meta name="description"
            content="Marvel information portal"/>
            <title>Marvel Comics</title>
        </Helmet>
        <Router>
            <div className="app">
                <AppHeader/>
             <main>
                <Suspense fallback={<Spinner/>}>
                    <Routes>
                        <Route path="/comics" element={<ComicsPage/>}/>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="*" element={<Page404/>}/>
                        <Route path="/comics/:id" element={<SinglePage Component={SingleComicLayout} dataType='comic'/>}/>
                        <Route path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType='character'/>}/>
                    </Routes>
                </Suspense>
            </main> 
            </div>
        </Router>
        </>
    );
}

export default App;