import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const Fullscreennav = () => {

    const stairParentRef = useRef(null)
    const fullScreenNav = useRef(null);

    useGSAP(function () {
        const tl = gsap.timeline()
        
        tl.from('.stair', {
            delat:3,
            height: 0,
            stagger: {
                amount: -0.2
            }
        })
        tl.from(fullScreenNav.current,{
            opacity:0,
        })
    },)

  return (
    <div className='h-screen overflow-hidden bg-black'>
            <div ref={stairParentRef} className='h-screen w-full fixed '>
                <div className='h-full w-full flex'>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-white'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-white'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                </div>
            </div>
      <div ref={fullScreenNav} className='relative'>
        <div className="flex w-full p-3 justify-between items-start">
        <div>
          <h1>YAKSH</h1>
        </div>
        <div className=' h-18 w-18 relative cursor-pointer ' >{/* decreased from h-20 w-20 to h-18 w-18 */}
            <div className='absolute h-25 bg-red-600 w-1 -rotate-45 origin-top' ></div>
            <div className='absolute h-25 bg-red-600 w-1 right-0 rotate-45 origin-top' ></div>
        </div>
      </div>
      <div className="py-7">
        <div className='link h-32 origin-top relative border-1 border-white'>{/* decreased from h-36 to h-32 */}
          <h1 className='font-[font2] text-5xl lg:text-[7.2vw] text-center lg:leading-[0.72] lg:pt-9 pt-2.5 uppercase'>{/* decreased text size and padding by 10% */}JJK</h1>
          <div className='moveLink absolute text-black flex top-0 bg-red-600'>
            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] lg:text-[7.2vw] text-5xl text-center lg:leading-[0.72] lg:pt-9 pt-3.5 uppercase'>{/* decreased text size and padding by 10% */}jujutsu kaisen</h2>
              <img className='lg:h-32 h-12 rounded-full shrink-0 lg:w-86 w-28 object-cover' src="https://i.pinimg.com/736x/8c/be/1f/8cbe1fe6af023673355050134ade51e7.jpg" alt="" />{/* decreased heights and widths by 10% */}
              <h2 className='whitespace-nowrap font-[font2] lg:text-[7.2vw] text-5xl text-center lg:leading-[0.72] lg:pt-9 pt-3.5 uppercase'>jujutsu kaisen</h2>
              <img className='lg:h-32 h-12 rounded-full shrink-0 lg:w-86 w-28 object-cover' src="https://i.pinimg.com/736x/8c/be/1f/8cbe1fe6af023673355050134ade51e7.jpg" alt="" />
            </div>
            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] lg:text-[7.2vw] text-5xl text-center lg:leading-[0.72] lg:pt-9 pt-3.5 uppercase'>jujutsu kaisen</h2>
              <img className='lg:h-32 h-12 rounded-full shrink-0 lg:w-86 w-28 object-cover' src="https://i.pinimg.com/736x/8c/be/1f/8cbe1fe6af023673355050134ade51e7.jpg" alt="" />
              <h2 className='whitespace-nowrap font-[font2] lg:text-[7.2vw] text-5xl text-center lg:leading-[0.72] lg:pt-9 pt-3.5 uppercase'>jujutsu kaisen</h2>
              <img className='lg:h-32 h-12 rounded-full shrink-0 lg:w-86 w-28 object-cover' src="https://i.pinimg.com/736x/8c/be/1f/8cbe1fe6af023673355050134ade51e7.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className='link h-32 origin-top relative border-1 border-white'>
          <h1 className='font-[font2] text-5xl lg:text-[7.2vw] text-center lg:leading-[0.72] lg:pt-9 pt-2.5 uppercase'>JJK</h1>
          <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] lg:text-[7.2vw] text-5xl text-center lg:leading-[0.72] lg:pt-9 pt-3.5 uppercase'>jujutsu kaisen</h2>
              <img className='lg:h-32 h-12 rounded-full shrink-0 lg:w-86 w-28 object-cover' src="https://i.pinimg.com/736x/8c/be/1f/8cbe1fe6af023673355050134ade51e7.jpg" alt="" />
              <h2 className='whitespace-nowrap font-[font2] lg:text-[7.2vw] text-5xl text-center lg:leading-[0.72] lg:pt-9 pt-3.5 uppercase'>jujutsu kaisen</h2>
              <img className='lg:h-32 h-12 rounded-full shrink-0 lg:w-86 w-28 object-cover' src="https://i.pinimg.com/736x/8c/be/1f/8cbe1fe6af023673355050134ade51e7.jpg" alt="" />
            </div>
            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] lg:text-[7.2vw] text-5xl text-center lg:leading-[0.72] lg:pt-9 pt-3.5 uppercase'>jujutsu kaisen</h2>
              <img className='lg:h-32 h-12 rounded-full shrink-0 lg:w-86 w-28 object-cover' src="https://i.pinimg.com/736x/8c/be/1f/8cbe1fe6af023673355050134ade51e7.jpg" alt="" />
              <h2 className='whitespace-nowrap font-[font2] lg:text-[7.2vw] text-5xl text-center lg:leading-[0.72] lg:pt-9 pt-3.5 uppercase'>jujutsu kaisen</h2>
              <img className='lg:h-32 h-12 rounded-full shrink-0 lg:w-86 w-28 object-cover' src="https://i.pinimg.com/736x/8c/be/1f/8cbe1fe6af023673355050134ade51e7.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className='link h-32 origin-top relative border-1'>
          <h1 className='font-[font2] text-5xl lg:text-[7.2vw] text-center lg:leading-[0.72] lg:pt-9 pt-2.5 uppercase'>JJK</h1>
          <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] lg:text-[7.2vw] text-5xl text-center lg:leading-[0.72] lg:pt-9 pt-3.5 uppercase'>jujutsu kaisen</h2>
              <img className='lg:h-32 h-12 rounded-full shrink-0 lg:w-86 w-28 object-cover' src="https://i.pinimg.com/736x/8c/be/1f/8cbe1fe6af023673355050134ade51e7.jpg" alt="" />
              <h2 className='whitespace-nowrap font-[font2] lg:text-[7.2vw] text-5xl text-center lg:leading-[0.72] lg:pt-9 pt-3.5 uppercase'>jujutsu kaisen</h2>
              <img className='lg:h-32 h-12 rounded-full shrink-0 lg:w-86 w-28 object-cover' src="https://i.pinimg.com/736x/8c/be/1f/8cbe1fe6af023673355050134ade51e7.jpg" alt="" />
            </div>
            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] lg:text-[7.2vw] text-5xl text-center lg:leading-[0.72] lg:pt-9 pt-3.5 uppercase'>jujutsu kaisen</h2>
              <img className='lg:h-32 h-12 rounded-full shrink-0 lg:w-86 w-28 object-cover' src="https://i.pinimg.com/736x/8c/be/1f/8cbe1fe6af023673355050134ade51e7.jpg" alt="" />
              <h2 className='whitespace-nowrap font-[font2] lg:text-[7.2vw] text-5xl text-center lg:leading-[0.72] lg:pt-9 pt-3.5 uppercase'>jujutsu kaisen</h2>
              <img className='lg:h-32 h-12 rounded-full shrink-0 lg:w-86 w-28 object-cover' src="https://i.pinimg.com/736x/8c/be/1f/8cbe1fe6af023673355050134ade51e7.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className='link h-32 origin-top relative border-1'>
          <h1 className='font-[font2] text-5xl lg:text-[7.2vw] text-center lg:leading-[0.72] lg:pt-9 pt-2.5 uppercase'>JJK</h1>
          <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] lg:text-[7.2vw] text-5xl text-center lg:leading-[0.72] lg:pt-9 pt-3.5 uppercase'>jujutsu kaisen</h2>
              <img className='lg:h-32 h-12 rounded-full shrink-0 lg:w-86 w-28 object-cover' src="https://i.pinimg.com/736x/8c/be/1f/8cbe1fe6af023673355050134ade51e7.jpg" alt="" />
              <h2 className='whitespace-nowrap font-[font2] lg:text-[7.2vw] text-5xl text-center lg:leading-[0.72] lg:pt-9 pt-3.5 uppercase'>jujutsu kaisen</h2>
              <img className='lg:h-32 h-12 rounded-full shrink-0 lg:w-86 w-28 object-cover' src="https://i.pinimg.com/736x/8c/be/1f/8cbe1fe6af023673355050134ade51e7.jpg" alt="" />
            </div>
            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] lg:text-[7.2vw] text-5xl text-center lg:leading-[0.72] lg:pt-9 pt-3.5 uppercase'>jujutsu kaisen</h2>
              <img className='lg:h-32 h-12 rounded-full shrink-0 lg:w-86 w-28 object-cover' src="https://i.pinimg.com/736x/8c/be/1f/8cbe1fe6af023673355050134ade51e7.jpg" alt="" />
              <h2 className='whitespace-nowrap font-[font2] lg:text-[7.2vw] text-5xl text-center lg:leading-[0.72] lg:pt-9 pt-3.5 uppercase'>jujutsu kaisen</h2>
              <img className='lg:h-32 h-12 rounded-full shrink-0 lg:w-86 w-28 object-cover' src="https://i.pinimg.com/736x/8c/be/1f/8cbe1fe6af023673355050134ade51e7.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
  )
}

export default Fullscreennav