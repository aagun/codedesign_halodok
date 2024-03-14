import {HStack, Image, Text} from "@chakra-ui/react";
import logo from "../assets/logo.svg";

const Logo = () => {
    return (
        <HStack
            as="div"
            cursor="pointer"
            alignItems="center"
            h="100%"
            spacing={4}>
            <Image src={logo}/>
            <Text color="blue.700" fontWeight="semibold">Halodok</Text>
        </HStack>
    );
};

export default Logo;
