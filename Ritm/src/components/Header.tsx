import { Button } from "./ui/button";
import { NavLink } from "react-router-dom";
import Logo from "@/assets/logo.svg?react";
export default function Header() {
	return (
		<div className="w-full bg-transparent  mt-2">
			<div className="flex justify-center items-center">
				<ul className="grid grid-cols-6 gap-8 items-center text-white mr-auto ml-auto">
					<li>
						<Logo height={40} />
					</li>
					<li>
						<NavLink to="/">Главная</NavLink>
					</li>
					<li>
						<NavLink to="/sessions">Сеансы</NavLink>
					</li>

					<li>
						<NavLink to="/news">Новости</NavLink>
					</li>

					<li>
						<NavLink to="/post">Блог</NavLink>
					</li>
					<li>
						<Button className="bg-[#018ABE] h-[30px] ">Записаться на сеанс</Button>
					</li>
				</ul>
			</div>
		</div>
	);
}
