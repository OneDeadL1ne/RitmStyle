import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
	return (
		<div className="flex flex-col h-screen">
			<header className=" w-full">
				<Header />
			</header>
			<main className="min-h-full flex-grow">
				<Outlet />
			</main>
			<footer className="flex w-full justify-center row-auto  text-white  ">
				<Footer />
			</footer>
		</div>
	);
}
