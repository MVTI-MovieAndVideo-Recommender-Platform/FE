import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import LoadingSpinner from '../component/state/LoadingSpinner';

const MvtiResultPage = () => {
  const location = useLocation();
  const { result } = location.state || {};
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (result) {
      setLoading(false);
    }
  }, [result]);

  // result가 배열인지 확인하고 배열이 아닐 경우 빈 배열로 초기화
  const movies = Array.isArray(result) ? result : [];

  return (
    <div className="container mx-auto p-4 bg-gray-900 text-white min-h-screen">
      {loading && <LoadingSpinner />}
      {!loading && (
        <>
          <h1 className="text-3xl font-bold mb-6 text-center">추천 컨텐츠</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <div key={movie.id} className="text-center">
                <img
                  src={`https://mvti.site/poster/${movie.id}/0`}
                  alt={movie.title}
                  className="rounded w-full h-auto"
                />
                <p className="mt-2">{movie.title}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/mvti_re_test" className="py-2 px-4 m-5 rounded bg-green-500 text-white">
              재추천
            </Link>
            <Link to="/" className="py-2 px-4 m-5 rounded bg-blue-500 text-white">
              Back to Home
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default MvtiResultPage;
