import React from "react";
import "./Section.css";

const Section = () => {
  const items = [
    {
      id: 1,
      image: "images/Fotos_sección_pre-blog-04.jpg", // Ruta desde public
      title: "DIGITALIZAMOS TU CLOSET",
      description:
        "Accede a tu guardarropa desde cualquier lugar con nuestro sistema digital.",
    },
    {
      id: 2,
      image: "images/Fotos_sección_pre-blog-05.jpg", // Ruta desde public
      title: "ELEVAMOS TU ESTILO",
      description:
        "De la mano de tu estilista personal, creamos looks que reflejan quién sos y potencian tu mejor versión.",
    },
    {
      id: 3,
      image: "images/Fotos_sección_pre-blog-06.jpg", // Ruta desde public
      title: "EMPODERAMOS TU IMAGEN",
      description:
        "Te ayudamos a proyectar confianza y seguridad a través de un estilo auténtico y único.",
    },
  ];

  return (
    <div className="section-container">
      <h2>
        En <strong>SILK</strong> creamos más que looks:{" "}
        <em>construimos confianza.</em>
      </h2>
      <div className="section-grid">
        {items.map((item) => (
          <div key={item.id} className="section-item">
            <img src={item.image} alt={item.title} className="section-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
