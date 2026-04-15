import { useEffect, useRef, useState } from 'react';
import style from './navbar.module.css';
import * as Icons from '../Icons';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !linksRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={style.navbar}>
      <div className={style.brand}>
        <a href="#home">Sale.amlak</a>
      </div>

      {/* Center navigation */}
      <div ref={linksRef} className={menuOpen ? style.menuLinks : style.links}>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>
          Tech Stack
        </a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </div>

      <div className={style.rightNav}>
        {/* theme and resume link */}
        <button className={style.themeBtn}>
          <Icons.Sun className={style.sun} />
          <Icons.Moon className={style.moon} />
        </button>

        {/* navigation menu btn */}
        <button
          className={style.menuBtn}
          onClick={() => setMenuOpen(true)}
          ref={menuRef}
          aria-label="Open Menu"
        >
          <Icons.Menu />
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
