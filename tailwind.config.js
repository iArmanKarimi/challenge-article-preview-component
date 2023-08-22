/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		screens: {
			sm: "375px",
		},
		colors: {
			blue: {
				grayish: "hsl(212, 23%, 69%)",
				"grayish-light": "hsl(210, 46%, 95%)",
				"grayish-very-dark": "hsl(217, 19%, 35%)",
				"unsaturated-dark": "hsl(214, 17%, 51%)",
			},
		},
		fontFamily: {
			sans: ["Manrope", "sans-serif"],
		},
		fontSize: {
			body: [
				"13px",
				{
					fontWeight: "400",
					lineHeight: "1.2rem",
				},
			],
			header: [
				"2rem",
				{
					fontWeight: "700",
					lineHeight: "2rem",
				},
			],
			subHeader: [
				"1.5rem",
				{
					fontWeight: "700",
					lineHeight: "1.5rem",
				},
			],
			subtitle: [
				"13px",
				{
					lineHeight: "1.2rem",
				},
			],
		},
		extend: {},
	},
	plugins: [],
};
