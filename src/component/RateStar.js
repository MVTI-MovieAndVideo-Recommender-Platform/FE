import React,{useState} from "react";

const RateStar = () => {
   //기본값 = 3
   const [rating, setRating] = useState(3);
   
   const handleRatingChange = (newRating) => {
      setRating(newRating);
   };

   return(
     <div className="flex">
       {[5, 4, 3, 2, 1].map((value) => (
        <React.Fragment key={value}>
          <input
            type="radio"
            name="rate"
            id={`star${value}`}
            value={value}
            checked={rating === value}
            onChange={() => handleRatingChange(value)}
            className="hidden"
          />
          <label
            htmlFor={`star${value}`}
            className={`cursor-pointer ${
              rating >= value ? 'text-yellow-500' : 'text-gray-300'
            }`}
          >
            ★
          </label>
        </React.Fragment>
      ))}
     </div>  
   );
};
export default RateStar;

//export function createMovieCard(movie) {
//  const { poster_path, title, vote_average, release_date, id } = movie;
//
//  const card = document.createElement("div");
//  card.classList.add("movie-card");
//
//  card.innerHTML = `
//    <figure class="poster-box card-banner">
//      <img
//        src="${imageBaseURL}w342${poster_path}"
//        alt="${title}"
//        class="img-cover"
//        loading="lazy"
//      />
//    </figure>
//
//    <h4 class="title">${title}</h4>
//
//    <div class="rateStar>
//      <input value="5" name="rate" id="star5" type="radio">
//      <label title="text" for="star5"></label>
//      <input value="4" name="rate" id="star4" type="radio">
//      <label title="text" for="star4"></label>
//      <input value="3" name="rate" id="star3" type="radio" checked="">
//      <label title="text" for="star3"></label>
//      <input value="2" name="rate" id="star2" type="radio">
//      <label title="text" for="star2"></label>
//      <input value="1" name="rate" id="star1" type="radio">
//      <label title="text" for="star1"></label>
//    </div>
//    </div>
//    <div class="meta-list">
//      <div class="meta-item">
//        <img
//          src="./assets/images/star.png"
//          width="20"
//          height="20"
//          loading="lazy"
//          alt="rating"
//        />
//        <span class="span">${vote_average.toFixed(1)}</span>
//      </div>
//
//      <div class="card-badge">${release_date.split("-")[0]}</div>
//    </div>
//
//    <a href="./detail.html" class="card-btn" title="${title}" onclick="getMovieDetail(${id})"></a>
//  `;
//
//  return Data-card;
//}
//