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
                        <Button className="bg-pink mx-5 my-5" >
                            About Me
                        </Button> 
                        </Link>
                        <Link to="/portfolio">
                        <Button className="bg-pink mx-5">
                             Portfolio 
                        </Button>
                        </Link>
                    </CardBody>
            </Card>
        </div>
        
    )
}

export default Main;