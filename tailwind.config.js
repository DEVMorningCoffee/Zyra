/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                white:{
                    100: '#F0F0F0',
                },
                yellow: {
                    100: '#F4C752',
                    200: '#FFDE05'
                },
                gray:{
                    100: '#645A47'
                },
                black: {
                    100: '#1D1D1D'
                },
                error: '#FF343A',
                success: '#FF343A',
                info: '#216DFF'
            },
            fontFamily: {
                "poppins": ["Poppins-Regular", "sans-serif"],
                "poppins-medium": ["Poppins-Medium", "sans-serif"],
                "poppins-bold": ["Poppins-Bold", "sans-serif"],
                "poppins-extrabold": ["Poppins-ExtraBold", "sans-serif"],
                "poppins-light": ["Poppins-Light", "sans-serif"],
                "poppins-extralight": ["Poppins-ExtraLight", "sans-serif"],
            }
        },
    },
    plugins: [],
}