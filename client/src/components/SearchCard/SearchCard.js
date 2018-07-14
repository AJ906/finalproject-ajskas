import React from "react";
//import formatDate from "../../utils/formatDate";
import { ListItem } from "../List";

// Data pinpoints music that matters with everybodys top 10/Song Constellation
// Universe theme, comos etc.
// Song Constallation interactive view of songs

const SearchCard = ({ artwork, dtid, playBack, trackName, artistName, _id, trackUrl, buttonText, handleClick }) => (
  <ListItem>

      <div>
      <img

       src={artwork}
       alt=""
    />

          <button onClick={() => handleClick(_id)} className="btn btn-primary">
              {buttonText}
          </button>
          <audio controls className="audio">
              <source src={playBack}  />
          </audio>

          <span className="btn-group pull-right">
              <a
                  className="btn btn-light"
                  href={trackUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
          View on iTunes
        </a>
              <button onClick={() => handleClick(_id)} className="btn btn-primary">
          + Song Constellation
        </button>

      </span>
      </div>
  </ListItem>
);

export default SearchCard;
