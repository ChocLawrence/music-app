import fetch from "cross-fetch";
import {
    actionSearchAlbumsPending,
    actionSearchAlbumsSuccess,
    actionSearchAlbumsError,
} from "../state/search/searchAlbumsAction";

export default function fetchSearchAlbums(query) {
    return (dispatch) => {
        dispatch(actionSearchAlbumsPending());
        fetch(`${process.env.REACT_APP_API_PROXY}/search/album?q=${query}&limit=3`)
            // fetch(`/search/album?q=${query}&limit=3`)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }

                dispatch(actionSearchAlbumsSuccess(res));

                return res;
            })
            .catch((error) => {
                dispatch(actionSearchAlbumsError(error));
            });
    };
}