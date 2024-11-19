import clsx from 'clsx';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const buildCssClasses = ({ isActive }) =>
    clsx(css.link, isActive && css.active);
  return (
    <div>
      <NavLink className={buildCssClasses} to="/">
        Home
      </NavLink>
      <NavLink className={buildCssClasses} to="/contacts">
        Contacts
      </NavLink>
    </div>
  );
};

export default Navigation;

