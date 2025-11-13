import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import { PiSneakerMove } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useState, useEffect } from "react";

const Slider1 = ({ data }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
const playRef = useRef(null)
  const handleMouse = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const width = target.offsetWidth;
    const height = target.offsetHeight;

    const rotateY = ((offsetX - width / 2) / (width / 2)) * 2;
    const rotateX = -((offsetY - height / 2) / (height / 2)) * 2;

    const threshold = 0.5;
    if (
      Math.abs(offsetX - width / 2) / (width / 2) > threshold ||
      Math.abs(offsetY - height / 2) / (height / 2) > threshold
    ) {
      setX(rotateX);
      setY(rotateY);
    } else {
      setX(0);
      setY(0);
    }
  };


  const [playState, setPlayState] = useState(true);
  const swiperRef = useRef(null);

  const changeState = () => {
    setPlayState(false);

    if (playState) {
      swiperRef.current.autoplay.stop();
    } else {
      swiperRef.current.autoplay.start();
    }
  };

  return data?.length >= 1 ? (
    <div className="w-full mx-auto relative rounded-xl ">
      <button className={`swiper-button-prev absolute  -left-5 bg-black top-1/2 z-10 rounded-full p-1 border-white border hover:bg-gray-500 ${playState ? 'opacity-100' : 'opacity-0'} `}>
        <MdOutlineKeyboardArrowLeft className="text-white " />
      </button>
       
     <button className={`swiper-button-next bg-black absolute -right-5 top-1/2 z-10 border border-white rounded-full p-1 hover:bg-gray-500 ${playState ? 'opacity-100' : 'opacity-0'} `}>
        <RiArrowRightSLine className="text-white" />
      </button>
      
    

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={data.length > 2} // ✅ Enable loop only if enough slides
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        {data?.map((src, idx) => (
          <SwiperSlide className="rounded-2xl p-4 relative overflow-hidden" key={idx}>
            <img
              onClick={changeState}
              onMouseMove={handleMouse}
              ref={playRef}
              onMouseLeave={() => {
                setX(0);
                setY(0);
              }}
              style={{
                transform: `perspective(600px) rotateX(${x}deg) rotateY(${y}deg)`,
                transition: "transform 0.2s linear",
              }}
              src={src.img}
              alt={src.title}
              loading="lazy"
              className="w-full cursor-pointer h-[350px] rounded-xl border border-white sm:h-[350px] md:h-[400px] "
            />
             <div className={`absolute w-full  backdrop-blur-3xl z-40 bg-white/50 inset-0 sm:h-[350px] md:h-[400px] h-[350px] shadow-[inset_-2px_-2px_5px_white,inset_2px_2px_5px_black]  rounded-2xl flex items-center ${playState ? 'top-[150%] translate-y-0' : 'top-[50%] translate-y-[-50%]'} transition-all duration-300 ease-in-out `} onClick={()=>setPlayState(true)}>
              <div className="w-[80%] mx-auto p-2 flex items-center sm:items-start flex-col">
              <h2 className="text-2xl font-bold whitespace-nowrap text-blue-400 mb-4 text-shadow-2xs text-shadow-white ">{src.title}</h2>
              <p className="text-[15px] text-black text-justify w-full md:line-clamp-11 font-medium sm:line-clamp-10 line-clamp-7 mb-4 text-shadow-2xs text-shadow-white ">{src.dis}</p>
               <a href={(src.link).trim()} target="_blank" className="btn btn-active btn-info cursor-pointer self-center text-white">Go to Web<PiSneakerMove /></a> 
            </div> 
            </div>
            
           
          </SwiperSlide>
        ))}
      </Swiper>

<span
  className={`custom-pagination  flex flex-col gap-2 z-20 transition-opacity duration-300 cursor-pointer ${
    playState ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  }`}
></span>


<style jsx='true'>{`
.custom-pagination {

left:101% !important;
top:50% !important;
transform:translateY(-50%) !important ;
position:absolute !important ;

}
`}</style>


      <style jsx="true">{`
        .swiper-pagination-bullet {
          background-color: white !important;
          opacity: 1 !important;
          transform: scale(1);
          border-radius: 10px;
          border: 1.5px solid white;
        }
        .swiper-pagination-bullet-active {
          background-color: #000 !important;
          opacity: 1 !important;
          transform: scale(1);
          height: 25px;
          border-radius: 10px;
        }
      `}</style>


    </div>
  ) : (
    <div className="skeleton h-[400px] w-full"></div>
  );
};

export default Slider1;
