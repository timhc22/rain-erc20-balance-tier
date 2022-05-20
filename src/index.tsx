import React from 'react';
import ReactDOM from 'react-dom/client';
import {Suspense} from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const pexel = (id: any) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
const images = [
  // Front
  {position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(1103970)},
  // Back
  {position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(416430)},
  {position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(310452)},
  // Left
  {position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: pexel(327482)},
  {position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: pexel(325185)},
  {position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: pexel(358574)},
  // Right
  {position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: pexel(227675)},
  {position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: pexel(911738)},
  {position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738986)}
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <App images={images}/>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
