import React from 'react'
import  {Projectcard}  from './Projectcard'
export const Work = () => {
    const works = [
        {
          imgSrc: '/images/greenshadow.png',
          title: 'Full stack Crop System',
          tags: ['API', 'MVC', 'Development'],
          projectLink: 'https://github.com/RandikaEdirisooriya/Green_Shadow_Frontend.git'
        },
        {
          imgSrc: '/images/flipit.png',
          title: 'eCommerce Bookstore',
          tags: ['API', 'SPA', 'Development'],
          projectLink: 'https://github.com/RandikaEdirisooriya/FlipIt-frontend.git'
        },
        {
          imgSrc: '/images/Findly.png',
          title: 'Lost Item Tracking app',
          tags: ['Development', 'API', 'Mobile'],
          projectLink: 'https://github.com/RandikaEdirisooriya/FlipIt-frontend.git'
        },
        {
          imgSrc: '/images/cabtech.png',
          title: 'car rental app',
          tags: ['JavaFx', 'Development'],
          projectLink: 'https://github.com/RandikaEdirisooriya/Cabtech-layered.git'
        },
        {
          imgSrc: '/images/mediflow.png',
          title: 'Hospital  website',
          tags: ['API', 'Development'],
          projectLink: 'https://github.com/INNOV8SOFT-PVT-LTD/CircleEdgeProject.git'
        },
        {
          imgSrc: '/images/videocall.png',
          title: 'Video call app',
          tags: ['JS', 'Development'],
          projectLink: 'https://github.com/RandikaEdirisooriya/webRTC-With-Zegocloud.git'
        },
      ];

  return (
    <section className="section" id='work'>
        <div className="container">
          <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
          </h2>
          <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,_1fr))] ">
            {works.map(({imgSrc,title,tags,projectLink},key) => (
              <Projectcard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classess='reveal-up' />
            ))}
          </div>
        </div>

    </section>
  )
}
