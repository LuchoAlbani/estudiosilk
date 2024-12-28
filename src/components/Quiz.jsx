import React from 'react';
import './Quiz.css';

const Quiz = () => {
  return (
    <div className="quiz-container">
      <div className="quiz-box">
        <div className="quiz-content">
          <h2>¿Todavía no encontraste tu estilo?</h2>
          <p>
            Descubrí tu estilo ideal con nuestro <strong>quiz</strong> personalizado. Es rápido, práctico y el primer paso para transformar tu guardarropa.
          </p>
          <button className="quiz-button">HACER EL QUIZ</button>
        </div>
      </div>
      <div className="quiz-images">
        <div className="quiz-image-container">
          <img src="images/model_1.png" alt="Model 1" className="quiz-image" />
        </div>
        <div className="quiz-image-container">
          <img src="images/model_2.png" alt="Model 2" className="quiz-image" />
        </div>
        <div className="quiz-image-container">
          <img src="images/model_3.png" alt="Model 3" className="quiz-image" />
        </div>
        <div className="quiz-image-container">
          <img src="images/model_4.png" alt="Model 4" className="quiz-image" />
        </div>
        <div className="quiz-image-container">
          <img src="images/model_5.png" alt="Model 5" className="quiz-image" />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
