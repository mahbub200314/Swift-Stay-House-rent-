import ClientReview from "../clientReview/page"
import Hero from "../components/Hero"
import Properties from "../components/Properties"
import ServicesPage from "../ServicesPage/page"
import HowItWork from "../components/HowItWork"
import TrendingProperties from "../trendingProperties/page"
import Blogs from "../components/Blogs"
import OurAgents from "../components/OurAgents"
import HowWebsiteWorks from "../components/HowWebsiteWork"


const LandingPage = () => {
  return (
    <div className="bg-background1 pt-8">
        <Hero/>
        <TrendingProperties/>
        <Properties/>
        <ServicesPage/>
        <HowWebsiteWorks/>
        <OurAgents/>
        <ClientReview/>
        <HowItWork/>
        <Blogs/>
    </div>
  )
}

export default LandingPage