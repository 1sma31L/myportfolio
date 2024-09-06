import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "@/components/Footer";
import "./globals.css";
import NavBar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { KeyboardShortcutCtrlI } from "@/components/KeyShortcut";
export const metadata: Metadata = {
	title: "Ismail M. Boussekine",
	description: "My personal website, Blog, and portfolio.",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<SpeedInsights />
				<Analytics />
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<KeyboardShortcutCtrlI />
					<NavBar />
					<hr className="border" />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
