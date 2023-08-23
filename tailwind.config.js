/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		screens: {
			sm: "376px",
		},
		fontFamily: {
			sans: ["Manrope", "sans-serif"],
		},
		fontSize: {
			body: [
				"13px",
				{
					fontWeight: "400",
					lineHeight: "20px",
				},
			],
			header: [
				"15px",
				{
					fontWeight: "700",
					lineHeight: "25px",
				},
			],
			subHeader: [
				"13px",
				{
					fontWeight: "700",
					lineHeight: "18px",
				},
			],
			subtitle: [
				"13px",
				{
					lineHeight: "1.2rem",
				},
			],
		},
		extend: {
			colors: {
				blue: {
					grayish: "hsl(212, 23%, 69%)",
					"grayish-light": "hsl(210, 46%, 95%)",
					"grayish-very-dark": "hsl(217, 19%, 35%)",
					"unsaturated-dark": "hsl(214, 17%, 51%)",
				},
			},
		},
	},
	plugins: [],
};
