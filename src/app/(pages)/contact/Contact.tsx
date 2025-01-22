import AboutFooter from "@/app/(section)/AboutFooter";
import AboutSubFooter from "@/app/(section)/AboutSubFooter";
import ContactBody from "@/app/(section)/ContactBody";
import ContactHero from "@/app/(section)/ContactHero";
import Direction from "@/app/(section)/Direction";
import Navbar from "@/app/(section)/Navbar"

const Contact =()=>{
    return (
        <>
            <Navbar/>
            <ContactHero/>
            <ContactBody/>
            <AboutSubFooter/>
            <Direction/>
            <AboutFooter/>
        </>
    )
}
export default Contact;