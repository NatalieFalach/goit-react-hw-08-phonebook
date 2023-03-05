import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';
import { Button } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to="/">
        <div className={css.logo}></div>
      </NavLink>

      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          <Button variant="contained">Contacts</Button>
        </NavLink>
      )}
    </nav>
  );
};
