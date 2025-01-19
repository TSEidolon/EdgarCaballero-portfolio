import PlaceholderCat from '../assets/placeholderCat.png'




const ProjectsSection = () => {
  return (
    <div className='h-screen bg-[color:var(--primary-color)] relative'>
      <section className='cards-container'>
        <div className='cards-base w-[calc(350px*1.618)] h-[350px] border-2 border-red-900 flex gap-5'>
          <div className='cards-base-left  w-[40%] py-5 pl-5  flex-col '>
            <div className='border-2 border-black py-5 pl-5 h-full flex flex-col items-center justify-start gap-4'>
              <h4>Title:</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut voluptatibus in quasi beatae</p>
            </div>
          </div>
          <div className='cards-base-right  w-[60%] flex justify-center py-5 pr-5 '>
            <img src={PlaceholderCat} alt="" className='border-2 border-blue-500' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsSection