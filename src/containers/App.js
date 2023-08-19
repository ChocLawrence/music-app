import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";

// common
import SideBar from "../components/SideBar/Sidebar";
import SearchBar from "../containers/SearchBar";
// topics sidebar
import Home from "../pages/HomePage";
// Single Pages
import SingleArtist from "../pages/SingleArtistPage";
import SingleAlbum from "../containers/SingleAlbum";
// Others
import Error from "../pages/Error";
import store from "../state/store";
import "./App.css";

function App() {

  return (
    <React.Fragment>
      <div className="App">
        <SideBar />
        <Provider store={store}>
          <SearchBar />
          <Switch>
            <Route exact path="/" component={Home}></Route>

            <Route exact path="/artist/:id" component={SingleArtist} />
            <Route exact path="/album/:id" component={SingleAlbum} />

            <Route component={Error} />
          </Switch>
        </Provider>
      </div>
    </React.Fragment>
  );
}

export default App;
