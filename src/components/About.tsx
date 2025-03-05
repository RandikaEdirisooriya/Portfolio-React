import React from 'react'

export const About = () => {

    const aboutItems = [
        {
          label: 'Project done',
          number: 30
        },
        {
          label: 'Years of experience',
          number: 2
        }
      ];
  return (
    <section id='about' className='section'>
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
               <span className="text-zinc-50 font-semibold text-2xl "> Hello! I'm Randika Bandara Edirisooriya</span> 👋 <br/>

                A passionate Software Developer who enjoys building efficient and meaningful software solutions. I love tackling challenges, learning new things, and constantly improving my skills. My goal is to create technology that makes a real impact.

                <br/> 🚀 Let’s build something amazing!

                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({label, number},key) => (
                            <div key={key} className="">
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl ">{number}</span>
                                    <span className="text-sky-600 font-semibold md:text-3xl">+</span>
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }

                    <img src='/logo.png' alt='LOGO' width={20} height={20} className='ml-auto md:w-[40px] md:h-[40px]'></img>
                </div>
            </div>
        </div>

    </section>
  )
}
