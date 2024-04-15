import { NavLink } from 'react-router-dom';
import NLink from './NLink';
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';
const arrNavlinks = [
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Projects',
    path: '/projects',
  },
];

const Navbar = ({ isActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openStyle, setOpenStyle] = useState('');

  useEffect(() => {
    if (isOpen) {
      setOpenStyle('max-h-full overflow-visible pt-7 opacity-1');
    } else {
      setOpenStyle('max-h-0 overflow-hidden opacity-0');
    }
  }, [isOpen]);

  const arrSocialLinks = [
    {
      id: 'facebook',
      title: 'Facebook',
      classes: 'fa-facebook',
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      classes: 'fa-linkedin',
    },
    {
      id: 'github',
      title: 'Github',
      classes: 'fa-github',
    },
    {
      id: 'codepen',
      title: 'Codepen',
      classes: 'fa-codepen',
    },
    {
      id: 'instagram',
      title: 'Instagram',
      classes: 'fa-instagram',
    },
  ];

  return (
    <header className="header2 flex-col">
      <div className="flex justify-between flex-row w-full items-center justify-center">
        <NavLink
          to="/"
          className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
        >
          <p className="blue-gradient_text">HL</p>
        </NavLink>
        <nav className="flex-row">
          <div
            className="text-lg gap-5 font-medium justify-end text-center my-5 flex-row hidden sm:flex"
            id="menu"
          >
            {arrNavlinks.map((navlink, ind) => (
              <NLink title={navlink.title} path={navlink.path} key={ind} />
            ))}
          </div>
          <div className="flex justify-stretch flex-col hidden sm:block sm:show sm:flex-row sm:justify-end">
            <ul className="tabs flex-col sm:flex-row" style={{ width: 400 }}>
              <li className="tab" id="facebook">
                <i className="fa-brands fa-facebook tab-icon"></i>
                <span className="tab-name">Facebook</span>
              </li>
              <li className="tab" id="linkedin">
                <i className="fa-brands fa-linkedin tab-icon"></i>
                <span className="tab-name">LinkedIn</span>
              </li>
              <li className="tab" id="github">
                <i className="fa-brands fa-github tab-icon"></i>
                <span className="tab-name">GitHub</span>
              </li>
              <li className="tab" id="codepen">
                <i className="fa-brands fa-codepen tab-icon"></i>
                <span className="tab-name">CodePen</span>
              </li>
              <li className="tab" id="instagram">
                <i className="fa-brands fa-instagram tab-icon"></i>
                <span className="tab-name">Instagram</span>
              </li>
            </ul>
          </div>
          <div className="flex items-center sm:hidden">
            <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
              {isOpen === true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </div>
      {/* mboile-menu */}
      {/* {isOpen && ( */}
      {/* // <div className="w-full pt-4 transition-all ease-in-out duration-350 sm:hidden"> */}
      <div className="w-full relative sm:hidden">
        <ul
          className={`${openStyle} z-0 w-full transition-all duration-300 ease `}
        >
          {arrSocialLinks.map((link, ind) => (
            <li
              className="py-5 border-t-2 border-y-white/30 w-full flex items-center justify-center mobile-nav-item"
              // id={link.id}
              key={link.id}
            >
              <i className={`fa-brands ${link.classes} text-3xl`}></i>
              <span className="">{link.title}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* )} */}
    </header>
  );
};

export default Navbar;
