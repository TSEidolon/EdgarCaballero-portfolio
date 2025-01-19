import PlaceholderCat from '../assets/placeholderCat.png'




const ProjectsSection = () => {
  return (
    <div className='h-screen bg-[color:var(--primary-color)] relative'>
      <section className='cards-container'>
        <div className='cards-base'>
          <div className='cards-base-left'>
            <h4>Title:</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut voluptatibus in quasi beatae</p>
          </div>
          <div className='cards-base-right h-[200px] w-[250px]'>
            <img src={PlaceholderCat} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsSection