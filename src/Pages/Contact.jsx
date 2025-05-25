import ContactPage from "../Components/ContactComps/contactHero";
import { Footer } from "../Components/Footer";
import { Nav } from "../Components/Navbar";

  export const Contact = () => {
    return (
        <>
        <Nav/>
          {/* <h1 classname=" text-bold">Contact Us</h1> */}
          <ContactPage/>    
      <Footer/>
      </>
    );
  };

  