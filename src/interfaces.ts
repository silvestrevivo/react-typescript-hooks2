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


export interface IState {
  episodes: IEpisode[],
  favourites: any[]
}

export interface IAction {
  type: string,
  payload: any
}
