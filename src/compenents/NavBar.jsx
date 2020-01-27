import React from "react"
import logo from "../img/logoRayane1.png";

const NavBar = () =>{
    return(
            <div className=" border-bottom border-warning bg-white sticky-top">
            <div className="container p-2 ">
            <nav class="navbar navbar-expand-lg navbar-light">
            <img className="logos" src={logo} alt=""/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link ml-3" href="#">Acceuil <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Service</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Portfolio</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Contact</a>
                </li>
                </ul>
                <span class="navbar-text">
                    
                
                </span>
            </div>
</nav>
                  
            </div>
            </div>

    )
}

export default NavBar