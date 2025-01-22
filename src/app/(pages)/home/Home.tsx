import Body from "@/app/(section)/Hero";
import Navbar from "@/app/(section)/Navbar";
import SubBody from "@/app/(section)/Introduction";
import Content from "@/app/(section)/Content";
import SubContent from "@/app/(section)/SubContent";
import SubFooter from "@/app/(section)/SubFooter";
import Footer from "@/app/(section)/Footer";

const Home =()=>{
    return(
        <>
          <Navbar/>  
          <Body/>
          <SubBody/>
          <Content/>
          <SubContent/>
          <SubFooter/>
          <Footer/>
        </>
    )
}
export default Home;