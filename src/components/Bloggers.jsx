import React from 'react';
import './Bloggers.css';
import Header from '../components/Header';

const Bloggers = () => {
  const bloggers = [
    {
      img: 'images/blog_prueba_1.jpg',
      title: 'Butter Yellow is hot!',
      author: 'BY LUCAS CONTARDI',
      date: 'August 16, 2016'
    },
    {
      img: 'images/blog_prueba_2.jpg',
      title: 'Title Censored',
      author: 'BY MAGGIE CRUZ FREZZINI',
      date: 'May 24, 2016'
    },
    {
        img: 'images/blog_prueba_3.jpg',
        title: 'Taylor Swift vistiendo Versace',
        author: 'BY LUCAS CONTARDI',
        date: 'May 24, 2016'
      }
  ];

  return (
    <div className="bloggers-page">
      <Header />
      <div className="bloggers">
        <h2 className="bloggers-title">Bloggers</h2>
        <div className="bloggers-list">
          {bloggers.map((blogger, index) => (
            <div key={index} className="blogger-item">
              <img src={blogger.img} alt={blogger.title} className="blogger-image" />
              <div className="blogger-info">
                <h3 className="blogger-title">{blogger.title}</h3>
                <p className="blogger-author">BY {blogger.author}</p>
                <p className="blogger-date">{blogger.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bloggers;
