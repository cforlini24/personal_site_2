import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";



const Main = () => {
    return (
        <div className="flex items-center w-full justify-center container md:w-screen md:mx-auto" >
            <Card className="bg-blue w-96 my-40 scale-in-center">
                    <CardBody className="text-white text-center"> 
                        <Typography className=" mb-5" variant="h2">
                            Developer <br/> Economist <br/> Adventurer
                        </Typography>
                        <Typography >
                            Looking to start a new career in tech and finance
                        </Typography>
                        <Link to="/about-me">
                        <Button className="bg-pink mx-3 my-5 w-1/3" >
                            About Me
                        </Button> 
                        </Link>
                        <Link to="/portfolio">
                        <Button className="bg-pink mx-3 w-1/3">
                             Portfolio 
                        </Button>
                        </Link>
                        <Link to="/resume">
                        <Button className="bg-pink mx-3 w-1/3">
                             Resume
                        </Button>
                        </Link>
                        <Link to="/contact">
                        <Button className="bg-pink mx-3 w-1/3">
                             Contact
                        </Button>
                        </Link>
                    </CardBody>
            </Card>
        </div>
        
    )
}

export default Main;