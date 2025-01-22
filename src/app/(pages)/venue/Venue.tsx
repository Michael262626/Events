import AboutFooter from "@/app/(section)/AboutFooter";
import AboutSubContent from "@/app/(section)/AboutSubContent";
import AboutSubFooter from "@/app/(section)/AboutSubFooter";
import Direction from "@/app/(section)/Direction";
import EventsCount from "@/app/(section)/EventsCount";
import Navbar from "@/app/(section)/Navbar"
import VenueContent from "@/app/(section)/VenueContent";
import VenuHero from "@/app/(section)/VenueHero"

const Venue = ()=>{
    return(
        <>
            <Navbar/>
            <VenuHero/>
            <VenueContent/>
            <AboutSubContent/>
            <EventsCount/>
            <AboutSubFooter/>
            <Direction/>
            <AboutFooter/>
        </>
    )
}
export default Venue;