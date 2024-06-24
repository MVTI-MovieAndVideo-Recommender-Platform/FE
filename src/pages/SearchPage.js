import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { debounce } from 'lodash';
import LoadingSpinner from '../component/state/LoadingSpinner';

const genre_ID = [
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

const SearchContainer = styled.div`
  padding: 1rem;
  background-color: #141414;
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  width: 80%;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  padding: 0.5rem;
  font-size: 1.25rem;
  border: none;
  border-radius: 0.25rem;
  outline: none;
  background-color: #333;
  color: white;
`;

const FilterButton = styled.button`
  background-color: #e50914;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-right: 0.5rem;
  &:hover {
    background-color: #f40612;
  }
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 80%;
  justify-content: center;
`;

const ResultCard = styled.div`
  background-color: #333;
  border-radius: 0.25rem;
  overflow: hidden;
  width: calc(25% - 1rem);
  min-width: 200px;
  text-align: center;

  @media (max-width: 768px) {
    width: calc(50% - 1rem);
  }

  @media (max-width: 480px) {
    width: calc(100% - 1rem);
  }
`;

const ResultImage = styled.img`
  width: 100%;
  height: auto;
`;

const ResultTitle = styled.h3`
  padding: 0.5rem;
  font-size: 1rem;
`;

const FilterModal = ({ isOpen, onClose, onConfirm, filterType, options, selectedOptions, handleOptionChange }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
            <div className="bg-gray-800 p-4 rounded w-96">
                <h2 className="text-white mb-4">Filter {filterType}</h2>
                <div className="max-h-48 overflow-y-auto border border-gray-700 p-2 rounded bg-gray-800">
                    {options.map((option, index) => (
                        <label key={index} className="block text-white">
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
                        className="bg-red-700 text-white px-4 py-2 rounded mr-2 hover:bg-red-800"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
                        onClick={onConfirm}
                    >
                        Confirm
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
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
            <div className="bg-gray-800 p-4 rounded w-96">
                <h2 className="text-white mb-4">Filter Year</h2>
                <div className="flex justify-between mb-4">
                    <div>
                        <label className="text-white block mb-2">Start Date</label>
                        <input
                            type="date"
                            value={selectedStartDate}
                            min={minDate}
                            max={today}
                            onChange={(e) => handleDateChange('start', e.target.value)}
                            className="bg-gray-700 text-white p-2 rounded"
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
                            className="bg-gray-700 text-white p-2 rounded"
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        className="bg-red-700 text-white px-4 py-2 rounded mr-2 hover:bg-red-800"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
                        onClick={onConfirm}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

const SearchPage = () => {
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
        platform: '',
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
    const currentYear = new Date().getFullYear();

    const fetchResults = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://api.mvti.site/info/search', {
                params: {
                    anything: query,
                    country: filters.country.join(','),
                    genre: filters.genre.join(','),
                    yearGte: filters.yearGte,
                    yearLte: filters.yearLte,
                    keyword: filters.keyword,
                    title: filters.title,
                    director: filters.director,
                    actor: filters.actor,
                    platform: filters.platform,
                },
            });
            setResults(response.data.results);
            console.log(response.data.results);
        } catch (error) {
            console.error('Error fetching search results:', error);
        } finally {
            setLoading(false);
        }
    }, [query, filters]);

    const debouncedFetchResults = useCallback(
        debounce(() => {
            fetchResults();
        }, 1000),
        [fetchResults]
    );

    useEffect(() => {
        if (query) {
            debouncedFetchResults();
        }
        return () => {
            debouncedFetchResults.cancel();
        };
    }, [query, debouncedFetchResults]);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleFilterButtonClick = (filterType) => {
        setCurrentFilterType(filterType);
        if (filterType === 'Country') {
            setSelectedOptions(countries);
            setSelectedCountries(filters.country);
        } else if (filterType === 'Genre') {
            setSelectedOptions(genre_ID.map((genre) => genre.join(' / ')));
            setSelectedGenres(filters.genre);
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
        }
    };

    const handleFilterConfirm = () => {
        if (currentFilterType === 'Country') {
            setFilters((prevFilters) => ({
                ...prevFilters,
                country: selectedCountries,
            }));
            console.log('Selected Countries:', selectedCountries);
        } else if (currentFilterType === 'Genre') {
            setFilters((prevFilters) => ({
                ...prevFilters,
                genre: selectedGenres,
            }));
            console.log('Selected Genres:', selectedGenres);
        } else if (['Keyword', 'Title', 'Director', 'Actor'].includes(currentFilterType)) {
            setFilters((prevFilters) => ({
                ...prevFilters,
                [currentFilterType.toLowerCase()]: inputValue,
            }));
            console.log(`Selected ${currentFilterType}:`, inputValue);
        } else if (currentFilterType === 'Year') {
            console.log('Selected Years:', filters.yearGte, filters.yearLte);
        }
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
        console.log('Selected Years:', selectedStartDate, selectedEndDate);
        setIsFilterModalOpen(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            debouncedFetchResults.cancel();
            fetchResults();
        }
    };

    const toggleFilter = () => {
        setIsFilter(!isFilter);
    };

    return (
        <SearchContainer>
            <SearchBox>
                <FilterButton onClick={toggleFilter}>Filter</FilterButton>
                <SearchInput
                    type="text"
                    placeholder="Search for movies or TV shows"
                    value={query}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
            </SearchBox>
            {isFilter && (
                <div className="flex flex-wrap gap-2 justify-center w-full mb-4">
                    <FilterButton onClick={() => handleFilterButtonClick('Country')}>국가</FilterButton>
                    <FilterButton onClick={() => handleFilterButtonClick('Genre')}>장르</FilterButton>
                    <FilterButton onClick={() => handleFilterButtonClick('Year')}>기간</FilterButton>
                    <FilterButton onClick={() => handleFilterButtonClick('Keyword')}>키워드</FilterButton>
                    <FilterButton onClick={() => handleFilterButtonClick('Title')}>제목</FilterButton>
                    <FilterButton onClick={() => handleFilterButtonClick('Director')}>감독</FilterButton>
                    <FilterButton onClick={() => handleFilterButtonClick('Actor')}>배우</FilterButton>
                </div>
            )}
            {isFilterModalOpen && currentFilterType === 'Country' && (
                <FilterModal
                    isOpen={isFilterModalOpen}
                    onClose={handleFilterClose}
                    onConfirm={handleFilterConfirm}
                    filterType={currentFilterType}
                    options={selectedOptions}
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
                    options={selectedOptions}
                    selectedOptions={selectedGenres}
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
                    <div className="bg-gray-800 p-4 rounded w-96">
                        <h2 className="text-white mb-4">Filter {currentFilterType}</h2>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
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
                <LoadingSpinner />
            ) : (
                <ResultsContainer>
                    {results.map((result) => (
                        <ResultCard key={result.id}>
                            <ResultImage src={result.image} alt={result.title} />
                            <ResultTitle>{result.title}</ResultTitle>
                        </ResultCard>
                    ))}
                </ResultsContainer>
            )}
        </SearchContainer>
    );
};

export default SearchPage;
