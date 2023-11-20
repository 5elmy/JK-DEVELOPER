import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NextUIProvider } from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from "next-themes";


  document.title = 'Task-for-eng/Ammar';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NextUIProvider>
  <NextThemesProvider attribute="class" defaultTheme='light'>
      <App />
  </NextThemesProvider>
</NextUIProvider>
);


