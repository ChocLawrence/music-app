import React from "react";
import "./CardAlbum.css";

const CardAlbum = ({ album }) => {
  return (
    <div className="album">
      <img src={album.cover_medium} alt={album.title} className="card-album" />
      <p className="Album-Title">{album.title}</p>
      {/* <p>{album.year}</p> */}
    </div>
  );
};

export default CardAlbum;
