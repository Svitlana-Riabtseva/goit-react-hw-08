import clsx from 'clsx';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navigation = () => {
  // Отримання стану isLoggedIn з Redux
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  // Функція для створення динамічних класів
  const buildCssClasses = ({ isActive }) =>
    clsx(css.link, isActive && css.active);

  return (
    <nav>
      <NavLink className={buildCssClasses} to="/">
        Home
      </NavLink>
      {/* Умовний рендеринг посилання на /contacts */}
      {isLoggedIn && (
        <NavLink className={buildCssClasses} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
