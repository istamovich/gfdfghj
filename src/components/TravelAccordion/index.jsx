import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const TravelAccordion = () => {
    const [openItem, setOpenItem] = useState(2);
    const { t } = useTranslation();

    const toggleItem = (index) => {
        setOpenItem(openItem === index ? -1 : index);
    };

    const items = [
        {
            title: t('travelAccordion.items.0.title'),
            content: t('travelAccordion.items.0.content'),
        },
        {
            title: t('travelAccordion.items.1.title'),
            content: t('travelAccordion.items.1.content'),
        },
        {
            title: t('travelAccordion.items.2.title'),
            content: t('travelAccordion.items.2.content'),
        },
    ];

    return (
        <div>
            <div className="bg-white px-6 py-12 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        {t('travelAccordion.title')}
                    </h2>
                    <p className="text-gray-600 mb-6">
                        {t('travelAccordion.description')}
                    </p>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-6 rounded shadow-lg transition">
                        {t('travelAccordion.contactButton')}
                    </button>
                </div>
                <div className="lg:w-1/2">
                    <div className="border border-gray-200 rounded-lg shadow-sm">
                        {items.map((item, index) => (
                            <div key={index} className="border-b border-gray-200 last:border-b-0">
                                <div
                                    className="flex items-center justify-between p-4 cursor-pointer transition hover:bg-gray-50"
                                    onClick={() => toggleItem(index)}
                                >
                                    <h3 className="text-lg font-medium">{item.title}</h3>
                                    <motion.div
                                        animate={{ rotate: openItem === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`w-4 h-4 flex items-center justify-center rounded-full ${openItem === index ? "bg-[#e1ac0c]" : "bg-[#ddd]"}
                                            `}
                                    >
                                        <div className="w-3 h-3 rounded-full"></div>
                                    </motion.div>
                                </div>
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={openItem === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-4 pt-0 text-gray-600">
                                        <p>{item.content}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-4">
                <div className="w-full ">
                    <iframe
                        className="w-full h-96"
                        src="https://www.youtube.com/embed/bHjoghsQGCE"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
};

export default TravelAccordion;
