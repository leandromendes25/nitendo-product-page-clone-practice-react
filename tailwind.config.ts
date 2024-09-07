import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'nitendo-red' :'#e60012',
        'nitendo-dark-blue' : '#0b2b6b',
        'nitendo-light-blue' : '#d6f0fa',
        'nitendo-gray' : '#efefef',
        'nitendo-light-dark' : '#434242'
      }
    },
  },
  plugins: [],
};
export default config;
