import React from "react";

const Card = ({ country, name, capital, population, carte, area }) => {
  return (
    <li className="card">
      <img
        src={country.flags.svg}
        alt={"drapeau " + country.translations.fra.common}
      />
      <div className="infos">
        <h2>{name}</h2>
        <h4>{capital}</h4>
        <p>Pop. {population}</p>
        <p> {area} km2</p>
        <p><a href={carte}>Voir sur Maps</a></p>
      </div>
    </li>
  );
};

export default Card;
