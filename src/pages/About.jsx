import Navbar from "../components/Navbar";
import '../../src/index.css';
import '../assets/styles/About-style.css';
import aboutBanner from '../assets/images/about-banner.svg'

function About() {

    return (
        <>
            <Navbar />
            <div className="header m-0">

                <img src={aboutBanner} alt="aboutHeader" />
                <div className="container overlay-content">
                    <h1>Your Trusted Partner in Modern Logistics Solutions</h1>
                </div>
            </div>
        </>
    )
}

export default About;