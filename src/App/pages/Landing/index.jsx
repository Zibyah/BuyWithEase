import { OurBenefits } from "../../components/Benefits"
import { ContactForm } from "../../components/Contact"
import { Features } from "../../components/Features"
import { Footer } from "../../components/Footer"
import { LandingPageHeader } from "../../components/Header/LandingPageHeader"
import { Hero } from "../../components/Hero"
import { ProductsCollection } from "../../components/ProductsCollections"
import { TestimoniesSection } from "../../components/Testimonies"
import { Stories } from "../../components/stories"

export const Landing = () => {    
    return (
        <div>
            <LandingPageHeader />
            <Hero />
            <TestimoniesSection />
            <OurBenefits />
            <ProductsCollection />
            <Features />
            <Stories />
            <ContactForm />
            <Footer />
        </div>
    )
}