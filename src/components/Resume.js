
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Typography,
    Card,
    CardHeader,
    CardBody
} from "@material-tailwind/react";

import { Fragment, useState } from "react";

function Icon({ id, open }) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
            id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
    }

const Resume = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    

    const data= [
        {
            label: "Skills",
            value: "skills",
            element: <Fragment >
                <Accordion className="w-72 md:w-auto" open={open == 1} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(1)} >
                        Proficient
                    </AccordionHeader>
                    <AccordionBody>
                    JavaScript<br/>
                    React<br/>
                    Node<br/>
                    Express<br/>
                    SQL<br/>
                    PostgreSQL<br/>
                    HTML<br/>
                    CSS<br/>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open == 2} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(2)} >
                        Knowledgeable
                    </AccordionHeader>
                    <AccordionBody>
                        Java <br/>
                        Stata <br/>
                        R <br/>
                    </AccordionBody>
                        
                </Accordion>
                <Accordion open={open == 3} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(3)} >
                        Familiar
                    </AccordionHeader>
                    <AccordionBody>
                    Python <br/>
                        C <br/>
                    </AccordionBody>
                </Accordion>

            </Fragment>
        }, 
        {
            label: "Education",
            value: "education",
            element: 
            <div className="w-72 md:flex md:justify-around md:w-full  md:h-full md:items-center">
                <Card color="transparent" shadow={false} className=" text-center">
                    <CardHeader color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 items-center gap-4 pt-0 pb-4">
                        <Typography variant="h5">
                        Emory University Continuing Education 
                        </Typography>
                        <Typography variant="h6">Powered by Fullstack Academy</Typography>
                    </CardHeader>     
                    <CardBody className="mb-8 p-0">
                    Certificate of  Web Development<br/>
                     Jan 2023 - April 2023
                    </CardBody>
                </Card>
                <Card color="transparent" shadow={false} className=" text-center">
                    <CardHeader color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 items-center gap-4 pt-0 pb-4">
                        <Typography variant="h5">
                        University of Georgia 
                        </Typography>
                    </CardHeader>     
                    <CardBody className="mb-6 p-0">
                    Bachelors of Business Administration - Economics <br/>
                    Aug 2017 - May 2022
                    </CardBody>
                </Card>
            </div>
        },
        {
            label: "Experience",
            value: "experience",
            element: 
            <Card className="w-72 mt-10 md:w-auto">
                <CardBody>
                    <Typography variant="h3" className="text-center">The Wing Cafe & Tap House</Typography>
                    <Typography variant='h5' className="text-center">Head Food Expeditor</Typography>
                    <Typography variant='lead' className="text-center">
                    Mar 2017 - Dec 2022
                    </Typography>
                    <Typography>
                    Orchestrated food distribution in a 45 table fast-paced restaurant, serving upwards of 300 guests each night<br/>
                    Led a team of two assistant expeditors to deliver high-quality service and great attention to detail, resulting in a 4.5+ rating of the restaurant on review sites.

                    </Typography>
                </CardBody>
            </Card>
        }
    ]

    return(
        <div className="flex items-center justify-center my-5 md:my-20 " >
        <Tabs value="skills" orientation="vertical" className="hidden md:flex md:m-5 md:justify-around w-screen ">
            <TabsHeader className="items-center md:w-64 md:m-10">
                {data.map(({ label, value }) => (
                    <Tab key={value} value={value} className="md:p-5">
                    {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.map(({ value, element }) => (
                    <TabPanel key={value} value={value} className="py-0 md:h-full md:flex md:flex-col">
                        {element}
                    </TabPanel>
                    ))}
            </TabsBody>
        </Tabs>
        <Tabs value="skills" className=" md:hidden fade-in">
            <TabsHeader className>
                {data.map(({ label, value }) => (
                    <Tab key={value} value={value} className="px-2">
                    {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.map(({ value, element }) => (
                    <TabPanel key={value} value={value} className="py-0">
                        {element}
                    </TabPanel>
                    ))}
            </TabsBody>
        </Tabs>
        </div>
    )
}

export default Resume;