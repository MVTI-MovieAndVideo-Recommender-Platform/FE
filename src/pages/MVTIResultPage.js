import React, { useEffect, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../component/state/LoadingSpinner';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { resultState, userMbtiState, initialPreferredMediasState, previousRecommendationsState } from '../component/state/atoms';

const MvtiResultPage = () => {
  const result = useRecoilValue(resultState);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const medias = Array.isArray(result) ? result : [];

  useEffect(() => {
    if (result.length > 0) {
      setLoading(false);
    }
  }, [result]);

  const handleReRecommend = useCallback(() => {
    navigate('/re_mvti_test');
  }, [navigate]);

  if (loading) {
    return (
      <div className=' fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center '>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4  bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <h1 className="text-3xl font-bold pb-6 pt-10 p-5 text-center">추천 컨텐츠</h1>
      <div className="mt-8 text-center">
        <button
          className="py-2 px-4 m-5 rounded bg-green-500 text-white"
          onClick={handleReRecommend}
        >
          재추천
        </button>
        <Link to="/" className="py-2 px-4 m-5 rounded bg-blue-500 text-white">
          홈으로
        </Link>
        </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {medias.map((media, index) => (
          <MediaCard key={`${media.id}-${index}`} media={media} navigate={navigate} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          className="py-2 px-4 m-5 rounded bg-green-500 text-white"
          onClick={handleReRecommend}
        >
          재추천
        </button>
        <Link to="/" className="py-2 px-4 m-5 rounded bg-blue-500 text-white">
          홈으로
        </Link>
      </div>
    </div>
  );
};

const MediaCard = React.memo(({ media, navigate }) => (
  <div className="text-center cursor-pointer" onClick={() => navigate(`/content/${media.id}`)}>
    <div className="relative transition-transform duration-300 transform hover:scale-105">
      <img
        src={`https://mvti.site/poster/${media.id}/0`}
        alt={media.title}
        className="rounded-lg w-full h-auto"
        loading="lazy"
      />
    </div>
    <p className="mt-2">{media.title}</p>
  </div>
));

export default React.memo(MvtiResultPage);
