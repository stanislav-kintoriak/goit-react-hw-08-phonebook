import css from './UserMenu.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from 'redux/auth/authSelectors';
import { logoutThunk } from 'redux/auth/authThunks';

const UserMenu = function () {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  const handlerLogoutButton = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className={css.user-menu}>
      <div className={css.user_info}>
        <p className={css.user_text.}>Hello, {user.name}</p>
        <p className={css.user_text}>{user.email}</p>
      </div>
      <button
        className={css['logout']}
        type="button"
        onClick={handlerLogoutButton}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
