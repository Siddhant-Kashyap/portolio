/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        modimi:["Madimi One", "sans-serif"],
        whisper:[ "Whisper", "cursive"],
        comfortaa:["Comfortaa", "sans-serif"],
        kodemono:[ 'Kode Mono' ,'monospace'],
      }, 
      
      boxShadow: {
        'custom': '0px 1px 2px rgba(0,255,255,0.5), 0px 2px 4px rgba(0,255,255,0.5), 0px 4px 8px rgba(0,255,255,0.5), 0px 8px 16px rgba(0,255,255,0.5)',
        'footershadow':'-3px -10px 36px 3px rgba(88,33,185,0.79)',
        
      },
      dropShadow:{
        'custom': '0px 1px 2px rgba(0,255,255,0.5), 0px 2px 4px rgba(0,255,255,0.5), 0px 4px 8px rgba(0,255,255,0.5), 0px 8px 16px rgba(0,255,255,0.5)',
        
      }
     
      
    },
  },
  plugins: [],
}

