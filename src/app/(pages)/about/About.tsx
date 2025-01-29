import AboutContent from "@/app/(section)/AboutContent";
import AboutFooter from "@/app/(section)/AboutFooter";
import AboutHero from "@/app/(section)/AboutHero";
import AboutSubContent from "@/app/(section)/AboutSubContent";
import AboutSubFooter from "@/app/(section)/AboutSubFooter";
import Direction from "@/app/(section)/Direction";
import EventsCount from "@/app/(section)/EventsCount";
import Navbar from "@/app/(section)/Navbar";

const About =()=>{
    return (
        <>
            <Navbar/>
            <AboutHero/>
            {/* <AboutContent/> */}
            <AboutSubContent/>
            <EventsCount/>
            <AboutSubFooter/>
            <Direction/>
            <AboutFooter/>
        </>
    )
}
export default About;