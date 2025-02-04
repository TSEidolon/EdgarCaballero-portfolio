import NavBar from "./components/pages/navBar.jsx"
import HeroSection from "./components/pages/heroSection.jsx"
import OverviewSection from "./components/pages/overviewSection.jsx"
import { ParallaxProvider } from 'react-scroll-parallax';
import ProjectsSection from "./components/pages/projectsSection.jsx";
import FooterSection from "./components/pages/footerSection.jsx";


function App() {


  return (
    <div>
      <ParallaxProvider>

        <NavBar/>
  
        <HeroSection/>

        <OverviewSection/>
        
        <ProjectsSection />

        <FooterSection />
        
      </ParallaxProvider>
       
    </div>
  )
}

export default App
