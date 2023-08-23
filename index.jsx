const useState = React.useState

const Share = ({ toggleShareView }) => (
	<div div className="px-8 py-[14px] rounded-b-[inherit] h-full bg-blue-grayish-very-dark flex items-center" >
		<h3 className="tracking-[0.3rem] font-normal text-blue-grayish">
			SHARE
		</h3>
		<div className="flex items-center space-x-4 pl-4">
			<img src="./images/icon-facebook.svg" alt="facebook" />
			<img src="./images/icon-twitter.svg" alt="twitter" />
			<img src="./images/icon-pinterest.svg" alt="pinterest" />
		</div>
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
	</div >
)

const Profile = ({ toggleShareView }) => (
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
		<button
			className="ml-auto bg-blue-grayish-light flex justify-center items-center rounded-full w-8 h-8"
			onClick={toggleShareView}
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
				<path
					fill="#6E8098"
					d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
				/>
			</svg>
		</button>
	</div>
)

const Footer = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleShareView = () => {
		setIsActive(!isActive);
	};

	return (
		<footer className="rounded-b-[inherit] h-16">
			{
				isActive
					? <Share toggleShareView={toggleShareView} />
					: <Profile toggleShareView={toggleShareView} />
			}
		</footer>
	)
}

const Content = () => (
	<article className="px-8 pt-8 pb-5">
		<h2 className="text-header pb-2">
			Shift the overall look and feel by adding these wonderful touches to
			furniture in your home
		</h2>
		<p className="text-blue-unsaturated-dark">
			Ever been in a room and felt like something was missing? Perhaps it
			felt slightly bare and uninviting. I've got some simple tips to help
			you make any room feel complete.
		</p>
	</article>
)

const Card = () => (
	<div className="flex flex-col justify-center rounded-xl bg-white">
		<img
			alt="drawers"
			src="./images/drawers.jpg"
			className="rounded-[inherit] rounded-b-none"
		/>
		<section className="rounded-b-[inherit]">
			<Content />
			<Footer />
		</section>
	</div>
)

ReactDOM.createRoot(document.getElementById("root")).render(<Card />);
