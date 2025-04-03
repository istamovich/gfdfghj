import { FaInstagram } from "react-icons/fa";
import logoImage from "../../assets/logo.png";

function Footer() {
    return (
        <div className="bg-white py-12 border-t border-gray-200">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-start gap-12">
                <div className="flex flex-col items-center md:items-start">
                    <img src={logoImage} alt="Fly Modern Logo"  />
                    <p className="text-sm text-gray-600 mt-10">
                        Biz bilan dunyoni zabt eting. Sayohat tashkil qilishda eng yaxshi hamkoringiz
                    </p>
                    <a href="https://instagram.com" className="inline-block bg-gray-200 rounded-full p-3 mt-10">
                        <FaInstagram className="text-gray-500 text-xl" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Foydali Havolalar</h2>
                        <ul className="space-y-3">
                            {["Blog", "Biz bilan Aloqa", "Biz Haqimizda", "Maxfiylik Siyosati"].map((link, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="text-yellow-500 mr-2">■</span>
                                    <a href="#" className="hover:text-yellow-500 text-sm">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-4">Aloqa Ma'lumoti</h2>
                        <p className="text-sm mb-4">
                            Keyingi sayohatingizga tayyor bo'lib, shaxsiy sayohat yordam va so'rovnoma uchun biz bilan bog'laning.
                        </p>
                        <div className="space-y-2 text-sm">
                            <div className="flex">
                                <span className="font-medium w-20">Telefon:</span>
                                <a href="tel:+998951270090" className="text-yellow-600">
                                    +998-95-127-00-90
                                </a>
                            </div>
                            <div className="flex">
                                <span className="font-medium w-20">Email:</span>
                                <a href="mailto:flymoderntravel@mail.ru" className="text-yellow-600">
                                    flymoderntravel@mail.ru
                                </a>
                            </div>
                            <div className="flex">
                                <span className="font-medium w-20 align-top">Manzil:</span>
                                <span className="text-yellow-600">
                                    Shayxontohur tumani, Jangoh mavzesi, 1-etaj 37-xonadon, Toshkent shahri
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
