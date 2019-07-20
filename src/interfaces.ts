export interface IEpisode {
  id: number,
  name: string,
  season: string,
  number: number,
  image: {
    medium: string;
    original: string;
  }
}

export interface IEpisodeProps {
  episodes: IEpisode[],
  toggleFavAction: (episode: IEpisode) => IAction,
  favourites: Array<IEpisode>
}

export interface IState {
  episodes: IEpisode[],
  favourites: any[]
}

export interface IAction {
  type: string,
  payload: any
}
