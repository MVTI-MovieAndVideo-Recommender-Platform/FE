//<Route path="genre/:id" element={<MVTIGenrePage/>} />
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGenreID } from '../component/Media/FetchGenreID.js'; // 적절한 경로로 변경하세요
import Card from '../component/Media/Card.js'; // 적절한 경로로 변경하세요

const GenrePage = () => {
  const { id } = useParams();
  const [mediaData, setMediaData] = useState([]);
  const genreId = parseInt(id, 10);

  useEffect(() => {
    fetchGenreID((data) => {
      const filteredData = data.filter(media => media.genre_ID.includes(genreId));
      setMediaData(filteredData);
    });
  }, [genreId]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Genre: {genreId}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mediaData.map(media => (
          <Card
            key={media.id}
            id={media.id}
            posterurl={media.posterurl[0] || ''}
            title={media.title}
            release_date={media.release_date}
            genre={media.genre}
            platform={media.platform}
            rating_value={media.rating_value}
          />
        ))}
      </div>
    </div>
  );
};

export default GenrePage;