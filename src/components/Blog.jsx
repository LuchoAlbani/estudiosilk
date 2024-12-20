import React from 'react';

const Blog = () => {
  return (
    <div className="blog">
      <h2>Lo <em>último</em> de nuestro blog</h2>
      <div className="blog-carousel">
        <button className="carousel-button left">{'<'}</button>
        
        <div className="blog-item">
          <img src="images/blog_prueba_1.jpg" alt="Butter Yellow is hot!" />
          <div className="blog-category">STYLE</div>
          <h3>Butter Yellow is hot!</h3>
          <p>BY LUCAS CONTARDI</p>
        </div>
        
        <div className="blog-item">
          <img src="images/blog_prueba_2.jpg" alt="Censored Content" />
          <div className="blog-category">BEAUTY</div>
          <h3>Title Censored</h3>
          <p>BY MAGGIE CRUZ FREZZINI</p>
        </div>
        
        <div className="blog-item">
          <img src="images/blog_prueba_3.jpg" alt="Taylor Swift vistiendo Versace" />
          <div className="blog-category">CELEBRITY</div>
          <h3>Taylor Swift vistiendo Versace</h3>
          <p>BY LUCAS CONTARDI</p>
        </div>
        
        <button className="carousel-button right">{'>'}</button>
      </div>
    </div>
  );
};

export default Blog;
