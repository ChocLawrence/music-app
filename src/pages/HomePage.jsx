import React, { Component } from "react";
import ChartAlbums from "../containers/ChartAlbums";
import ChartTracks from "../containers/ChartTracks";

class HomePage extends Component {
  render() {
    return (
      <div className="container-right">
        <ChartAlbums />
        <ChartTracks />
      </div>
    );
  }
}

export default HomePage;
