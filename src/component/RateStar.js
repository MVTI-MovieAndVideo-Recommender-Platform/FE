import React, { useState } from 'react';
import styled from 'styled-components';

const StarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;

  .rating-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .stars {
    display: flex;
    align-items: center;
  }

  .star, .half-star, .empty-star {
    font-size: 2rem;
    margin-right: 5px;
    cursor: pointer;
    position: relative;
  }

  .star {
    color: #ffd700; /* Color for full stars */
  }

  .empty-star {
    color: #e0e0e0; /* Color for empty stars */
  }

  .half-star {
    width: 1em; /* Width of a single star */
    overflow: hidden; /* Hide the overflowing part */
    position: relative; /* Position relative for pseudo elements */
    display: inline-block;
    color: #e0e0e0; /* Color for empty stars */
  }

  .half-star::before {
    content: '★';
    position: absolute;
    left: 0;
    width: 50%;
    overflow: hidden;
    color: #ffd700; /* Color for the half filled part */
  }

  .text {
    font-size: 1.2rem;
    color: #fff;
    margin-top: 5px;
  }

`;

const StarRating = ({ ratingValue }) => {
  const [rating, setRating] = useState(0);

  const descriptions = {
    0.5: '최악이에요',
    1: '싫어요',
    1.5: '재미없어요',
    2: '별로에요',
    2.5: '부족해요',
    3: '보통이에요',
    3.5: '볼만해요',
    4: '재미있어요',
    4.5: '훌륭해요!',
    5: '최고에요!'
  };

  const handleRating = (value) => {
    setRating(value);
  };

  const handleMouseClick = (e, index) => {
    const { left, width } = e.target.getBoundingClientRect();
    const clickX = e.clientX - left;
    const clickPercentage = clickX / width;
    const newRating = clickPercentage > 0.5 ? index : index - 0.5;
    handleRating(newRating);
  };

  const renderStar = (index) => {
    if (rating >= index) {
      return (
        <span
          key={index}
          className="star"
          onClick={(e) => handleMouseClick(e, index)}
        >
          ★
        </span>
      );
    } else if (rating >= index - 0.5) {
      return (
        <span
          key={index}
          className="half-star"
          onClick={(e) => handleMouseClick(e, index)}
        >
          ★
        </span>
      );
    } else {
      return (
        <span
          key={index}
          className="empty-star"
          onClick={(e) => handleMouseClick(e, index)}
        >
          ★
        </span>
      );
    }
  };

  return (
    <StarContainer>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((index) => (
          <React.Fragment key={index}>
            {renderStar(index)}
          </React.Fragment>
        ))}
      </div>
      <div className="text">{descriptions[rating]}</div>
    </StarContainer>
  );
};

export default StarRating;
