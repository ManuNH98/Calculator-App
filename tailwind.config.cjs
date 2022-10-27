/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    fontSize: {
      numbers: "32px",
    },
    fontWeight: {
      bold: 700,
    },
    colors: {
      // Theme 1
      mainBg1: "hsl(222, 26%, 31%)",
      toggleBg1: "hsl(223, 31%, 20%)",
      screenBg1: "hsl(224, 36%, 15%)",
      // Keys 1
      keyBgDel1: "hsl(225, 21%, 49%)",
      keyShadowDel1: "hsl(224, 28%, 35%)",
      keyBgEqual1: "hsl(6, 63%, 50%)",
      keyShadowEqual1: "hsl(6, 70%, 34%)",
      keyBgNum1: "hsl(30, 25%, 89%)",
      keyShadowNum1: "hsl(28, 16%, 65%)",

      // Text 1
      textDark1: "hsl(221, 14%, 31%)",
      textLight1: "hsl(0, 0%, 100%)",

      // Theme 2
      mainBg2: "hsl(0, 0%, 90%)",
      toggleBg2: "hsl(0, 5%, 81%)",
      screenBg2: "hsl(0, 0%, 93%)",
      // Keys 2
      keyBgDel2: "hsl(185, 42%, 37%)",
      keyShadowDel2: "hsl(185, 58%, 25%)",
      keyBgEqual2: "hsl(25, 98%, 40%)",
      keyShadowEqual2: "hsl(25, 99%, 27%)",
      keyBgNum2: "hsl(45, 7%, 89%)",
      keyShadowNum2: "hsl(35, 11%, 61%)",
      // Text 2
      textDark2: "hsl(60, 10%, 19%)",
      textLight2: "hsl(0, 0%, 100%)",

      // Theme 3
      mainBg3: "hsl(268, 75%, 9%)",
      toggleBg3: "hsl(268, 71%, 12%)",
      screenBg3: "hsl(268, 71%, 12%)",
      // Keys 3
      keyBgDel3: "hsl(281, 89%, 26%)",
      keyShadowDel3: "hsl(285, 91%, 52%)",
      keyBgEqual3: "hsl(176, 100%, 44%)",
      keyShadowEqual3: "hsl(177, 92%, 70%)",
      keyBgNum3: "hsl(268, 47%, 21%)",
      keyShadowNum3: "hsl(290, 70%, 36%)",
      // Text 3
      textDark3: "hsl(52, 100%, 62%)",
      textEqual3: "hsl(198, 20%, 13%)",
      textLight3: "hsl(0, 0%, 100%)",
    },
    extend: {},
  },
  plugins: [],
};
