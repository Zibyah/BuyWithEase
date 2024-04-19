import { OurBenefits } from "../../components/Benefits"
import { Footer } from "../../components/Footer"
import { LandingPageHeader } from "../../components/Header/LandingPageHeader"
import { Hero } from "../../components/Hero"
import { TestimoniesSection } from "../../components/Testimonies"

export const Landing = () => {
    return (
        <div>
            <LandingPageHeader />
            <Hero />
            <TestimoniesSection />
            <OurBenefits />
            <Footer />
        </div>
    )
}