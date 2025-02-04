import { useState } from "react"
import { FaBarsStaggered, FaBurger } from "react-icons/fa6";
const NavBar = () => {
  const [navbarOpen, setNavbarOpen] =useState(false);

  return (
    <section className="fixed top-0 left-0 right-0 z-50 flex w-screen  lg:justify-between items-center pt-5 pb-1 lg:pt-0 lg:pb-0 px-[5rem] sm:px-[10rem] lg:px-[17rem] lg:flex-row flex-col min-h-[80px] lg:min-h-[40px] lg:backdrop-blur-sm backdrop-blur-md transition-all  ">
      <div className="flex justify-between w-full min-w-[200px]">
        <div className="navBar-left flex justify-start w-[40%] text-2xl
        relative cursor-pointer transition-all ease-in-out  hover:text-green-800 hover:font-semibold text-black">
          Tseidolon
        </div>
        <button className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none transition-all focus:outline-none" type="button" onClick={()=> setNavbarOpen(!navbarOpen)}>
        <FaBarsStaggered className={`text-xl relative   ${!navbarOpen ? " flex" : " hidden" }`}/>
        <FaBurger className={`text-xl relative  ${!navbarOpen ? " hidden" : " flex" }`}/>
        </button>   
      </div>
   
      
      <div className={"lg:flex  items-center h-full gap-10 lg:flex-row flex-col lg:pr-10   p-5 text-xl" + (navbarOpen ? " flex " : " hidden")}>

        <button className="h-full flex justify-center items-center px-2  
          relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-[color:var(--quarternary-color)] before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-[color:var(--quarternary-color)] after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
          Home
        </button>

        <button className="h-full flex justify-center items-center px-2  
            relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-[color:var(--quarternary-color)] before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-[color:var(--quarternary-color)] after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
          Projects
        </button>
        <button className="whitespace-nowrap h-full flex justify-center items-center px-2  
            relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-[color:var(--quarternary-color)] before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-[color:var(--quarternary-color)] after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
          About Me
        </button>
      </div>


    </section>
  )
}

export default NavBar