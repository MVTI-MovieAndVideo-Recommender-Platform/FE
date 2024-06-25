import React, { useEffect, useState, useCallback, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import LoadingSpinner from '../component/state/LoadingSpinner';
import { useSetRecoilState } from 'recoil';
import { resultState, userMbtiState, initialPreferredMediasState, previousRecommendationsState } from '../component/state/atoms';

const MVTITestPage = () => {
    const [selectedIE, setSelectedIE] = useState('I');
    const [selectedSN, setSelectedSN] = useState('S');
    const [selectedTF, setSelectedTF] = useState('T');
    const [selectedJP, setSelectedJP] = useState('J');
    const [selectedMBTI, setSelectedMBTI] = useState('');
    const [selectedMedias, setSelectedMedias] = useState([]);
    const [medias, setMedias] = useState([]);
    const [loading, setLoading] = useState(true);
    const previousMediaIds = useRef([]);
    const navigate = useNavigate();

    const setResultState = useSetRecoilState(resultState);
    const setUserMbtiState = useSetRecoilState(userMbtiState);
    const setInitialPreferredMediasState = useSetRecoilState(initialPreferredMediasState);
    const setPreviousRecommendationsState = useSetRecoilState(previousRecommendationsState);

    useEffect(() => {
        const fetchInitialMedias = async () => {
            try {
                const response = await axios.get('https://api.mvti.site/info/rank_random_20');
                if (response.data && response.data.media) {
                    setMedias(response.data.media);
                    previousMediaIds.current = response.data.media.map(media => media.id);
                } else {
                    console.error('Unexpected response format:', response);
                }
            } catch (error) {
                console.error('Error fetching movies:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchInitialMedias();
    }, []);

    useEffect(() => {
        setSelectedMBTI(`${selectedIE}${selectedSN}${selectedTF}${selectedJP}`);
    }, [selectedIE, selectedSN, selectedTF, selectedJP]);


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

    const handleFetchNewRecommendations = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://api.mvti.site/info/re_rank_random_20', {
                params: { previousmedia: previousMediaIds.current },
                paramsSerializer: params => {
                    return qs.stringify(params, { arrayFormat: 'repeat' });
                }
            });
            if (response.data && response.data.movies) {
                setMedias([...new Set([...response.data.movies])]);
                previousMediaIds.current = [
                    ...new Set([...previousMediaIds.current, ...response.data.movies.map(movie => movie.id)])
                ];
            } else {
                console.error('Unexpected response format:', response);
            }
        } catch (error) {
            console.error('Error fetching new recommendations:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    const removeDuplicateTitles = (medias) => {
        const seen = new Set();
        return medias.filter(media => {
            const duplicate = seen.has(media.title);
            seen.add(media.title);
            return !duplicate;
        });
    };

    const handleSubmit = useCallback(async () => {
        if (selectedMedias.length === 0) {
            alert('아무것도 고르지 않았습니다. 최소 하나의 선호 미디어를 선택해주세요.');
            return;
        }

        setLoading(true);
        const userMbti = selectedMBTI;
        const userMediaTitle = selectedMedias.map(media => media.title);

        try {
            const response = await axios.post('https://api.mvti.site/recommend/first_recommend', {
                user_mbti: userMbti,
                input_media_title: userMediaTitle
            });
            console.log("결과:", response.data.result);
            // Recoil 상태 업데이트
            setResultState(removeDuplicateTitles(response.data.result));
            setUserMbtiState(userMbti);
            setPreviousRecommendationsState(response.data.result.map(media => media.title))
            setInitialPreferredMediasState(userMediaTitle);
            navigate('/mvti_result');
        } catch (error) {
            console.error('Error submitting recommendation request:', error);
            setLoading(false);
        }
    }, [selectedMBTI, selectedMedias, navigate, setResultState, setUserMbtiState, setInitialPreferredMediasState, setPreviousRecommendationsState]);

    if (loading) {
        return (
            <div className="container mx-auto p-4 bg-gray-100 text-white bg-opacity-75 min-h-screen">
                <LoadingSpinner />
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 pt-10 bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
        <h1 className="text-3xl font-bold m-6 text-center">MVTI 검사하기</h1>
        <p className="mb-6 text-center mb-4">
            버튼을 클릭하여 나의 MBTI 입력 후,
            <br />
            하단의 컨텐츠를 골라주세요!
            <br />
            원하는 것이 없을 땐 좌측 '새 리스트 출력' 클릭!
            <br />
            선택 완료 후 받아오세요
        </p>
                

            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-center">MBTI 입력</h2>
                <div className="flex justify-center mb-4 space-x-4 p-2">
                    <MBTIButton current={selectedIE} setType={setSelectedIE} />
                    <MBTIButton current={selectedSN} setType={setSelectedSN} />
                    <MBTIButton current={selectedTF} setType={setSelectedTF} />
                    <MBTIButton current={selectedJP} setType={setSelectedJP} />
                </div>
                <div className="text-center mt-4">
                    <span className="text-xl font-bold">나의 MBTI: {selectedMBTI}</span>
                </div>
            </div>

            {selectedMedias.length > 0 && (
                <div className="m-3 p-3 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-center">선택 컨텐츠 :</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {selectedMedias.map((media) => (
                            <SelectedMediaCard key={media.id} media={media} onRemove={handleMediaRemove} />
                        ))}
                    </div>
                </div>
            )}

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-center">애정하는 컨텐츠를 골라주세요! </h2>
                <div className="flex justify-between mb-4">
                    <button
                        className="py-2 px-4 rounded bg-blue-500 text-white"
                        onClick={handleFetchNewRecommendations}
                    >
                        새로고침
                    </button>
                    <button
                        className="py-2 px-4 rounded bg-green-500 text-white"
                        onClick={handleSubmit}
                    >
                        선택완료
                    </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-300 dark:bg-gray-700 text-white dark:text-black">
                    {medias.map((media, index) => (
                        <MediaCard key={`${media.id}-${index}`} media={media} isSelected={selectedMedias.includes(media)} onSelect={handleMediaSelect} />
                    ))}
                </div>
                <div className="flex justify-between mb-4">
                    <button
                        className="py-2 px-4 rounded bg-blue-500 text-white"
                        onClick={handleFetchNewRecommendations}
                    >
                        새로고침
                    </button>
                    <button
                        className="py-2 px-4 rounded bg-green-500 text-white"
                        onClick={handleSubmit}
                    >
                        선택완료
                    </button>
                </div>
            </div>
        </div>
    );
};

const MBTIButton = React.memo(({ current, setType }) => (
    <button
    className="hover:bg-gray-200 dark:hover:bg-gray-600 bg-gray-300 dark:bg-gray-700 py-4 px-6 rounded  text-xl text-black dark:text-white"
        onClick={() => setType(current === 'I' ? 'E' : current === 'E' ? 'I' :
            current === 'S' ? 'N' : current === 'N' ? 'S' :
                current === 'T' ? 'F' : current === 'F' ? 'T' :
                    current === 'J' ? 'P' : 'J')}
    >
        {current}
    </button>
));

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
        className="dark:bg-gray-300 bg-gray-700 dark:text-white text-white py-2 px-4 rounded cursor-pointer"
        onClick={() => onRemove(media)}
    >
        {media.title}
    </span>
));

export default React.memo(MVTITestPage);
