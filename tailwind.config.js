/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: "hsl(var(--primary))",
        mainBackground: "hsla(var(--main-background))",
        secondBackground: "hsl(var(--second-background))",
      },
      backgroundImage: {
        "tiffany-background-image": "url('./assets/tiffany-bg.webp')", // <-- путь начинается с '/'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
