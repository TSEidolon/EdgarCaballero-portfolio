import PlaceholderCat from '../../assets/placeholderCat.png'
import FenixFurniture from '../../assets/fenixFurnitureWebsite.png'
import KolSlayer from '../../assets/kolSlayerWebsite.png'
import ProtossGym from '../../assets/protossGymWebsite.png'
import Pokedex from '../../assets/pokedex.png'
import trooperDatabase from '../../assets/trooperDatabase.png'

import EdgarPortfolio from "../../assets/edgarPortfolio.png"
import chameleonLineBlack from '../../assets/chameleonLineOne.svg'
import chameleonLineWhite from '../../assets/chameleonLine.svg'
import { GrGithub } from "react-icons/gr";
import { useInView } from "react-intersection-observer";

const projectInfo = [
  {
    title: "Fenix Furniture", 
    body: `A furniture website that utilizes React's state management to efficiently track and update cart data. `, 
    website: "https://fenix-furniture-tseidolon.netlify.app/", 
    github: "https://github.com/TSEidolon/Fenix-Furniture-TSEidolon", 
    image: FenixFurniture, 
    additionalClass: " object-contain bg-zinc-200",
    chameleon: chameleonLineBlack, 
    id: "1"
  },
  {
    title: "Kol Slayer", 
    body: `A responsive game website used to practice the basics of React by utilizing hooks. Styled with Tailwind`, 
    website: "https://kolslayer-tseidolon.netlify.app/", 
    github: "https://github.com/TSEidolon/kolslayer-website-tseidolon", 
    image: KolSlayer, 
    additionalClass: " object-cover ",
    githubColor: " text-white ",
    chameleon: chameleonLineWhite, 
    id: "2"
  },
  {
    title: "Protoss Gym", 
    body: `An upcoming gym coming to a galaxy near you. Built using HTML, vanilla CSS, and JavaScript`, 
    website: "https://protoss-gym-tseidolon.netlify.app/", 
    github: "https://github.com/TSEidolon/protoss-gym-tseidolon", 
    image: ProtossGym, 
    additionalClass: " object-cover " ,
    githubColor: " text-white ",
    chameleon: chameleonLineWhite, 
    id: "3"
  },
  {
    title: "My Portfolio", 
    body: `This website right here! Built using Vite + React along with ThreeJS and React 3 fiber `, 
    website: "https://edgarcaballerocodes.netlify.app/", 
    github: "https://github.com/TSEidolon/EdgarCaballero-portfolio", 
    image: EdgarPortfolio, 
    additionalClass: " bg-blue-500",
    githubColor: " text-black ",
    chameleon: chameleonLineBlack, 
    id: "4"
  },
  {
    title: "Pokedex", 
    body: `A Pokemon search app that fetches and displays data using JS, Tailwind, and PokeAPI's REST API `, 
    website: "https://pokedex-tseidolon.netlify.app/", 
    github: "https://github.com/TSEidolon/pokedex-api-v2", 
    image: Pokedex, 
    additionalClass: "",
    githubColor: " text-black ",
    chameleon: chameleonLineBlack, 
    id: "5"
  },
    {
    title: "Trooper Login", 
    body: `A play-on fullstack login website with Express, PostgreSQL, React, and Tailwind`, 
    website: "https://trooperdatabase-tseidolon.netlify.app/", 
    github: "https://github.com/TSEidolon/loginSystemV1", 
    image: trooperDatabase, 
    additionalClass: "",
    githubColor: " text-black ",
    chameleon: chameleonLineBlack, 
    id: "5"
  },
]


const ProjectCards = () => {
  const {ref, inView } = useInView({
    triggerOnce: true
  });
  return (
    <div ref={ref} className='grid h-full xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 gap-12 p-2'>
    {projectInfo.map(function(cardsInfo){
          return (
      <div key={cardsInfo.id} ref={ref} className={`cards-base group bg-comic-background bg-cover bg-[color:var(--tertiary-color)] w-[380px] h-[210px] sm:w-[550px] sm:h-[300px] shadow-md border-2 border-black flex gap-4 rounded-md transition-all  ease-in-out odd:delay-150 even:delay-300 ${
        inView
        ? "opacity-100 translate-x-0 "
        : "opacity-0 translate-x-[100%] "
        }`} >
        <div ref={ref} className={`cards-base-left  w-[40%] py-4 pl-4  flex-col transition-all ease-in-out delay-500 ${
        inView
        ? "opacity-100 translate-x-0 "
        : "opacity-0 translate-x-[-100%] "
        }`} >
          <div className='border-2 border-black p-2 sm:p-4 h-full flex flex-col items-center justify-between gap-2 bg-[color:var(--primary-color)] rounded-md'>
              <h4 className='text-sm sm:text-xl font-semibold '>{cardsInfo.title}</h4>
              <p className='pb-1  text-[.60rem] sm:text-base'>{cardsInfo.body} </p>
              <button onClick={()=> window.open(cardsInfo.website)}
              className='border-2 border-gray-800 px-4 sm:px-8 py-0 sm:py-1 rounded-xl  hover:bg-[color:var(--secondary-color)] hover:scale-105 duration-500 shadow-md shadow-[#88AB8E] text-sm sm:text-base '>
                Visit
              </button>
          </div>
        </div>
        <div ref={ref} className= {`cards-base-right  w-[60%] flex justify-center py-4 pr-4 transition-all ease-in-out delay-[600ms] ${
        inView
        ? "opacity-100 translate-x-0 "
        : "opacity-0 translate-x-[-100%] "
        }`} >
          <img src={cardsInfo.image} alt="" className={`" border-2 border-black  rounded-md z-0 " + ${cardsInfo.additionalClass}`}  />
          <img src={cardsInfo.chameleon} alt="" className='z-10 h-[70px] w-[70px] absolute bottom-[-6%] sm:bottom-[-4%] left-[2%]
          ' />

          <a href={cardsInfo.github} target="_blank" className='z-10 absolute h-[40px] w-[40px] bottom-[2%] m-2 left-[16%] opacity-0 scale-0 transition-all ease-in-out duration-700  group-hover:left-[40%] group-hover:opacity-100  group-hover:scale-90 '>
            <GrGithub className={`" w-full h-full " + ${cardsInfo.githubColor}`}/> 
          </a>
        </div>
      </div>
    )})}
    </div>
  )

}
export default ProjectCards