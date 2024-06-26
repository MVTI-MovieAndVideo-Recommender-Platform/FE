import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { debounce } from 'lodash';
import LoadingSpinner from '../component/state/LoadingSpinner';
import qs from 'qs';

const genres = [
    ['코미디', '시트콤'],
    ['드라마'],
    ['애니메이션'],
    ['로맨스'],
    ['로맨틱 코미디'],
    ['액션', 'Action & Adventure'],
    ['공포', '스릴러'],
    ['TV드라마'],
    ['미스터리'],
    ['범죄'],
    ['뮤지컬'],
    ['모험', '재난'],
    ['가족'],
    ['시사교양'],
    ['서부', '서부극'],
    ['TV 영화'],
    ['예능'],
    ['단편'],
    ['역사', '전기', '시대극'],
    ['Kids', '키즈'],
    ['Western', 'Drama'],
    ['다큐멘터리'],
    ['판타지', 'SF', 'Sci-Fi & Fantasy'],
    ['음악', 'Talk'],
    ['News'],
    ['틴에이저'],
    ['Reality'],
    ['공연실황'],
    ['GL', 'BL'],
    ['일상'],
    ['Soap'],
    ['전쟁', 'War & Politics'],
    ['스포츠']
];
const countries = [
    "한국", "미국", "일본", "중국", "프랑스", "독일", "이탈리아", "인도", "브라질", "캐나다",
    "호주", "스페인", "러시아", "멕시코", "영국", "아르헨티나", "콜롬비아", "남아프리카 공화국",
    "이집트", "태국", "스웨덴", "스위스", "네덜란드", "사우디아라비아", "폴란드", "벨기에",
    "그리스", "헝가리", "체코", "포르투갈"
];
const platforms = ["watcha", "wavve", "tving", "disneyplus", "netflix"];

