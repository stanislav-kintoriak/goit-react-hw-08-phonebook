import  ErrorNotification  from '../components/ErrorNotification/ErrorNotification';
import  Loader  from '../components/Loader/Loader';
import  Heading  from '../components/Heading/Heading';
import  Paragraph  from '../components/Paragraph/Paragraph';
import  FormLogin  from '../components/FormLogin/FormLogin';
import { useSelector } from 'react-redux';
import { errorSelector, isLoadingSelector } from '../redux/auth/authSelectors';

const LoginPage = function () {
  const error = useSelector(errorSelector);
  const isLoading = useSelector(isLoadingSelector);

  return (
    <>
      <Heading text="Login Page" />
      <Paragraph text="Please enter e-mail and password" />
      <FormLogin />
      {isLoading && <Loader />}
      {error && <ErrorNotification />}
    </>
  );
};

export default LoginPage;
