import {JSX} from "react";
import {Stack} from "@chakra-ui/react";
import NavItem from "./NavItem.tsx";

const NavList = (): JSX.Element => {
    return (
        <Stack
            flexDirection={{base: "column", lg: "row"}}
            gap={{base: "14px", lg: "56px"}}
            p={{base: 6, lg: 0}}
        >
            <NavItem>Home</NavItem>
            <NavItem>Features</NavItem>
            <NavItem>Blog</NavItem>
            <NavItem>About Us</NavItem>
        </Stack>
    );
};

export default NavList;
