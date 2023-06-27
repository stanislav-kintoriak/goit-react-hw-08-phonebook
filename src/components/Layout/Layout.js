import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Container from 'components/Container/Container';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Suspense } from 'react';
import { tokenSelector, userSelector } from 'redux/auth/authSelectors';
import { getCurrentUserThunk } from 'redux/auth/authThunks';

const Layout = function () {
  const user = useSelector(userSelector);
  const token = useSelector(tokenSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && !user.name) {
      dispatch(getCurrentUserThunk(token));
    }
  }, [dispatch, token, user]);

  return (
    <>
      <Header />
      <main>
        <Container>
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
