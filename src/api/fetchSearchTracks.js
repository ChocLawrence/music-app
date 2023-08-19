import fetch from "cross-fetch";
import {
    actionSearchTracksPending,
    actionSearchTracksSuccess,
    actionSearchTracksError,
} from "../state/search/searchTracksAction";

export default function fetchSearchSongs(query) {
    return (dispatch) => {
        dispatch(actionSearchTracksPending());
        fetch(`${process.env.REACT_APP_API_PROXY}/search/track?q=${query}&limit=3`)
            // fetch(`/search/track?q=${query}&limit=3`)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }

                dispatch(actionSearchTracksSuccess(res));

                return res;
            })
            .catch((error) => {
                dispatch(actionSearchTracksError(error));
            });
    };
}