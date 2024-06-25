import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../component/state/LoadingSpinner';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { resultState, userMbtiState, initialPreferredMediasState, previousRecommendationsState } from '../component/state/atoms';

const MvtiReTestPage = () => {
    const result = useRecoilValue(resultState);
    const userMbti = useRecoilValue(userMbtiState);
    const initialPreferredMedias = useRecoilValue(initialPreferredMediasState);
    const previousRecommendations = useRecoilValue(previousRecommendationsState);

    const [loading, setLoading] = useState(false);
    const [selectedMedias, setSelectedMedias] = useState([]);
    const navigate = useNavigate();
    const medias = Array.isArray(result) ? result : [];

    const setResultState = useSetRecoilState(resultState);
    const setInitialPreferredMediasState = useSetRecoilState(initialPreferredMediasState);
    const setPreviousRecommendationsState = useSetRecoilState(previousRecommendationsState);

    useEffect(() => {
        if (result.length > 0) {
            setLoading(false);
        }
    }, [result]);

    const handleMediaSelect = useCallback((media) => {
        setSelectedMedias(prevSelected =>
            prevSelected.includes(media)
                ? prevSelected.filter(m => m !== media)
                : [...prevSelected, media]
        );
    }, []);

    const handleMediaRemove = useCallback((media) => {
        setSelectedMedias(prevSelected => prevSelected.filter(m => m !== media));
    }, []);

    const removeDuplicateTitles = (medias) => {
        const seen = new Set();
        return medias.filter(media => {
            const duplicate = seen.has(media.title);
            seen.add(media.title);
            return !duplicate;
        });
    };

    const handleReRecommend = useCallback(async () => {
        if (selectedMedias.length === 0) {
            alert('아무것도 고르지 않았습니다. 최소 하나의 선호 미디어를 선택해주세요.');
            return;
        }

        setLoading(true);
        const selectedMovieTitles = selectedMedias.map(media => media.title);
        const combinedMediaTitles = Array.from(new Set([...previousRecommendations, ...initialPreferredMedias]));

        try {
            const response = await axios.post('https://api.mvti.site/recommend/re_recommend', {
                user_mbti: userMbti,
                input_media_title: selectedMovieTitles,
                previous_recommendations: combinedMediaTitles
            });
            setResultState(removeDuplicateTitles(response.data.result));
            setPreviousRecommendationsState(response.data.result.map(media => media.title));
            setInitialPreferredMediasState(combinedMediaTitles);

            navigate('/mvti_result');
        } catch (error) {
            console.error('Error fetching new recommendations:', error);
            setLoading(false);
        }
    }, [selectedMedias, navigate, setResultState, setInitialPreferredMediasState, setPreviousRecommendationsState, userMbti, previousRecommendations, initialPreferredMedias]);

    if (loading) {
        return (
            <div className="container mx-auto p-4 bg-gray-900 text-white min-h-screen">
                <LoadingSpinner />
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 bg-gray-900 text-white min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">다시 추천받을 컨텐츠</h1>

            {selectedMedias.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Selected Contents:</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {selectedMedias.map((movie) => (
                            <SelectedMediaCard key={movie.id} media={movie} onRemove={handleMediaRemove} />
                        ))}
                    </div>
                </div>
            )}

            <div className="mt-8 text-center">
                <button
                    className="py-2 px-4 m-5 rounded bg-green-500 text-white"
                    onClick={handleReRecommend}
                >
                    재추천 받기
                </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {medias.map((media, index) => (
                    <MediaCard
                        key={`${media.id}-${index}`}
                        media={media}
                        isSelected={selectedMedias.includes(media)}
                        onSelect={handleMediaSelect}
                    />
                ))}
            </div>
            <div className="text-center">
                <button
                    className="py-2 px-4 rounded bg-green-500 text-white"
                    onClick={handleReRecommend}
                >
                    재추천 받기
                </button>
            </div>
        </div>
    );
};

const MediaCard = React.memo(({ media, isSelected, onSelect }) => (
    <div className="text-center cursor-pointer" onClick={() => onSelect(media)}>
        <div className={`relative ${isSelected ? 'ring-4 ring-blue-500' : ''}`}>
            <img
                src={`https://mvti.site/poster/${media.id}/0`}
                alt={media.title}
                className="rounded-lg w-full h-auto transition-transform duration-300 transform hover:scale-105"
                loading="lazy"
            />
            {isSelected && (
                <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1">
                    ✓
                </div>
            )}
        </div>
        <p className="mt-2">{media.title}</p>
    </div>
));

const SelectedMediaCard = React.memo(({ media, onRemove }) => (
    <span
        className="bg-gray-800 py-2 px-4 rounded cursor-pointer"
        onClick={() => onRemove(media)}
    >
        {media.title}
    </span>
));

export default React.memo(MvtiReTestPage);
