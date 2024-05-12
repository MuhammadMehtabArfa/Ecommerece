import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      overflow: {
        'custom-scroll': 'overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200'
      },
      backgroundImage: {},
      colors: {
        whites: "#F0F0F0",
        link: "#00398F",
        dull: "#565656",
        greend: "#0A8200",
        greenish: "#1A4242",
        footer: "#00071B",
      },
      fontFamily: {
        libre: "Libre Baskerville",
      },
    },
  },
  plugins: [],
};
export default config;
