import {JSX, RefObject, useRef, useState} from "react";
import {Hide, HStack, Show, Slide, useOutsideClick, UseOutsideClickProps} from "@chakra-ui/react";
import Logo from "./Logo.tsx";
import NavMenus from "./NavMenus.tsx";
import NavMenuToggle from "./NavMenuToggle.tsx";
import UseStateType from "../entities/UseStateType.ts";

const Navbar = (): JSX.Element => {
    const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    const [open, setOpen]: UseStateType<boolean> = useState<boolean>(false);
    const outsideClickProps: UseOutsideClickProps = {
        ref: ref,
        handler: () => setOpen(false),
    };

    useOutsideClick(outsideClickProps);

    return (
        <>
            <HStack justifyContent="space-between"
                    pt={6}
                    mx={{base: -4, lg: 0}}
                    px={{base: 4, lg: 0}}
                    mb={{base: 8, lg: 20}}
                    bg={{base: "white", lg: "transparent"}}
                    position={{base: "sticky", lg: "static"}}
                    zIndex={20}
            >
                <Logo/>
                <Show above="lg">
                    <NavMenus/>
                </Show>
                <Hide above="lg">
                    <NavMenuToggle open={open} setOpen={setOpen}/>
                </Hide>
            </HStack>

            <Slide
                style={{
                    zIndex: 10,
                    backgroundColor: "white",
                    position: "absolute"
                }}
                direction='top'
                in={open}
            >
                {open && <NavMenus/>}
            </Slide>

        </>
    );
};

export default Navbar;
