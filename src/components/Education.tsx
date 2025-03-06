
import EducationCard from './EducationCard';

export const Education = () => {
  const educationDetails = [
    {
      content: 'Completed O/L & A/L with excellent results at Mo/Madagama National School.',
      name: 'Mo/Madagama National School',
      imgSrc: '/images/mns.jpg',
      company: 'Secondary Education(2008-2021)'
    },
    {
      content: 'Currently pursuing a Diploma in Software Engineering at IJSE, gaining strong fundamentals and hands-on experience.',
      name: 'Institute of Java Software Engineering (IJSE)',
      imgSrc: '/images/ijse.jpeg',
      company: 'Higher Education (2023-2025)'
    }
  ];

  return (
    <section className="section overflow-hidden" id='education'>
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Education Path</h2>
        {/* Flex Column on Small Screens */}
        <div className="flex flex-wrap md:flex-nowrap gap-3 w-fit justify-center">
          {educationDetails.map(({content, name, imgSrc, company}, key) => (
            <EducationCard key={key} content={content} name={name} imgSrc={imgSrc} company={company} classes='reveal-up' />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
