import { LocalStorageKeys } from 'consts/localStorage';

interface User {
  accessToken: string;
  user: {
    email: string;
    id: number;
  }
}

const getUser = (): User | null => {
  const user = localStorage.getItem(LocalStorageKeys.User);
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

const setUser = (newUser: User) => {
  localStorage.setItem(LocalStorageKeys.User, JSON.stringify(newUser));
  localStorage.setItem(LocalStorageKeys.Token, newUser.accessToken);
};

const removeUser = () => {
  localStorage.removeItem(LocalStorageKeys.User);
  localStorage.removeItem(LocalStorageKeys.Token);
};

export { getUser, setUser, removeUser };
export type { User };
