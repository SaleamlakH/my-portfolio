import { useEffect, useRef, useState } from 'react';
import style from './navbar.module.css';
import * as Icons from '../Icons';
import { navLinks } from './nav-links';

function Navigation({ theme, onToggleTheme }) {
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
      <ul ref={linksRef} className={menuOpen ? style.menuLinks : style.links}>
        {navLinks.map(({ label, href }) => (
          <li>
            <a href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className={style.rightNav}>
        {/* theme and resume link */}
        <button className={style.themeBtn} onClick={onToggleTheme}>
          {theme === 'dark' ? (
            <Icons.Sun className={style.icon} />
          ) : (
            <Icons.Moon className={style.icon} />
          )}
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
