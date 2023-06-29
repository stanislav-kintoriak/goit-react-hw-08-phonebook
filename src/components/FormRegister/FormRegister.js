import { useState } from 'react';
import css from './FormRegister.module.scss';
import Input from '../Input/Input';
import ButtonCentered from '../ButtonCentered/ButtonCentered';
import { useDispatch } from 'react-redux';
import { registerUserThunk } from 'redux/auth/authThunks';
import PropTypes from 'prop-types';

const FormRegister = function ({ handlerError }) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enteredPasswordAgain, setEnteredPasswordAgain] = useState('');

  const dispatch = useDispatch();

  const handlerInputChange = event => {
    if (event.target.name === 'name') {
      setUserName(event.target.value);
    }
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    }
    if (event.target.name === 'password') {
      setPassword(event.target.value);
    }
    if (event.target.name === 'entered-password-again') {
      setEnteredPasswordAgain(event.target.value);
    }
  };

  const handlerSubmitForm = event => {
    event.preventDefault();
    handlerError('');
    if (password !== enteredPasswordAgain) {
      handlerError(
        `Your re-entered password "${enteredPasswordAgain}" is not correct`
      );
      return;
    }
    const newUser = {
      name: userName,
      email,
      password,
    };
    dispatch(registerUserThunk(newUser));
    setUserName('');
    setEmail('');
    setPassword('');
    setEnteredPasswordAgain('');
  };

  return (
    <form className={css.form_register} onSubmit={handlerSubmitForm}>
      <Input
        label="User Name"
        type="text"
        name="name"
        value={userName}
        handler={handlerInputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required={true}
      />
      <Input
        label="E-mail"
        type="email"
        name="email"
        value={email}
        handler={handlerInputChange}
        required={true}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={password}
        handler={handlerInputChange}
        required={true}
      />
      <Input
        label="Enter password again"
        type="password"
        name="entered-password-again"
        value={enteredPasswordAgain}
        handler={handlerInputChange}
        required={true}
      />
      <ButtonCentered type="submit" text="Create an account" />
    </form>
  );
};

FormRegister.propTypes = {
  handlerError: PropTypes.func,
};

export default FormRegister;
