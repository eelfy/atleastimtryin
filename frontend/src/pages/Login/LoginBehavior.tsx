import {
  FC, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthQuery } from 'queries/auth';
import { setUser, User } from 'utils/user';
import { AuthInputsOptions, HandleLoginSubmit, LoginBehaviorProps } from './LoginTypes';
import LoginTemplate from './LoginTemplate';

const LoginBehavior: FC<LoginBehaviorProps> = () => {
  const navigate = useNavigate();

  const [loginValue, setLoginValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');

  class Options extends AuthInputsOptions { }

  const loginOptions = new Options(loginValue, setLoginValue);

  const passwordOptions = new Options(passwordValue, setPasswordValue);

  const handleLoginSubmit: HandleLoginSubmit = (event) => {
    event.preventDefault();
    if (loginValue && passwordValue) {
      AuthQuery.signin(
        loginValue,
        passwordValue,
      ).then((user: User) => {
        if (user.accessToken) {
          setUser(user);
          redirectAuthorizedUserToContactsPage();
        }
      });
    }
  };

  const redirectAuthorizedUserToContactsPage = () => {
    navigate('/contacts');
  };

  return (
    <LoginTemplate
      loginOptions={loginOptions}
      passwordOptions={passwordOptions}
      handleLoginSubmit={handleLoginSubmit}
    />
  );
};

export default LoginBehavior;
