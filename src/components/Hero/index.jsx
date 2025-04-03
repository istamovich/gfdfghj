import axios from "axios";
import { useState } from "react";

export default function Hero() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("2024-07-22");
    const [location, setLocation] = useState("");

    const SendMessage = async (event) => {
        event.preventDefault();

        const token = "7625011671:AAGPzwTe7zd8BGnbhPLOOGJVcwQOaRlOYCI";
        const chat_id = 5445767761;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        try {
            await axios.post(url, {
                chat_id: chat_id,
                text: `Ism: ${name}\nManzil: ${location}\nSana: ${date}`,
            });
            alert("Muvaffaqiyatli yuborildi");
        } catch (error) {
            console.log("Yuborishda xatolik", error);
        }
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.musement.com/cover/0003/65/thumb_264225_cover_header.jpeg"
                    alt="Dubai cityscape with palm trees and Burj Al Arab"
                    className="object-cover w-full h-full"
                />
            </div>

            <div className="absolute inset-0 flex ml-[180px] flex-col justify-center px-6">
                <div className="w-[80px] h-[3px] bg-[#e1ac0c] drop-shadow-lg"></div>
                <h1 className="mt-5 mb-5 text-[42px] break-words tracking-wide text-white drop-shadow-lg">
                    Sayohat qilishni xohlaysizmi?
                </h1>
                <p className="text-[22px] text-white tracking-wide drop-shadow-md max-w-3xl">
                    Sayohat orzularingizni haqiqatga aylantiring: rejalashtiring, kashf qiling va unutilmas xotiralar yarating.
                </p>
                <button className="inline-block mt-5 bg-[#e1ac0c] drop-shadow-md text-white text-[15px] font-medium px-4 w-[150px] py-2 border-2 border-[#e1ac0c] transition-all duration-500">
                    Ko'proq bilish
                </button>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl mx-auto">
                <form
                    onSubmit={SendMessage}
                    className="bg-white shadow-lg border-t-4 border-yellow-500 backdrop-blur-sm p-4 flex flex-col md:flex-row gap-4 items-center"
                >
                    <input
                        className="flex-1 border-r border-gray-300 outline-none px-4 py-3 text-gray-600 placeholder-gray-400"
                        placeholder="Ismingiz..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        className="flex-1 border-r border-gray-300 outline-none px-4 py-3 text-gray-600 placeholder-gray-400"
                        placeholder="Manzilingiz..."
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                    <div>
                        <input
                            className="w-full border-none outline-none px-4 py-3 text-gray-600 placeholder-gray-400"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-3"
                    >
                        Joy Band Qilish
                    </button>
                </form>
            </div>
        </div>
    );
}
