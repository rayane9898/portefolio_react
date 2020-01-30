import React from "react"

const SectionService =()=>{
    return(
        <section class="sectionService mb-5">

        <div class="container">
            <h2 className="text-center mt-5">Nos services</h2>
            <hr class="diviseur bg-warning mb-5"></hr>
                    <div class="row  justify-content-center">
                <div class="col-lg-3">
                    <div class="card border-white">
                    <div class="card-body text-center">
                        <p class="card-title text-center"><i class="fas fa-code fa-5x"></i></p>
                        {/* <p class="card-text text-center">With supporting text below as a natural lead-in to additional content.</p> */}
                        <a class='text-center' href="#" class="text-dark border-dark mt-4 ">Web Developement</a>
                    </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card border-white">
                    <div class="card-body text-center">
                        <p class="card-title text-center"><i class="fas fa-pencil-alt fa-5x"></i></p>
                        {/* <p class="card-text text-center">With supporting text below as a natural lead-in to additional content.</p> */}
                        <a class='text-center' href="#" class="text-dark border-dark text-center mt-4">Web Designer</a>
                    </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card border-white">
                    <div class="card-body text-center">
                        <p class="card-title text-center"><i class="fas fa-tools fa-5x"></i></p>
                        {/* <p class="card-text text-center">With supporting text below as a natural lead-in to additional content.</p> */}
                        <a class='text-center' href="#" class="text-dark border-dark text-center mt-4">Hardware Repair</a>
                    </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card border-white">
                    <div class="card-body text-center">
                        <p class="card-title text-center"><i class="fas fa-mobile-alt fa-5x"></i></p>
                        {/* <p class="card-text text-center">With supporting text below as a natural lead-in to additional content.</p> */}
                        <a class='' href="#" class="text-dark border-dark text-center mt-4">Mobile Developement</a>
                    </div>
                    </div>
                </div>

                </div>
        </div>
        </section>

    )
}

export default SectionService