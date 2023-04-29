/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        spotted: "url('../public/img/spotted-background.svg')",
      },
      colors: {
        black: "#000",
        text: {
          DEFAULT: "#000",
          light: "#8F8A85",
        },
        grey: {
          DEFAULT: "#757575",
          light: "#E8E6E6",
          dark: "#5F5C59",
        },
        blue: {
          DEFAULT: "#748A9E",
          light: "#8897A0",
          lighter: "#A5B2BE",
          dark: "#4D5C69",
        },
        cream: {
          DEFAULT: "#C7C7C7",
          accent: "#F4EBD7",
          light: "#C3BCAC",
        },
      },
      fontFamily: {
        casual: "Casual",
        poppins: "Poppins",
        poppinsExtraLight: "PoppinsExtraLight",
        poppinsBold: "PoppinsBold",
      },
      fontSize: {
        base: ["18px", { lineHeight: "28px", fontWeight: 400 }],
        h1: "55px",
        h2: "42px",
        h3: "36px",
        h4: "28px",
        h5: "24px",
        h6: "18px",
        p1: "16px",
        p2: "14px",
      },
      spacing: {
        0: "Opx",
        1: "4px",
        "extra-small": "8px",
        3: "12px",
        4: "16px",
        small: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        medium: "32px",
        10: "40px",
        12: "48px",
        large: "50px",
        16: "64px",
        larger: "64px",
        20: "66px",
        "extra-large": "90px",
      },
    },
  },
  plugins: [],
};
