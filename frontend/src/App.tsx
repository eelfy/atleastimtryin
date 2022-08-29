import { useEffect } from 'react';
import {
  Route, Routes, useNavigate, Link,
} from 'react-router-dom';
import { getUser } from 'utils/user';
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';

import './App.css';

const App = () => {
  const navigate = useNavigate();

  const user = getUser();

  const AuthorizedOnly = user;
  const UnauthorizedOnly = !user;

  useEffect(() => {
    if (UnauthorizedOnly) navigate('/login');
  }, []);

  return (
    // TODO нужно сделать более красивый роутинг
    <div className="app">
      <Routes>
        <Route path="/">
          {UnauthorizedOnly && <Route path="login" element={<Login />} />}
          {AuthorizedOnly && <Route path="contacts" element={<Contacts />} />}
        </Route>
        <Route
          path="*"
          element={(
            // TODO над сделать красивый "nothing found" думаю...
            <div>
              nothing found. try to
              {' '}
              <Link to="/login">login</Link>
              {' '}
              or
              {' '}
              <Link to="/contacts">contacts</Link>
            </div>
          )}
        />
      </Routes>
    </div>
  );
};

export default App;
