import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import Card from './Card';

const Media_Detail = ({ id }) => {
  const [mediaData, setMediaData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.mvti.site/info/search');
        const data = response.data.results;
        const mediaItem = data.find(item => item.id === id);

        if (mediaItem) {
          setMediaData(mediaItem);
        }
      } catch (error) {
        console.error('Error fetching media data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!mediaData) {
    return <div>Loading...</div>;
  }

  const { title, release_date, genre, platform, rating_value, posterurl, posterurl_count } = mediaData;
  const posterSrc = posterurl_count > 0 ? posterurl[0] : '';

  return (
    <Card
      id={id}
      posterurl={posterSrc}
      title={title}
      release_date={release_date}
      genre={genre}
      platform={platform}
      rating_value={rating_value}
    />
  );
};

export default  Media_Detail;



//피쳐: id,title,runtime,release_date,certification,genre,origin_country,overview,director,actor,platform,rating_value,rating_count,posterurl_count,backdropurl_count,posterurl,backdropurl,contentype,
//   function Media({
//   id,
//   title,
//   runtime,
//   release_date,
//   certification,
//   genre,
//   origin_country,
//   overview,
//   director,
//   actor,
//   platform,
//   rating_value,
//   rating_count,
//   posterurl_count,
//   backdropurl_count,
//   posterurl,
//   backdropurl,
//   contentype,
//}) //all, movie, series!!!