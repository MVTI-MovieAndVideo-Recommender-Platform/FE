import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'daisyui';

const HomePage = () => {
   const [data, setData] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
      const fetchData = async () => {
         try {
            const weeklyResponse = await axios.get('https://api.mvti.site/info/weekly');
            let combinedData = [{ "주간 인기 컨텐츠": weeklyResponse.data }];

            const randomKeywordResponse = await axios.get('https://api.mvti.site/info/random_keyword_content');
            combinedData = [...combinedData, ...randomKeywordResponse.data];

            setData(combinedData);
         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };

      fetchData();
   }, []);

   return (
      <div className="container x-screen items-center p-4 mb-10 w-full px-auto p-1 pb-8 pt-3 bg-white dark:bg-gray-900">
         {data.map((category, index) => {
            const [categoryName, medias] = Object.entries(category)[0];
            return (
               <SwiperSlider key={index} categoryName={categoryName} medias={medias} navigate={navigate} />
            );
         })}
      </div>
   );
};

const SwiperSlider = ({ categoryName, medias, navigate }) => {
   const swiperRef = useRef(null);
   const nextButtonRef = useRef(null);
   const prevButtonRef = useRef(null);

   useEffect(() => {
      register();

      const params = {
         loop: true,
         breakpoints: {
            0: { slidesPerView: 2, spaceBetween: 10 },
            480: { slidesPerView: 3, spaceBetween: 10 },
            768: { slidesPerView: 4, spaceBetween: 10 },
            1024: { slidesPerView: 5, spaceBetween: 10 },
            1440: { slidesPerView: 6, spaceBetween: 10 },
            1620: { slidesPerView: 7, spaceBetween: 10 },
            1800: { slidesPerView: 8, spaceBetween: 10 }
         },
         navigation: {
            nextEl: nextButtonRef.current,
            prevEl: prevButtonRef.current,
         },
      };

      Object.assign(swiperRef.current, params);
      swiperRef.current.initialize();
   }, []);

   const handleClick = (movieId) => {
      navigate(`/content/${movieId}`);
   };

   return (
      <div className="pb-8 pt-6 bg-white dark:bg-gray-900 text-black dark:text-white w-full p-3 items-center justify-center">
         <div className='relative bg-gray-100 dark:bg-gray-900 border-2 border-gray-200 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-600 p-4 rounded-md shadow hover:shadow-lg'>
            <h2 className="text-xl font-bold pb-4 pt-6 text-black dark:text-white p-4">{categoryName}</h2>
            <div className="relative w-full group">
               <swiper-container init="false" ref={swiperRef}>
                  {medias.map((media, index) => (
                     <swiper-slide key={`${media.id}-${index}`}>
                        <div className="text-center cursor-pointer items-center" onClick={() => handleClick(media.id)}>
                           <img
                              src={`https://mvti.site/poster/${media.id}/0`}
                              alt={media.id}
                              className="rounded-lg w-full h-auto transition-transform duration-300 transform hover:scale-105 hover:border-white"
                              loading="lazy"
                           />
                           <p className="pt-2">{media.title}</p>
                        </div>
                     </swiper-slide>
                  ))}
               </swiper-container>
               <div ref={nextButtonRef} className="swiper-button-next absolute top-1/2 right-2 z-30 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 cursor-pointer text-white opacity-30 group-hover:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
               </div>
               <div ref={prevButtonRef} className="swiper-button-prev absolute top-1/2 left-2 z-30 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 cursor-pointer text-white opacity-30 group-hover:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomePage;