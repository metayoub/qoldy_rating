import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App.tsx';

const loadHostRuntime = async () => {
  if (typeof document === 'undefined') {
    return;
  }

  if (document.getElementById('qodly-host-runtime')) {
    return;
  }

  await new Promise<void>((resolve) => {
    const script = document.createElement('script');
    script.id = 'qodly-host-runtime';
    script.src = '/$lib/dist/bundle.min.js';
    script.async = false;
    script.addEventListener('load', () => resolve(), { once: true });
    script.addEventListener('error', () => resolve(), { once: true });
    document.head.appendChild(script);
  });
};

const bootstrap = async () => {
  await loadHostRuntime();

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')!,
  );
};

void bootstrap();
