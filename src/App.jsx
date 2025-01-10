import NavBar from "./components/navBar.jsx"
import HeroSection from "./components/heroSection.jsx"
// import HeroSectionTest from "./components/heroSectionTest.jsx"
import OverviewSection from "./components/overviewSection.jsx"
import { ParallaxProvider } from 'react-scroll-parallax';





function App() {


  return (
    <div>
      <ParallaxProvider>

        <NavBar/>
  
        <HeroSection/>

        <OverviewSection/>

      </ParallaxProvider>
       
    </div>
  )
}

export default App
