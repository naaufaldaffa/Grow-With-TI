/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      backgroundImage: {
        hero_jagung_bg: "url('Png/Background Es Jagung.png')",
        background_1: "url('Png/Background 1.png')",
        background_2: "url('Png/Background 2.png')",
        background_3: "url('Png/Background 3.png')",
        foto_rasa_jagung: "url('Png/Rasa Jagung.png')",
        foto_rasa_nangka: "url('Png/Rasa Nangka.png')",
        foto_rasa_alpukat: "url('Png/Rasa Alpukat.png')",
        footer: "url('Png/Footer.png')",
      },
      colors: {
        primary: "#78089F",
        warna2: "#F0535A",
        warna3: "#F89E30",
        colours_1: "#F5F0BB",
        colours_2: "#F0E67B",
        colours_3: "#959713",
        colours_4: "#216C21",
        colours_5: "#4BA64B",
        colours_6: "#F5F0BB",
        colours_7: "#4BA64B",
        colours_8: "#F7DD24",
        colours_9: "#FFEFDA",
        colours_10: "#557A46",
      },
      screens: {
        "2xl": "1320px",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
