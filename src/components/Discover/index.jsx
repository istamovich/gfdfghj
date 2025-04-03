import React from "react"

function Discover() {
    const destinations = [
        {
            id: 1,
            name: "Dubayda hashamatni his eting",
            description: "Shahar va sahro uyg'unligi",
            longDescription:
                "Dubayning osmono'par binolari, hashamatli xaridlari va cho'l sarguzashtlarining boy'ligidan zavqlaning. Madaniyat va isrofgarchilikning ajoyib uyg'unligini takif qiluvchi an'analar zamonaviylika mos keladigan shaharni o'rganing",
            image: "https://www.flymoderntour.uz/img/images/dubai.jpg",
        },
        {
            id: 2,
            name: "Turkiya madaniyatini kashf eting",
            description: "Tarixiy mo'jizalar va hayatlaranti manzaralar",
            longDescription:
                "Turkiyaning qadimiy xarobalardan tortib jonli bozorlarigacha bo'lgan jozbali tarixga sho'ng'ing. Turkiyani ziyorat qilish kerak bo'lgan manzilga aylantiradigan go'zal manzaralar, mazali taomlar va samimiy mehmonodo'stlikdan rohatlanin",
            image: "https://www.flymoderntour.uz/img/images/istanbul.jpg",
        },
        {
            id: 3,
            name: "Sharm El-Sheykhda dam oling",
            description: "Quyosh, dengiz va osoyishtalik",
            longDescription:
                "Sharm al-Shayning ajoyib plyajlari va marjon riflariga boring. Tiniq suvlarga sho'ng'ing, hashamatli dam olish maskanlarida dam oling va ushbu tropik jannatda eng yaxshi dam olishni his qiling",
            image: "https://www.flymoderntour.uz/img/images/sharm.jpg",
        },
    ]

    return (
        <div className=" bg-gray-100">
            <div className="min-h-screen ">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center mb-12">
                        <h2 className="text-[17px] block m-0 text-[#e1ac0c]">Bizning manzillarimizni kashf eting</h2>
                        <h1 className="tmt-[14px] mb-0 text-[23px] font-semibold text-[#232323] tracking-[0.5px]">
                            Dubay, Turkiya, Sharm El Sheyhni biz bilan kashf eting
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {destinations.map((destination) => (
                            <DestinationCard key={destination.id} destination={destination} />
                        ))}
                    </div>
                </div>
            </div></div>
    )
}

function DestinationCard({ destination }) {
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
                    KO'PROQ BILISH
                </button>
                <button className="py-3 text-gray-700 font-medium border-l border-gray-200 hover:bg-yellow-500 transition duration-300">
                    BAND QILISH
                </button>
            </div>
        </div>
    )
}

export default Discover

