import { Activity } from "lucide-react";
import { Button } from "./ui/button";
import { NavLink } from "react-router-dom";
export default function Header() {
    return (
        <div className="w-full bg-slate-400 grid grid-cols-3">
            <div className="ml-10">
                <Activity height={50} color="#fff" />
            </div>
            <div className="flex justify-center items-center">
                <ul className="flex gap-4 text-white">
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
                </ul>
            </div>
            <div className="flex justify-end items-center mr-10">
                <Button className="bg-[#018ABE] h-[30px] ">
                    Записаться на сеанс
                </Button>
            </div>
        </div>
    );
}
