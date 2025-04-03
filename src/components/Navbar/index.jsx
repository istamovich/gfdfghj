import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/logo.png";
import { FaChevronDown, FaBars } from "react-icons/fa";
import Uzb from "../../assets/uz.png"; 
import Eng from "../../assets/en.png"; 
import Ruu from "../../assets/ru.png"; 

const languages = [
    { code: "uz", flag: Uzb, name: "O'zbekcha" },
    { code: "en", flag: Eng, name: "English" },
    { code: "ru", flag: Ruu, name: "Русский" },
];

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const defaultLang = languages.find(lang => lang.code === i18n.language) || languages[0];
    const [selectedLang, setSelectedLang] = useState(defaultLang);
    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang.code); 
        setSelectedLang(lang);
        setIsOpen(false);
    };

    useEffect(() => {
        setSelectedLang(languages.find(lang => lang.code === i18n.language) || languages[0]);
    }, [i18n.language]); 

    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <a href="/" className="flex items-center">
                    <img src={Logo} alt="Logo" />
                </a>

                <nav className="hidden md:flex space-x-8">
                    <p className="text-[#121212] text-[17px] font-bold cursor-pointer hover:text-amber-500 duration-700">
                        {t("home")}
                    </p>
                    <p className="text-[#121212] text-[17px] font-bold cursor-pointer hover:text-amber-500 duration-700">
                        {t("about")}
                    </p>
                    <p className="text-[#121212] text-[17px] font-bold cursor-pointer hover:text-amber-500 duration-700">
                        {t("tours")}
                    </p>
                    <p className="text-[#121212] text-[17px] font-bold cursor-pointer hover:text-amber-500 duration-700">
                        {t("contacts")}
                    </p>
                </nav>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-2 text-xl text-black"
                >
                    <FaBars />
                </button>

                <div className="relative inline-block">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-2 bg-white px-2 py-1"
                    >
                        <img src={selectedLang.flag} alt={selectedLang.name} className="w-8 h-5 object-cover" />
                        <FaChevronDown className="text-yellow-500 text-xs" />
                    </button>

                    {isOpen && (
                        <div className="absolute right-0 mt-1 w-24 bg-white overflow-hidden z-50 shadow-md">
                            {languages.map((lang) => (
                                <div
                                    key={lang.code}
                                    onClick={() => changeLanguage(lang)}
                                    className="flex items-center justify-center p-2 hover:bg-gray-100 cursor-pointer border-b last:border-none"
                                >
                                    <img src={lang.flag} alt={lang.name} className="w-8 h-5 object-cover" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        <p className="text-[#121212] text-[17px] font-bold cursor-pointer hover:text-amber-500 duration-700">
                            {t("home")}
                        </p>
                        <p className="text-[#121212] text-[17px] font-bold cursor-pointer hover:text-amber-500 duration-700">
                            {t("about")}
                        </p>
                        <p className="text-[#121212] text-[17px] font-bold cursor-pointer hover:text-amber-500 duration-700">
                            {t("tours")}
                        </p>
                        <p className="text-[#121212] text-[17px] font-bold cursor-pointer hover:text-amber-500 duration-700">
                            {t("contacts")}
                        </p>
                    </nav>
                </div>
            )}
        </header>
    );
}
