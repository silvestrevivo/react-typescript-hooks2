import React, { useEffect } from 'react';
import { Store } from './Store';
import { IEpisode, IAction } from './interfaces';


function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  }, [])

  const fetchDataAction = async () => {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';

    const data = await fetch(URL);
    const dataJSON = await data.json();

    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes
    })
  }

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favourites.includes(episode);
    let dispatchObj = {
      type: 'ADD_FAV',
      payload: episode
    };
    if (episodeInFav) {
      const favWithoutEpisode = state.favourites.filter((fav: IEpisode) => fav.id !== episode.id);
      dispatchObj = {
        type: 'REMOVE_FAV',
        payload: favWithoutEpisode
      }
    }
    return dispatch(dispatchObj);
  }

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episodes!!!</p>
        </div>
        <div>
          Favourites: {state.favourites.length}
        </div>

      </header>
      <section className="episodes-layout">
        {
          state.episodes.map((episode: IEpisode) => {
            return (
              <section key={episode.id} className="episode-box">
                <img
                  src={episode.image ? episode.image.medium : ''}
                  alt={episode.name} />
                <h2>{episode.name}</h2>
                <section>
                  <div>
                    Season: {episode.season} Number: {episode.number}
                  </div>
                  <button type="button" onClick={() => toggleFavAction(episode)}>
                    {state.favourites.find((fav: IEpisode) => fav.id === episode.id) ? 'Unfav' : 'Fav'}
                  </button>
                </section>
              </section>
            )
          })
        }
      </section>
    </React.Fragment>
  );
}

export default App;
