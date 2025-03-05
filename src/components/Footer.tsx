import React from 'react';
import { ButtonPrimary } from './Button';

const Footer = () => {
  const sitemap = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Education', href: '#education' },
    { label: 'Contact me', href: '#contact' }
  ];

  const socials = [
    { label: 'GitHub', href: 'https://www.github.com/codewithsadee-org' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/codewithsadee' },
   
    { label: 'Instagram', href: 'https://www.instagram.com/codewithsadee' },
    { label: 'Facebook', href: 'https://codepen.io/codewithsadee' }
  ];

  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary
              href="randikaedirisooriya@gmail.com"
              label="Start Project"
              icon="chevron_right"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 lg:pl-20">
            <div>
              <p className="mb-2 font-medium">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 font-medium">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mt-8 border-t border-zinc-700">
          <a href="#">
            <img src="logo.png" alt="logo" width={40} height={40} />
          </a>
          <p className="text-zinc-500 text-sm">
            &copy; 2025 <span className="text-zinc-100">Randika Edirisooriya</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
