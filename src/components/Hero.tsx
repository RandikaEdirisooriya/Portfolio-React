
import  {ButtonPrimary, ButtonOutline}  from './Button' 

export const Hero = () => {
  return (
    <section id='home' className='pt-28 lg:pt-36'>
      <div className='container lg:grid grid-cols-2 items-center lg:gap-10'>
        <div >
        <div className="flex items-center gap-3">
          <figure className='img-box w-9 h-9 rounded-lg'>
            <img src="/avatar1.webp" width={40} height={40} alt="Randika Edirisooriya" className='img-cover' />
            </figure> 
            <div className="flex items-center gap-1.5  text-zinc-400 text-sm tracking-wide">
            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
            <span className="absolute inset-0  rounded-full bg-emerald-300 animate-ping "></span>
            </span>  
            Availble for  work
            </div> 
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10"> Creating Scalable, <br/>Cutting-Edge Websites for a Future-Ready Digital World</h2>
          <div className="flex items-center gap-3 ">
            <ButtonPrimary label="Download CV" icon="download" />
            <ButtonOutline label="Scroll Down" icon="arrow_downward" href='#about' />
          </div>
        </div>
         
         
      
    <div className="hidden lg:block">
  <figure className="w-full max-w-[390px] ml-auto bg-gradient-to-t from-sky-950 via-25% via-sky-400/40 to-65% rounded-[40px] overflow-hidden">
    <img 
      src="avatarnew.png" 
      alt="Randika Edirisooriya" 
      width={200} 
      height={500} 
      className="w-full h-auto"
    />
  </figure>
</div>

     
      </div>
    </section>
  )
}
