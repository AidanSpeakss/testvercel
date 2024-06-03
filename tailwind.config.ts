import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        lato: ["Lato", "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
} satisfies Config;
