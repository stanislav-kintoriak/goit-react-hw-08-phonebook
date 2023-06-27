import { Link } from 'react-router-dom';
import { RiContactsBookFill } from 'react-icons/ri';
import css from './Logo.module.scss';

const Logo = function () {
  return (
    <Link to="/" className={css['logo-link']}>
      <div className={css.logo_thumb}>
        <RiContactsBookFill className={css['logo-image']} />
        <p className={css['logo-text']}>phonebook</p>
      </div>
    </Link>
  );
};

export default Logo;
