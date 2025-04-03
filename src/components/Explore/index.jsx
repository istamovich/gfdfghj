import trainImage from "../../assets/train.jpg"
import planeImage from "../../assets/plane.jpg"

function Explore() {
    return (
        <div className="max-w-6xl container mx-auto">
            <h1 className="text-[30px] mt-5 mb-3 ml-10 md:ml-[-20px]">Maqsadlarni osongina o'rganing</h1>

            <div className="space-y-8">
                <div className="flex flex-col justify-center items-center md:flex-row gap-6 rounded-lg overflow-hidden">
                    <div className="md:w-1/3">
                        <img
                            src={trainImage}
                            alt="Train at station"
                            className="rounded-[20px] w-[400px] md:w-full"
                        />
                    </div>
                    <div className="md:w-2/3 p-4">
                        <h2 className="text-[30px] text-[#2c343b] font-[500px]">Biz bilan arzon temir yo'l <br /> chiptalari</h2>
                        <p className="text-sm text-gray-600 mb-3">Butun dunyo</p>
                        <p className="text-gray-700">
                            Temir yo'l sarguzashtiga kiring va kashf qiling dunyo bo'ylab yo'nalishlar. Bu go'zal bo'ladimi
                            landshaftlar, gavjum shaharlar yoki madaniy toshlar, bizning temir yo'l xizmatlari noyob va qulay yo'lni
                            taklif qiladi yer sharini aylanib o'tish. Go'zallikka sho'ng'ing turli madaniyatlar, barcha bizning orqali
                            kirish mumkin keng temir yo'l tarmoq!
                        </p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center md:flex-row gap-6 rounded-lg overflow-hidden">
                    <div className="md:w-1/3">
                        <img
                            src={planeImage}
                            alt="Train at station"
                            className="rounded-[20px] w-[400px] md:w-full"
                        />
                    </div>
                    <div className="md:w-2/3 p-4">
                        <h2 className="text-[30px] text-[#2c343b] font-[500px]">
                            Havo sayohatlari uchun qiziqarli takliflarni <br /> kashf
                            eting
                        </h2>
                        <p className="text-sm text-gray-600 mb-3">Global manzillar</p>
                        <p className="text-gray-700">
                            Havodagi sarguzashtga boring va kashf qiling dunyo
                            bo'ylab yo'nalishlar. Bu bo'ladimi hayajonli
                            landshaftlar, jonli shaharlar yoki madaniy
                            xazinalar, bizning aviakompaniya xizmatlari
                            qulaylikni ta'minlaydi va dunyo bo'ylab sayohat
                            qilishning ajoyib usuli. Suvga cho'mish o'zingizni
                            turli madaniyatlar boyligida, barcha bizning keng
                            qamrovli havo sayohatimiz orqali osongina kirish
                            mumkin tarmoq. .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore

