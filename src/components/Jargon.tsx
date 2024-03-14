import {JSX} from "react";
import {Button, Heading, Stack, Text} from "@chakra-ui/react";

const Jargon = (): JSX.Element => {
    return (
        <Stack
            justifyContent="start"
            alignItems="start"
            w={{base: "100%", lg: "40%"}}
            spacing={5}>
            <Heading
                color="blue.700"
                w={{base: "100%", md: "90%", lg: "100%"}}
                fontSize={{base: "3xl", sm: "4xl", md: "5xl"}}>
                Get the healthcare you need, when you need it
            </Heading>
            <Text
                lineHeight={{base: 1.7, md: 8}}
                color="blue.700"
                w={{base: "100%", md: "55%", lg: "80%"}}>
                Manage all of your healthcare needs in one convenient place – from booking appointments to
                tracking your health history.
            </Text>
            <Button
                borderRadius="0"
                color="white"
                fontWeight="normal"
                bg="blue.700"
                _hover={{bg: "blue.600"}}
                px={8} py={5}>
                Book an Appointment
            </Button>
        </Stack>
    );
};

export default Jargon;
