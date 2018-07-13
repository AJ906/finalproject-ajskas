import React from "react";
import formatDate from "../../utils/formatDate";
import { ListItem } from "../List";

const SearchCard = ({ artwork, dtid, playBack, trackName, artistName }) => (
  <ListItem>
    {/*<img*/}
       {/*src={artwork}*/}

    {/*/>*/}

      <div data-track-id={dtid} style={{backgroundImage: {artwork}}} className="cover">
          <div className="content-name">{artistName} | {trackName}</div>
          <audio controls className="audio">
              <source src={playBack}  />
          </audio>
      </div>
  </ListItem>
);

export default SearchCard;
