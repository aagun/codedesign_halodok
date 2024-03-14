import {JSX} from "react";
import {Button, HStack, Link} from "@chakra-ui/react";

const NavAction = (): JSX.Element => {
    return (
        <HStack
            flexDirection={{base: "column", md: "row"}}
            justifyContent="center"
            gap={{base: "24px", md: "50px"}}>
            <Link>Login</Link>
            <Button
                borderRadius={0}
                color="blue.700"
                bg="transparent"
                border="2px"
                borderColor="blue.700"
                _hover={{bg: "blue.700", color: "white"}}
                px={6}>
                Book Now
            </Button>
        </HStack>
    );
};

export default NavAction;
