// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import "tailwindcss/tailwind.css"; // Tailwind CSS 스타일링
// import "daisyui/dist/full.css"; // DaisyUI 스타일링

// const MediaDetail = ({ id }) => {
//   const [mediaData, setMediaData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://api.mvti.site/info/search');
//         const data = response.data.results;
//         const mediaItem = data.find(item => item.id === id);

//         if (mediaItem) {
//           setMediaData(mediaItem);
//         }
//       } catch (error) {
//          //error 페이지 + gif
//         console.error('Error fetching media data:', error);
//       }
//     };

//     fetchData();
//   }, [id]);

//   if (!mediaData) {
//    return <div className="flex justify-center items-center h-screen">
//       <div className="text-center">
//          <div className="loader border-t-4 border-b-4 border-gray-900 rounded-full w-16 h-16"></div>
//           <p>Loading...</p>
//          </div>
//       </div>;
//   }

//   const {
//    title,
//    runtime,
//    release_date,
//    certification,
//    genre,
//    origin_country,
//    overview,
//    director,
//    actor,
//    platform,
//    rating_value,
//    rating_count,
//    posterurl_count,
//    backdropurl_count,
//    posterurl,
//    backdropurl,
//    contentype
//  } = mediaData;

//  const posterImages = posterurl_count > 0 ? posterurl : [];
//  const backdropImages = backdropurl_count > 0 ? backdropurl : [];

//  const sliderSettings = {
//    dots: true,
//    infinite: true,
//    speed: 500,
//    slidesToShow: 1,
//    slidesToScroll: 1
//  };

//     return (
//     <div className="container mx-auto p-4">
//       <div className="card card-compact w-96 bg-base-100 shadow-xl">
//         <figure>
//           <img src={posterImages[0] || ''} alt="Poster" />
//         </figure>
//         <div className="card-body">
//           <h2 className="title">{title}</h2>
//           <h5 className="release_date">{release_date}</h5>
//           <h5>{runtime}
//             <p>{origin_country}</p>
//             <p>{certification}</p>
//             <p>{director}</p>
//             <p>{actor}</p>
//             <p>{rating_count}</p>
//             {contentype}
//          </h5>
          
//           <h5 className="genre">{genre.join(', ')}</h5>
//           <h5 className="platform">{platform.join(', ')}</h5>
//           <h5 className="rating_value">{rating_value}</h5>
//           <p className="data_summary_short">{overview}</p>
//         </div>
//         {backdropurl_count > 0 && (
//           <img src={backdropImages[0]} alt="Backdrop" className="data-backdrop" />
//         )}
//       </div>
//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">포스터 이미지</h2>
//         {posterImages.length > 0 ? (
//           <Slider {...sliderSettings}>
//             {posterImages.map((url, index) => (
//               <div key={index} className="w-full h-64">
//                 <img src={url} alt={`Poster ${index + 1}`} className="w-full h-full object-cover" />
//               </div>
//             ))}
//           </Slider>
//         ) : (
//           <p>포스터 이미지가 없습니다.</p>
//         )}
//       </div>
//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">백드롭 이미지</h2>
//         {backdropImages.length > 0 ? (
//           <Slider {...sliderSettings}>
//             {backdropImages.map((url, index) => (
//               <div key={index} className="w-full h-64">
//                 <img src={url} alt={`Backdrop ${index + 1}`} className="w-full h-full object-cover" />
//               </div>
//             ))}
//           </Slider>
//         ) : (
//           <p>백드롭 이미지가 없습니다.</p>
//         )}
//       </div>
//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">갤러리</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {posterImages.concat(backdropImages).map((url, index) => (
//             <div key={index} className="w-full h-64">
//               <img src={url} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default MediaDetail;



// //피쳐: id,title,runtime,release_date,certification,genre,origin_country,overview,director,actor,platform,rating_value,rating_count,posterurl_count,backdropurl_count,posterurl,backdropurl,contentype,
// //   function Media({
// //   id,
// //   title,
// //   runtime,
// //   release_date,
// //   certification,
// //   genre,
// //   origin_country,
// //   overview,
// //   director,
// //   actor,
// //   platform,
// //   rating_value,
// //   rating_count,
// //   posterurl_count,
// //   backdropurl_count,
// //   posterurl,
// //   backdropurl,
// //   contentype,
// //}) //all, movie, series!!!