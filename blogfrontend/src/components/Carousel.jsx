import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Carousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/carousel/")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching carousel images:", error));
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="w-full h-[500px]"
    >
      {images.map((img) => (
        <SwiperSlide key={img.id}>
          <img src={img.image} alt={img.title} className="w-full h-full object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
