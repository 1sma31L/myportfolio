"use client";

import MoreNavBar from "@/components/MoreNavBar";
import { usePathname } from "next/navigation";
export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	let pathName = usePathname();
	return (
		<div className="w-full">
			<MoreNavBar />
			{children}
		</div>
	);
}
