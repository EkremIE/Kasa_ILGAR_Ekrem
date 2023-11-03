import React from 'react';
// import Header from "./Components/Header";
import AboutPage from "./pages/About";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Footer from './Components/Footer';

function App() {
    return (
        <Router>
            <div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

            </div>
        </Router>
    );
}

export default App;

