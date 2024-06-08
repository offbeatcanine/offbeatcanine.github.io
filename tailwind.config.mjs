/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        display: ["Roboto Slab", "system-ui"],
      },
      colors: {
        brand: "#e8934d",
      },
      backgroundImage: {
        "checkerboard-light": "url('/assets/images/checkerboard-light.svg')",
        "checkerboard-dark": "url('/assets/images/checkerboard-dark.svg')",
        "checkerboard-gray": "url('/assets/images/checkerboard-gray.svg')",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
