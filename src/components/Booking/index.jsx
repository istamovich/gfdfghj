import React from 'react';
import { useTranslation } from 'react-i18next';

function Booking() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white mt-[-100px]">
      <div className="max-w-md w-full text-center space-y-6">
        <h3 className="text-yellow-500 font-medium text-lg">{t('booking.title')}</h3>

        <h1 className="text-gray-800 text-3xl font-bold">{t('booking.subtitle')}</h1>

        <p className="text-gray-700">
          {t('booking.director')}: <span className="text-yellow-600">{t('booking.directorName')}</span>
        </p>

        <p className="text-yellow-500 text-xl font-semibold">{t('booking.phone')}</p>

        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-8 rounded transition duration-300">
          {t('booking.bookNow')}
        </button>
      </div>
    </div>
  );
}

export default Booking;
