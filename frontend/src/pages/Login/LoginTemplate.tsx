import { Button, Input } from 'antd';
import { FC } from 'react';
import { LoginBody, LoginForm } from './LoginStyled';
import { LoginTemplateProps } from './LoginTypes';

const LoginTemplate: FC<LoginTemplateProps> = ({
  loginOptions,
  passwordOptions,
  handleLoginSubmit,
}) => (
  <LoginBody>
    <LoginForm onSubmit={handleLoginSubmit}>
      <Input
        value={loginOptions.value}
        onChange={loginOptions.changeValue}
        type="text"
        placeholder="name@mail.com"
      />
      <Input
        value={passwordOptions.value}
        onChange={passwordOptions.changeValue}
        type="password"
      />
      <Button type="primary" htmlType="submit">Log in</Button>
    </LoginForm>
  </LoginBody>
);

export default LoginTemplate;
