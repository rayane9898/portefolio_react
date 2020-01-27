import React, {Fragment} from "react";
import NavBar from "./compenents/NavBar"
import Header from "./compenents/Header"
import About from "./compenents/About"

const App = () => {
    return(
        <Fragment>
            <NavBar></NavBar>
            <Header></Header>
            <About></About>
     
        </Fragment>
    )
}

export default App