import {NavBar} from "./components/pages/navBar.jsx"
import HeroSection from "./components/pages/heroSection.jsx"
import OverviewSection from "./components/pages/overviewSection.jsx"
import { ParallaxProvider } from 'react-scroll-parallax';
import ProjectsSection from "./components/pages/projectsSection.jsx";
import FooterSection from "./components/pages/footerSection.jsx";
import { useRef } from "react";

function App() {
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <div className="overflow-x-hidden">
      <ParallaxProvider>

        <NavBar
          navScrollOne = {heroRef}
          navScrollTwo = {overviewRef}
          navScrollThree = {projectsRef}
          navScrollFour = {footerRef}

        />

        <HeroSection ref={heroRef} />
        <section class="triangle"></section>


        <OverviewSection ref={overviewRef} />
        
        <ProjectsSection ref={projectsRef} />


        <FooterSection ref={footerRef}/>
        
      </ParallaxProvider>
       
    </div>
  )
}

export default App
