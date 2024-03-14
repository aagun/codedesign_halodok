import {Box, Icon} from "@chakra-ui/react";
import {MdClose, MdMenu} from "react-icons/md";

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void
}

const NavMenuToggle = ({open, setOpen}: Props) => {
    return (
        <Box display="flex" justifyContent="center">
            <Icon boxSize={{base: 6, md: 8}}
                  as={!open ? MdMenu : MdClose}
                  onClick={(): void => setOpen(!open)}/>
        </Box>
    );
};

export default NavMenuToggle;
