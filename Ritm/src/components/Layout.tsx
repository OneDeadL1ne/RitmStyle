import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
	return (
		<html lang="en">
			<body className="flex flex-col h-screen">
				<header className=" w-full">
					<Header />
				</header>
				<main className="min-h-full flex-grow">
					<Outlet />
				</main>
				<footer className="w-full row-auto">Подвал</footer>
			</body>
		</html>
	);
}
