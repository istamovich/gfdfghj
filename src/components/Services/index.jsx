import React from 'react';

function Services() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">
            <div className="text-center mb-12">
                <h2 className="text-[17px] block m-0 text-[#e1ac0c]">Bizning xizmatlar</h2>
                <h1 className="tmt-[14px] mb-0 text-[23px] font-semibold text-[#232323] tracking-[0.5px]">Ishonch bilan kashf eting</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-6 flex items-center justify-center">
                        <img src="https://www.flymoderntour.uz/img/service_icon_1.png" alt="" />
                    </div>
                    <h3 className="text-lg font-bold mb-4">Sayohat tajribalari</h3>
                    <p className="text-gray-600 text-sm">
                        Sizning xohishingizga moslashtirilgan yuqori sifatli tajribalarni ta'minlab, puxta ishlab chiqilgan sayohat marshrutlarini kashf eting. Mutaxassislar tomonidan tayyorlangan paketlarimiz unutilmas sarguzashtlarni kafolatlaydi.
                    </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-6 flex items-center justify-center">
                        <img src="https://www.flymoderntour.uz/img/service_icon_2.png" alt="" />
                    </div>
                    <h3 className="text-lg font-bold mb-4">Eng yaxshi marshrutlar</h3>
                    <p className="text-gray-600 text-sm">
                        Sizning noyob qiziqishlaringiz va istaklaringizga mos keladigan to'liq moslashtirilgan sayohat rejalaridan rohatlaning. Biz sizning shaxsiy imtiyozlaringiz va sayohat intilishlaringizni aks ettiruvchi sayohatlarni yaratishga ixtisoslashganmiz.
                    </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-6 flex items-center justify-center">
                        <img src="https://www.flymoderntour.uz/img/service_icon_3.png" alt="" />
                    </div>
                    <h3 className="text-lg font-bold mb-4">Tayyor sayohat yo'nalishlari</h3>
                    <p className="text-gray-600 text-sm">
                        Bizning paketlarimiz qulaylik, sarguzasht va madaniy suvga cho'milishning uzluksiz uyg'unligini ta'minlaydi va ajoyib sayohat tajribasini ta'minlaydi.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;