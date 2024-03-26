import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
export default function Bio() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/gpradhan07",
			text: "@gpradhan07",
		},
		{
			title: "Linkedin",
			Icon: FaLinkedin,
			href: "https://www.linkedin.com/in/gourav07/",
			text: "@gourav07",
		},
		
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<img
					src="me.jpg"
					alt="gourav"
					className="w-40 h-40 rounded-full border-2 border-yellow-200"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">Gourav Pradhan</h1>
						{/* <GoVerified className="text-blue-500 text-2xl" /> */}
					</div>
					<p className="text-lg text-gray-400">A Data Scientist</p>
				</div>
			</div>
			<p>
			I'm glad you've come to my part of the data universe! I have a talent for seeing patterns as well as 
			a curious mind. As an enthusiastic data scientist, I get great satisfaction from turning 
			data into useful solutions...
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
