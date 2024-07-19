import Navbar from "../components/Navbar";
import '../../src/index.css';
import '../assets/styles/About-style.css';
import aboutBanner from '../assets/images/about-banner.svg';

import costumer from '../assets/images/customer.svg';
import cost from '../assets/images/cost.svg';
import map from '../assets/images/map.svg';

function About() {

    return (
        <>
            <div className="about-section">
                <Navbar bgColor="#004a57" />
                <div className="header">
                    <img src={aboutBanner} alt="aboutHeader" />
                    <div className="container overlay-content">
                        <h1>About Us</h1>
                    </div>
                </div>
                <div className="container">
                    <h2 className='mt-5 mb-4'>
                        Who <span>We are?</span>
                    </h2>
                    <h6>
                        Cari Load is a pioneering online marketplace designed to connect load and truck owners, transforming the logistics industry through innovation and efficiency. Our mission is to simplify logistics, reduce costs, and ensure reliability in every transaction.
                    </h6>

                    <div className="row m-0 py-5">
                        <div className="col-lg-6">
                            <div className="p-4 about-card">
                                <i class="bi bi-eye"></i>
                                <h3>Our Vision</h3>
                                <p>To be the leading platform in the logistics industry, known for our innovative solutions, reliable service, and positive impact on the transportation sector.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="p-4 about-card">
                                <i class="bi bi-bullseye"></i>
                                <h3>Our Mission</h3>
                                <p>To create a seamless, cost-effective logistics ecosystem where load and truck owners can easily connect, communicate, and conduct business with confidence.</p>
                            </div>
                        </div>
                    </div>



                    <div className="row m-0 pb-5">
                        <h2 className='mb-4'>
                            What<span>We do?</span>
                        </h2>
                        <div className="col-lg-4">
                            <div className="p-4 feature-card">
                                <img src={cost} alt="Cost" />
                                <h3>Cost Effectiveness</h3>
                                <p className="text-center">
                                    Reducing service fees by 40%, making logistics more affordable for everyone.

                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="p-4 feature-card">
                                <img src={costumer} alt="Cost" />
                                <h3>Customer Verification</h3>
                                <p className="text-center">
                                    Access to a large pool of verified partners, ensuring trustworthy transactions.

                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="p-4 feature-card">
                                <img src={map} alt="Cost" />
                                <h3>Real-Time Tracking</h3>
                                <p className="text-center">
                                    GPS-enabled tracking for loads and trucks, enhancing transparency and communication.

                                </p>
                            </div>
                        </div>
                    </div>


                    {/* <h6>At Cari Load, we provide a digital platform that offers:</h6>

                    <ul>
                        <li>
                            Cost-Effectiveness: Reducing service fees by 40%, making logistics more affordable for everyone.
                        </li>
                        <li>
                            Customer Verification: Access to a large pool of verified partners, ensuring trustworthy transactions.
                        </li>
                        <li>
                            Real-Time Tracking: GPS-enabled tracking for loads and trucks, enhancing transparency and communication.
                        </li>
                    </ul> */}
                </div>
            </div>
        </>
    )
}

export default About;