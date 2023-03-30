/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
            "primary": "#753cc4",
                    
            "secondary": "#8c4dc6",
                    
            "accent": "#f4f146",
                    
            "neutral": "#23222F",
                    
            "base-100": "#F8F7F8",
                    
            "info": "#73B8D3",
                    
            "success": "#59D99B",
                    
            "warning": "#E1AF19",
                    
            "error": "#E66B90",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

