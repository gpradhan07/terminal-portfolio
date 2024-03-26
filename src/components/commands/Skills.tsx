import ProgressBar from "../ProgressBar";
import { FaPython } from "react-icons/fa";
import { SiOpencv } from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";
import {
	SiExpress,
	SiReact,
} from "react-icons/si";

export default function Skills() {
	const listOfSkills = [
		{
			Icon: FaPython,
			barWidth: "w-90%",
			percentageValue: "90%",
			text: "Python",
		},
		{
			Icon: SiOpencv,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "OpenCV",
		},
		{
			Icon: LuBrainCircuit,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "Deep Learning",
		},
		{
			Icon: SiReact,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "React",
		},
		{
			Icon: SiExpress,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "Express.js",
		},
	];

	return (
		<div>
			{listOfSkills.map(({ Icon, barWidth, percentageValue, text }, index) => {
				return (
					<ProgressBar
						Icon={Icon}
						barWidth={barWidth}
						percentageValue={percentageValue}
						key={index}
						text={text}
					/>
				);
			})}
		</div>
	);
}
