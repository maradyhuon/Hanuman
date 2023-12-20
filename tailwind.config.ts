import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        fleur: "url('/images/Header/fleur.png')",
        mac: "url('/images/mac.png')",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      colors: {
        primary: "#4889B9",
        secondary: "#0866FF",
        tertiary: "#331812",
        black: "#231714",
        orange: "#FF7A30",
      },
      fontFamily: {
        BatBold: "Battambang-Bold",
        BatReqular: "Battambang-Reqular",
        BatLight: "Battambang-Light",
        BatThin: "Battambang-Thin",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
