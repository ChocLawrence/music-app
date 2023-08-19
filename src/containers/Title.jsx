import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchArtistAction from "../api/fecthSingleArtist";
import convertNumber from "../core/functions/convertNumber";

import Loading from "../components/Loading/Loading";

class Title extends Component {
  componentDidMount() {
    const idArtist = this.props.id;
    const { fetchArtist } = this.props;
    fetchArtist(idArtist);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      const { fetchArtist } = this.props;
      fetchArtist(this.props.id);
    }
  }

  render() {
    const { artist, loading } = this.props;

    if (loading) return <Loading />;
    return (
      // <div className="header-artist">
      //   <img src={artist.picture_medium} alt={artist.name} />
      //   <div className="artist-info">
      //     <h1>{artist.name}</h1>
      //     <p>{convertNumber(artist.nb_fan)} Fans</p>
      //   </div>
      // </div>
      <div className="container-popular">
          <div>
            <img src={artist.picture_medium} alt={artist.name} className="container-images"/>
          </div>
          <h2 className="title">
           {artist.name}  <p className="fans">{convertNumber(artist.nb_fan)} Fans</p>
          </h2>
         
      </div>

      
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.singleArtist.loading,
  error: state.singleArtist.error,
  artist: state.singleArtist.info,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchArtist: fetchArtistAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Title);
