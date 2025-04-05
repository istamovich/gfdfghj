import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export default function Hero() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [date, setDate] = useState('2024-07-22');
  const [location, setLocation] = useState('');

  const SendMessage = async (event) => {
    event.preventDefault();

    const token = '7625011671:AAGPzwTe7zd8BGnbhPLOOGJVcwQOaRlOYCI';
    const chat_id = 5445767761;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      await axios.post(url, {
        chat_id,
        text: `${t('hero.form.name')}: ${name}\n${t('hero.form.location')}: ${location}\n${t('hero.form.date')}: ${date}`,
      });
      toast.success(t('yuborildi'));

      setName('');
      setLocation('');
      setDate('2024-07-22');  
    } catch (error) {
      console.log('Error sending message', error);
      toast.error(t('hero.form.error')); 
    }
  };

  const scrollToContacts = () => {
    const contactSection = document.getElementById("about");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.musement.com/cover/0003/65/thumb_264225_cover_header.jpeg"
          alt="Dubai cityscape"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-24">
        <div className="w-[80px] h-[3px] bg-[#e1ac0c] drop-shadow-lg"></div>
        <h1 className="mt-5 mb-5 text-[32px] sm:text-[42px] text-center sm:text-left tracking-wide text-white drop-shadow-lg">
          {t('hero.title')}
        </h1>
        <p className="text-[18px] sm:text-[22px] text-center sm:text-left text-white tracking-wide drop-shadow-md max-w-3xl mx-auto sm:mx-0">
          {t('hero.description')}
        </p>
        <button
          onClick={scrollToContacts}
          className="w-[150px] h-[50px] inline-block mt-5 bg-[#e1ac0c] drop-shadow-md text-white text-[15px] font-medium px-4 py-2 border-2 border-[#e1ac0c] transition-all duration-500 mx-auto sm:mx-0"
        >
          {t('hero.button')}
        </button>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl mx-auto px-4 sm:px-0">
        <form
          onSubmit={SendMessage}
          className="bg-white shadow-lg border-t-4 border-yellow-500 backdrop-blur-sm p-4 sm:p-6 flex flex-col sm:flex-row gap-4 items-center sm:items-stretch"
        >
          <input
            className="flex-1 border-r border-gray-300 outline-none px-4 py-3 text-gray-600 placeholder-gray-400"
            placeholder={t('hero.form.name')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="flex-1 border-r border-gray-300 outline-none px-4 py-3 text-gray-600 placeholder-gray-400"
            placeholder={t('hero.form.location')}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <div className="w-full sm:w-auto">
            <input
              className="w-full sm:w-[200px] border-none outline-none px-4 py-3 text-gray-600 placeholder-gray-400"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-3 w-full sm:w-auto mt-4 sm:mt-0"
          >
            {t('hero.form.submit')}
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}
