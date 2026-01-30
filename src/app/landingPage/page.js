import ClientReview from "../clientReview/page"
import Hero from "../components/Hero"
import Properties from "../components/Properties"
import ServicesPage from "../ServicesPage/page"
import HowItWork from "../components/HowItWork"
import TrendingProperties from "../trendingProperties/page"


const LandingPage = () => {
  return (
    <div className="bg-background1">
        <Hero/>
        <TrendingProperties/>
        <Properties/>
        
        <ServicesPage/>
        <ClientReview/>
        <HowItWork/>
    </div>
  )
}

export default LandingPage