const SearchPage = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [filters, setFilters] = useState({
        country: [],
        genre: [],
        yearGte: '',
        yearLte: '',
        keyword: '',
        title: '',
        director: '',
        actor: '',
        platform: [],
    });
    const [loading, setLoading] = useState(false);
    const [isFilter, setIsFilter] = useState(false);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [currentFilterType, setCurrentFilterType] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedStartDate, setSelectedStartDate] = useState('');
    const [selectedEndDate, setSelectedEndDate] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [selectedPlatforms, setSelectedPlatforms] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchResults = useCallback(async (resetPage = false) => {
        setLoading(true);
        const params = isFilter ? {
            countries: filters.country,
            genres: filters.genre,
            titles: filters.title.split(',').map(item => item.trim()),
            keywords: filters.keyword.split(',').map(item => item.trim()),
            directors: filters.director.split(',').map(item => item.trim()),
            actors: filters.actor.split(',').map(item => item.trim()),
            platforms: filters.platform,
            start_date: filters.yearGte,
            end_date: filters.yearLte,
            isfilter: isFilter,
            page: resetPage ? 1 : page
        } : {
            anything: query,
            page: resetPage ? 1 : page
        };
        try {
            const response = await axios.get('https://api.mvti.site/info/search', {
                params,
                paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
            });
            if (resetPage) {
                setResults(response.data.results);
            } else {
                setResults(prevResults => [...prevResults, ...response.data.results]);
            }
            setTotalPages(response.data.total_pages);
        } catch (error) {
            console.error('Error fetching results:', error);
        }
        setLoading(false);
    }, [query, filters, isFilter, page]);

    useEffect(() => {
        const checkEmptyFields = () => {
            const allFieldsEmpty = Object.values(filters).every(
                value => (Array.isArray(value) && value.length === 0) || value === ''
            );
            if (!allFieldsEmpty) {
                fetchResults(true);
            }
        };
        checkEmptyFields();
    }, [filters, fetchResults]);

    const debouncedFetchResults = useCallback(
        debounce(() => {
            fetchResults(true);
        }, 1000),
        [fetchResults]
    );

    useEffect(() => {
        if (!isFilter && query) {
            debouncedFetchResults();
        }
        return () => {
            debouncedFetchResults.cancel();
        };
    }, [query, debouncedFetchResults, isFilter]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 50) {
                if (page < totalPages) {
                    setPage(prevPage => prevPage + 1);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [page, totalPages]);

    useEffect(() => {
        if (page > 1) {
            fetchResults();
        }
    }, [page, fetchResults]);

    useEffect(() => {
        setResults([]);
        setPage(1);
        document.documentElement.scrollTop = 0;
    }, [isFilter]);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleFilterButtonClick = (filterType) => {
        setCurrentFilterType(filterType);
        if (filterType === 'Country') {
            setSelectedOptions(countries);
            setSelectedCountries(filters.country);
        } else if (filterType === 'Genre') {
            setSelectedOptions(genres);
            setSelectedGenres(filters.genre);
        } else if (filterType === 'Platform') {
            setSelectedOptions(platforms);
            setSelectedPlatforms(filters.platform);
        } else if (['Keyword', 'Title', 'Director', 'Actor'].includes(filterType)) {
            setInputValue(filters[filterType.toLowerCase()]);
        }
        setIsFilterModalOpen(true);
    };

    const handleOptionChange = (option) => {
        if (currentFilterType === 'Country') {
            setSelectedCountries((prevOptions) =>
                prevOptions.includes(option)
                    ? prevOptions.filter((opt) => opt !== option)
                    : [...prevOptions, option]
            );
        } else if (currentFilterType === 'Genre') {
            setSelectedGenres((prevOptions) =>
                prevOptions.includes(option)
                    ? prevOptions.filter((opt) => opt !== option)
                    : [...prevOptions, option]
            );
        } else if (currentFilterType === 'Platform') {
            setSelectedPlatforms((prevOptions) =>
                prevOptions.includes(option)
                    ? prevOptions.filter((opt) => opt !== option)
                    : [...prevOptions, option]
            );
        }
    };

    const handleFilterConfirm = () => {
        const updatedFilters = { ...filters };
        if (currentFilterType === 'Country') {
            updatedFilters.country = selectedCountries;
        } else if (currentFilterType === 'Genre') {
            updatedFilters.genre = selectedGenres;
        } else if (currentFilterType === 'Platform') {
            updatedFilters.platform = selectedPlatforms;
        } else if (['Keyword', 'Title', 'Director', 'Actor'].includes(currentFilterType)) {
            updatedFilters[currentFilterType.toLowerCase()] = inputValue;
        } else if (currentFilterType === 'Year') {
            updatedFilters.yearGte = selectedStartDate;
            updatedFilters.yearLte = selectedEndDate;
        }
        setFilters(updatedFilters);
        setIsFilterModalOpen(false);
    };

    const handleFilterClose = () => {
        setSelectedOptions([]);
        setIsFilterModalOpen(false);
    };

    const handleDateChange = (type, value) => {
        if (type === 'start') {
            setSelectedStartDate(value);
        } else if (type === 'end') {
            setSelectedEndDate(value);
        }
    };

    const handleDateFilterConfirm = () => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            yearGte: selectedStartDate,
            yearLte: selectedEndDate,
        }));
        setIsFilterModalOpen(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            debouncedFetchResults.cancel();
            fetchResults(true);
        }
    };

    const toggleFilter = () => {
        setIsFilter(prev => !prev);
    };

    const handleFilterRemove = (filterType, value) => {
        if (['Country', 'Genre', 'Platform'].includes(filterType)) {
            setFilters((prevFilters) => ({
                ...prevFilters,
                [filterType.toLowerCase()]: prevFilters[filterType.toLowerCase()].filter(item => item !== value),
            }));
        } else {
            setFilters((prevFilters) => ({
                ...prevFilters,
                [filterType.toLowerCase()]: prevFilters[filterType.toLowerCase()].replace(value, '').replace(',,', ',').replace(',', '').trim(','),
            }));
        }
        fetchResults(true);
    };

    const handleClick = (movieId) => {
        navigate(`/content/${movieId}`);
    };

    return (
        <div className="items-center bg-white dark:bg-gray-900 text-black dark:text-white w-full min-h-screen rounded-lg flex flex-col pb-8 pt-3">
            <div className="flex items-center mb-4 w-4/5 pt-10 p-3 items-center bg-white dark:bg-gray-900 ">
              
                <button className="btn btn-primary m-3 p-2 rounded-lg bg-gray-200 dark:bg-gray-600 text-black dark:text-white" 
                onClick={toggleFilter}>필터</button>
                {!isFilter && (
                    <input
                        type="text"
                        className="input bg-gray-200 dark:bg-gray-700 input-bordered p-2 w-4/5 m-4 text-black dark:text-gray-200 rounded-lg"
                        placeholder=" 키워드 검색 후 필터 클릭! "
                        value={query}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                    />
                )}
                {isFilter && (
                    <div className="ml-4 flex flex-wrap gap-2">
                        {filters.country.map(country => (
                            <span key={country} className="badge badge-outline cursor-pointer" onClick={() => handleFilterRemove('Country', country)}>
                                {`country: ${country}`}
                            </span>
                        ))}
                        {filters.genre.map(genre => (
                            <span key={genre} className="badge badge-outline cursor-pointer" onClick={() => handleFilterRemove('Genre', genre)}>
                                {`genre: ${genre}`}
                            </span>
                        ))}
                        {filters.yearGte && <span className="badge badge-outline cursor-pointer" onClick={() => handleFilterRemove('Year', filters.yearGte)}>{`From: ${filters.yearGte}`}</span>}
                        {filters.yearLte && <span className="badge badge-outline cursor-pointer" onClick={() => handleFilterRemove('Year', filters.yearLte)}>{`To: ${filters.yearLte}`}</span>}
                        {filters.keyword && filters.keyword.split(',').map(keyword => (
                            <span key={keyword} className="badge badge-outline cursor-pointer" onClick={() => handleFilterRemove('Keyword', keyword)}>
                                {`keyword: ${keyword}`}
                            </span>
                        ))}
                        {filters.title && filters.title.split(',').map(title => (
                            <span key={title} className="badge badge-outline cursor-pointer" onClick={() => handleFilterRemove('Title', title)}>
                                {`title: ${title}`}
                            </span>
                        ))}
                        {filters.director && filters.director.split(',').map(director => (
                            <span key={director} className="badge badge-outline cursor-pointer" onClick={() => handleFilterRemove('Director', director)}>
                                {`Director: ${director}`}
                            </span>
                        ))}
                        {filters.actor && filters.actor.split(',').map(actor => (
                            <span key={actor} className="badge badge-outline cursor-pointer" onClick={() => handleFilterRemove('Actor', actor)}>
                                {`Actor: ${actor}`}
                            </span>
                        ))}
                        {filters.platform.map(platform => (
                            <span key={platform} className="badge badge-outline cursor-pointer" onClick={() => handleFilterRemove('Platform', platform)}>
                                {`Platform: ${platform}`}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            {isFilter && (
                <div className="flex flex-wrap gap-2 justify-center w-full mb-4 p-2">
                    <button className="btn btn-primary p-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 bg-gray-200 dark:bg-gray-700" onClick={() => handleFilterButtonClick('Country')}>국가별</button>
                    <button className="btn btn-primary p-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 bg-gray-200 dark:bg-gray-700" onClick={() => handleFilterButtonClick('Genre')}>장르별</button>
                    <button className="btn btn-primary p-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 bg-gray-200 dark:bg-gray-700" onClick={() => handleFilterButtonClick('Year')}>개봉 연도</button>
                    <button className="btn btn-primary p-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 bg-gray-200 dark:bg-gray-700" onClick={() => handleFilterButtonClick('Keyword')}>키워드</button>
                    <button className="btn btn-primary p-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 bg-gray-200 dark:bg-gray-700" onClick={() => handleFilterButtonClick('Title')}>제목</button>
                    <button className="btn btn-primary p-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 bg-gray-200 dark:bg-gray-700" onClick={() => handleFilterButtonClick('Director')}>제작</button>
                    <button className="btn btn-primary p-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 bg-gray-200 dark:bg-gray-700" onClick={() => handleFilterButtonClick('Actor')}>출연진</button>
                    <button className="btn btn-primary p-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 bg-gray-200 dark:bg-gray-700" onClick={() => handleFilterButtonClick('Platform')}>제공 플랫폼</button>
                </div>
            )}
            {isFilterModalOpen && currentFilterType === 'Country' && (
                <FilterModal
                    isOpen={isFilterModalOpen}
                    onClose={handleFilterClose}
                    onConfirm={handleFilterConfirm}
                    filterType={currentFilterType}
                    options={countries}
                    selectedOptions={selectedCountries}
                    handleOptionChange={handleOptionChange}
                />
            )}
            {isFilterModalOpen && currentFilterType === 'Genre' && (
                <FilterModal
                    isOpen={isFilterModalOpen}
                    onClose={handleFilterClose}
                    onConfirm={handleFilterConfirm}
                    filterType={currentFilterType}
                    options={genres}
                    selectedOptions={selectedGenres}
                    handleOptionChange={handleOptionChange}
                />
            )}
            {isFilterModalOpen && currentFilterType === 'Platform' && (
                <FilterModal
                    isOpen={isFilterModalOpen}
                    onClose={handleFilterClose}
                    onConfirm={handleFilterConfirm}
                    filterType={currentFilterType}
                    options={platforms}
                    selectedOptions={selectedPlatforms}
                    handleOptionChange={handleOptionChange}
                />
            )}
            {isFilterModalOpen && currentFilterType === 'Year' && (
                <DateFilterModal
                    isOpen={isFilterModalOpen}
                    onClose={handleFilterClose}
                    onConfirm={handleDateFilterConfirm}
                    selectedStartDate={selectedStartDate}
                    selectedEndDate={selectedEndDate}
                    handleDateChange={handleDateChange}
                />
            )}
            {isFilterModalOpen && ['Keyword', 'Title', 'Director', 'Actor'].includes(currentFilterType) && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
                    <div className="bg-gray-200 dark:hover:bg-gray-600 bg-gray-300 dark:bg-gray-700 p-4 rounded w-96">
                        <h2 className="text-black dark:text-white mb-4">Filter {currentFilterType}</h2>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="w-full p-2 mb-4 text-xl text-black dark:text-white bg-gray-200 dark:hover:bg-gray-600 bg-gray-300 dark:bg-gray-700 rounded"
                            placeholder={`Enter ${currentFilterType}`}
                        />
                        <div className="flex justify-end">
                            <button
                                className="bg-red-700 text-white px-4 py-2 rounded mr-2 hover:bg-red-800"
                                onClick={handleFilterClose}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
                                onClick={handleFilterConfirm}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {loading ? (
                <div className="fixed inset-0 bg-white-100 bg-opacity-95 flex justify-center items-center w-full h-full">
                <div className="fixed inset-0 bg-white-100 bg-opacity-50 flex justify-center items-center ">
                    <LoadingSpinner />
                </div>
                <LoadingSpinner/>
                </div>
            ) : (
                <div className="flex flex-wrap gap-4 justify-center w-4/5">
                    {results.map((result) => (
                        <div key={result.id} className="text-xl text-black dark:text-white bg-gray-100 dark:bg-gray-600 bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden w-full md:w-1/2 md-p-5 lg:w-1/4 xl:w-1/6 text-center  cursor-pointer" onClick={() => handleClick(result.id)}>
                            <img src={`https://mvti.site/poster/${result.id}/0`} alt={result.id} className="rounded-lg w-full h-auto transition-transform duration-300 transform hover:scale-105"
                                loading="lazy" />
                            <h3 className="p-2 text-lg">{result.title}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const FilterModal = ({ isOpen, onClose, onConfirm, filterType, options, selectedOptions, handleOptionChange }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 bg-opacity-75 pt-10 flex justify-center items-center">
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded w-96">
                <h2 className="text-black dark:text-white mb-4">Filter {filterType}</h2>
                <div className="max-h-48 overflow-y-auto border border-gray-700 p-2 bg-gray-200 dark:bg-gray-700 rounded">
                    {options.map((option, index) => (
                        <label key={index} className="block text-black dark:text-white bg-gray-200 dark:bg-gray-700">
                            <input
                                type="checkbox"
                                value={option}
                                checked={selectedOptions.includes(option)}
                                onChange={() => handleOptionChange(option)}
                                className="mr-2"
                            />
                            {option}
                        </label>
                    ))}
                </div>
                <div className="flex justify-end">
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-400"
                        onClick={onClose}
                    >
                        재선택
                    </button>
                    <button
                        className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-500"
                        onClick={onConfirm}
                    >
                        완료
                    </button>
                </div>
            </div>
        </div>
    );
};

const DateFilterModal = ({ isOpen, onClose, onConfirm, selectedStartDate, selectedEndDate, handleDateChange }) => {
    if (!isOpen) return null;

    const today = new Date().toISOString().split('T')[0];
    const minDate = '1990-01-01';

    return (
        <div className="flex justify-center items-center bg-white dark:bg-gray-900 inset-0 bg-opacity-75 ">
            <div className="bg-white dark:bg-gray-900 p-4 rounded w-96">
                <h2 className="text-black dark:text-white mb-4">Filter Year</h2>
                <div className="flex justify-between mb-4">
                    <div>
                        <label className="text-black dark:text-white mb-2">Start Date</label>
                        <input
                            type="date"
                            value={selectedStartDate}
                            min={minDate}
                            max={today}
                            onChange={(e) => handleDateChange('start', e.target.value)}
                            className="bg-white dark:bg-gray-900 text-black dark:text-white p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="text-white block mb-2">End Date</label>
                        <input
                            type="date"
                            value={selectedEndDate}
                            min={selectedStartDate}
                            max={today}
                            onChange={(e) => handleDateChange('end', e.target.value)}
                            className="bg-white dark:bg-gray-900 text-white p-2 rounded"
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        className="bg-gray-200 dark:bg-gray-600 text-black dark:text-white px-4 py-2 rounded mr-2 hover:bg-red-800"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="g-gray-200 dark:bg-gray-600 text-black dark:text-white  px-4 py-2 rounded mr-2 hover:bg-green-800"
                        onClick={onConfirm}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
//button : y-1 px-2 sm:py-1 px-3 mr-2 mb-2 rounded-full 