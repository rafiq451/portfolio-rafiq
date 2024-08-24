import LogoWebsite from '../../assets/logo/M.Rafiq.svg';
import LogoYayasan from '../../assets/logo/M.Rafiq.svg';

import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Styledheader = styled.div`
  .header {
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 10;
    display: block;
    background-color: var(--color-hero);
  }

  .navbar {
    transition: all 0.3s ease-in-out;
  }
  .fixed-top {
    background-color: rgba(0, 0, 0, 0.597);

    transition: all 0.3s ease-in-out;
  }

  .header .container {
    /* padding: 0.5rem 0 0.5rem 0; */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header .logo img {
    vertical-align: middle;
  }
  .header .menu .head {
    display: none;
  }

  .header .menu ul {
    list-style: none;
    margin-top: 20px;
  }

  .header .menu ul li {
    display: inline-block;
  }
  .header .menu ul li a:hover {
    color: var(--primary-color);
  }
  .header .menu .a {
    text-decoration: none;
    text-transform: capitalize;
    font-size: 15px;
    color: var(--color-text-navbar);
    font-weight: 500;
    line-height: 1.5;
  }

  .header .menu ul li:not(:last-child) {
    margin-right: 30px;
  }

  .header .menu .dropdown {
    position: relative;
  }

  .header .menu > ul > li > .a {
    padding: 24px 0;
  }

  .header .menu li:hover > .submenu,
  .header .menu .dropdown.active > .submenu {
    opacity: 1;
    transform: none;
    visibility: visible;
    transition: all 0.5s ease;
  }
  .header .menu > ul > .dropdown > .a {
    padding-right: 30px;
    position: relative;
  }

  .header .menu i {
    font-size: 10px;
    pointer-events: none;
    user-select: none;
    position: absolute;
    color: var(--color-text-navbar);
    top: calc(50% - 12px);
  }

  .daftar {
    color: #fff;
    text-align: center;
    text-decoration: none;
    background-color: var(--primary-color);
    padding: 0.5rem 1rem;
  }

  .header .menu > ul > li > i {
    right: 5px;
  }

  .header .menu .submenu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 270px;
    padding: 15px 0;
    background-color: var(--primary-color);
    z-index: 9999;
    transform-origin: top;
    transform: scaleY(0);
    visibility: hidden;
    opacity: 0;
  }

  .header .menu .submenu .a {
    padding: 6px 24px;
    display: inline-block;
    margin-top: 5px;
  }

  .header .menu .submenu .dropdown > .a {
    padding-right: 34px;
  }

  .header .menu .submenu span {
    /* background-image: linear-gradient(hsl(45, 100%, 85%), var(--secondary-color)); */
    background-repeat: no-repeat;
    background-size: 0 1px;
    background-position: 0 100%;
    transition: background-size 0.5s ease;
  }

  .header .menu .submenu li:hover > .a > span {
    background-size: 100% 2px;
  }
  .header .menu .submenu li:hover > .a {
    /* color: var(--secondary-color); */
  }

  .header__right {
    display: flex;
  }

  .header__right > * {
    margin-left: 25px;
  }

  .header__right .open_menu_btn {
    display: none;
  }

  .header ul .daftar {
    display: none;
  }

  .header__right .daftar {
    display: block;
  }

  .container {
    max-width: 1300px;
    margin: auto;
    padding: 0 15pt;
  }

  @media (max-width: 991px) {
    .header {
      padding: 12px 0;
    }
    .header__right > * {
      margin-right: 30px;
    }

    .header .menu {
      position: fixed;
      right: 0;
      top: 0;
      width: 320px;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.699);
      backdrop-filter: blur(5px);
      padding: 20px;
      overflow-y: auto;
      z-index: 9999;
      transform: translateX(100%);
    }

    .header .menu.open {
      transform: none;
    }

    .header .menu .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2rem;
    }
    .header .menu ul li.menu-item {
      margin-top: 30px;
    }
    .header .menu ul {
      padding: 0px;
    }

    .header .menu .close_menu_btn {
      height: 35px;
      width: 35px;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }
    .header .menu .close_menu_btn::before,
    .header .menu .close_menu_btn::after {
      content: '';
      position: absolute;
      width: 80%;
      height: 2px;
      background-color: var(--color-text-navbar);
    }

    .header .menu .close_menu_btn::before {
      transform: rotate(45deg);
    }
    .header .menu .close_menu_btn::after {
      transform: rotate(-45deg);
    }

    .header .menu > ul > li {
      display: block;
    }
    .header .menu > ul > li:not(:last-child) {
      margin-right: 0;
    }
    .header .menu li {
    }
    .header .menu .submenu .submenu-tentang,
    .menu .submenu .submenu-pendidikan {
      width: 100%;
    }

    .header .menu > ul > li > .a {
      padding: 12px 0;
    }

    .header .menu > ul > .dropdown > .a {
      padding-right: 50%;
    }

    .header .menu i {
      height: 24px;
      width: 24px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      pointer-events: auto;
      cursor: pointer;
      top: 1px;
    }
    .header .menu .submenu li:hover > .a > span {
      background-size: 1% 0px;
    }

    .header .menu .dropdown.active > i {
      transform: rotate(180deg);
    }

    .header .menu .submenu {
      position: static;
      transform: none;
      visibility: visible;
      padding: 0;
      transition: none;
      width: 100%;
      display: none;
      /* background-color: var(--primary-color); */
      background: none;
    }
    .header .menu .submenu .a {
      margin: 10px 0 10px 0;
    }

    .header .menu .dropdown.active > .submenu {
      display: block;
    }

    .header .menu .submenu i {
      transform: none;
      right: 0;
    }
    .header__right .open_menu_btn {
      display: block;
    }
    .header__right .open_menu_btn .line {
      height: 2px;
      width: 30px;
      background-color: var(--color-normal);
      position: absolute;
    }
    .header__right .open_menu_btn .line1 {
      transform: translateY(-8px);
    }
    .header__right .open_menu_btn .line3 {
      transform: translateY(8px);
    }

    .header ul .daftar {
      display: block;
    }

    img {
      width: 80%;
    }

    .header__right .daftar {
      display: none;
    }
  }
`;

