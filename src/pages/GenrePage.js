//<Route path="genre/:id" element={<MVTIGenrePage/>} />
fetchGenreID((data) => {
   const genreIDToFind = 2; // 예시: 드라마 장르 ID
   const filteredIDs = data.filter(media => media.genre_ID.includes(genreIDToFind)).map(media => media.id);
   console.log(filteredIDs);
});