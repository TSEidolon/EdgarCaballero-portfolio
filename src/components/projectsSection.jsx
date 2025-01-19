import PlaceholderCat from '../assets/placeholderCat.png'




const ProjectsSection = () => {
  return (
    <div className='h-screen bg-[color:var(--primary-color)] relative'>
      <section className='cards-container grid lg:grid-cols-3 md:grid-cols-2 p-10'>
        <div className='cards-base bg-comic-background bg-cover bg-[color:var(--tertiary-color)] w-[calc(300px*1.618)] h-[300px] border-2 border-black flex gap-4 rounded-md'>
          <div className='cards-base-left  w-[40%] py-4 pl-4  flex-col '>
            <div className='border-2 border-black p-4 h-full flex flex-col items-center justify-start gap-4 bg-[color:var(--primary-color)] rounded-md'>
              <h4>Title:</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut voluptatibus in quasi beatae</p>
              <button className='border-2 border-black px-8 py-1 rounded-xl '>
                Visit
              </button>
            </div>
          </div>
          <div className='cards-base-right  w-[60%] flex justify-center py-4 pr-4 '>
            <img src={PlaceholderCat} alt="" className='border-2 border-black bg-[color:var(--primary-color)] rounded-md' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsSection