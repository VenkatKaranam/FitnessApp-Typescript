import Navbar from "@/scenes/navbar"; 
import Footer from "@/scenes/footer";
import Home from "./scenes/home";
import Benefits from "@/scenes/benefits";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import OurClasses from "@/scenes/ourclasses"
import ContactUs from "@/scenes/contactus"
function App() {
  const [selectedPage,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopPage,setIsTopPage] = useState<boolean>(true);

  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY === 0){
        setIsTopPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.scrollY !== 0){
        setIsTopPage(false);
      }
    }
      window.addEventListener("scroll",handleScroll)

      return() => window.removeEventListener("scroll",handleScroll);     
  },[])
  return (
    <div className="app bg-gray-20">
      <Navbar
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      isTopPage = {isTopPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer/>
    </div>
  )
}

export default App
