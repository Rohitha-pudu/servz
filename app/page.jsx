import CaseStudies from '@/components/CaseStudies';
import ContactUs from '@/components/ContactUs';
import Hero from '@/components/Hero'
import MiniContact from '@/components/MiniContact';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import WorkingProgress from '@/components/WorkingProgress';


const page = () => {
  return (
    <>
    <Hero/>
    <Services/>
    <MiniContact/>
    <CaseStudies/>
    <WorkingProgress/>
    <Testimonials/>
    <ContactUs/>
    </>
  )
}

export default page;