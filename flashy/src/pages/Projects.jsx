import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ProjectsCard from '../components/projetcs/ProjectsCard'

const Projects = () => {

  const projects = [
    {
      image1:'https://i.pinimg.com/1200x/6b/11/5f/6b115f86a20f33a70c399821bd562894.jpg',
      image2:'https://i.pinimg.com/736x/06/35/bf/0635bf6e3bbbe6d85b0f167c3ade5614.jpg',
    },{
      image1:'https://i.pinimg.com/736x/a4/1a/22/a41a22e9239ca5cec3779521fc459a1d.jpg',
      image2:'https://i.pinimg.com/1200x/da/86/3c/da863ce9adf81410a33828d891c5f5b0.jpg',
    },{
      image1:'https://i.pinimg.com/736x/65/be/cd/65becd844bdcb30da6053f50d370f6cb.jpg',
      image2:'https://i.pinimg.com/736x/0a/6c/5b/0a6c5bd2a3fc388e980a226f3d9f618d.jpg',
    },{
      image1:'https://i.pinimg.com/736x/62/2b/51/622b51a536b891d952dce8102fdfef7f.jpg',
      image2:'https://i.pinimg.com/736x/1f/54/27/1f5427dff488e1046b52024a1e0661c0.jpg',
    }
  ];

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '50px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true,
        markers: true
      }
    })
  })

  return (
    <div className='lg:p-4 p-2 mb-[100vh]'>
      <div className='pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl text-black uppercase'>Projects</h2>
      </div>
      <div className='-lg:mt-20 lol'>
        {projects.map(function (elem, idx) {
          return (
            <div key={idx} className='hero w-full lg:h-[425px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
              <ProjectsCard image1={elem.image1} image2={elem.image2} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects