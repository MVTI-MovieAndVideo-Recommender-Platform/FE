import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router } from 'react-router-dom'; // BrowserRouter 대신 Router 사용
import './index.css';
import App from './App.js';
import reportWebVitals from './pages/reportWebVitals.js';


// root 요소 존재하지 않는 경우, 에러 출력
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />

    </React.StrictMode>
  );
} else {
  console.error("Root element is missing");
}
// 페이지 성능 지표 보고
reportWebVitals();

//<Router></Router> {/* BrowserRouter 대신 Router 사용 */}

