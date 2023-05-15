import clickerImg from "../clickerSite.png"
import aracdeImg from "../arcadeSite.png"
import puppyImg from "../puppyPic.png";
import vinylImg from "../vinyl2.png"
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

const Portfolio = () => {
    return(
    <div className="container w-full my-5 flex flex-col items-center md:mx-auto md:flex-row md:justify-around md:content-center md:flex-wrap md:overflow-hidden mb-60 md:content-between">
        <Card id="projThree" className = "my-5 w-96 slide-in-bottom md:w-1/3 md:h-96 md:m-5 md:mb-20">
            <CardHeader id="picThree" className="projPic"><a href="https://thevinylfrontier.netlify.app"><img id="puppyPic" src = {vinylImg} className="object-contain"/></a></CardHeader>
            <CardBody id="puppyText">
            <a href="https://thevinylfrontier.netlify.app"><Typography variant="h3" id="puppyTitle">The Vinyl Frontier</Typography></a>
                <p id="puppyPgraph">A fully-functiong e-commerce site, complete with accounts, carts, order history, and more. Developed with 2 others using agile workflow, taking advantage of many JS frameworks such as React, Express, B-Crypt, and JSONWebToken. </p>
            </CardBody>
        </Card>
        <Card id="projThree" className = "my-5 w-96 slide-in-bottom-delay md:w-1/3 md:h-96 md:m-5 md:mb-20">
            <CardHeader id="picThree" className="projPic"><a href="https://sensational-semifreddo-ffbfd6.netlify.app"><img id="puppyPic" src = {puppyImg}/></a></CardHeader>
            <CardBody id="puppyText">
            <a href="https://sensational-semifreddo-ffbfd6.netlify.app"><Typography variant="h3" id="puppyTitle">Puppy Bowl Roster</Typography></a>
                <p id="puppyPgraph">Using React and AJAX, I designed a website to display a roster for the Puppy Bowl. This is a Single-Page Application that uses APIs to fetch data. It also includes a search bar to filter through results.</p>
            </CardBody>
        </Card>
        <Card id="projOne" className = "my-5 w-96 slide-in-bottom-delay-2 md:w-1/3 md:h-96 md:m-5">
            <CardHeader id="picOne" className="projPic"> <a href="https://coruscating-tarsier-20ea4b.netlify.app"><img id="bananaPic" src = {clickerImg}/></a></CardHeader>
            <CardBody id="clickerText">
            <a href="https://coruscating-tarsier-20ea4b.netlify.app"><Typography variant="h3">Banana Clicker</Typography></a>
                <Typography >For this project I redesigned the classic coockie clicker game. This project was made in JavaScript and HTML and helped me learn looping, functions, and basic coding logic</Typography>
            </CardBody>
        </Card>
        <Card id="projTwo" className = "my-5 w-96 slide-in-bottom-delay-3 md:w-1/3 md:h-96 md:m-5">
            <CardHeader id="picTwo" className="projPic"><a href="https://chasesarcade.netlify.app"><img id="aracdePic" src = {aracdeImg}/></a></CardHeader>
            <CardBody id="arcadeText">
            <a href="https://chasesarcade.netlify.app"><Typography variant="h3" id="arcadeTitle">Tic-Tac-Toe</Typography></a>
                <p id="arcadePgraph">This simple children's game is much harder to code than I had thought. Using JavaScript and HTML, I created a two-player mode as well as a CPU player for single-player games. This CPU has a simple mode that picks a square at random and an advanced mode that tries to block the player from winning.  </p>
            </CardBody>
        </Card>
        
    </div>
    )
}

export default Portfolio;