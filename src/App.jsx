import React, {Fragment} from "react";
import NavBar from "./compenents/NavBar"
import Header from "./compenents/Header"
import About from "./compenents/About"
import SectionService from"./compenents/SectionService"
import Galerie from "./compenents/Galerie"
import ProgresBar from "./compenents/ProgresBar"


const App = () => {
    return(
        <Fragment>
            <NavBar></NavBar>
            <Header></Header>
            <About></About>
            <SectionService></SectionService>
            <Galerie></Galerie>
            <ProgresBar />

     
        </Fragment>
    )
}

export default App  
   