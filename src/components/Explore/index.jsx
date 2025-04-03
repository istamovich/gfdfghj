import trainImage from "../../assets/train.jpg";
import planeImage from "../../assets/plane.jpg";
import { useTranslation } from "react-i18next";

function Explore() {
  const { t } = useTranslation();

  return (
    <div className="max-w-6xl container mx-auto py-10">
      <h1 className="text-[30px] mt-5 mb-3 ml-10 md:ml-[-20px]">
        {t("explore.title")}
      </h1>

      <div className="space-y-8">
        <div className="flex flex-col justify-center items-center md:flex-row gap-6 rounded-lg overflow-hidden">
          <div className="md:w-1/3">
            <img
              src={trainImage}
              alt={t("explore.trainImageAlt")}
              className="rounded-[20px] w-[400px] md:w-full"
            />
          </div>
          <div className="md:w-2/3 p-4">
            <h2 className="text-[30px] text-[#2c343b] font-[500px]">
              {t("explore.trainTitle")}
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              {t("explore.globalDestinations")}
            </p>
            <p className="text-gray-700">{t("explore.trainDescription")}</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center md:flex-row gap-6 rounded-lg overflow-hidden">
          <div className="md:w-1/3">
            <img
              src={planeImage}
              alt={t("explore.planeImageAlt")}
              className="rounded-[20px] w-[400px] md:w-full"
            />
          </div>
          <div className="md:w-2/3 p-4">
            <h2 className="text-[30px] text-[#2c343b] font-[500px]">
              {t("explore.planeTitle")}
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              {t("explore.globalDestinations")}
            </p>
            <p className="text-gray-700">{t("explore.planeDescription")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
