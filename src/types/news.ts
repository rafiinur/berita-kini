export interface NewsItem {
  title: string
  link: string
  contentSnippet: string
  isoDate: string
  image: {
    small: string
    large: string
  }
}

export interface NewsApiResponse {
  message: string
  total: number
  data: Array<NewsItem>
}
