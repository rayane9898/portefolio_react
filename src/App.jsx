import React, {Fragment} from "react";
import NavBar from "./compenents/NavBar"
import Header from "./compenents/Header"
import About from "./compenents/About"
import SectionService from"./compenents/SectionService"

const App = () => {
    return(
        <Fragment>
            <NavBar></NavBar>
            <Header></Header>
            <About></About>
            <SectionService></SectionService>
     
        </Fragment>
    )
}

export default App  
   