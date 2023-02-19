import clickerImg from "../clickerSite.png"
import aracdeImg from "../arcadeSite.png"

const Portfolio = () => {
    return(
    <div id="portfolio">
        <h1>Some of my favorite things I've worked on</h1>
        <section id="projOne" class = "proj">
            <aside id="picOne" class="projPic"> <a href="https://coruscating-tarsier-20ea4b.netlify.app"><img id="bananaPic" src = {clickerImg}/></a></aside>
            <div id="clickerText">
                <h3 id="clickerTitle">Banana Clicker</h3>
                <p id="clickerPgraph">For this project I redesigned the classic coockie clicker game. This project was made in JavaScript and HTML and helped me learn looping, functions, and basic coding logic</p>
            </div>
            
        </section>
        <section id="projTwo" class = "proj">
            <aside id="picTwo" class="projPic"><a href="https://chasesarcade.netlify.app"><img id="aracdePic" src = {aracdeImg}/></a></aside>
            <div id="arcadeText">
                <h3 id="arcadeTitle">Tic-Tac-Toe</h3>
                <p id="arcadePgraph">This simple children's game is much harder to code than I had thought. Using JavaScript and HTML, I created a two-player mode as well as a CPU player for single-player games. This CPU has a simple mode that picks a square at random and an advanced mode that tries to block the player from winning.  </p>
            </div>
        </section>
    </div>
    )
}

export default Portfolio;