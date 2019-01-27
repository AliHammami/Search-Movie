import React from 'react';
import { Link } from 'react-router-dom';

const Suggestions = (props) => {
  const options = props.results.map(m => (
    <div key={m.show.id}>
      <li>

        <Link to={`/movie/${m.show.id}`}>
          {m.show.name}
        </Link>
      </li>
      {console.log(m)}
      { (m.show.image === null) ? (
        <img src="https://vignette.wikia.nocookie.net/tranquiltirades/images/b/bd/Photo-Unavailable.jpg/revision/latest?cb=20150619194307" alt={m.show.name} />
      ) : (
        <img src={m.show.image.original} alt={m.show.name} />
      )
      }
    </div>
  ));
  return <ul>{options}</ul>;
};

export default Suggestions;
