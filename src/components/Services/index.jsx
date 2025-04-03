import React from 'react';
import { useTranslation } from 'react-i18next';

function Services() {
    const { t } = useTranslation(); // Using translation hook

    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">
            <div className="text-center mb-12">
                <h2 className="text-[17px] block m-0 text-[#e1ac0c]">{t('services.title')}</h2>
                <h1 className="mt-[14px] mb-0 text-[23px] font-semibold text-[#232323] tracking-[0.5px]">
                    {t('services.subtitle')}
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-6 flex items-center justify-center">
                        <img src="https://www.flymoderntour.uz/img/service_icon_1.png" alt="" />
                    </div>
                    <h3 className="text-lg font-bold mb-4">{t('services.experienceTitle')}</h3>
                    <p className="text-gray-600 text-sm">
                        {t('services.experienceDescription')}
                    </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-6 flex items-center justify-center">
                        <img src="https://www.flymoderntour.uz/img/service_icon_2.png" alt="" />
                    </div>
                    <h3 className="text-lg font-bold mb-4">{t('services.bestRoutesTitle')}</h3>
                    <p className="text-gray-600 text-sm">
                        {t('services.bestRoutesDescription')}
                    </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-6 flex items-center justify-center">
                        <img src="https://www.flymoderntour.uz/img/service_icon_3.png" alt="" />
                    </div>
                    <h3 className="text-lg font-bold mb-4">{t('services.packagesTitle')}</h3>
                    <p className="text-gray-600 text-sm">
                        {t('services.packagesDescription')}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;
