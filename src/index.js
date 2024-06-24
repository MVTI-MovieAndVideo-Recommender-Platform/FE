import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import './index.css';
import App from './App';
import reportWebVitals from './pages/reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas); // Font Awesome 아이콘 라이브러리 추가

const rootNode = document.getElementById('root');
ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
);

reportWebVitals();


// root 요소 존재하지 않는 경우, 에러 출력
// const rootElement = document.getElementById('root');
// if (rootElement) {
//   const root = ReactDOM.createRoot(rootElement);
//   root.render(
//     <React.StrictMode>
//       <App />

//     </React.StrictMode>
//   );
// } else {
//   console.error("Root element is missing");
// }
// 페이지 성능 지표 보고

//<Router></Router> {/* BrowserRouter 대신 Router 사용 */}

