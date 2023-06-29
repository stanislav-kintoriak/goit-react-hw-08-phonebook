import  ErrorNotification  from '../components/ErrorNotification/ErrorNotification';
import  Loader  from '../components/Loader/Loader';
import  Heading  from '../components/Heading/Heading';
import  Paragraph  from '../components/Paragraph/Paragraph';
import  FormRegister  from '../components/FormRegister/FormRegister';
import { useSelector } from 'react-redux';
import { errorSelector, isLoadingSelector } from '../redux/auth/authSelectors';
import { useState } from 'react';

const RegisterPage = function () {
  const error = useSelector(errorSelector);
  const isLoading = useSelector(isLoadingSelector);
  const [errorInPassword, setErrorInPassword] = useState('');

  return (
    <>
      <Heading text="Sign Up" />
      <Paragraph text="Register form" />
      <FormRegister handlerError={setErrorInPassword} />
      {error && <ErrorNotification massage={error} />}
      {isLoading && <Loader />}
      {errorInPassword && <ErrorNotification massage={errorInPassword} />}
    </>
  );
};

export default RegisterPage;
