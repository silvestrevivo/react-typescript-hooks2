import React, { useEffect } from 'react';
import { Store } from './Store';

// interface IImage {
//   medium: string;
//   original: string;
// }

interface IEpisode {
  id: number,
  name: string,
  season: string,
  number: number,
  image: {
    medium: string;
    original: string;
  }
}

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
  return (
    <React.Fragment>
      <header className="header">
        <h1>Rick and Morty</h1>
        <p>Pick your favourite episodes!!!</p>
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
                  Season: {episode.season} Number: {episode.number}
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
