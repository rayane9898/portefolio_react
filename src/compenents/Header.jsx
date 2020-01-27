import React from 'react';
import logo from "../img/logoRayane1.png";

const Header = () =>{
    return(
        <header className="monHeader">
            <div className='container w-20'>
                <div className='row justify-content-center align-item-center'>
                    <div className="col-lg-10 aling-self-end">
                        <h1 className='text-center text-uppercase text-white'>
                            developpeur full stack junior sortant de Molengeek 2020
                            <hr class="diviseur bg-warning"></hr>
                        </h1>
                    </div>
                    <div className="col-lg-8 align-self">
                        <p className='text-white-75 font-weight-light mb-5 text-center text-white'>
                            “Lorsqu'une chose évolue, tout ce qui est autour évolue de même.”
                        </p>
                        {/* <div className="text-center">
                        <a className="btn btn-warning rounded-pill btn-xl text-uppercase" href="">find out more</a>
                        </div> */}
                        <div className="text-center mt-5">
                        <img className="logo" src={logo} alt=""/>
                    </div>
                    </div>


                </div>

            </div>
            
        </header>

    )
}

export default Header