import '../assets/styles/HeroSection-style.css'

const HeroSection = () => {


    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="hero-section hero-1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
                                        <p>Online</p>
                                        <h1 className='mb-3'>Marketplace for <span>Loads</span> and <span>Trucks</span></h1>
                                        <button type="button" className='book-now'>Book Now</button>
                                    </div>
                                    <div className="col-lg-6 m-auto">
                                        <div className="get-quote py-5 px-5  m-auto">
                                            <h3 className='text-white text-center mb-3'>Get a Free Quote</h3>

                                            <div className="d-flex flex-column">
                                                <button type="button" className='quote-btn mb-2'>Request a Callback</button>
                                                <button type="button" className='quote-btn'>Contact Us</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div className="hero-section hero-2">
                            <div className="container">
                                <div className="d-block text-center">
                                    <h1 className='mb-3'>Track <span>Loads and <br /> Trucks</span> in Real-time</h1>
                                    <button type="button" className='book-now'>Track Your Truck</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
