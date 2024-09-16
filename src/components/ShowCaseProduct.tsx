import Image from "next/image";
import FormDownload from "./FormDownload";
import AgeRestriction from "./pdp/AgeRestriction";
import Breadcrumb from "./common/Breadcrumb";
import SliderComponent from "./pdp/SliderComponent";
import useSearchData from "./hooks/useSearchData";
import { propsGameDescription } from "./pdp/GameDescription";

const path = "/assets/";

const images = [
  {
    id: 1,
    src: `${path}screen.jpg`,
    alt: "Print 1",
  },

  {
    id: 3,
    src: `${path}screen2.jpg`,
    alt: "Print 3",
  },
  {
    id: 5,
    src: `${path}screen4.jpg`,
    alt: "Print 5",
  },
  {
    id: 6,
    src: `${path}screen.jpg`,
    alt: "Print 6",
  },
  {
    id: 7,
    src: `${path}screen.jpg`,
    alt: "Print 6",
  },
  {
    id: 8,
    src: `${path}screen4.jpg`,
    alt: "Print 8",
  },
  {
    id: 9,
    src: `${path}screen4.jpg`,
    alt: "Print 9",
  },
  {
    id: 10,
    src: `${path}screen4.jpg`,
    alt: "Print 8",
  },
];

export default function ShowCaseProduct({
  data,
  loading,
  error,
}: propsGameDescription) {
  return (
    <div className="bg-nitendo-light-blue flex justify-center ">
      <div className="w-full md:w-auto">
        <div className="bg-white px-4 py-4 relative rounded-lg lg:shadow-lg lg:px-6 lg:top-8">
          <Breadcrumb data={data} loading={loading} error={error} />
          <div className="max-w-screen-xl lg:flex lg:gap-8">
            <div className=" md:max-w-2xl">
              <SliderComponent imagesSlider={images} />
              <AgeRestriction className="hidden lg:flex" />
            </div>
            <FormDownload />
          </div>
        </div>
      </div>
    </div>
  );
}
