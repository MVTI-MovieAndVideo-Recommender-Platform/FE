import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { register } from 'swiper/element/bundle';
import 'swiper/css';

const Container = styled.div
   `padding: 10px;`;

const PosterContainer = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: auto;
  }

  .overlay {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
  }
`;

const MediaItem = styled.div`
  text-align: center;
  padding: 0px;
  img {
    width: 100%;
    height: auto;
    max-width: 320px;
    max-height: 180px;
    object-fit: cover;
    cursor: pointer;
  }
`;

const SwiperContainer = styled.div`
  margin-bottom: 0px;

  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

const Home = () => {
   const [data, setData] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
      const fetchData = async () => {
         try {
            // 첫 번째 API 호출
            const weeklyResponse = await axios.get('https://api.mvti.site/info/weekly');
            let combinedData = [{ "Weekly Contents": weeklyResponse.data }];

            // 두 번째 API 호출
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
      <Container className='bg-white dark:bg-black text-black dark:text-white p-2'>
         <PosterContainer >
            <img src="https://via.placeholder.com/1200x400" alt="Featured Movie" />
            <div className="overlay">
               <h2>Featured Movie Title</h2>
               <button onClick={() => navigate('/movie/featured')}>Play</button>
               <button onClick={() => navigate('/movie/featured/info')}>More Info</button>
            </div>
         </PosterContainer>
         {data.map((category, index) => {
            const [categoryName, medias] = Object.entries(category)[0];
            return (
               <SwiperSlider key={index} categoryName={categoryName} medias={medias} navigate={navigate} />
            );
         })}
      </Container>
   );
};

const SwiperSlider = ({ categoryName, medias, navigate }) => {
   const swiperRef = useRef(null);

   useEffect(() => {
      register();

      const params = {
         loop: true,
         breakpoints: {
            0: {
               slidesPerView: 2,
               spaceBetween: 10,
            },
            480: {
               slidesPerView: 3,
               spaceBetween: 10,
            },
            768: {
               slidesPerView: 4,
               spaceBetween: 10,
            },
            1024: {
               slidesPerView: 5,
               spaceBetween: 10,
            },
            1440: {
               slidesPerView: 6,
               spaceBetween: 10,
            },
            1620: {
               slidesPerView: 7,
               spaceBetween: 10,
            },
            1800: {
               slidesPerView: 8,
               spaceBetween: 10,
            }
         },
      };

      Object.assign(swiperRef.current, params);
      swiperRef.current.initialize();
   }, []);

   const handleClick = (e, movieId) => {
      navigate(`/content/${movieId}`);
   };

   return (
      <SwiperContainer className='bg-white dark:bg-black text-black dark:text-white p-2 rounded-md'>
         <h2>{categoryName}</h2>
         <swiper-container init="false" ref={swiperRef}>
            {medias.map((media) => (
               <swiper-slide key={media.id}>
                  <MediaItem onClick={(e) => handleClick(e, media.id)}>
                     <img src={`https://mvti.site/thumbnail/${media.id}/0`} alt={media.id} />
                     <p>{media.title}</p>
                  </MediaItem>
               </swiper-slide>
            ))}
         </swiper-container>
      </SwiperContainer>
   );
};

export default Home;