const NavbarComponent = () => {
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.pageYOffset > header.offsetTop) {
        header.classList.add('fixed-top');
        header.classList.remove('navbar');
      } else {
        header.classList.remove('fixed-top');
        header.classList.add('navbar');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      menuRef.current.style.transition = 'transform 0.5s ease';
      menuRef.current.classList.add('open');
    } else {
      menuRef.current.style.transition = 'transform 0.5s ease';
      menuRef.current.classList.remove('open');
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownClick = (index) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  return (
    <Styledheader>
      <header className="header">
        <div className="container">
          <div className="logo">
            <Link to="/" className="a" onClick={() => setIsMenuOpen(false)}>
              <img src={LogoWebsite} alt="Logo yayasan" />
            </Link>
          </div>
          <nav className="menu" ref={menuRef}>
            <div className="head">
              <div className="logo">
                <Link to="/" className="a" onClick={() => setIsMenuOpen(false)}>
                  <img src={LogoYayasan} alt="Logo yayasan" />
                </Link>
              </div>
              <button type="button" className="close_menu_btn" aria-label="Close menu" onClick={toggleMenu}></button>
            </div>
            <ul>
              <li className="menu-item">
                <Link to="#" className="a" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="menu-item">
                <Link to="#" className="a" onClick={() => setIsMenuOpen(false)}>
                  Resume
                </Link>
              </li>
              <li className="menu-item">
                <Link className="a" onClick={() => setIsMenuOpen(false)} to="/berita">
                  Certivicate
                </Link>
              </li>
              <li className="menu-item">
                <Link className="a" onClick={() => setIsMenuOpen(false)} to="/usaha">
                  Service
                </Link>
              </li>
              <li className="menu-item">
                <Link className="a" onClick={() => setIsMenuOpen(false)} to="/kontak">
                  Portfolio
                </Link>
              </li>
              <li className="menu-item">
                <Link className="a" onClick={() => setIsMenuOpen(false)} to="/kontak">
                  Blogs
                </Link>
              </li>
              <div className="mt-3">
                <NavLink target="_blank" aria-current="page" to="/" className="daftar">
                  Contact
                </NavLink>
              </div>
            </ul>
          </nav>
          <div className="header__right">
            <NavLink aria-current="page" target="_blank" to="/" className="daftar">
              Contact
            </NavLink>
            <span type="button" className="open_menu_btn" aria-label="Open menu" onClick={toggleMenu}>
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </span>
          </div>
        </div>
      </header>
    </Styledheader>
  );
};

export default NavbarComponent;
