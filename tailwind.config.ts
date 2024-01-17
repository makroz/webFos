import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      monse: ["Montserrat"],
    },
    extend: {
      colors: {
        tWhite: "#FFFFFF",
        tGrey: "#a7a7a7",
        tBlack: "#000000",
        tFos: "#F25749",
      },
      gradientColorStops: (theme) => ({
        "custom-orange": "#F25749",
        "custom-purple": "#5945A7",
      }),
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "black-50": "rgba(27, 27, 27, 0.50)",
        // "black-50-opacidad": "rgba(27, 27, 27, 0.50)",
        // "gradient-cta":
        //   "linear-gradient(90deg, #F25749 -15.09%, #5945A7 150.09%)",
      },

      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
        desktopK: "2560px",
      },
    },
  },
  plugins: [],
};
export default config;
