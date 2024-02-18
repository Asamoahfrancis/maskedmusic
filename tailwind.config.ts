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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        gradientPrime:
          "linear-gradient(270deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 51%, rgba(252,176,69,1) 100%)",
      },
      colors: {
        primeColor: "#e0292e",
      },
    },
  },
  plugins: [],
};
export default config;
