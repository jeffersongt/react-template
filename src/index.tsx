import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import SignUp from './routes/User/SignUp';
import PasswordReset from './routes/User/PasswordReset';

const rootElement = document.getElementById('root');

render(
  <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<App />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/forgot' element={<PasswordReset />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

reportWebVitals();
