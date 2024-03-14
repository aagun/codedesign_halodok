import {JSX} from "react";
import {Box, Container} from "@chakra-ui/react";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import AdvantageList from "./components/AdvantageList.tsx";
import Footer from "./components/Footer.tsx";
import bg from "./assets/doc.png";
import "./App.css"

function App(): JSX.Element {
    return (
        <Box as="article"
             mt={{base: 0, lg: 4}}
             backgroundImage={{base: "unset", lg: `url(${bg})`}}
             backgroundRepeat="no-repeat"
             backgroundPosition={{md: "top left 2rem", "2xl": "top left 7rem"}}
             objectFit="contain">
            <Container maxW="container.xl" mb={4}>
                <Navbar/>
                <Hero/>
                <AdvantageList/>
            </Container>
            <Footer/>
        </Box>
    )
}

export default App
