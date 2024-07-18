// import Gallery from "../components/Gallery"
// import HorseDetails from "../components/HorseDetails"
// import LandingPage from "../components/LandingPage"
// import Navbar from "../components/Navbar"
// import Testimonials from "../components/Testimonials";
// import '../assets/styles/Home-style.css';
// import Pricing from "../components/Pricing";
// import FAQs from "../components/FAQs";
// import BookingProcess from "../components/BookingProcess";
// import Footer from "../components/Footer";

import BannerVideo from "../components/BannerVideo";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import UserSection from "../components/UsersSection";


function Home() {

    return (
        <>
            <Navbar />
            <HeroSection />
            <Features />
            <BannerVideo />
            <UserSection />
            <Footer />
        </>
    )
}

export default Home;
