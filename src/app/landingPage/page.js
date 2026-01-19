import ClientReview from "../clientReview/page"
import Hero from "../components/Hero"
import Properties from "../Properties/page"
import ServicesPage from "../ServicesPage/page"



const LandingPage = () => {
  return (
    <div className="bg-background1">
        <Hero/>
        <Properties/>
        <ServicesPage/>
        <ClientReview/>
    </div>
  )
}

export default LandingPage