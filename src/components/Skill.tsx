import  { useState, useEffect } from 'react';
import SkillCard from './SkillCard';

export const Skill = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const skillItem = [
    { imgSrc: '/images/java-icon.svg', label: 'Java', desc: 'Programming Language' },
    { imgSrc: '/images/python-svgrepo-com.svg', label: 'Python', desc: 'Programming Language' },
    { imgSrc: '/images/flask.svg', label: 'Flask', desc: 'Web Framework' },
    { imgSrc: '/images/spring-3.svg', label: 'Spring', desc: 'Framework' },
    { imgSrc: '/images/redux.svg', label: 'Redux', desc: 'State Management' },
    { imgSrc: '/images/typescript.svg', label: 'TypeScript', desc: 'Programming Language' },
    { imgSrc: '/images/mysql-icon.svg', label: 'MySQL', desc: 'Database' },
    { imgSrc: '/images/bootstrap-4.svg', label: 'Bootstrap', desc: 'User Interface' },
    { imgSrc: '/images/hibernate-icon.svg', label: 'Hibernate', desc: 'ORM' },
    { imgSrc: '/images/figma.svg', label: 'Figma', desc: 'Design tool' },
    { imgSrc: '/images/html-1.svg', label: 'HTML', desc: 'User Interface' },
    { imgSrc: '/images/css3.svg', label: 'CSS', desc: 'User Interface' },
    { imgSrc: '/images/javascript.svg', label: 'JavaScript', desc: 'Interaction' },
    { imgSrc: '/images/nodejs.svg', label: 'NodeJS', desc: 'Web Server' },
    { imgSrc: '/images/expressjs.svg', label: 'ExpressJS', desc: 'Node Framework' },
    { imgSrc: '/images/mongodb.svg', label: 'MongoDB', desc: 'Database' },
    { imgSrc: '/images/react.svg', label: 'React', desc: 'Framework' },
    { imgSrc: '/images/react-native-1.svg', label: 'React Native', desc: 'Mobile Framework' },
    { imgSrc: '/images/tailwindcss.svg', label: 'TailwindCSS', desc: 'User Interface' },
    { imgSrc: '/images/git-icon.svg', label: 'Git', desc: 'Version Control' }
  ];

  // Show only 8 skills initially on mobile
  const displayedSkills = isMobile && !showAll ? skillItem.slice(0, 8) : skillItem;

  return (
    <section className='section ' id='skills'>
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools & Technologies I Master</h2>
        <p className="text-zinc-400 mt-7 mb-8 max-w-[50ch]">
        Explore the cutting-edge tools and technologies I leverage to build high-performance, exceptional websites and applications.        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {displayedSkills.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes='reveal-up' />
          ))}
        </div>

        {/* Show button only on mobile view */}
        {isMobile && (
  <div className="flex justify-center mt-5">
    <button 
      onClick={() => setShowAll(!showAll)}
      className="btn btn-outline h-11  text-zinc-50 hover:bg-zinc-50/5 active:bg-zinc-50/10 flex items-center gap-2">
      {showAll ? "View Less" : "View All"}
      <span className="material-symbols-rounded" aria-hidden="true">
        {showAll ? "arrow_upward" : "arrow_downward"}
      </span>
    </button>
  </div>
)}

      </div>
    </section>
  );
};
