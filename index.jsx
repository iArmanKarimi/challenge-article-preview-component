const useState = React.useState;

const ShareIcons = () => (
	<div className="flex items-center space-x-4 pl-4">
		<img src="./images/icon-facebook.svg" alt="facebook" />
		<img src="./images/icon-twitter.svg" alt="twitter" />
		<img src="./images/icon-pinterest.svg" alt="pinterest" />
	</div>
);

const Share = ({ toggleShareView }) => (
	<div className="px-8 py-[14px] rounded-b-[inherit] h-full bg-blue-grayish-very-dark flex items-center">
		<h3 className="tracking-[0.3rem] font-normal text-blue-grayish">SHARE</h3>
		<ShareIcons />
		<button
			className="ml-auto bg-blue-unsaturated-dark flex justify-center items-center rounded-full w-8 h-8"
			onClick={toggleShareView}
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
				<path
					className="fill-blue-grayish-light"
					d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
				/>
			</svg>
		</button>
	</div>
);

const Profile = ({ toggleShareView }) => {
	const [tooltipDisplay, setTooltipActive] = useState(false);
	const toggleTooltip = () => {
		const updatedTooltipDisplay = !tooltipDisplay;
		const svg = document.querySelector(".share-button svg path");
		const tooltip = document.querySelector(".tooltip-top");
		const shareButton = document.querySelector(".share-button");
		// show/hide tooltip
		tooltip.style.display = updatedTooltipDisplay ? "block" : "none";
		// change share btn colors
		const [primary, secondary] = [
			"blue-grayish-light",
			"blue-unsaturated-dark",
		];
		if (updatedTooltipDisplay) {
			shareButton.classList.add(`bg-${secondary}`);
			shareButton.classList.remove(`bg-${primary}`);
			svg.classList.add(`fill-${primary}`);
			svg.classList.remove(`fill-${secondary}`);
		} else {
			// reset colors
			shareButton.classList.add(`bg-${primary}`);
			shareButton.classList.remove(`bg-${secondary}`);
			svg.classList.add(`fill-${secondary}`);
			svg.classList.remove(`fill-${primary}`);
		}
		console.log(svg);
		console.log(tooltip);
		setTooltipActive(updatedTooltipDisplay);
	};

	return (
		<div className="px-8 py-[14px] rounded-b-[inherit] h-full flex items-center">
			<img
				alt="avatar michelle"
				src="./images/avatar-michelle.jpg"
				className="rounded-full h-full"
			/>
			<article className="h-full pl-4">
				<h4 className="text-subHeader">Michelle Appleton</h4>
				<p className="text-blue-grayish">28 Jun 2020</p>
			</article>
			{/* share button */}
			<div
				onClick={toggleShareView ?? toggleTooltip}
				className="share-button
				bg-blue-grayish-light ml-auto
				relative inline-block rounded-full w-8 h-8 
				text-left cursor-pointer
				"
			>
				{/* btn icon */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="15"
					height="13"
					className="absolute left-0 right-0 mt-[7.5px] mx-auto"
				>
					<path
						className="fill-blue-unsaturated-dark"
						d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
					/>
				</svg>
				{/* btn tooltip */}
				<div
					className="tooltip-top shadow-tooltip
					absolute top-[-20px] left-[50%] z-10
					min-w-[250px] h-[50px] px-[38px] py-[15px] rounded-lg box-border
					bg-blue-grayish-very-dark
					-translate-x-1/2 -translate-y-full hidden
					"
				>
					<p
						className="relative bottom-1
						tracking-wide inline-block
						text-blue-grayish
						"
					>
						SHARE
					</p>
					<ShareIcons />
					<i
						className="absolute top-full left-1/2
						w-[24px] h-[12px] -ml-[12px]
						overflow-hidden
						after:content-[''] after:bg-blue-grayish-very-dark
						after:absolute after:left-1/2
						after:w-[12px] after:h-[12px]
						after:-translate-x-1/2
						after:-translate-y-1/2
						after:rotate-45
						"
					></i>
				</div>
			</div>
		</div>
	);
};

const Footer = () => {
	const [isShareViewActive, setShareViewActive] = useState(false);

	const sm = window.matchMedia("(min-width: 376px)");
	const toggleShareView = () => {
		setShareViewActive(!isShareViewActive);
	};
	return (
		<footer className="rounded-b-[inherit] h-16">
			{isShareViewActive ? (
				<Share toggleShareView={sm.matches ? null : toggleShareView} />
			) : (
				<Profile toggleShareView={sm.matches ? null : toggleShareView} />
			)}
		</footer>
	);
};

const Content = () => (
	<article className="px-8 pt-8 pb-5 sm:pb-0">
		<h2 className="text-header pb-2">
			Shift the overall look and feel by adding these wonderful touches to
			furniture in your home
		</h2>
		<p className="text-blue-unsaturated-dark">
			Ever been in a room and felt like something was missing? Perhaps it felt
			slightly bare and uninviting. I've got some simple tips to help you make
			any room feel complete.
		</p>
	</article>
);

const Card = () => (
	<div
		className="flex flex-col sm:flex-row justify-center rounded-xl bg-white
		sm:shadow-card"
	>
		<img
			alt="drawers"
			src="./images/drawers.jpg"
			className="rounded-xl rounded-b-none grow-0
				sm:rounded-r-none 
				sm:rounded-bl-xl
				sm:object-left
				sm:object-cover
				sm:max-w-[280px]"
		/>
		<section
			className="rounded-b-[inherit]
		sm:justify-center
		sm:max-w-sm
		sm:pb-5
		"
		>
			<Content />
			<Footer />
		</section>
	</div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<Card />);
