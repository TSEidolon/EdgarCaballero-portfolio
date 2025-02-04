import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandThreejs } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import r3fLogo from "../assets/r3fLogo.png"


export const techList = [
{
  stack: 'Javascript', icon: <IoLogoJavascript className='h-full w-full'/>, id: '0',
},
{
  stack: 'CSS', icon: <FaCss3Alt className='h-full w-full'/>, id: '1',
},
{
  stack: 'HTML', icon: <FaHtml5 className='h-full w-full'/>, id: '2',
},
{
  stack: 'React', icon: <FaReact className='h-full w-full'/>, id: '3',
},
{
  stack: 'Tailwind', icon: <RiTailwindCssFill className='h-full w-full'/>, id: '4',
},
{
  stack: 'Three.js', icon: <TbBrandThreejs className='h-full w-full'/>, id: '5',
},
{
  stack: 'Figma', icon: <FaFigma className='h-full w-full'/>, id: '6',
},
{
  stack: 'Git', icon: <FaGitAlt className='h-full w-full'/>, id: '7',
},
{
  stack: 'React3Fiber', icon: <img src={r3fLogo} className="w-full h-full"/> , id: '8',
},

]

const TechStack = () => {

  const {ref, inView } = useInView({
    rootMargin: "-100px 0px",
  });

  console.log(inView)
  return (

  <div  className= "grid grid-cols-4 lg:grid-cols-3 gap-5"  >
            {techList.map(function(techies){
              return (
                <div ref={ref} key={techies.id} className={`flex items-center flex-col p-2 lg:p-1 shadow-md shadow-[#88AB8E] rounded-md even:delay-150 odd:delay-300 transition-all ${
                  inView
                  ? "opacity-100 translate-x-0 "
                  : "opacity-0 translate-x-[-100%] "
                  }`}>
                  <div className='w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] '>
                    {techies.icon}
                  </div>
                  <p className='text-[.60rem] lg:text-base '>
                    {techies.stack}
                  </p>
                </div>
              )
            })}
  </div>
  )
}

export default TechStack