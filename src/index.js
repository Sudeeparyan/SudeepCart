import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './auth';
import Payment from './pages/Payment/Payment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <React.StrictMode>
      
      <Routes>
        <Route path='/payment' element={<Payment/>}></Route>
        <Route path='*' element={<App/>}></Route>
      </Routes>
    </React.StrictMode>
    </AuthProvider>
  </BrowserRouter>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
