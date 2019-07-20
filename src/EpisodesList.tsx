import React from 'react'
import { IEpisode } from './interfaces';

export default function EpisodesList(props: any): Array<JSX.Element> {
    const { episodes, toggleFavAction, favourites } = props;
    return episodes.map((episode: IEpisode) => {
        return (
            <section key={episode.id} className="episode-box">
                <img
                    src={episode.image ? episode.image.medium : ''}
                    alt={episode.name} />
                <h2>{episode.name}</h2>
                <section style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        Season: {episode.season} Number: {episode.number}
                    </div>
                    <button type="button" onClick={() => toggleFavAction(episode)}>
                        {favourites.find((fav: IEpisode) => fav.id === episode.id) ? 'Unfav' : 'Fav'}
                    </button>
                </section>
            </section>
        )
    })

}
