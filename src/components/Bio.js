import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

import mePic from "../mePic.jpg"

const Bio = () => {
    return (
        <div className="flex h-96 items-center w-full justify-center container mt-40 md:mx-auto mb-60 md:m-0 md:mt-20 md:h-fit md:box-border">
            <Card className="bg-blue text-white slide-in-top w-96">
                <CardHeader id= "bioContainer">
                    <img id= "mePic" src = {mePic}/>
                </CardHeader>
                <CardBody>
                <Typography >My name is Chase Forlini and I'm a 24 year old living in Georgia. I recently graduated from FullStack Academy's Web Development Bootcamp and am eager to show off my skills. I am profiency in data analysis with a bachelors in economics from The University of Georgia. In my free time I enjoy playing video games and reading in bed with my cat. <br/>
                <br/>
                I am 100% open to relocation. 
                 </Typography>
                </CardBody>
            </Card>
        </div>
    )

}

export default Bio;