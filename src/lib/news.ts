import type { NewsItem, NewsApiResponse } from '@/types/news'
import { API_BASE_URL } from '@/constants'

export const fetchNews = async (
  category?: string,
): Promise<Array<NewsItem>> => {
  const endpoint = category
    ? `${API_BASE_URL}/cnn-news/${category}`
    : `${API_BASE_URL}/cnn-news`
  const response = await fetch(endpoint)
  const { data }: NewsApiResponse = await response.json()
  return data
}
