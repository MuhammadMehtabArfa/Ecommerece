import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        whites: "#F0F0F0",
        link: "#00398F",
        dull: "#565656",
        greend: "#0A8200",
        greenish: "#1A4242",
      },
      fontFamily: {
        libre: "Libre Baskerville",
      },
    },
  },
  plugins: [],
};
export default config;