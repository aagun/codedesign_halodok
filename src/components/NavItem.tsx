import {Link} from "@chakra-ui/react";
import {JSX} from "react";

interface Props {
    children: string;
}

const NavItem = ({children}: Props): JSX.Element => {
    return (
        <Link
            _hover={{
                color: "blue.600",
            }}>
            {children}
        </Link>
    );
};

export default NavItem;
