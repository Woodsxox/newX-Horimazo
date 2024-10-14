import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#0026ff",

  //         secondary: "#00993c",

  //         accent: "#00f8d8",

  //         neutral: "#131318",

  //         "base-100": "#fffcde" "#f3f4f6",

  //         info: "#00a4ef",

  //         success: "#00c298",

  //         warning: "#ffa000",

  //         error: "#ff587e",
  //       },
  //     },
  //   ],
  // },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f59e0b",

          secondary: "#67e8f9",

          accent: "#9f1239",

          neutral: "#231717",

          "base-100": "#f3f4f6",

          info: "#fed7aa",

          success: "#2cff9c",

          warning: "#047857",

          error: "#ef4444",
        },
        body: {
          backgroundcolor: "#1c1917",
        },
      },
    ],
  },
  plugins: [daisyui],
};
export default config;
