
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Typography
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
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    

    const data= [
        {
            label: "Technical Skills",
            value: "skills",
            element: <Fragment>
                <Accordion open={open == 1} icon={<Icon id={1} open={open} />}>
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
            // desc:<div> 
            //     <Typography variant="h3">Proficient</Typography>
            //     <Typography>
            //         JavaScript<br/>
            //         React<br/>
            //         Node<br/>
            //         Express<br/>
            //         SQL<br/>
            //         PostgreSQL<br/>
            //         HTML<br/>
            //         CSS<br/>
            //     </Typography>
            //     <Typography variant="h3">Knowledgeable</Typography>
            //     <Typography variant="h3">Familiar</Typography>
            //     </div>
        }, 
        {
            label: "Education",
            value: "education",
            element: "Edcuations"
        },
        {
            label: "Work Experience",
            value: "experience",
            element: "Exp"
        }
    ]

    return(
        <div className="flex items-center justify-center my-5">
        <Tabs value="skills" orientation="vertical" className="hidden md:inline-block">
            <TabsHeader className="items-center">
                {data.map(({ label, value }) => (
                    <Tab key={value} value={value}>
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
        <Tabs value="skills" className=" md:hidden">
            <TabsHeader>
                {data.map(({ label, value }) => (
                    <Tab key={value} value={value}>
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