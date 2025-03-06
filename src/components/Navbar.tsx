import  { useRef, useEffect } from "react";

interface NavbarProps {
  navOpen: boolean;
}

export const Navbar = ({ navOpen }: NavbarProps) => {
  const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);

  const navItems = [
    { label: "Home", link: "#home", className: "nav-link" },
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Skills", link: "#skills", className: "nav-link" }, // 🔹 Fixed section ID
    { label: "Work", link: "#work", className: "nav-link" },
    { label: "Education", link: "#education", className: "nav-link" },
    { label: "Contact", link: "#contact", className: "nav-link md:hidden" },
  ];

  const inactiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
    }
  };

  const activeCurrentLink = (event: any) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;
    inactiveBox();
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.link.substring(1),
        element: document.getElementById(item.link.substring(1)),
      }));

      for (let { id, element } of sections) {
        if (
          element &&
          window.scrollY >= element.offsetTop - 100 &&
          window.scrollY < element.offsetTop + element.offsetHeight
        ) {
          const activeNavItem = document.querySelector(`a[href="#${id}"]`);
          if (activeNavItem) {
            lastActiveLink.current?.classList.remove("active");
            activeNavItem.classList.add("active");
            lastActiveLink.current = activeNavItem as HTMLAnchorElement;
            inactiveBox();
          }
          break;
        }
      }
    };

    // **Set Active Item on Page Load (Refresh Fix)**
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", inactiveBox);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", inactiveBox);
    };
  }, []);

  return (
    <nav className={"navbar" + (navOpen ? " active" : "")}>
      {navItems.map(({ label, link, className }, key) => (
        <a href={link} key={key} className={className} onClick={activeCurrentLink}>
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};
