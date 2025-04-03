import React from "react";
import { useTranslation } from "react-i18next";

function Discover() {
    const { t } = useTranslation(); 

    const destinations = [
        {
            id: 1,
            name: t('discover.destination1.name'),  
            description: t('discover.destination1.description'),  
            longDescription: t('discover.destination1.longDescription'), 
            image: "https://www.flymoderntour.uz/img/images/dubai.jpg",
        },
        {
            id: 2,
            name: t('discover.destination2.name'),
            description: t('discover.destination2.description'),
            longDescription: t('discover.destination2.longDescription'),
            image: "https://www.flymoderntour.uz/img/images/istanbul.jpg",
        },
        {
            id: 3,
            name: t('discover.destination3.name'),
            description: t('discover.destination3.description'),
            longDescription: t('discover.destination3.longDescription'),
            image: "https://www.flymoderntour.uz/img/images/sharm.jpg",
        },
    ];

    return (
        <div className="bg-gray-100">
            <div className="min-h-screen">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center mb-12">
                        <h2 className="text-[17px] block m-0 text-[#e1ac0c]">{t('discover.title')}</h2>
                        <h1 className="mt-[14px] mb-0 text-[23px] font-semibold text-[#232323] tracking-[0.5px]">
                            {t('discover.subtitle')}
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {destinations.map((destination) => (
                            <DestinationCard key={destination.id} destination={destination} t={t} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function DestinationCard({ destination, t }) {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
            <div className="relative h-64">
                <img src={destination?.image} alt={destination?.name} />
            </div>
            <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold text-gray-900">{destination.name}</h3>
                <p className="text-yellow-600 font-medium mt-1">{destination.description}</p>
                <p className="text-gray-700 mt-4">{destination.longDescription}</p>
            </div>
            <div className="grid grid-cols-2 border-t border-gray-200">
                <button className="py-3 text-gray-700 font-medium hover:bg-yellow-500 transition duration-300">
                    {t('discover.moreInfo')}
                </button>
                <button className="py-3 text-gray-700 font-medium border-l border-gray-200 hover:bg-yellow-500 transition duration-300">
                    {t('discover.bookNow')}
                </button>
            </div>
        </div>
    );
}

export default Discover;
