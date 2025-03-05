
import { About } from "./components/About"
import { Achievement } from "./components/Achivement"
import { Education } from "./components/Education"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Skill } from "./components/Skill"
import { Work } from "./components/Work"
import { Contact } from "./components/Contact"
import Footer from "./components/Footer"
import{ReactLenis} from 'lenis/react'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"


gsap.registerPlugin(useGSAP,ScrollTrigger)
function App() {
useGSAP(() => {
    const elements=gsap.utils.toArray('.reveal-up')
    elements.forEach((element:any) => {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: '-200 bottom',
            end: 'bottom 80%',
            scrub: true,
           
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
        });
      });

})


 return (
  <ReactLenis root >
   <Header />
   <main>
   <Hero />
   <About/>
   <Skill/>
   <Work/>
   <Education/>
   <Achievement/>
   <Contact/>
   </main>
   <Footer/>
   
   </ReactLenis>
  
 )
}

export default App
