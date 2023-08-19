import React from "react";
import "./ItemResult.css";
import convertDurationTrack from "../../core/functions/convertDurationTrack";

const ItemResult = ({ text, pic, duration, artist, album }) => {
  return (
      <div className="song">
        <img src={pic} alt={text} className="card-song" />
        {duration ? (
          <p className="duration Title">{convertDurationTrack(duration)}</p>
        ) : (
          ""
        )}
        <p className="Title">{text}</p>
        <p className="Title">By {artist}</p>
        <p className="Title">{album}</p>
      </div>
  );
};

export default ItemResult;
