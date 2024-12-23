/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1DA1F2",
        primaryDark: "#14171A",
        secondaryDark: "#657786",
        tertiaryDark: "#AAB8C2",
        quaternaryDark: "#E1E8ED",
        quinaryDark: "#F5F8FA",
        toggle: "rgb(62, 65, 68)",
        linkColor: "rgb(17, 18, 18)",
      },
      boxShadow: {
        custom: "1px 2px 16px 2px rgb(111, 120, 120)", // Example custom shadow
      },
    },
  },
  plugins: [],
};
