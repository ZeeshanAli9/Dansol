/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        custom: "1336px", // Set your custom width here
      },
      boxShadow: {
        "3xl": " 0px 14px 44px 0px #00000026",
        "6xl": "0px 0px 25px 0px #D3D1D840;",
      },
      dropShadow: {
        "3xl": "0px 0px 25px 0px #D3D1D840;",
      },
    },
  },
  plugins: [],
};
