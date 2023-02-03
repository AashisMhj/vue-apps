/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif']
  },
  colors: {
    secondary: {
      50: '#f5edce',
      100: '#ddd5b9',
      200: '#c4bea5',
      300: '#aca690',
      400: '#938e7c',
      500: '#7b7767',
      600: '#625f52',
      700: '#49473e',
      800: '#312f29',
      900: '#181815',
    },
    primary: {
      50: '#89c4e1',
      100: '#7bb0cb',
      200: '#6e9db4',
      300: '#60899e',
      400: '#527687',
      500: '#456271',
      600: '#374e5a',
      700: '#293b43',
      800: '#1b272d',
      900: '#0e1416',
    },
    cus_primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    cus_secondary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
  },
    extend: {},
  },
  plugins: [],
}