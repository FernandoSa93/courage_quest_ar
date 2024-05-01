import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { register } from 'swiper/element/bundle';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

register();

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
