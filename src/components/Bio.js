import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

import mePic from "../mePic.jpg"

const Bio = () => {
    return (
        <div className="flex h-96 items-center w-full justify-center container mt-40 md:mx-auto mb-60">
            <Card className="bg-blue text-white slide-in-top w-96">
                <CardHeader id= "bioContainer">
                    <img id= "mePic" src = {mePic}/>
                </CardHeader>
                <CardBody>
                <Typography >My name is Chase Forlini and I'm a 24 year old living in Georgia. I got my BBA in economics from the University of Georgia but am looking for a change in paths. That's why I attended Fullstack Academy's web development bootcamp. Technology has always been a passion of mine and I'm hoping that FullStack Academy can provide me with the knowledge and resources to have a successful and fulfilling career.</Typography>
                </CardBody>
            </Card>
        </div>
    )

}

export default Bio;