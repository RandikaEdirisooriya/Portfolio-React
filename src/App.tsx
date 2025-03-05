
import { About } from "./components/About"
import { Achievement } from "./components/Achivement"
import { Education } from "./components/Education"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Skill } from "./components/Skill"
import { Work } from "./components/Work"
import { Contact } from "./components/Contact"
import Footer from "./components/Footer"
function App() {
 return (
  <>
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
   
  </>
  
 )
}

export default App
