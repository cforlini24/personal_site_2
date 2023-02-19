import { createRoot } from "react-dom/client"
import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";


const App = () => {
    return (
        <main>
            <div id="topContent">
                <div id="topLeft">
                    <h2 id="tagline">Developer economist humanitarian</h2>
                    <p id="subheader"> Looking to start a new career in tech and finance</p>
                </div>
                <Bio />
            </div>
            <Portfolio />
            <Footer />
        </main>
    )
}


const appElt = document.getElementById("app");

const root = createRoot(appElt);

root.render(<App />)