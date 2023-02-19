/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*{html,css}", "./dist/**/*html"],
    theme: {
        extend: {
            colors: {
                black: "#1C1C1C",
                "black-secondary": "rgba(0, 0, 0, 0.7)",
                "white-secondary": "rgba(255, 255, 255, 0.7)",
                white: "#FFFFFF",
                body: "#F4F4F4",
            },
            fontFamily: {
                fraunces: ["Fraunces", "serif"],
                nunito: ["Nunito", "sans-serif"],
            },
        },
    },
    plugins: [],
};
