import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/effect-fade";

const images = [
  {
    url: "https://res.cloudinary.com/dxejkfwm6/image/upload/v1742897399/ffywsdwytarmqiqasl0p.png",
    title: "Ngoc Linh Ginseng",
    description: "KonTum, Sâm Ngọc Linh",
    link: "/sam-ngoc-linh",
  },
  {
    url: "https://res.cloudinary.com/dxejkfwm6/image/upload/v1742954588/giuqd1n365py1uqlh6r8.png",
    title: "Wild Honey",
    description: "KonTum, Mật Ong Rừng",
    link: "/mat-ong-rung",
  },
  {
    url: "https://res.cloudinary.com/dxejkfwm6/image/upload/v1742896407/pxn9nfb04xyuvyoma3jq.png",
    title: "Ganoderma",
    description: "KonTum, Nấm Linh Chi",
    link: "/nam-linh-chi",
  },
];

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-[30vh] md:min-h-[50vh] lg:h-screen">
      <Swiper
        effect="fade"
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[EffectFade, Autoplay]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={image.url}
                alt="Slider"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-30 lg:px-50">
                {activeIndex === index && (
                  <>
                    <motion.h1
                      key={`title-${index}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="text-black text-2xl md:text-5xl lg:text-7xl font-bold text-left"
                    >
                      {image.title}
                    </motion.h1>
                    <motion.p
                      key={`desc-${index}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                      className="text-black[80%] text-base md:text-lg mt-3 lg:mt-10 lg:text-xl text-left"
                    >
                      {image.description}
                    </motion.p>
                    <motion.button
                      key={`button-${index}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                      className="mt-5 lg:mt-12 px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-3 
             text-black text-sm md:text-base lg:text-lg font-semibold rounded-md 
             shadow-md border-1 border-black 
             hover:bg-white hover:text-black"
                      onClick={() => navigate(images[activeIndex].link)}
                    >
                      Learn more{" "}
                      <FontAwesomeIcon
                        icon={faArrowRightLong}
                        className="ml-2"
                      />
                    </motion.button>
                  </>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
