import Advantage from "../entities/Advantage.ts";
import AdvantageCard from "./AdvantageCard.tsx";
import {SimpleGrid} from "@chakra-ui/react";
import calendar from "../assets/calendar.svg";
import bell from "../assets/bell.svg";
import webcam from "../assets/webcam.svg";
import {ReactNode} from "react";

const AdvantageList = () => {

    const advantages: Advantage[] = [
        {
            heading: "Online appointment scheduling",
            paragraph: "Allows users to schedule appointments with their healthcare provider through the app.",
            icon: calendar
        },
        {
            heading: "Medication reminders",
            paragraph: "Allows users to schedule appointments with their healthcare provider through the app.",
            icon: bell
        },
        {
            heading: "Virtual consultations",
            paragraph: "Allows users to schedule appointments with their healthcare provider through the app.",
            icon: webcam
        }
    ];

    return (
        <SimpleGrid
            columns={{base: 1, lg: 3}}
            bg="blue.700"
            h={{base: "100%", lg: "200px"}}
            w="100%"
            p="40px"
            mt={{base: 50, lg: 230}}
            spacing={6}
            alignItems="center">
            {advantages.map((advantage: Advantage): ReactNode => <AdvantageCard advantage={advantage}/>)}
        </SimpleGrid>
    );
};

export default AdvantageList;
