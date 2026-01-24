import ClientReview from "../clientReview/page"
import Hero from "../components/Hero"
import Properties from "../components/Properties"
import ServicesPage from "../ServicesPage/page"
import HowItWork from "../components/HowItWork"


const LandingPage = () => {
  return (
    <div className="bg-background1">
        <Hero/>
        <Properties/>
        <ServicesPage/>
        <ClientReview/>
        <HowItWork/>
    </div>
  )
}

export default LandingPage