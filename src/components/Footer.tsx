import {Center, Link, Text} from "@chakra-ui/react";

const Footer = () => {
    return (
        <Center as="footer" py="24px">
            <Text fontSize={12}>
                Design by {" "}
                <Link
                    fontWeight="600"
                    color="blue.700"
                    href="https://codedesign.dev/challenge/holadok">
                    codedesign.dev
                </Link>
            </Text>
        </Center>
    );
};

export default Footer;
