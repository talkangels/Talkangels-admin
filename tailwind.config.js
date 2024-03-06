/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      league: "'League Spartan', sans-serif",
      Allerta: "'Allerta Stencil', sans-serif",
      Popins: "'Poppins', sans-serif",
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
    extend: {
      backgroundImage: {
        Background_gradint:
          "linear-gradient(227deg, #10101C 0%, #181831 51.67%, #28274C 100%);",
        sidbar_gradint:
          "linear-gradient(90deg, #28274C 0%, #181831 47.22%, #10101C 99.58%)",
        Mainbackground_gradint:
          " linear-gradient(180deg, #28274C 0%, #181831 47.22%, #10101C 99.58%);",
        Background_login:
          "linear-gradient(227deg, #10101C 0%, #181831 51.67%, #28274C 100%);",
      },
      colors: {
        Sky: "#5686DE",
        Gray: "#75879B",
        lightgray: "#75879B",
        darkBlack: "#2A2949",
        red: "#FF4848",
        yellow: "#FFCA6E",
        darkBlue: "#1F1F3D",
        Blue: "#191831",
        darkBlue: "#2C2B53",
        TableCell: "#1D1C39",
        green: "#00BD79",
        lightgreen: "#144C4C",
      },
      boxShadow: {
        dashboardBox: "0px 6px 16.1px -8px rgba(0, 0, 0, 0.25)",
        Iconshadow: "2px 2px 8.300000190734863px -5px #00000040",
      },
    },
  },
  plugins: [],
};
