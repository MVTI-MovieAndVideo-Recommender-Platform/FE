import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'daisyui';

const Home = () => {
   const [data, setData] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
      const fetchData = async () => {
         try {
            const weeklyResponse = await axios.get('https://api.mvti.site/info/weekly');
            let combinedData = [{ "Weekly Contents": weeklyResponse.data }];

            const randomKeywordResponse = await axios.get('https://api.mvti.site/info/random_keyword_content');
            combinedData = [...combinedData, ...randomKeywordResponse.data];

            setData(combinedData);
         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };

      fetchData();
   }, []);
// return ( **내부 div 안에!)
//   <div className="relative text-center mb-6">
//   <img src="https://via.placeholder.com/1200x400" alt="Featured Movie" className="w-full h-auto" />
//   <div className="absolute bottom-4 left-4 text-white">
//      <h2 className="text-2xl">Featured Movie Title</h2>
//      <button className="btn btn-primary m-2" onClick={() => navigate('/movie/featured')}>Play</button>
//      <button className="btn btn-secondary m-2" onClick={() => navigate('/movie/featured/info')}>More Info</button>
//   </div>
//</div>

   return (
      <div className="container items-center p-4 mb-10 w-full px-auto p-1 pb-8 pt-3 bg-white dark:bg-gray-900">

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
      };

      Object.assign(swiperRef.current, params);
      swiperRef.current.initialize();
   }, []);

   const handleClick = (movieId) => {
      navigate(`/content/${movieId}`);
   };

   return (
      <div className="pb-8 pt-6 bg-white dark:bg-gray-900 text-black dark:text-white p-3 w-full justify-center">
         <h2 className="text-xl items-center font-bold pb-4 pt-6 bg-white dark:bg-gray-900 text-black dark:text-white p-3">{categoryName}</h2>
         <swiper-container init="false" ref={swiperRef}>
            {medias.map((media, index) => (
               <swiper-slide key={`${media.id}-${index}`}>
                  <div className="text-center cursor-pointer items-center" onClick={() => handleClick(media.id)}>
                     <img
                        src={`https://mvti.site/poster/${media.id}/0`}
                        alt={media.id}
                        className="rounded-lg w-full h-auto transition-transform duration-300 transform hover:scale-105"
                        loading="lazy"
                     />
                     <p className="pt-2">{media.title}</p>
                  </div>
               </swiper-slide>
            ))}
         </swiper-container>
      </div>
   );
};

export default Home;
//둥글게~~