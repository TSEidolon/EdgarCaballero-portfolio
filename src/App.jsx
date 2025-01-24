import NavBar from "./components/navBar.jsx"
import HeroSection from "./components/heroSection.jsx"
// import HeroSectionTest from "./components/heroSectionTest.jsx"
import OverviewSection from "./components/overviewSection.jsx"
import { ParallaxProvider } from 'react-scroll-parallax';
import ProjectsSection from "./components/projectsSection.jsx";
import FooterSection from "./components/footerSection.jsx";



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
