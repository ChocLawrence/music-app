import React, { Component } from "react";

import Title from "../containers/Title";
import Albums from "../containers/AlbumsArtists";
import PopularTracks from "../containers/PopularTracks";

class SingleArtistPage extends Component {
  render() {
    return (
      <div className="container-right">
        <div className="home-divide">
          <div className="popular-left">
           <Title id={this.props.match.params.id} />
          </div>
          <div className="popular-right">
           <PopularTracks id={this.props.match.params.id} />
          </div>
        </div>
        <Albums id={this.props.match.params.id} />
      </div>
    );
  }
}

export default SingleArtistPage;
