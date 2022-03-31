export interface IAuctionArtsProps {
  onClickArtDetail: (el: IFetchEngagingProps) => () => void
  data: any
  onChangePage: (page: any) => void
  fetchEngageCount: any
}

export interface IFetchEngagingProps {
  art: {
    id: string
    thumbnail: string
    title: string
    tag1: string
    deadlline: string
    is_soldout: boolean
    price: number
  }
}
