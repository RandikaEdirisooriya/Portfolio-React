import React, { useRef ,use, useEffect, act} from "react";
import PropTypes from "prop-types";
interface NavbarProps {
    navOpen: boolean;
  }


export const Navbar = ({navOpen} : NavbarProps) => {
  const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
  const inactiveBox= () => {
      console.log(lastActiveLink.current)
      console.log(activeBox.current)
      activeBox.current.style.top=lastActiveLink.current?.offsetTop + 'px';
      activeBox.current.style.left=lastActiveLink.current?.offsetLeft + 'px';
      activeBox.current.style.width=lastActiveLink.current?.offsetWidth + 'px';
      activeBox.current.style.height=lastActiveLink.current?.offsetHeight + 'px';


    }
 const activeCurrentLink = (event: any) => {

    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current=event.target;

    activeBox.current.style.top=event.target.offsetTop + 'px';
    activeBox.current.style.left=event.target.offsetLeft + 'px';
    activeBox.current.style.width=event.target.offsetWidth + 'px';
    activeBox.current.style.height=event.target.offsetHeight + 'px';

 }

  useEffect(inactiveBox, [])
  window.addEventListener('resize', inactiveBox);
 const activeBox = useRef<HTMLDivElement | null>(null);
  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link'
    },
    {
      label: 'Work',
      link: '#work',
      className: 'nav-link'
    },
    {
      label: 'Education',
      link: '#education',
      className: 'nav-link'
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden'
    }
  ];
  return (
    <nav className={'navbar'+ (navOpen ? ' active' : '')}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          key={key}
          ref={ref}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );

};
