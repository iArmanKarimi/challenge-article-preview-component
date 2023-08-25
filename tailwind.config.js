/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.{html,jsx}"],
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
		letterSpacing: {
			wide: "0.3rem",
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
			boxShadow: {
				card: "2px 23px 30px -9px hsl(210deg 29% 72.94% / 20%);",
				tooltip: "2px 10px 10px 0 hsl(210deg 29% 72.94% / 25%);",
			},
		},
	},
	plugins: [],
};
