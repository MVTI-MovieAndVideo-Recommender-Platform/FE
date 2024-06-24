import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import LoadingSpinner from '../component/state/LoadingSpinner';

const MVTITestPage = () => {
    const [selectedIE, setSelectedIE] = useState('I');
    const [selectedSN, setSelectedSN] = useState('S');
    const [selectedTF, setSelectedTF] = useState('T');
    const [selectedJP, setSelectedJP] = useState('J');
    const [selectedMBTI, setSelectedMBTI] = useState('');
    const [selectedMedias, setSelectedMedias] = useState([]);
    const [medias, setMedias] = useState([]);
    const [loading, setLoading] = useState(false);
    const previousMediaIds = useRef([]);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios.get('https://api.mvti.site/info/rank_random_20')
            .then(response => {
                if (response.data && response.data.media) {
                    setMedias(response.data.media);
                    previousMediaIds.current = response.data.media.map(media => media.id);
                } else {
                    console.error('Unexpected response format:', response);
                }
            })
            .catch(error => console.error('Error fetching movies:', error))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        setSelectedMBTI(`${selectedIE}${selectedSN}${selectedTF}${selectedJP}`);
    }, [selectedIE, selectedSN, selectedTF, selectedJP]);

    const handleToggle = (current, setType) => {
        setType(current === 'I' ? 'E' : current === 'E' ? 'I' :
            current === 'S' ? 'N' : current === 'N' ? 'S' :
                current === 'T' ? 'F' : current === 'F' ? 'T' :
                    current === 'J' ? 'P' : 'J');
    };

    const handleMediaSelect = (media) => {
        if (selectedMedias.includes(media)) {
            setSelectedMedias(selectedMedias.filter(m => m !== media));
        } else {
            setSelectedMedias([...selectedMedias, media]);
        }
    };

    const handleMediaRemove = (media) => {
        setSelectedMedias(selectedMedias.filter(m => m !== media));
    };

    const handleFetchNewRecommendations = async () => {
        setLoading(true);
        await axios.get('https://api.mvti.site/info/re_rank_random_20', {
            params: { previousmedia: previousMediaIds.current },
            paramsSerializer: params => {
                return qs.stringify(params, { arrayFormat: 'repeat' });
            }
        })
            .then(response => {
                if (response.data && response.data.movies) {
                    setMedias(response.data.movies);
                    previousMediaIds.current = [
                        ...new Set([...previousMediaIds.current, ...response.data.movies.map(movie => movie.id)])
                    ];
                } else {
                    console.error('Unexpected response format:', response);
                }
            })
            .catch(error => console.error('Error fetching new recommendations:', error))
            .finally(() => setLoading(false));
    };



    const handleSubmit = async () => {
        setLoading(true);


        const userMbti = selectedMBTI;
        const userMediaTitle = selectedMedias.map(media => media.title);

        const startTime = Date.now();
        await axios.post('https://api.mvti.site/recommend/first_recommend', {
            user_mbti: userMbti,
            input_media_title: userMediaTitle
        })
            .then(response => {
                const endTime = Date.now();
                // setLoading(((endTime - startTime) / 1000).toFixed(2));
                setLoading(true);
                navigate('/mvti_result', { state: { result: response.data.result } });
            })
            .catch(error => {
                console.error('Error submitting recommendation request:', error);
                setLoading(false);
            });
    };

    return (
        <div className="container mx-auto p-4 bg-gray-900 text-white min-h-screen">
            {loading && <LoadingSpinner />}
            {!loading && (
                <>
                    <h1 className="text-3xl font-bold mb-6 text-center">Select Your MBTI and Favorite Contents</h1>

                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-center">Select MBTI:</h2>
                        <div className="flex justify-center mb-4 space-x-4">
                            <button
                                className="py-4 px-6 rounded bg-gray-700 text-xl"
                                onClick={() => handleToggle(selectedIE, setSelectedIE)}
                            >
                                {selectedIE}
                            </button>
                            <button
                                className="py-4 px-6 rounded bg-gray-700 text-xl"
                                onClick={() => handleToggle(selectedSN, setSelectedSN)}
                            >
                                {selectedSN}
                            </button>
                            <button
                                className="py-4 px-6 rounded bg-gray-700 text-xl"
                                onClick={() => handleToggle(selectedTF, setSelectedTF)}
                            >
                                {selectedTF}
                            </button>
                            <button
                                className="py-4 px-6 rounded bg-gray-700 text-xl"
                                onClick={() => handleToggle(selectedJP, setSelectedJP)}
                            >
                                {selectedJP}
                            </button>
                        </div>
                        <div className="text-center mt-4">
                            <span className="text-xl font-bold">Your MBTI: {selectedMBTI}</span>
                        </div>
                    </div>

                    {selectedMedias.length > 0 && (
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold mb-4 text-center">Selected Contents:</h2>
                            <div className="flex flex-wrap justify-center gap-4">
                                {selectedMedias.map((movie) => (
                                    <span
                                        key={movie.id}
                                        className="bg-gray-800 py-2 px-4 rounded cursor-pointer"
                                        onClick={() => handleMediaRemove(movie)}
                                    >
                                        {movie.title}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-center">Select Favorite Contents:</h2>
                        <div className="flex justify-between mb-4">
                            <button
                                className="py-2 px-4 rounded bg-blue-500 text-white mr-auto"
                                onClick={handleFetchNewRecommendations}
                            >
                                새로운 컨텐츠 리스트업
                            </button>
                            <button
                                className="py-2 px-4 rounded bg-green-500 text-white ml-auto"
                                onClick={handleSubmit}
                            >
                                추천받기
                            </button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {medias.map((movie) => (
                                <div key={movie.id} className="cursor-pointer" onClick={() => handleMediaSelect(movie)}>
                                    <img
                                        src={`https://mvti.site/poster/${movie.id}/0`}
                                        alt={movie.title}
                                        className={`rounded w-full h-auto ${selectedMedias.includes(movie) ? 'border-4 border-blue-500' : ''}`}
                                    />
                                    <p className="text-center mt-2">{movie.title}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mb-4">
                            <button
                                className="py-2 px-4 rounded bg-blue-500 text-white mr-auto"
                                onClick={handleFetchNewRecommendations}
                            >
                                새로운 컨텐츠 리스트업
                            </button>
                            <button
                                className="py-2 px-4 rounded bg-green-500 text-white ml-auto"
                                onClick={handleSubmit}
                            >
                                추천받기
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default MVTITestPage;
