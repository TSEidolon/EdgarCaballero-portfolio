import PlaceholderCat from '../assets/placeholderCat.png'
import FenixFurniture from '../assets/fenixFurnitureWebsite.png'
import KolSlayer from '../assets/kolSlayerWebsite.png'
import ProtossGym from '../assets/protossGymWebsite.png'
import leavesProjects from '../assets/leavesProjects.png'
import chameleonLineBlack from '../assets/chameleonLineOne.svg'
import chameleonLineWhite from '../assets/chameleonLine.svg'
import { GrGithub } from "react-icons/gr";

const projectInfo = [
  {
    title: "Fenix Furniture", body: `"A furniture website used to practice the "Shopping Cart" function in React with Tailwind"`, website: "https://fenix-furniture-tseidolon.netlify.app/", github: "https://github.com/TSEidolon/Fenix-Furniture-TSEidolon", image: FenixFurniture, chameleon: chameleonLineBlack, id: "1"
  }
]


const ProjectCards = () => {
  console.log(projectInfo[0].image)
  return (
    <div>
    {projectInfo.map(function(cardsInfo){
          return (
      <div className='cards-base group bg-comic-background bg-cover bg-[color:var(--tertiary-color)] w-[calc(350px*1.618)] h-[300px] shadow-md border-2 border-black flex gap-4 rounded-md' >
          <div className='cards-base-left  w-[40%] py-4 pl-4  flex-col '>
          <div className='border-2 border-black p-4 h-full flex flex-col items-center justify-between gap-2 bg-[color:var(--primary-color)] rounded-md'>
              <h4 className='text-xl font-semibold '>{cardsInfo.title}</h4>
              <p className='pb-1'>{cardsInfo.body} </p>
              <button onClick={()=> window.open(cardsInfo.website)}
              className='border-2 border-gray-800 px-8 py-1 rounded-xl  hover:bg-[color:var(--secondary-color)] hover:scale-105 duration-500 shadow-md shadow-[#88AB8E]'>
                Visit
              </button>
          </div>
        </div>
        <div className=' cards-base-right  w-[60%] flex justify-center py-4 pr-4 relative'>
          <img src={cardsInfo.image} alt="" className='border-2 border-black  rounded-md z-0 bg-zinc-200 object-contain' />
          <img src={cardsInfo.chameleon} alt="" className='z-10 h-[70px] w-[70px] absolute bottom-[-4%] left-[2%]
          ' />

          <a href={cardsInfo.github} target="_blank" className='z-10 absolute h-[40px] w-[40px] bottom-[2%] m-2 left-[16%] opacity-0 scale-0 transition-all ease-in-out duration-700  group-hover:left-[40%] group-hover:opacity-100  group-hover:scale-90 '>
            <GrGithub className=' w-full h-full '/> 
          </a>
        </div>
      </div>
    )})}
    </div>
  )

}
export default ProjectCards