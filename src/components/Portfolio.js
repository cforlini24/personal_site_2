import clickerImg from "../clickerSite.png"
import aracdeImg from "../arcadeSite.png"
import puppyImg from "../puppyPic.png";

const Portfolio = () => {
    return(
    <div id="portfolio">
        <h1>Some of my favorite things I've worked on</h1>
        <section id="projOne" className = "proj">
            <aside id="picOne" className="projPic"> <a href="https://coruscating-tarsier-20ea4b.netlify.app"><img id="bananaPic" src = {clickerImg}/></a></aside>
            <div id="clickerText">
            <a href="https://coruscating-tarsier-20ea4b.netlify.app"><h3 id="clickerTitle">Banana Clicker</h3></a>
                <p id="clickerPgraph">For this project I redesigned the classic coockie clicker game. This project was made in JavaScript and HTML and helped me learn looping, functions, and basic coding logic</p>
            </div>
            
        </section>
        <section id="projTwo" className = "proj">
            <aside id="picTwo" className="projPic"><a href="https://chasesarcade.netlify.app"><img id="aracdePic" src = {aracdeImg}/></a></aside>
            <div id="arcadeText">
            <a href="https://chasesarcade.netlify.app"><h3 id="arcadeTitle">Tic-Tac-Toe</h3></a>
                <p id="arcadePgraph">This simple children's game is much harder to code than I had thought. Using JavaScript and HTML, I created a two-player mode as well as a CPU player for single-player games. This CPU has a simple mode that picks a square at random and an advanced mode that tries to block the player from winning.  </p>
            </div>
        </section>
        <section id="projThree" className = "proj">
            <aside id="picThree" className="projPic"><a href="https://sensational-semifreddo-ffbfd6.netlify.app"><img id="puppyPic" src = {puppyImg}/></a></aside>
            <div id="puppyText">
            <a href="https://sensational-semifreddo-ffbfd6.netlify.app"><h3 id="puppyTitle">Puppy Bowl Roster</h3></a>
                <p id="puppyPgraph">Using React and AJAX, I designed a website to display a roster for the Puppy Bowl. This is a Single-Page Application that uses APIs to fetch data. It also includes a search bar to filter through results.</p>
            </div>
        </section>
    </div>
    )
}

export default Portfolio;