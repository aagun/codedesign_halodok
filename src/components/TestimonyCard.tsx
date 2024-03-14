import {JSX} from "react";
import {Avatar, Box, Card, CardBody, CardHeader, Flex, Image, Text} from "@chakra-ui/react";
import quoteImg from "../assets/quote.svg";

const TestimonyCard = (): JSX.Element => {
    return (
        <Card
            justifySelf={{base: "center", lg: "baseline"}}
            alignSelf={{base: "center", lg: "baseline"}}
            maxW={{base: "lg", md: "2xl", lg: "xs"}}
            boxShadow="xl">
            <CardHeader mb={-5}>
                <Flex gap={4}>
                    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                        <Avatar w="30px" h="30px" name="Segun Adebayo" src="https://bit.ly/sage-adebayo"/>
                        <Box>
                            <Text fontSize="12px" fontWeight="bold">Segun Adebayo</Text>
                        </Box>
                    </Flex>
                    <Image src={quoteImg}/>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text fontSize={12}>
                    “The doctor appointment app has been great for me. Scheduling appointments and getting
                    medication reminders is much easier, and I love the option for virtual consultations.
                    I"d
                    recommend this app to others.”
                </Text>
            </CardBody>
        </Card>
    );
};

export default TestimonyCard;
