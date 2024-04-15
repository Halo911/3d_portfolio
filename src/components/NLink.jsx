import React from 'react';
import { NavLink } from 'react-router-dom';

const NLink = ({ title, path, isActive }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}
    >
      {title}
    </NavLink>
  );
};

export default NLink;
