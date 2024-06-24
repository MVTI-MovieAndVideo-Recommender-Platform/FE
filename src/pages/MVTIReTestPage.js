import React, { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../component/state/LoadingSpinner';

const MvtiReTestPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { result, userMbti, previousRecommendations, initialPreferredMovies } = location.state || {};
    const [loading, setLoading] = useState(false);
    const [selectedMovies, setSelectedMovies] = useState([]);
    const movies = Array.isArray(result) ? result : [];

    const handleMovieSelect = (movie) => {
        if (selectedMovies.includes(movie)) {
            setSelectedMovies(selectedMovies.filter(m => m !== movie));
        } else {
            setSelectedMovies([...selectedMovies, movie]);
        }
    };

    const handleReRecommend = async () => {
        setLoading(true);
        const selectedMovieTitles = selectedMovies.map(movie => movie.title);
        const previousMovieTitles = previousRecommendations.map(movie => movie.title);
        const initialPreferredMovieTitles = initialPreferredMovies.map(movie => movie.title);

        await axios.post('https://api.mvti.site/recommend/re_recommend', {
            user_mbti: userMbti,
            previous_recommendations: previousMovieTitles,
            initial_preferred_movies: initialPreferredMovieTitles,
            input_media_title: selectedMovieTitles
        })
            .then(response => {
                navigate('/mvti_re_test_result', { state: { result: response.data.result } });
            })
            .catch(error => {
                console.error('Error fetching new recommendations:', error);
                setLoading(false);
            });
    };

    return (
        <div className="container mx-auto p-4 bg-gray-900 text-white min-h-screen">
            {loading && <LoadingSpinner />}
            {!loading && (
                <>
                    <h1 className="text-3xl font-bold mb-6 text-center">다시 추천받을 컨텐츠 선택</h1>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {movies.map((movie) => (
                            <div key={movie.id} className="text-center cursor-pointer" onClick={() => handleMovieSelect(movie)}>
                                <img
                                    src={`https://mvti.site/poster/${movie.id}/0`}
                                    alt={movie.title}
                                    className={`rounded w-full h-auto ${selectedMovies.includes(movie) ? 'border-4 border-blue-500' : ''}`}
                                />
                                <p className="mt-2">{movie.title}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <button
                            className="py-2 px-4 m-5 rounded bg-green-500 text-white"
                            onClick={handleReRecommend}
                        >
                            재추천 받기
                        </button>
                        <Link to="/" className="py-2 px-4 m-5 rounded bg-blue-500 text-white">
                            홈으로
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default MvtiReTestPage;
