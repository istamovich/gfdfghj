import { useState } from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const TravelAccordion = () => {
    const [openItem, setOpenItem] = useState(2);

    const toggleItem = (index) => {
        setOpenItem(openItem === index ? -1 : index);
    };

    const items = [
        {
            title: "Tajribali gidlar xizmati",
            content:
                "Siz uchun mukammal marshrutni yaratishga ishtiyoqli sayohat bo'yicha mutaxassislarimizdan ko'rsatmalar oling. Manzil takliflaridan tortib sayohat maslahatlarigacha sayohatingizni ajoyib qilish uchun shu yerdamiz.",
        },
        {
            title: "Moslashuvchan xizmatlar",
            content:
                "Sayohat tajribangizni moslashtirilgan variantlar bilan moslang, sayohatingizning har bir jihati sizning afzalliklaringizga mos kelishini ta'minlang. Noyob uslubingizga mos keladigan turar joy, tadbirlar va boshqalarni tanlang.",
        },
        {
            title: "24/7 Qo'llab quvvatlash",
            content:
                "24/7 mijozlarni qo'llab-quvvatlash xizmati bilan xotirjamlikni his qiling. Rejalashtirish jarayonida savollaringiz bo'ladimi yoki sayohat paytida yordam kerakmi, bizning jamoamiz sizni qo'llab-quvvatlash uchun doimo shu yerda.",
        },
    ];

    return (
        <div>
            <div className="bg-white px-6 py-12 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Orzuyingdagi sayohatni rejalashtiring
                    </h2>
                    <p className="text-gray-600 mb-6">
                        O'zingizning orzuingizdagi sayohatga chiqayotganingizda, har bir tafsilotga e'tibor qaratamiz. Bu madaniy qochish,
                        sarguzashtli ekspeditsiya yoki sohlida dam olish bo'ladimi, biz muammosiz va unutilmas sayohat tajribasini ta'minlaymiz.
                    </p>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-6 rounded shadow-lg transition">
                        Bog'lanish
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
                                        className={`w-4 h-4 flex items-center justify-center rounded-full ${openItem === index ? "bg-[#e1ac0c]" : "bg-[#ddd]"
                                            }`}
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
