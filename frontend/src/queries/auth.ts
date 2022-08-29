import { QueryRefs } from 'consts/queryRefs';
import { customFetch } from 'utils/customFetch';

const AuthQuery = {
  signin: (login: string, password: string) => customFetch(QueryRefs.Signin, {
    method: 'POST',
    body: {
      email: login,
      password,
    },
    params: {
      needsToken: false,
    },
  }),
};

export { AuthQuery };
