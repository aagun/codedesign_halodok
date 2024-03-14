import {Box, Heading, Image, Stack, Text} from "@chakra-ui/react";
import {JSX} from "react";
import Advantage from "../entities/Advantage.ts";

interface Props {
    advantage: Advantage;
}

const AdvantageCard = ({advantage}: Props): JSX.Element => {
    return (
        <Stack flexDir="row" gap={6}>
            <Image width="40px" height="40px" src={advantage.icon}/>
            <Box color="white">
                <Heading size={{base: "sm", md: "md"}} mb={2}>
                    {advantage.heading}
                </Heading>
                <Text fontSize="16px">
                    {advantage.paragraph}
                </Text>
            </Box>
        </Stack>
    );
};

export default AdvantageCard;
