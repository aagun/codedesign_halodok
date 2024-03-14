import {JSX} from "react";
import {Stack} from "@chakra-ui/react";
import Jargon from "./Jargon.tsx";
import TestimonyCard from "./TestimonyCard.tsx";

const Hero = (): JSX.Element => {
    return (
        <Stack
            gap={{base: 10, md: 10, lg: 12}}
            flexDir={{base: "column", lg: "row"}}
            alignItems="baseline">
            <Jargon/>
            <TestimonyCard/>
        </Stack>
    );
};

export default Hero;
