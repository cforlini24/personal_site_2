import { createRoot } from "react-dom/client"
import { BrowserRouter,Route,Routes } from "react-router-dom";

import {Bio, Footer, Portfolio, Main, Nav, Resume, Contact } from "./components";

import { ThemeProvider } from "@material-tailwind/react";

import "./index.css"



const App = () => {
    return (
    <ThemeProvider >
    <BrowserRouter >
        <Nav />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about-me" element={<Bio />} />
            <Route path="/*" render={() => <Main />}/>
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    </ThemeProvider>
    )
}


const appElt = document.getElementById("app");

const root = createRoot(appElt);

root.render(<App />)