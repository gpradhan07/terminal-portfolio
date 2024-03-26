import React, { useEffect, useState } from "react";
import { SiNetlify, SiReact, SiTailwindcss } from "react-icons/si";

export default function About() {
	const techs = [
		{ Icon: SiReact, color: "text-blue-500", duration: "duration-500" },
		{ Icon: SiTailwindcss, color: "text-blue-300", duration: "duration-700" },
		{ Icon: SiNetlify, color: "text-green-400", duration: "duration-1000" },
	];
	const [animate, setAnimate] = useState(false);
	useEffect(() => {
		setAnimate(true);
	}, []);
	return (
		<div>
			<h1 className="text-2xl text-yellow-200 animate-reveal-0.5">Why?</h1>
			<p className="text-lg mb-3 animate-reveal-0.5">
			- Terminal's Portfolio offers a unique portfolio style, 
			inviting users to navigate through their portfolio in a terminal-inspired format.
			</p>
			<h1 className="text-2xl text-yellow-200 animate-reveal-0.7">
				Tech stack
			</h1>
			<p className="text-lg animate-reveal-0.7">
				
				- This website is built with React and Tailwind CSS, highlighting modern web development. 
				It's deployed on GitHub for easy access and reliability.
			</p>
			<div className="flex gap-5 text-4xl">
				{techs.map(({ Icon, color, duration }, index) => {
					return (
						<Icon
							key={index}
							className={`${color} ${
								animate ? "scale-100" : "scale-0"
							} transform transition-all ${duration}`}
						/>
					);
				})}
			</div>
		</div>
	);
}
