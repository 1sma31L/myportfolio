"use client";

import { useEffect, useState } from "react";

export default function ProgressBar() {
	const [scrollProgress, setScrollProgress] = useState(0);
	const handleScroll = () => {
		const totalHeight = document.body.scrollHeight - window.innerHeight;
		const scrollPosition = window.scrollY;
		const scrollPercentage = (scrollPosition / totalHeight) * 100;
		setScrollProgress(scrollPercentage);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="fixed top-[7.5vh] left-0 w-full h-[2px] bg-transparent z-[1050]">
			<div
				className="h-full  bg-black dark:bg-white transition-all duration-300 ease-out"
				style={{ width: `${scrollProgress}%` }}></div>
		</div>
	);
}
