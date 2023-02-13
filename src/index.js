import { createRoot } from "react-dom/client"

const App = () => {
    return (
        <main>
        <h2>Developer, economist, humanitarian</h2>
        <p>
            Looking to start a new career in tech and finance
        </p>
        <img class="gif" src="https://media0.giphy.com/media/V4NSR1NG2p0KeJJyr5/giphy.gif"/>
        </main>
    )
}


const appElt = document.getElementById("app");

const root = createRoot(appElt);

root.render(<App />)