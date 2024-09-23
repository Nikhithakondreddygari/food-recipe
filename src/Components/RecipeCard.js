import React from 'react';
import Title from './Title';
import Image from './Image';
import './RecipeCard.css';

const RecipeCard = ({ meals }) => {
  return (
    <div className="recipe-card-container">
      {meals.map((item, index) => (
        <a 
          className="card"
          key={index} 
          href={item.recipe.url} // Adjust based on actual data structure
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image source={item.recipe.image} text={item.recipe.label} />
          <Title title={item.recipe.label} />
        </a>
      ))}
    </div>
  );
};

export default RecipeCard;