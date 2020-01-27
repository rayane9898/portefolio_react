import React from "react"

const About =()=>{
    return(
        <section className="sectionAbout">
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                        <h2 className='text-center text-dark'>
                                We've got what you need
                        </h2>
                        <hr class="diviseur bg-warning"></hr>
                        <p class='text-center mb-4 mt-4'>
                        Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!
                        </p>
                        <div className="text-center">
                            <a class='btn btn-xl btn-warning p-4 mt-4 rounded-pil mx-auto font-weight-bold rounded-pill' href="">Get started</a>
                        </div>

                    </div>
                

                </div>

            </div>
        </section>
    )
}

export default About