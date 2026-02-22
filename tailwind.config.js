/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'jakarta-bold': ['PlusJakartaSans_700Bold'],
        'jakarta-medium': ['PlusJakartaSans_500Medium'],
        'jakarta-regular': ['PlusJakartaSans_400Regular'],
        'jakarta-extra-bold': ['PlusJakartaSans_800ExtraBold'],
        'outfit-regular': ['Outfit_400Regular'],
        'outfit-medium': ['Outfit_500Medium'],
        'outfit-semibold': ['Outfit_600SemiBold'],
        'outfit-bold': ['Outfit_700Bold'],
      },
      colors: {
        primary: "#2563EB",
      },
    },
  },
  plugins: [],
}
