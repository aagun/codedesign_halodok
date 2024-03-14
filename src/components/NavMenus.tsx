import {JSX} from "react";
import {Hide, HStack} from "@chakra-ui/react";
import NavList from "./NavList.tsx";
import NavAction from "./NavAction.tsx";

const NavMenus = (): JSX.Element => {
    return (
        <HStack
            mt={{base: 50, lg: 0}}
            w={{base: "100%", lg: "85%"}}
            boxShadow={{base: "xl", xl: "unset"}}
            flexDirection={{base: "column", lg: "row"}}
            justifyContent={{base: "center", lg: "space-between"}}
            alignItems={{base: "start", lg: "center"}}
        >
            <NavList/>
            <Hide below="lg">
                <NavAction/>
            </Hide>
        </HStack>
    );
};

export default NavMenus;
