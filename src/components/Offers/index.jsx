import { useTranslation } from 'react-i18next';

const PricingCard = ({ title, features }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="bg-yellow-500 text-white p-6 text-center">
        <h3 className="text-lg font-semibold mb-2">{t(title)}</h3>
        <h2 className="text-2xl font-bold">{t("contactUs")}</h2>
        <p className="text-sm italic">/individual</p>
      </div>
      <div className="p-6 bg-gray-100 flex flex-col flex-grow">
        <ul className="space-y-4 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="text-center text-gray-700 text-sm">
              {t(feature)}
            </li>
          ))}
        </ul>
        <div className="text-center mt-auto">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded transition">
            {t('contact')}
          </button>
        </div>
      </div>
    </div>
  );
};



const Offers = () => {
  const { t } = useTranslation();

  const pricingData = [
    {
      title: "basicTraveler",
      features: [
        "customizedTravelPlan",
        "curatedDestinationGuides",
        "expertTravelDiscussion",
        "customerSupport",
        "flexiblePricing",
      ],
    },
    {
      title: "premiumTraveler",
      features: [
        "luxuryHotelLocation",
        "specialExperiences",
        "personalGuide",
        "customizedTravelPackages",
        "negotiablePricing",
      ],
    },
    {
      title: "maximalTraveler",
      features: [
        "vipTravelProgram",
        "luxuryExperiences",
        "flexibleNegotiablePricing",
        "amazingImpressions",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-5">
      <h1 className="text-center text-yellow-500 text-sm mb-2">{t('specialOffers')}</h1>
      <h2 className="text-center text-2xl font-bold mb-12">
        {t('chooseYourDreamVacation')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingData.map((plan, index) => (
          <PricingCard key={index} title={plan.title} features={plan.features} />
        ))}
      </div>
    </div>
  );
};

export default Offers;
