import styled from 'styled-components';

const LoginBody = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginForm = styled.form`
  width: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 10px;
`;

export { LoginBody, LoginForm };
