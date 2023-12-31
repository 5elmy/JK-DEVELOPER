// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export const content = [
  // ...
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {    background: {
    'gradient-warning': 'red',
  },},
};
export const darkMode = "class";
export const plugins = [nextui()];


