import React, { useState } from "react";
import "./Rating.css";

const ratings = [
   { emoji: "😞", name: "Very Bad" },
   { emoji: "😟", name: "Bad" },
   { emoji: "😊", name: "Good" },
   { emoji: "😃", name: "Very Good" },
   { emoji: "😍", name: "Excellent" }
  ];

  const Rating = ()=> {
   const{rating,setRating} = useState(3);
   
   const handleRating = (value) => {
      setRating(value);
   }
   return (
      <div className="text-center">
          <div id="emoji" className="text-5xl mb-4">{ratings[rating - 1].emoji}</div>
          <div id="rating-name" className="text-2xl mb-4">{ratings[rating - 1].name}</div>
          <div id="stars" className="flex justify-center mb-4">
              {ratings.map((_, index) => (
                  <span
                      key={index}
                      className={`star text-5xl ${index < rating ? 'text-yellow-500' : 'text-gray-600'}`}
                      onClick={() => handleRating(index + 1)}
                  >
                      ★
                  </span>
              ))}
          </div>
      </div>
  );
};
export default Rating;
//document.addEventListener("DOMContentLoaded", () => {
//   const stars = document.querySelectorAll('.star');
//   const emoji = document.getElementById('emoji');
//   const ratingName = document.getElementById('rating-name');
//
//   stars.forEach(star => {
//        star.addEventListener('click', () => {
//            const value = star.getAttribute('data-value');
//            updateRating(value);
//        });
//  });
//
//   function updateRating(value) {
//        const rating = ratings[value - 1];
//        emoji.textContent = rating.emoji;
//        ratingName.textContent = rating.name;
//        
//        stars.forEach((star, index) => {
//            if(index < value) {
//                star.style.color = '#FFD700';
//            } else {
//                star.style.color = '#4A5568';
//            }
//        });
//    }
//});