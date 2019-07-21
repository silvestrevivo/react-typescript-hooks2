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

export type Dispatch = React.Dispatch<IAction>;

export interface IEpisodeProps {
  episodes: IEpisode[],
  store: { state: IState, dispatch: Dispatch },
  toggleFavAction: (state: IState, dispatch: Dispatch, episode: IEpisode) => IAction,
  favourites: Array<IEpisode>
}

export interface IState {
  episodes: IEpisode[],
  favourites: any
}

export interface IAction {
  type: string,
  payload: Array<IEpisode> | any
}
