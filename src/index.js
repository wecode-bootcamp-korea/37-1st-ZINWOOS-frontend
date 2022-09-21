import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './styles/reset.scss';
import './styles/common.scss';
import './pages/Main/Main.scss';
import './pages/Main/Carousel.scss';
import './components/Footer/Footer.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
