import {
  Route, Routes, BrowserRouter,
} from 'react-router-dom';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

import './App.css';

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
