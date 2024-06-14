"use strict";
import "./Data.css";
//S3(aws)에 업로드 된 imageBaseURL을 api.js에서 정의하고 호출

//api에서 posterURL
import { imageBaseURL } from "./API/api.js";
//썸네일, 포스터, 배너 -> ID로 찾고, 포스터 개수
//썸-id-포스터+개수-> 

export function createMovieCard(movie) {
  const { poster_path, title, vote_average, release_date, id } = movie;

  const card = document.createElement("div");
  card.classList.add("movie-card");

  card.innerHTML = `
    <figure class="poster-box card-banner">
      <img
        src="${imageBaseURL}w342${poster_path}"
        alt="${title}"
        class="img-cover"
        loading="lazy"
      />
    </figure>

    <h4 class="title">${title}</h4>

    <div class="rateStar>
      <input value="5" name="rate" id="star5" type="radio">
      <label title="text" for="star5"></label>
      <input value="4" name="rate" id="star4" type="radio">
      <label title="text" for="star4"></label>
      <input value="3" name="rate" id="star3" type="radio" checked="">
      <label title="text" for="star3"></label>
      <input value="2" name="rate" id="star2" type="radio">
      <label title="text" for="star2"></label>
      <input value="1" name="rate" id="star1" type="radio">
      <label title="text" for="star1"></label>
    </div>
    </div>
    <div class="meta-list">
      <div class="meta-item">
        <img
          src="./assets/images/star.png"
          width="20"
          height="20"
          loading="lazy"
          alt="rating"
        />
        <span class="span">${vote_average.toFixed(1)}</span>
      </div>

      <div class="card-badge">${release_date.split("-")[0]}</div>
    </div>

    <a href="./detail.html" class="card-btn" title="${title}" onclick="getMovieDetail(${id})"></a>
  `;

  return Data-card;
}
