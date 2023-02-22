import { createRoot } from "react-dom/client"
import { BrowserRouter,Route,Routes } from "react-router-dom";

import {Bio, Footer, Portfolio, Main, Navbar } from "./components";


const App = () => {
    return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about-me" element={<Bio />} />
            <Route path="/*" render={() => <Main />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
    )
}


const appElt = document.getElementById("app");

const root = createRoot(appElt);

root.render(<App />)