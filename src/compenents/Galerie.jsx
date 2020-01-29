import React from "react"

import site from"../img/imgGalery/Capture d’écran 2020-01-29 à 09.40.10.png"
import site2 from "../img/imgGalery/rayane4.png"
const Galerie = () =>{
    return(
        <section className='bg-light'>
        <div className="container">
            <h2 className="text-center pt-5">Mon portefolio</h2>
            <hr class="diviseur bg-warning mb-5"></hr>
            <div className="row">
                <div className="col-sm-12 col-md-6 my-3">
                    <a href=""><img src={site} alt="" className="site"/></a>

                </div>
                <div className="col-sm-12 col-md-6 my-3">
                <a href=""><img src={site} alt="" className="site"/></a>

                </div>

            </div>
            </div>

        </section>

    )
}
export default Galerie