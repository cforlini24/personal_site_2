import { CardBody,Card, Typography, CardHeader } from "@material-tailwind/react";

const Contact =() => {
    return (
        <div className="flex w-screen justify-center my-20 mt-40 flex-col items-center fade-in">
            
            <Card className=" my-5 bg-blue text-white">
                <CardBody>
                <a href="tel:6786227072">
                    <Typography variant="h3">(678)-622-7072</Typography>
                    </a>
                </CardBody>
                
            </Card>
            
            <a href="mailto:cforlini24@gmail.com">
            <Card className=" my-5 bg-blue text-white">
                <CardBody >
                    <Typography variant="h3" >cforlini24@gmail.com</Typography></CardBody>
            </Card>
            </a>
        </div>
    )
}

export default Contact;