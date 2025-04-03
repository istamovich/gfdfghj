import { useState } from "react";
import Logo from "../../assets/logo.png";
import { FaChevronDown } from "react-icons/fa";
import Uz from "../../assets/uz.png";
import En from "../../assets/en.png";
import Ru from "../../assets/ru.png";

const languages = [
    { code: "uz", flag: Uz },
    { code: "en", flag: En },
    { code: "ru", flag: Ru },
];

export default function Navbar() {
    const [selectedLang, setSelectedLang] = useState(languages[0]);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <a href="/" className="flex items-center">
                    <img src={Logo} alt="" />
                </a>

                <nav className="hidden md:flex space-x-8">
                    <p className="text-[#121212] leading-[100px] text-[17px] font-bold cursor-pointer hover:text-amber-500 duration-700">Asosiy sahifa</p>
                    <p className="text-[#121212] leading-[100px] text-[17px] font-bold cursor-pointer hover:text-amber-500 duration-700">Biz haqimizda</p>
                    <p className="text-[#121212] leading-[100px] text-[17px] font-bold cursor-pointer hover:text-amber-500 duration-700">Turlar</p>
                    <p className="text-[#121212] leading-[100px] text-[17px] font-bold cursor-pointer hover:text-amber-500 duration-700">Kontaktlar</p>
                </nav>

                <div className="relative inline-block">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-2 bg-white px-2 py-1"
                    >
                        <img src={selectedLang.flag} alt={selectedLang.name} className="w-8 h-5 object-cover" />
                        <FaChevronDown className="text-yellow-500 text-xs" />
                    </button>

                    {isOpen && (
                        <div className="absolute right-0 mt-1 w-24 bg-white overflow-hidden z-50">
                            {languages.map((lang) => (
                                <div
                                    key={lang.code}
                                    onClick={() => {
                                        setSelectedLang(lang);
                                        setIsOpen(false);
                                    }}
                                    className="flex items-center justify-center p-2 hover:bg-gray-100 cursor-pointer border-b last:border-none"
                                >
                                    <img src={lang.flag} alt={lang.name} className="w-8 h-5 object-cover" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </header>
    );
}
