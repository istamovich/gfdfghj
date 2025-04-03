import { useState } from "react";
import { useTranslation } from "react-i18next";

const destinations = [
    {
        id: 1,
        name: "Istanbul",
        visits: 76,
        image: "https://www.flymoderntour.uz/img/images/istanbul.jpg",
    },
    {
        id: 2,
        name: "Sharq El-Sheykh",
        visits: 95,
        image: "https://www.flymoderntour.uz/img/images/sharm2.jpg",
    },
    {
        id: 3,
        name: "Tailand",
        visits: 55,
        image: "https://www.flymoderntour.uz/img/images/best-02.jpg",
    },
    {
        id: 4,
        name: "Argentina",
        visits: 66,
        image: "https://www.flymoderntour.uz/img/images/best-03.jpg",
    },
    {
        id: 5,
        name: "Dubai",
        visits: 76,
        image: "https://www.flymoderntour.uz/img/images/dubai2.jpg",
    },
    {
        id: 6,
        name: "Saudiya Arabistoni",
        visits: 76,
        image: "https://www.flymoderntour.uz/img/images/saudi.jpg",
    },
];

export default function Travel() {
    const { t } = useTranslation(); 
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="text-center mb-8">
                <h2 className="text-[17px] block m-0 text-[#e1ac0c]">{t('tours')}</h2> 
                <p className="mt-[14px] mb-0 text-[23px] font-semibold text-[#232323] tracking-[0.5px]">
                    {t('hero.description')} 
                </p>
            </div>

            <div className="flex overflow-x-auto gap-4 pb-6 hide-scrollbar">
                {destinations.map((destination) => (
                    <div key={destination.id} className="relative flex-shrink-0 w-64 h-36 rounded-lg overflow-hidden shadow-lg">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${destination.image})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                            }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30" />
                        <div className="absolute bottom-0 left-0 p-4 text-white">
                            <h3 className="text-xl font-bold">{destination.name}</h3>
                            <p className="text-sm">{destination.visits} {t('hero.form.submit')}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-2 mt-4">
                {destinations.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === activeSlide ? "bg-yellow-500" : "bg-gray-300"}`}
                        onClick={() => setActiveSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
