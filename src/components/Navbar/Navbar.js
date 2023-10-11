import React, {useState, useEffect}  from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  let navbarContainerClasses = ['navbar-container']
  if(scrolled){
    navbarContainerClasses.push('navbar-border')
  }

  return (
    <header>
      <div class={navbarContainerClasses.join(" ")}>
        <nav className="navbar">
          <a href="/" className="logo">TutorAI</a>
          <a href="/register" className="cta">Get Started</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
