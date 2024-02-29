import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
    return (
        <div className="h-screen">
            <header className=" w-full">
                <Header />
            </header>
            <main className="min-h-full flex justify-center items-center">
                <Outlet />
            </main>
            <footer className="">Подвал</footer>
        </div>
    );
}
