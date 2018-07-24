import React from "react";
//import formatDate from "../../utils/formatDate";
import { ListItem } from "../List";
import "./SearchCard.css";

// Data pinpoints music that matters with everybodys top 13ls/Song Constellation
// Universe theme, comos etc.
// Song Constellation interactive view of songs

const SearchCard = ({ artwork, dtid, playback, trackName, artistName, _id, trackUrl, buttonText, handleClick }) => (
  <ListItem>

      <div>
      <img

       src={artwork}
       alt=""
    />


          <audio id="jambox" controls className="audio" src={playback} />

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
